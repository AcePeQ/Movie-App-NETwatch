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
            var resMovieVideos = await httpService.CreateRequest($"https://api.themoviedb.org/3/movie/{id}/videos?include_video_language=en&language=en-US");
            var resSimilar = await httpService.CreateRequest($"https://api.themoviedb.org/3/movie/{id}/similar?language=en-US&page=1");
            

            var processedResponseMovie = await httpService.ProcessResponse<MovieID>(resMovie);
            var processedResponseCredits = await httpService.ProcessResponse<Credits>(resMovieCredits);
            var processedResponseVideos = await httpService.ProcessResponse<Videos>(resMovieVideos);
            var processedResponseSimilar = await httpService.ProcessResponse<Movie>(resSimilar);

            return Json(new {movie = processedResponseMovie, credits = processedResponseCredits, videos = processedResponseVideos, similar = processedResponseSimilar});
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTVSeries(string id)
        {
            var resTV = await httpService.CreateRequest($"https://api.themoviedb.org/3/tv/{id}?language=en-US");
            var resTVCredits = await httpService.CreateRequest($"https://api.themoviedb.org/3/tv/{id}/credits?language=en-US");
            var resTVVideos = await httpService.CreateRequest($"https://api.themoviedb.org/3/tv/{id}/videos?include_video_language=en&language=en-US");
            var resSimilarTV = await httpService.CreateRequest($"https://api.themoviedb.org/3/tv/{id}/similar?language=en-US&page=1");

            var processedResponseTVSeries = await httpService.ProcessResponse<TVSeriesID>(resTV);
            var processedResponseCredits = await httpService.ProcessResponse<Credits>(resTVCredits);
            var processedResponseVideos = await httpService.ProcessResponse<Videos>(resTVVideos);
            var processedResponseSimilar = await httpService.ProcessResponse<TVSeries>(resSimilarTV);

            return Json(new {tvseries = processedResponseTVSeries, credits = processedResponseCredits, videos = processedResponseVideos, similar = processedResponseSimilar});
        }

    }
}