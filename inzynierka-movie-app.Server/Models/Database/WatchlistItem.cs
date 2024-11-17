using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

public class WatchlistItem {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    [JsonPropertyName("databaseID")]
    public Guid ID {get; set;}
    public string backdrop_path { get; set; }
    public List<int> genre_ids { get; set; }
    //Movie id

    [JsonPropertyName("id")]
    public int movieID { get; set; }
    public string poster_path { get; set; }
    public string name { get; set; }
    public string title {get; set;}
    public double vote_average {get; set;}
    public string media_type {get; set;}
    public string release_date {get; set;}
    public string first_air_date {get; set;}
    public int vote_count {get; set;}
}