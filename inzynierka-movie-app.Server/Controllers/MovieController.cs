using inzynierka_movie_app.Server.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace inzynierka_movie_app.Server.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class MovieController : Controller
    {
        private readonly IHttpService httpService;

        public MovieController(IHttpService httpService)
        {
            this.httpService = httpService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMovie(string id)
        {
            var resMovie = await httpService.CreateRequest($"https://api.themoviedb.org/3/movie/{id}?language=en-US");
            var resMovieCredits = await httpService.CreateRequest($"https://api.themoviedb.org/3/movie/{id}/credits?language=en-US");

            var processedResponseMovie = await httpService.ProcessResponse<MovieID>(resMovie);
            var processedResponseCredits = await httpService.ProcessResponse<Credits>(resMovieCredits);

            return Json(new {movie = processedResponseMovie, credits = processedResponseCredits});
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTVSeries(string id)
        {
            var resTV = await httpService.CreateRequest($"https://api.themoviedb.org/3/tv/{id}?language=en-US");
            var resTVCredits = await httpService.CreateRequest($"https://api.themoviedb.org/3/tv/{id}/credits?language=en-US");

            var processedResponseTVSeries = await httpService.ProcessResponse<TVSeriesID>(resTV);
            var processedResponseCredits = await httpService.ProcessResponse<Credits>(resTVCredits);

            return Json(new {tvseries = processedResponseTVSeries, credits = processedResponseCredits});
        }

    }
}