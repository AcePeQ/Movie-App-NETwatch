﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using inzynierka_movie_app.Server.Data;

#nullable disable

namespace inzynierka_movie_app.Server.Migrations
{
    [DbContext(typeof(inzynierka_movie_appServerContext))]
    [Migration("20250324190755_Initial")]
    partial class Initial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("User", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("User");
                });

            modelBuilder.Entity("WatchlistItem", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier")
                        .HasAnnotation("Relational:JsonPropertyName", "databaseID");

                    b.Property<Guid?>("UserID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("backdrop_path")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("first_air_date")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("genre_ids")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("media_type")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("movieID")
                        .HasColumnType("int")
                        .HasAnnotation("Relational:JsonPropertyName", "id");

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("poster_path")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("release_date")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("runtime")
                        .HasColumnType("int");

                    b.Property<string>("status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double?>("user_rating")
                        .HasColumnType("float");

                    b.Property<string>("user_status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double?>("vote_average")
                        .HasColumnType("float");

                    b.Property<int?>("vote_count")
                        .HasColumnType("int");

                    b.Property<int?>("watched_episodes")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("UserID");

                    b.ToTable("WatchlistItem");
                });

            modelBuilder.Entity("WatchlistItem", b =>
                {
                    b.HasOne("User", null)
                        .WithMany("Watchlist")
                        .HasForeignKey("UserID");
                });

            modelBuilder.Entity("User", b =>
                {
                    b.Navigation("Watchlist");
                });
#pragma warning restore 612, 618
        }
    }
}
