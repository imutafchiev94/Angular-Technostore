using Microsoft.EntityFrameworkCore.Migrations;

namespace Technostore.Server.Migrations
{
    public partial class AddModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AuthorId",
                table: "Products",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AuthorId",
                table: "Categories",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Products_AuthorId",
                table: "Products",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_Categories_AuthorId",
                table: "Categories",
                column: "AuthorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Categories_AspNetUsers_AuthorId",
                table: "Categories",
                column: "AuthorId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_AspNetUsers_AuthorId",
                table: "Products",
                column: "AuthorId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Categories_AspNetUsers_AuthorId",
                table: "Categories");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_AspNetUsers_AuthorId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_AuthorId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Categories_AuthorId",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "AuthorId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "AuthorId",
                table: "Categories");
        }
    }
}
