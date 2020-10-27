using Keyboardchat.DataBase;
using Keyboardchat.DataBase.Models;
using Keyboardchat.Web;
using Keyboardchat.Web.WebSocketService;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using System;
using System.Text;

namespace Keyboardchat
{
    public class Startup
    {

        private WebSocketService WebSocketService;

        public Startup()
        {

        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseFileServer(new FileServerOptions()
            {
                FileProvider = new PhysicalFileProvider(Program.FilePath),
            });

            WebSocketService = new WebSocketService();
            WebSocketService.Start();
        }
    }
}
