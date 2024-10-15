using inzynierka_movie_app.Server.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace inzynierka_movie_app.Server.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class CreditsController : Controller
    {
        private readonly IHttpService httpService;

        public CreditsController(IHttpService httpService)
        {
            this.httpService = httpService;
        }

        [HttpGet]
        public async Task<IActionResult> GetCredits(string type, string id)
        {
          if(type !="movie" && type != "tv") {
            throw new ArgumentException("Invalid type. Allowed values are movie or tv");
          }

          string credit = type == "movie" ? "credits" : "aggregate_credits";
          string url = $"https://api.themoviedb.org/3/{type}/{id}/{credit}?language=en-US";

          var res = await httpService.CreateRequest(url);                        
          var processedResponse = await httpService.ProcessResponse<FullCredits>(res);

          return Json(processedResponse);
        }
    }
}