using Technostore.Server.Data;

namespace Technostore.Server.Infrastructure
{
    using Technostore.Server.Data;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.DependencyInjection;

    
    public static class ApplicationBuilderExtensions
    {
        public static void ApplyMigrtaions(this IApplicationBuilder app)
        {
            using var services = app.ApplicationServices.CreateScope();

            var dbContext = services.ServiceProvider.GetService<TechnostoreDbContext>();
            
            dbContext.Database.Migrate();
        }
    }
}