using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi_Stores.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Shops",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Store = table.Column<string>(type: "NVARCHAR(255)", maxLength: 255, nullable: false),
                    CountryCode = table.Column<string>(type: "char(2)", maxLength: 2, nullable: false),
                    StoreEmail = table.Column<string>(type: "VARCHAR(255)", maxLength: 255, nullable: false),
                    StoreMgr_FirstName = table.Column<string>(type: "NVARCHAR(255)", maxLength: 255, nullable: false),
                    StoreMgr_LastName = table.Column<string>(type: "NVARCHAR(255)", maxLength: 255, nullable: false),
                    StoreMgr_Email = table.Column<string>(type: "VARCHAR(255)", maxLength: 255, nullable: false),
                    Category = table.Column<short>(type: "SMALLINT", nullable: false),
                    Stock_Backstore = table.Column<int>(type: "int", nullable: false),
                    Stock_Frontstore = table.Column<int>(type: "int", nullable: false),
                    Stock_ShoppingWindow = table.Column<int>(type: "int", nullable: false),
                    StockAccuracy = table.Column<float>(type: "real", nullable: false),
                    OnFloorAvailability = table.Column<float>(type: "real", nullable: false),
                    Stock_MeanAge_days = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shops", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Shops");
        }
    }
}
