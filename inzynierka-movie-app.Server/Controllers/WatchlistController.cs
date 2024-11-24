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

            var updatedUser = _context.User.Include(u => u.Watchlist).SingleOrDefault(user => user.ID.Equals(userIDGuid) && user.Username == usernameToken && user.Email == emailToken);
            var watchlist = updatedUser.Watchlist;

            return Json(watchlist);
        }
    }
}