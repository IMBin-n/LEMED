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
        public DbSet<Order> Orders { get; set; }        // ← جدید
        public DbSet<OrderItem> OrderItems { get; set; } // ← جدید

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
                    Image = "https://localhost:7088/images/hobobag.jpg"
                },

                new Product
                {
                    Id = 2,
                    Name = "Tote Bag",
                    NameFA = "کیف توت",
                    Price = 145,
                    Tag = "",
                    Image = "https://localhost:7088/images/totebag.jpg"
                },

                new Product
                {
                    Id = 3,
                    Name = "Duffle Bag",
                    NameFA = "کیف دافل",
                    Price = 220,
                    Tag = "Sale",
                    Image = "https://localhost:7088/images/dufflebag.jpg"
                },

                new Product
                {
                    Id = 4,
                    Name = "Clutch",
                    NameFA = "کیف کلاچ",
                    Price = 96,
                    Tag = "Sale",
                    Image = "https://localhost:7088/images/clutchbag.jpg"
                }
            );
        }
    }
}