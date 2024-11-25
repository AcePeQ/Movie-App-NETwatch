
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using inzynierka_movie_app.Server.Data;
using System.Text.RegularExpressions;
using inzynierka_movie_app.Server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.JsonWebTokens;




namespace inzynierka_movie_app.Server
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class UsersController : Controller
    {
        private readonly inzynierka_movie_appServerContext _context;
        private readonly JWTService _jwtService;

        public UsersController(inzynierka_movie_appServerContext context, JWTService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] RegisterUser registerUser) {
            if(registerUser == null) {
                return BadRequest("Invalid user data");
            }

            if(string.IsNullOrWhiteSpace(registerUser.Email) ||
             string.IsNullOrWhiteSpace(registerUser.Username) || 
             string.IsNullOrWhiteSpace(registerUser.Password) || 
             string.IsNullOrWhiteSpace(registerUser.Confirmed_Password)) 
            {
                return BadRequest(new {error = "All fields are required"});
            }

            var emailPattern = @"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
            if(!Regex.IsMatch(registerUser.Email, emailPattern)) {
                return BadRequest(new {error = "Invalid email format"});
            }

            string usernamePattern = @"^[A-Za-z][A-Za-z0-9_]{2,11}$";
            if(!Regex.IsMatch(registerUser.Username, usernamePattern) || registerUser.Username.Length < 3 || registerUser.Username.Length > 12) {
                return BadRequest(new {error = "Invalid username format"});
            }

            string passwordPattern = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$";
            if(!Regex.IsMatch(registerUser.Password, passwordPattern)) {
                return BadRequest(new {error = "Invalid password format"});
            }

            if(registerUser.Password != registerUser.Confirmed_Password) {
                return BadRequest(new {error = "Passwords are not the same"});
            }
      
            if(await _context.User.AnyAsync(user => user.Email == registerUser.Email) || await _context.User.AnyAsync(user => user.Username == registerUser.Username)) {
                return BadRequest(new {error = "Acconut with this e-mail address or username exists"});
            }


            var user = new User 
            {
                Email = registerUser.Email,
                Username = registerUser.Username,
                Password = registerUser.Password,
                Watchlist = new List<WatchlistItem>(),
            };

            _context.User.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new {ok = "Register sucessed"});
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult Login([FromBody] LoginUser loginUser)
        {
            var user = _context.User.Include(u=>u.Watchlist).SingleOrDefault(user => user.Email == loginUser.Email && user.Password == loginUser.Password);

            if (user == null || user.Password != loginUser.Password)
            {
                return BadRequest(new { error = "Invalid email or password. Try again" });
            }

            var passedUser = new {
                username = user.Username,
                watchlist = user.Watchlist
            };
            var tokenGen = _jwtService.GenerateToken(user);

            return Json(new { user = passedUser, token = tokenGen });
        }

        [HttpGet("{username}")]
        [AllowAnonymous]
        public IActionResult GetUser(string username)
        {
            var user = _context.User.SingleOrDefault(user => user.Username == username);

            if (user == null)
            {
                return BadRequest(new { error = "Account does not exist" });
            }
            
            var passedUser = new {
                username = user.Username,
                watchlist = user.Watchlist
            };

            return Json(new {user = passedUser});
        }

        [Authorize]
        [HttpPost]
        public  IActionResult UpdateSettings([FromBody] Settings settings)
        {
            var userIDToken = User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;
            var usernameToken = User.FindFirst("username")?.Value;
            var emailToken = User.FindFirst(JwtRegisteredClaimNames.Email)?.Value;

            if(settings.Username != usernameToken) {
                return BadRequest(new { error = "Invalid account" });
            }
            
            if (userIDToken == null || usernameToken == null || emailToken == null)
            {
                return BadRequest(new { error = "Invalid account" });
            }

            if(!Guid.TryParse(userIDToken, out var userIDGuid)) {
                return BadRequest(new {error = "Invalid user ID format"});
            }

            var user = _context.User.SingleOrDefault(user => user.ID.Equals(userIDGuid) && user.Username == usernameToken && user.Email == emailToken);

            if (user == null )
            {
                return BadRequest(new { error = "Invalid account" });
            }

            string passwordPattern = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$";
            if (string.IsNullOrEmpty(settings.Password) || !Regex.IsMatch(settings.Password, passwordPattern))
            {
                return BadRequest(new { error = "Invalid password format" });
            };

            user.Password = settings.Password;
             _context.SaveChangesAsync();

            return Ok(new {ok = "Update sucessed"});;
        }

        [Authorize]
        [HttpPost]
        public  IActionResult DeleteAccount()
        {
            var userIDToken = User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value.ToUpper();
            var usernameToken = User.FindFirst("username")?.Value;
            var emailToken = User.FindFirst(JwtRegisteredClaimNames.Email)?.Value;

            
            if (userIDToken == null || usernameToken == null || emailToken == null)
            {
                return BadRequest(new { error = "Invalid account" });
            }

            if(!Guid.TryParse(userIDToken, out var userIDGuid)) {
                return BadRequest(new {error = "Invalid user ID format"});
            }

            var user = _context.User.SingleOrDefault(user => user.ID.Equals(userIDGuid) && user.Username == usernameToken && user.Email == emailToken);

            if (user == null )
            {
                return BadRequest(new { error = "Invalid account" });
            }      

             _context.User.Remove(user);
             _context.SaveChangesAsync();

            return Ok(new {ok = "Delete account sucessed"});;
        }

        
    }
}
