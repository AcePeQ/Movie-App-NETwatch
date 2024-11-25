using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Policy;
using System.Text.Json.Serialization;

public class WatchlistItem {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    [JsonPropertyName("databaseID")]
    public Guid ID {get; set;}
    public string backdrop_path { get; set; }
    public List<Genre> genres { get; set; }
    //Movie id
    [JsonPropertyName("id")]
    public int movieID { get; set; }
    public string poster_path { get; set; }
    public string? name { get; set; }
    public string? title {get; set;}
    public double vote_average {get; set;}
    public string? media_type {get; set;}
    public int? runtime {get;set;}
    public string status {get; set;}
    public string? release_date {get; set;}
    public string? first_air_date {get; set;}
    public int vote_count {get; set;}
    public string? user_status {get; set;}
    public int? watched_episodes {get;set;}
    public double? user_rating {get; set;}
}

public class WatchListItemAdd {
    public string? backdrop_path { get; set; }
    public List<Genre>? genres { get; set; }
    //Movie id
    [JsonPropertyName("id")]
    public int movieID { get; set; }
    public string? poster_path { get; set; }
    public string? name { get; set; }
    public string? title {get; set;}
    public double? vote_average {get; set;}
    public string? media_type {get; set;}
    public int? runtime {get;set;}
    public string? status {get; set;}
    public string? release_date {get; set;}
    public string? first_air_date {get; set;}
    public int? vote_count {get; set;}
    public string? user_status {get; set;}
    public int? watched_episodes {get;set;}
    public double? user_rating {get; set;}
}

public class UpdateWatchlistItem {
    //Movie id
    [JsonPropertyName("id")]
    public int movieID { get; set; }
    public string? user_status {get; set;}
    public int? watched_episodes {get;set;}
    public double? user_rating {get; set;}
}