using inzynierka_movie_app.Server.Services.Interfaces;
using Newtonsoft.Json;
using System.Net.Http.Headers;
using System.Text.Json;

namespace inzynierka_movie_app.Server.Services
{
    public class HttpService : IHttpService
    {
        public HttpClient CreateClient() { return new HttpClient(); }

        public async Task<HttpResponseMessage> CreateRequest(string url)
        {
            var client = CreateClient();
            var request = new HttpRequestMessage {
                Method = HttpMethod.Get,
                RequestUri = new Uri(url),
                Headers = {
                    { "accept", "application/json" },
                    { "Authorization", "Bearer c6b3de91ffbb722ba73ed103354388c2" },
                },
            };

            var response = await client.SendAsync(request);
            
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
            Console.WriteLine("Response content: " + content);

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
