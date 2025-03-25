using System.Linq;
using inzynierka_movie_app.Server.Data;
using inzynierka_movie_app.Server.Services;
using inzynierka_movie_app.Server.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.JsonWebTokens;

namespace inzynierka_movie_app.Server
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class WatchlistController : Controller
    {
        private readonly inzynierka_movie_appServerContext _context;

        public WatchlistController(inzynierka_movie_appServerContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> AddMovie([FromBody] WatchListItemAdd movie)
        {
            var userIDToken = User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;
            var usernameToken = User.FindFirst("username")?.Value;
            var emailToken = User.FindFirst(JwtRegisteredClaimNames.Email)?.Value;
            
            if (userIDToken == null || usernameToken == null || emailToken == null)
            {
                return BadRequest(new { error = "Invalid account" });
            }

            if(!Guid.TryParse(userIDToken, out var userIDGuid)) {
                return BadRequest(new {error = "Invalid user ID format"});
            }


            // var user = await _context.User.Include(u => u.Watchlist).ThenInclude(w=>w.genres).SingleOrDefaultAsync(user => user.ID.Equals(userIDGuid) && user.Username == usernameToken && user.Email == emailToken);

            var user = await _context.User.Include(u => u.Watchlist).SingleOrDefaultAsync(user => user.ID.Equals(userIDGuid) && user.Username == usernameToken && user.Email == emailToken);

            if (user == null )
            {
                return BadRequest(new { error = "Invalid account" });
            }

            var newMovie = new WatchlistItem {
              backdrop_path = movie.backdrop_path,
              genres = movie.genres,
              movieID = movie.movieID,
              poster_path = movie.poster_path,
              name = movie.name,
              title = movie.title,
              vote_average = movie.vote_average,
              media_type = movie.media_type,
              runtime = movie.runtime,
              status = movie.status,
              release_date = movie.release_date,
              first_air_date = movie.first_air_date,
              vote_count = movie.vote_count,
              watched_episodes = movie.watched_episodes,
              user_rating = movie.user_rating,
              user_status = movie.user_status,
            };

            user.Watchlist.Add(newMovie);
            _context.Entry(newMovie).State = EntityState.Added;
            await _context.SaveChangesAsync();

            return Json(user.Watchlist);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> DeleteMovie([FromBody] DeleteMovieRequest request)
        {
            var userIDToken = User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;
            var usernameToken = User.FindFirst("username")?.Value;
            var emailToken = User.FindFirst(JwtRegisteredClaimNames.Email)?.Value;
            
            if (userIDToken == null || usernameToken == null || emailToken == null)
            {
                return BadRequest(new { error = "Invalid account" });
            }

            if(!Guid.TryParse(userIDToken, out var userIDGuid)) {
                return BadRequest(new {error = "Invalid user ID format"});
            }

            // var user = await _context.User.Include(u=>u.Watchlist).ThenInclude(w => w.genres).SingleOrDefaultAsync(user => user.ID.Equals(userIDGuid) && user.Username == usernameToken && user.Email == emailToken);

            var user = await _context.User.Include(u=>u.Watchlist).SingleOrDefaultAsync(user => user.ID.Equals(userIDGuid) && user.Username == usernameToken && user.Email == emailToken);

            if (user == null )
            {
                return BadRequest(new { error = "Invalid account" });
            }

            var movieToRemove = user.Watchlist.SingleOrDefault(movie => movie.movieID.ToString() == request.id.ToString());
            if (movieToRemove == null)
            {
                return BadRequest(new { error = "Movie not found in watchlist" });
            }

            user.Watchlist.Remove(movieToRemove);
            _context.Entry(movieToRemove).State = EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Json(user.Watchlist);
        }


        [HttpPost]
        [Authorize]
        public async Task<IActionResult> UpdateMovie([FromBody] UpdateWatchlistItem movie)
        {
            var userIDToken = User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;
            var usernameToken = User.FindFirst("username")?.Value;
            var emailToken = User.FindFirst(JwtRegisteredClaimNames.Email)?.Value;
            
            if (userIDToken == null || usernameToken == null || emailToken == null)
            {
                return BadRequest(new { error = "Invalid account" });
            }

            if(!Guid.TryParse(userIDToken, out var userIDGuid)) {
                return BadRequest(new {error = "Invalid user ID format"});
            }

            // var user = await _context.User.Include(u => u.Watchlist).ThenInclude(w=> w.genres).SingleOrDefaultAsync(user => user.ID.Equals(userIDGuid) && user.Username == usernameToken && user.Email == emailToken);

            var user = await _context.User.Include(u => u.Watchlist).SingleOrDefaultAsync(user => user.ID.Equals(userIDGuid) && user.Username == usernameToken && user.Email == emailToken);

            if (user == null )
            {
                return BadRequest(new { error = "Invalid account" });
            }

            var movieToUpdate = user.Watchlist.SingleOrDefault(movieUser => movieUser.movieID == movie.movieID);

            if(movieToUpdate == null) {
                return BadRequest(new {error = "Movie not found in watchlist"});
            }

            movieToUpdate.user_rating = movie.user_rating;
            movieToUpdate.user_status = movie.user_status;
            movieToUpdate.watched_episodes = movie.watched_episodes;

            _context.Attach(movieToUpdate);
            _context.Entry(movieToUpdate).State = EntityState.Modified;
            

            await _context.SaveChangesAsync();
            return Json(user.Watchlist);
        }

        [HttpGet("{username}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetUserWatchlist(string username)
        {
            if(string.IsNullOrEmpty(username)) {
                return BadRequest(new { error = "Username is required" });
            }

             var user = await _context.User.Include(u=>u.Watchlist).ThenInclude(w=>w.genres).SingleOrDefaultAsync(user => user.Username == username);
            //var user = await _context.User.Include(u=>u.Watchlist).SingleOrDefaultAsync(user => user.Username == username);

            if(user == null) {
                return BadRequest(new { error = "User not found" });
            }

            var watchlist = user.Watchlist;

            return Json(watchlist);
        }
    }
}