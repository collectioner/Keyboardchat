using KeyBoardChat.DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace KeyBoardChat.DataAccess
{
    public sealed class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>().HasData(new User
            {
                Id = 1,
                Name = "Administrator",
                Password = "p@$$w0rd"
            });
        }
    }
}
