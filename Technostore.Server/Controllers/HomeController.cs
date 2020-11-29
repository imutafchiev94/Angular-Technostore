using Microsoft.AspNetCore.Authorization;

namespace Technostore.Server.Controllers
{
    using System.Diagnostics;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    
    public class HomeController : ApiController
    {
        //[Authorize]
        public IActionResult Get()
        {
            return Ok("Works");
        }
    }
}