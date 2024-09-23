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
                    { "Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmIzZGU5MWZmYmI3MjJiYTczZWQxMDMzNTQzODhjMiIsIm5iZiI6MTcyNzA5NzQyMy44MDc1NTEsInN1YiI6IjY2Yzc3Mjk1MDVjMDVhMzJiN2VhYmFkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r8ZjG4t-Lr8NT-cw16-weX8iWJ0W186ivvme7NthVK4" },
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
