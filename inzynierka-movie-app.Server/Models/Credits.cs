using System;
using System.Collections.Generic;

public class Credits
{
        public List<Credit> cast { get; set; }
}

public class Credit
{
    public string profile_path { get; set; }
    public string name {get; set;}
    public string character {get; set;}
    public List<Role> roles {get; set;}
    public string known_for_department {get; set;}
    public int id {get; set;}
}

public class FullCredits {
    public List<Cast> cast {get; set;}
    public List<Crew> crew {get; set;}
}

public class Cast {
    public int id {get; set;}
    public string known_for_department {get; set;}
    public string name {get; set;}
    public string profile_path {get; set;}
    public string character {get; set;}
    public List<Role> roles {get; set;}
}

public class Crew {
    public int id {get; set;}
    public string known_for_department {get; set;}
    public string name {get; set;}
    public string profile_path {get; set;}
    public List<Job> jobs {get; set;}
    public string job {get; set;}
    public string department {get; set;}
}

public class Role {
    public string character {get; set;}
    public int episode_count {get; set;}
    public int total_episode_count {get; set;}
}

public class Job {
    public string job {get; set;}
    public int episode_count {get; set;}
}