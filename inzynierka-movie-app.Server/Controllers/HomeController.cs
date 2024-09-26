using inzynierka_movie_app.Server.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace inzynierka_movie_app.Server.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class HomeController : Controller
    {
        private readonly IHttpService httpService;

        public HomeController(IHttpService httpService)
        {
            this.httpService = httpService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTypesTrending()
        {
            var res = await httpService.CreateRequest("https://api.themoviedb.org/3/trending/all/week?language=en-US");

            var processedResponse = await httpService.ProcessResponse<AllTypes>(res);

            return Json(processedResponse);
        }

        [HttpGet]
        public async Task<IActionResult> GetPopularMovies()
        {
            var res = await httpService.CreateRequest("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1");

            var processedResponse = await httpService.ProcessResponse<MovieHome>(res);

            return Json(processedResponse);
        }
        [HttpGet]
        public async Task<IActionResult> GetNowPlayingMovies()
        {
            var res = await httpService.CreateRequest("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1");

            var processedResponse = await httpService.ProcessResponse<MovieHome>(res);

            return Json(processedResponse);
        }
        [HttpGet]
        public async Task<IActionResult> GetTopRatedMovies()
        {
            var res = await httpService.CreateRequest("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1");

            var processedResponse = await httpService.ProcessResponse<MovieHome>(res);

            return Json(processedResponse);
        }

        [HttpGet]
        public async Task<IActionResult> GetTrendingMovies()
        {
            var res = await httpService.CreateRequest("https://api.themoviedb.org/3/trending/movie/day?language=en-US");

            var processedResponse = await httpService.ProcessResponse<MovieHome>(res);

            return Json(processedResponse);
        }

        [HttpGet]
        public async Task<IActionResult> GetTrendingTVSeries()
        {
            var res = await httpService.CreateRequest("https://api.themoviedb.org/3/trending/tv/day?language=en-US");

            var processedResponse = await httpService.ProcessResponse<TVSeries>(res);

            return Json(processedResponse);
        }

        [HttpGet]
        public async Task<IActionResult> GetPopularTVSeries()
        {
            var res = await httpService.CreateRequest("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1");

            var processedResponse = await httpService.ProcessResponse<TVSeries>(res);

            return Json(processedResponse);
        }

        [HttpGet]
        public async Task<IActionResult> GetTopRatedTVSeries()
        {
            var res = await httpService.CreateRequest("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1");

            var processedResponse = await httpService.ProcessResponse<TVSeries>(res);

            return Json(processedResponse);
        }
    }
}
