using inzynierka_movie_app.Server.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace inzynierka_movie_app.Server.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class PersonController : Controller
    {
        private readonly IHttpService httpService;

        public PersonController(IHttpService httpService)
        {
            this.httpService = httpService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPerson(string id)
        {
            var res = await httpService.CreateRequest($"https://api.themoviedb.org/3/person/{id}?append_to_response=combined_credits&language=en-US");
            var processedResponse = await httpService.ProcessResponse<Person>(res);

            return Json(processedResponse);
        }

    }
}