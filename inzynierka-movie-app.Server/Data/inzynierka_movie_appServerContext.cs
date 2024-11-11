using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace inzynierka_movie_app.Server.Data
{
    public class inzynierka_movie_appServerContext : DbContext
    {
        public inzynierka_movie_appServerContext (DbContextOptions<inzynierka_movie_appServerContext> options)
            : base(options)
        {
        }

        public DbSet<User> User { get; set; } = default!;
    }
}
