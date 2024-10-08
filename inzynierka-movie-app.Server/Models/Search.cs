using System;
using System.Collections.Generic;

public class Search
{
        public List<SearchResult> results { get; set; }
}

public class SearchResult
{
    public string poster_path { get; set; }
    public List<int> genre_ids { get; set; }
    public int id { get; set; }
    public string overview { get; set; }
    public string media_type { get; set; }
    public string title { get; set; }
    public string name { get; set; }
    public string release_date {get; set;}
    public string first_air_date {get;set;}
    public double vote_average {get; set;}
}