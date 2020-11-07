using KeyBoardChat.DataAccess.Models;
using KeyBoardChat.Web.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace KeyBoardChat.Web.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        [Route("all")]
        public IActionResult GetUsers()
        {
            IReadOnlyList<User> users = _userService.GetAllUsers();

            return Json(users);
        }
    }
}
