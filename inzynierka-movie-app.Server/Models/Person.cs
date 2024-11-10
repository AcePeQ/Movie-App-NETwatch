using System;
using System.Collections.Generic;

public class Person
{
    public string biography {get; set;}
    public int gender {get;set;}
    public string birthday {get;set;}
    public string deathday {get;set;}
    public string known_for_department {get; set;}
    public string name {get; set;}
    public string place_of_birth {get; set;}
    public string profile_path {get; set;}
    public CombinedCredits combined_credits {get; set;}
}

public class CombinedCredits {
  public List<PersonMovie> cast {get; set;}
  public List<PersonMovie> crew {get; set;}
}

public class PersonMovie {
    public string backdrop_path { get; set; }
    public List<int> genre_ids { get; set; }
    public int id { get; set; }
    public string title { get; set; }
    public string name { get; set; }
    public string media_type {get; set;}
    public double popularity {get;set;}
    public double vote_average {get; set;}
}