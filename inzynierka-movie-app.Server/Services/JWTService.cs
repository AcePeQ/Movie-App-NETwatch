using System.Text;

namespace inzynierka_movie_app.Server.Services {
  public class JWTService {
    private readonly IConfiguration _configuration;

    public JWTService(IConfiguration configuration) {
      _configuration = configuration;
    }

    public string GenerateToken(User user) {
      var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
    }
  }
}