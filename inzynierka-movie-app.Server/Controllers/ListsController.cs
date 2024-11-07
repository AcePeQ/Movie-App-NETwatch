using inzynierka_movie_app.Server.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace inzynierka_movie_app.Server.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ListsController : Controller
    {
        private readonly IHttpService httpService;

        public ListsController(IHttpService httpService)
        {
            this.httpService = httpService;
        }

        [HttpGet]
        public async Task<IActionResult> GetRegions()
        {
            var res = await httpService.CreateRequest($"https://api.themoviedb.org/3/watch/providers/regions?language=en-US");
            var processedResponse = await httpService.ProcessResponse<Regions>(res);

            return Json(processedResponse);
        }

        [HttpGet]
        public async Task<IActionResult> GetMovieGenres()
        {
            var res = await httpService.CreateRequest($"https://api.themoviedb.org/3/genre/movie/list?language=en");
            var processedResponse = await httpService.ProcessResponse<GenresType>(res);

            return Json(processedResponse);
        }

        [HttpGet]
        public async Task<IActionResult> GetTVSeriesGenres()
        {
            var res = await httpService.CreateRequest($"https://api.themoviedb.org/3/genre/tv/list?language=en");
            var processedResponse = await httpService.ProcessResponse<GenresType>(res);

            return Json(processedResponse);
        }

        [HttpGet("{url}")]
        public async Task<IActionResult> GetListMovies(string url)
        {
            var res = await httpService.CreateRequest($"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US${url}");

            var processedResponse = await httpService.ProcessResponse<Discovers>(res);

            return Json(processedResponse);
        }

        [HttpGet("{url}")]
        public async Task<IActionResult> GetListTVSeries(string url)
        {
            var res = await httpService.CreateRequest($"https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US{url}");
            
            var processedResponse = await httpService.ProcessResponse<Discovers>(res);

            return Json(processedResponse);
        }

        [HttpGet("{region}")]
        public async Task<IActionResult> GetMovieWatchProviders(string region)
        {
            var res = await httpService.CreateRequest($"https://api.themoviedb.org/3/watch/providers/movie?language=en-US&watch_region={region}");
            var processedResponse = await httpService.ProcessResponse<WatchProvider>(res);

            return Json(processedResponse);
        }

        [HttpGet("{region}")]
        public async Task<IActionResult> GetTVSeriesWatchProviders(string region)
        {
            var res = await httpService.CreateRequest($"https://api.themoviedb.org/3/watch/providers/tv?language=en-US&watch_region={region}");
            var processedResponse = await httpService.ProcessResponse<WatchProvider>(res);

            return Json(processedResponse);
        }

    }
}