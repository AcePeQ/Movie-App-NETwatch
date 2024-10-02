using System;
using System.Collections.Generic;

public class TVSeriesID
{
        public string backdrop_path {get; set;}
        public int runtime {get; set;}
        public List<Genres> genres { get; set; }
        public string first_air_date {get; set;}
        public string last_air_date {get; set;}
        public string release_date {get; set;}
        public string name {get; set;}
        public int number_of_episodes {get; set;}
        public int number_of_seasons {get; set;}
        public List<Networks> networks { get; set; }
        public string overview {get; set;}
        public string poster_path {get; set;}
        public string status {get; set;}
        public double vote_average {get; set;}
        public int vote_count {get; set;}
        public List<string> origin_country {get; set;}
        public List<Season> seasons {get; set;}
        public List<Creator> created_by {get; set;}
        public string original_name {get; set;}
}

public class Creator {
  public string name {get; set;}

}

public class Season {
  public string air_date {get;set;}
  public int episode_count {get; set;}
  public int id {get; set;}
  public string name {get; set;}
  public string poster_path {get; set;}
  public int season_number {get; set;}

}

public class Genres {
  public int id {get; set;}
  public string name {get; set;}
}

public class Networks {
  public int id {get; set;}
  public string logo_path {get; set;}
  public string name {get; set;}
}
