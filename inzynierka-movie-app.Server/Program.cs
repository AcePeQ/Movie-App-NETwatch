using inzynierka_movie_app.Server.Services;
using inzynierka_movie_app.Server.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using inzynierka_movie_app.Server.Data;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<inzynierka_movie_appServerContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("inzynierka_movie_appServerContext") ?? throw new InvalidOperationException("Connection string 'inzynierka_movie_appServerContext' not found.")));

var jwtKey = builder.Configuration["Jwt:Key"];
if(string.IsNullOrEmpty(jwtKey)) {
    throw new InvalidOperationException("JWT key is missing in appsettings.json");
}
var key = Encoding.UTF8.GetBytes(jwtKey);

// Add services to the container.
builder.Services.AddAuthentication(options => {
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options => {
    options.TokenValidationParameters = new TokenValidationParameters {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = false,
        ValidateAudience = false,
    };
});


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddResponseCaching();

builder.Services.AddScoped<IHttpService, HttpService>();
builder.Services.AddScoped<JWTService>();


var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseAuthentication();

app.MapControllers();

app.UseResponseCaching();

app.MapFallbackToFile("/index.html");

app.Run();
