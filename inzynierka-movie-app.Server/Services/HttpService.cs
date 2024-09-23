using inzynierka_movie_app.Server.Services.Interfaces;
using Newtonsoft.Json;
using System.Text.Json;

namespace inzynierka_movie_app.Server.Services
{
    public class HttpService : IHttpService
    {
        public HttpClient CreateClient() { return new HttpClient(); }

        public async Task<HttpResponseMessage> CreateRequest(string url)
        {
            var client = CreateClient();

            var response = await client.GetAsync(url);

            return response;
        }

        public async Task<T> ProcessResponse<T>(HttpResponseMessage response)
        {
            if (response == null)
                throw new ArgumentNullException(nameof(response));

            // Sprawdź, czy odpowiedź jest udana
            response.EnsureSuccessStatusCode();

            // Odczytaj zawartość jako string
            string content = await response.Content.ReadAsStringAsync();

            // Jeśli typ T to string, zwróć zawartość bezpośrednio
            if (typeof(T) == typeof(string))
                return (T)(object)content;

            // W przeciwnym razie spróbuj zdeserializować JSON do typu T
            try
            {
                return JsonConvert.DeserializeObject<T>(content);
            }
            catch (Newtonsoft.Json.JsonException ex)
            {
                throw new InvalidOperationException($"Nie udało się zdeserializować odpowiedzi do typu {typeof(T).Name}", ex);
            }
        }
    }
}
