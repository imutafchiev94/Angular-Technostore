using Microsoft.EntityFrameworkCore.Migrations;

namespace Technostore.Server.Migrations
{
    public partial class UpdateUserOrders : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductOrders_AspNetUsers_UserId",
                table: "ProductOrders");

            migrationBuilder.DropIndex(
                name: "IX_ProductOrders_UserId",
                table: "ProductOrders");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "ProductOrders");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "ProductOrders",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProductOrders_UserId",
                table: "ProductOrders",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductOrders_AspNetUsers_UserId",
                table: "ProductOrders",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
