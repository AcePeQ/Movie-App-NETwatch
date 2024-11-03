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

    }
}