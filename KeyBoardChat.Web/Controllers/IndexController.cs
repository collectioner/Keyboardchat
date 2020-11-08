using Microsoft.AspNetCore.Mvc;

namespace KeyBoardChat.Web.Controllers
{
    public class IndexController : Controller
    {
        public IActionResult Index()
        {
            return View("Page");
        }
    }
}
