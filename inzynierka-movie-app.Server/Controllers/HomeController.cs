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
        public async Task<IActionResult> GetPopularMovies()
        {
            var res = await httpService.CreateRequest("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1");

            var processedResponse = await httpService.ProcessResponse<PopularMovieResponse>(res);

            return Json(processedResponse);
        }
    }
}
