using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace inzynierka_movie_app.Server.Migrations
{
    /// <inheritdoc />
    public partial class initialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "WatchlistItem",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    backdrop_path = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    genre_ids = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    movieID = table.Column<int>(type: "int", nullable: false),
                    poster_path = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    vote_average = table.Column<double>(type: "float", nullable: false),
                    media_type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    release_date = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    first_air_date = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    vote_count = table.Column<int>(type: "int", nullable: false),
                    UserID = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WatchlistItem", x => x.ID);
                    table.ForeignKey(
                        name: "FK_WatchlistItem_User_UserID",
                        column: x => x.UserID,
                        principalTable: "User",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_WatchlistItem_UserID",
                table: "WatchlistItem",
                column: "UserID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WatchlistItem");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
