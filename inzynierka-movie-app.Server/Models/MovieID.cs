using System;
using System.Collections.Generic;

public class MovieID
{
        public string backdrop_path {get; set;}
        public List<int> genre_ids { get; set; }
        public string overview {get; set;}
        public string poster_path {get; set;}
        public string release_date {get; set;}
        public int runtime {get; set;}
        public string title {get; set;}
        public double vote_average {get; set;}
        public int vote_count {get; set;}
}

