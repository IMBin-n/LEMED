using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace LEMED.Migrations
{
    /// <inheritdoc />
    public partial class AddProductsData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Image", "Name", "NameFA", "Price", "Tag" },
                values: new object[,]
                {
                    { 1, "https://localhost:7088/images/hobobag.jpg", "Hobo Bag", "کیف هوبو", 189, "New" },
                    { 2, "https://localhost:7088/images/totebag.jpg", "Tote Bag", "کیف توت", 145, "" },
                    { 3, "https://localhost:7088/images/dufflebag.jpg", "Duffle Bag", "کیف دافل", 220, "Sale" },
                    { 4, "https://localhost:7088/images/clutchbag.jpg", "Clutch", "کلاچ", 96, "Sale" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3);
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
