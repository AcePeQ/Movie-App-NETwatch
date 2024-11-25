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

        [HttpPost]
        [Authorize]
        public IActionResult AddMovie([FromBody] WatchListItemAdd movie)
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

            var user = _context.User.SingleOrDefault(user => user.ID.Equals(userIDGuid) && user.Username == usernameToken && user.Email == emailToken);

            if (user == null )
            {
                return BadRequest(new { error = "Invalid account" });
            }

            var newMovie = new WatchlistItem {
              backdrop_path = movie.backdrop_path,
              genres = movie.genres?.Select(g => new Genre { id = g.id, name = g.name }).ToList(),
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
              user_rating = movie.user_rating
            };

            user.Watchlist.Add(newMovie);
            _context.SaveChanges();

            var updatedUser = _context.User.SingleOrDefault(user => user.ID.Equals(userIDGuid) && user.Username == usernameToken && user.Email == emailToken);
            var watchlist = updatedUser.Watchlist;

            return Json(watchlist);
        }

        [HttpPost]
        [Authorize]
        public IActionResult DeleteMovie([FromBody] string id)
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

            var user = _context.User.SingleOrDefault(user => user.ID.Equals(userIDGuid) && user.Username == usernameToken && user.Email == emailToken);

            if (user == null )
            {
                return BadRequest(new { error = "Invalid account" });
            }

            var movieToRemove = user.Watchlist.SingleOrDefault(movie => movie.movieID.ToString() == id);
            user.Watchlist.Remove(movieToRemove);
            _context.SaveChanges();

            var updatedUser = _context.User.SingleOrDefault(user => user.ID.Equals(userIDGuid) && user.Username == usernameToken && user.Email == emailToken);
            var watchlist = updatedUser.Watchlist;

            return Json(watchlist);
        }

        [HttpPost]
        [Authorize]
        public IActionResult UpdateMovie([FromBody] UpdateWatchlistItem movie)
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

            var user = _context.User.SingleOrDefault(user => user.ID.Equals(userIDGuid) && user.Username == usernameToken && user.Email == emailToken);

            if (user == null )
            {
                return BadRequest(new { error = "Invalid account" });
            }

            var movieToUpdate = user.Watchlist.SingleOrDefault(movie => movie.movieID.ToString() == movie.movieID.ToString());

            if(movieToUpdate == null) {
                return BadRequest(new {error = "Movie not found in watchlist"});
            }

            movieToUpdate.user_rating = movie.user_rating;
            movieToUpdate.user_status = movie.user_status;
            movieToUpdate.watched_episodes = movie.watched_episodes;

            _context.SaveChanges();

            var updatedUser = _context.User.SingleOrDefault(user => user.ID.Equals(userIDGuid) && user.Username == usernameToken && user.Email == emailToken);
            var watchlist = updatedUser.Watchlist;

            return Json(watchlist);
        }

        [HttpGet("{username}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetUserWatchlist(string username)
        {
            if(string.IsNullOrEmpty(username)) {
                return BadRequest(new { error = "Username is required" });
            }

            var user = _context.User.SingleOrDefault(user => user.Username == username);

            if(user == null) {
                return BadRequest(new { error = "User not found" });
            }

            var watchlist = user.Watchlist;

            return Json(watchlist);
        }
    }
}