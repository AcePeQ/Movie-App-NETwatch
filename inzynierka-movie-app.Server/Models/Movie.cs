using System;
using System.Collections.Generic;

public class MovieHome
{
        public List<Movie> results { get; set; }
}

public class Movie
{
    public string backdrop_path { get; set; }
    public List<int> genre_ids { get; set; }
    public int id { get; set; }
    public string overview { get; set; }
    public string poster_path { get; set; }
    public string title { get; set; }
    public double vote_average {get; set;}
}