using KeyBoardChat.DataAccess;
using KeyBoardChat.DataAccess.Infrastructure;
using KeyBoardChat.Web.Controllers;
using KeyBoardChat.Web.Infrastructure;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace KeyBoardChat.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddHttpClient()
                .AddDbContext<DataContext>(options => options.UseSqlServer(Configuration["ConnectionString"]))
                .AddDataAccess()
                .AddWeb()
                .AddControllersWithViews();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    "Page",
                    "{*url}",
                    new
                    {
                        controller = "Index",
                        action = nameof(IndexController.Index)
                    });
            });
        }
    }
}
