namespace inzynierka_movie_app.Server.Services.Interfaces
{
    public interface IHttpService
    {
        HttpClient CreateClient();
        Task<HttpResponseMessage> CreateRequest(string url);
        Task<T> ProcessResponse<T>(HttpResponseMessage response);
    }
}