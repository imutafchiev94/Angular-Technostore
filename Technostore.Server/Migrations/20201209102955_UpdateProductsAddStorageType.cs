using Microsoft.EntityFrameworkCore.Migrations;

namespace Technostore.Server.Migrations
{
    public partial class UpdateProductsAddStorageType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "StorageType",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StorageType",
                table: "Products");
        }
    }
}
