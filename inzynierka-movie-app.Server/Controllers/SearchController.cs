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


    }
}