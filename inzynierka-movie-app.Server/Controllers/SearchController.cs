using inzynierka_movie_app.Server.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace inzynierka_movie_app.Server.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class SearchController : Controller
    {
        private readonly IHttpService httpService;

        public SearchController(IHttpService httpService)
        {
            this.httpService = httpService;
        }

        [HttpGet("{query}")]
        public async Task<IActionResult> GetSearch(string query)
        {
            var res = await httpService.CreateRequest($"https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1");                  
            var processedResponse = await httpService.ProcessResponse<Search>(res);

            return Json(processedResponse);
        }
    }
}