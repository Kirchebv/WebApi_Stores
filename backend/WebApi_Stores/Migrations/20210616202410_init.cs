using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace WebApi_Stores.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "shops",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    store = table.Column<string>(type: "VARCHAR(255)", maxLength: 255, nullable: false),
                    countrycode = table.Column<string>(type: "char(2)", maxLength: 2, nullable: false),
                    storeemail = table.Column<string>(type: "VARCHAR(255)", maxLength: 255, nullable: false),
                    storemgr_firstname = table.Column<string>(type: "VARCHAR(255)", maxLength: 255, nullable: false),
                    storemgr_lastname = table.Column<string>(type: "VARCHAR(255)", maxLength: 255, nullable: false),
                    storemgr_email = table.Column<string>(type: "VARCHAR(255)", maxLength: 255, nullable: false),
                    category = table.Column<short>(type: "SMALLINT", nullable: false),
                    stock_backstore = table.Column<int>(type: "integer", nullable: false),
                    stock_frontstore = table.Column<int>(type: "integer", nullable: false),
                    stock_shoppingwindow = table.Column<int>(type: "integer", nullable: false),
                    stockaccuracy = table.Column<float>(type: "real", nullable: false),
                    onflooravailability = table.Column<float>(type: "real", nullable: false),
                    stock_meanage_days = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_shops", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "shops");
        }
    }
}
