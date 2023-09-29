using Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var ConnectionStrings = builder.Configuration.GetConnectionString("DefaultConnecction");
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(ConnectionStrings));
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x.AllowAnyOrigin()
                   .AllowAnyHeader()
                   .AllowAnyMethod());

app.UseAuthorization();

app.MapControllers();

app.Run();
