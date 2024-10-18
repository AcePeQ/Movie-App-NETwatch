public class AllTypes {
  public List<All> results {get; set;}
}

public class All {
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
public class AllTypesShort {
    public string poster_path { get; set; }
    public int id { get; set; }
    public string release_date {get; set;}
    public string first_air_date {get; set;}
    public string name { get; set; }
    public string title {get; set;}
}