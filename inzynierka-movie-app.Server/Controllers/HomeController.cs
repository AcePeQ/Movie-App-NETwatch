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
        public async Task<IActionResult> GetMovies()
        {
            var resPopular = await httpService.CreateRequest("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1");
            var resNowPlaying = await httpService.CreateRequest("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1");
            var resTopRated  = await httpService.CreateRequest("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1");
            var resTrending = await httpService.CreateRequest("https://api.themoviedb.org/3/trending/movie/week?language=en-US");

            var processedResponsePopular = await httpService.ProcessResponse<MovieHome>(resPopular);
            var processedResponseNowPlaying = await httpService.ProcessResponse<MovieHome>(resNowPlaying);
            var processedResponseTopRated = await httpService.ProcessResponse<MovieHome>(resTopRated);
            var processedResponseTrending = await httpService.ProcessResponse<MovieHome>(resTrending);

            return Json(new {popular = processedResponsePopular, nowPlaying = processedResponseNowPlaying, topRated = processedResponseTopRated, trending = processedResponseTrending});
        }


        [HttpGet]
        public async Task<IActionResult> GetTVSeries()
        {
            var resTrending = await httpService.CreateRequest("https://api.themoviedb.org/3/trending/tv/week?language=en-US");
            var resPopular = await httpService.CreateRequest("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1");
            var resTopRated = await httpService.CreateRequest("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1");

            var processedResponseTrending = await httpService.ProcessResponse<TVSeries>(resTrending);
            var processedResponsePopular = await httpService.ProcessResponse<TVSeries>(resPopular);
            var processedResponseTopRated = await httpService.ProcessResponse<TVSeries>(resTopRated);

            return Json(new {trending = processedResponseTrending, popular = processedResponsePopular, topRated = processedResponseTopRated});
        }
    }
}
