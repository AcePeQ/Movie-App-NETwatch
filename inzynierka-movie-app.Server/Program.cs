using inzynierka_movie_app.Server.Services;
using inzynierka_movie_app.Server.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using inzynierka_movie_app.Server.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<inzynierka_movie_appServerContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("inzynierka_movie_appServerContext") ?? throw new InvalidOperationException("Connection string 'inzynierka_movie_appServerContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddResponseCaching();

builder.Services.AddScoped<IHttpService, HttpService>();


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

app.MapControllers();

app.UseResponseCaching();

app.MapFallbackToFile("/index.html");

app.Run();
