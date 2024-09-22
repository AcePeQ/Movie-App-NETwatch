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
        [ResponseCache(Duration = 10)]
        public async Task<string> Index()
        {
            var est = await httpService.CreateRequest("https://api.themoviedb.org/3/account//lists");

            var processedResponse = await httpService.ProcessResponse<string>(est);

            return processedResponse;
        }
    }
}
