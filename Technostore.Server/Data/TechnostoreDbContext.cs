using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Technostore.Server.Data.Models;

namespace Technostore.Server.Data
{
    public class TechnostoreDbContext : IdentityDbContext<User>
    {
        public TechnostoreDbContext(DbContextOptions<TechnostoreDbContext> options)
            : base(options)
        {
        }

        public DbSet<Category> Categories { get; set; }

        public DbSet<Product> Products { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<ProductOrder> ProductOrders { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder
                .Entity<Category>()
                .HasMany(c => c.Products)
                .WithOne(p => p.Category)
                .HasForeignKey(p => p.CategoryId);
                

            builder
                .Entity<Category>()
                .HasOne(c => c.Author)
                .WithMany(a => a.Categories)
                .HasForeignKey(c => c.AuthorId);
                

            builder
                .Entity<Product>()
                .HasOne(p => p.Author)
                .WithMany(a => a.Products)
                .HasForeignKey(p => p.AuthorId);


            builder
                .Entity<User>()
                .HasMany(u => u.Order)
                .WithOne(o => o.User)
                .HasForeignKey(o => o.UserId);
                

            builder.Entity<ProductOrder>()
                .HasKey(po => new {po.OrderId, po.ProductId});

                base.OnModelCreating(builder);
        }
    }
}