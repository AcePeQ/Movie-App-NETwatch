using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.RazorPages;

public class Discovers
{
        public int page {get; set;}
        public List<Discover> results { get; set; }
        public int total_pages {get; set;}
        public int total_results {get; set;}
}

public class Discover {
      public string backdrop_path { get; set; }
    public List<int> genre_ids { get; set; }
    public int id { get; set; }
    public string overview { get; set; }
    public string poster_path { get; set; }
    public string name { get; set; }
    public string title {get; set;}
    public double vote_average {get; set;}
    public string media_type {get; set;}
    public string release_date {get; set;}
    public string first_air_date {get; set;}
    public int vote_count {get; set;}
}