using System.ComponentModel.DataAnnotations;

namespace Technostore.Server.Features.Identity
{
    public class RegisterUserRequestModel
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Email { get; set; }
        
        [Required]
        public string Password { get; set; }
    }
}