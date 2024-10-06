using System;
using System.Collections.Generic;

public class MovieID
{
        public string backdrop_path {get; set;}
        public List<GenresMovie> genres { get; set; }
        public string overview {get; set;}
        public string poster_path {get; set;}
        public string release_date {get; set;}
        public int runtime {get; set;}
        public string title {get; set;}
        public double vote_average {get; set;}
        public int vote_count {get; set;}
        public List<string> origin_country {get; set;}
        public string status {get; set;}
        public string original_language {get; set;}
        public List<Company> production_companies {get; set;}
        public string homepage {get;set;}
}

public class GenresMovie {
  public int id {get; set;}
  public string name {get; set;}
}