using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data // Ensure this matches your namespace
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Equipment> Equipments { get; set; }
    }
}
