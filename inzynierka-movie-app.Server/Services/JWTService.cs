using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace inzynierka_movie_app.Server.Services {
  public class JWTService {
    private readonly IConfiguration _configuration;

    public JWTService(IConfiguration configuration) {
      _configuration = configuration;
    }

    public string GenerateToken(User user) {
      var bytes = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
      var key = new SymmetricSecurityKey(bytes);

      var tokenDescriptor = new SecurityTokenDescriptor{ Subject = new ClaimsIdentity(new [] 
      {
        new Claim(JwtRegisteredClaimNames.Sub, user.ID.ToString()),
        new Claim(JwtRegisteredClaimNames.Email, user.Email),
        new Claim("username", user.Username),
      }),
      Expires = DateTime.UtcNow.AddDays(1),
      SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature)
      };

      var tokenHandler = new JwtSecurityTokenHandler();
      var token = tokenHandler.CreateToken(tokenDescriptor);

      return tokenHandler.WriteToken(token);
    }
  }
}