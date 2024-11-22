public class ModalMovie
{
    public string backdrop_path { get; set; }
    public List<Genre> genres { get; set; }
    public int id { get; set; }
    public string poster_path { get; set; }
    public string title { get; set; }
    public double vote_average {get; set;}
    public string  release_date {get; set;}
    public int vote_count {get; set;}
    public int runtime {get; set;}
    public string status {get; set;}
    public string first_air_date {get; set;}
    public string last_air_date {get; set;}
    public string name {get; set;}
    public List<Season> seasons {get; set;}
}