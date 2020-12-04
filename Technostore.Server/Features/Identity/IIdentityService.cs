namespace Technostore.Server.Features.Identity
{
    public interface IIdentityService
    {

        string GenerateJwtToken(string userId, string userName, string secret, string userRole);

        //string GenerateAdminToken(string userId, string userName, string secret);

    }
}
