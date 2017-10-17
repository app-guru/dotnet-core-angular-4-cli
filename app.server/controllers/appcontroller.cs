using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace app.server.Controllers
{
    public class AppController : Controller
    {
        protected const string viewPath = "~/app.server/views";
        protected readonly IHostingEnvironment _env;
        public AppController(IHostingEnvironment env)
        {
            _env = env;
        }
        public IActionResult Index()
        {
            var Scripts = app_script_listAsync();
            if (Scripts == null)
            {
                return ViewError(501.1, "Resource are not found...! \r\n please contact your tech team immediately");
            }
            ViewBag.Scripts = Scripts;
            return View();
        }
        protected ViewResult ViewError(double ErrorCode, string ErrorMessage)
        {
            ViewBag.ErrorCode = ErrorCode;
            ViewBag.ErrorMessage = ErrorMessage;
            return View($"{viewPath}/error.cshtml");
        }

        public IActionResult Error()
        {
            return ViewError(501, "Something went wrong...!");
        }

        protected async Task<List<string>> app_script_listAsync()
        {
            var bundle_path = "/dist/app-assets/scripts/bundle";
            var basePath = _env.WebRootPath + bundle_path;

            if (_env.IsDevelopment() && !System.IO.Directory.Exists(basePath)) // if file not found on developement mode
            {
                using (var client = new HttpClient())
                {
                    var requestUri = Request.Scheme + "://" + Request.Host + $"{bundle_path}/main.bundle.js";
                    await client.GetAsync(requestUri);
                }
            }

            if (!System.IO.Directory.Exists(basePath))
                return null;
            var Dirinfo = new System.IO.DirectoryInfo(basePath);

            if (Dirinfo.GetFiles().Where(file =>
                  (
                    file.Name.StartsWith("inline") || file.Name.StartsWith("polyfills") ||
                    file.Name.StartsWith("vendor") || file.Name.StartsWith("styles") || file.Name.StartsWith("main")
                  ) && file.Name.EndsWith(".js")
            ).ToList().Count != 5)
                return null;
            var files = Dirinfo.GetFiles().ToList().Select(itm => itm.Name);
            return files.ToList();
        }
    }
}
