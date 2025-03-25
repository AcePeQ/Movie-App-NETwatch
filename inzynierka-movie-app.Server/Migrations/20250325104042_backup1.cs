using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace inzynierka_movie_app.Server.Migrations
{
    /// <inheritdoc />
    public partial class backup1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "genre_ids",
                table: "WatchlistItem");

            migrationBuilder.CreateTable(
                name: "Genre",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WatchlistItemID = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Genre", x => x.id);
                    table.ForeignKey(
                        name: "FK_Genre_WatchlistItem_WatchlistItemID",
                        column: x => x.WatchlistItemID,
                        principalTable: "WatchlistItem",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Genre_WatchlistItemID",
                table: "Genre",
                column: "WatchlistItemID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Genre");

            migrationBuilder.AddColumn<string>(
                name: "genre_ids",
                table: "WatchlistItem",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
