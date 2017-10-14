using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using static Microsoft.AspNetCore.ResponseCompression.ResponseCompressionDefaults;
namespace app.server
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("app.server/config/appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"app.server/config/appsettings.{env.EnvironmentName.ToLower()}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddOptions();
            // Change view folder default location
            services.Configure<RazorViewEngineOptions>(options =>
            {
                options.ViewLocationExpanders.Add(new ViewLocationExpander());
            });
            // Set file types response that need to be compressed
            services.AddResponseCompression(options =>
            {
                options.MimeTypes = MimeTypes.Concat(new[]
                                {
                                    "image/svg+xml",
                                    "image/png",
                                    "image/jpeg",
                                    "image/gif",
                                    "image/x-icon",
                                    "text/css",
                                    "font/woff2",
                                    "application/font-woff",
                                    "application/javascript",
                                });
            });
            services.AddMemoryCache();
            services.AddNodeServices();
            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseResponseCompression();
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/error");
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=app}/{action=index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "app", action = "index" });
            });
        }
    }

    public class ViewLocationExpander : IViewLocationExpander
    {
        /// <summary>
        /// Used to specify the locations that the view engine should search to
        /// locate views.
        /// </summary>
        /// <param name="context"></param>
        /// <param name="viewLocations"></param>
        /// <returns></returns>
        public IEnumerable<string> ExpandViewLocations(ViewLocationExpanderContext context, IEnumerable<string> viewLocations)
        {
            IEnumerable<string> Lcase_viewLocations = new List<string>();
            foreach (var item in viewLocations)
            {
                Lcase_viewLocations.Append(item.ToLower());
            }
            //{2} is area, {1} is controller,{0} is the action
            string[] locations = new string[] { "/app.server/views/{1}/{0}.cshtml" };
            return locations.Union(Lcase_viewLocations);          //Add mvc default locations after ours
        }


        public void PopulateValues(ViewLocationExpanderContext context)
        {
            context.Values["customviewlocation"] = nameof(ViewLocationExpander);
        }
    }
}
