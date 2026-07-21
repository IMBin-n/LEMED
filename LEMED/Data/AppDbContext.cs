using Microsoft.EntityFrameworkCore;
using LEMED.Models;

namespace LEMED.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    Id = 1,
                    Name = "Hobo Bag",
                    NameFA = "کیف هوبو",
                    Price = 189,
                    Tag = "New",
                    Image = "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80"
                },

                new Product
                {
                    Id = 2,
                    Name = "Tote Bag",
                    NameFA = "کیف توت",
                    Price = 145,
                    Tag = "",
                    Image = "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80"
                },

                new Product
                {
                    Id = 3,
                    Name = "Duffle Bag",
                    NameFA = "کیف دافل",
                    Price = 220,
                    Tag = "Sale",
                    Image = "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80"
                }
            );
        }
    }
}