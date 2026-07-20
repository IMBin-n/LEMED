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
                    { 1, "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80", "Hobo Bag", "کیف هوبو", 189, "New" },
                    { 2, "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80", "Tote Bag", "کیف توت", 145, "" },
                    { 3, "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80", "Duffle Bag", "کیف دافل", 220, "Sale" }
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
        }
    }
}
