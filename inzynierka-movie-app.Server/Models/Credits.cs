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
    public string known_for_department {get; set;}
    public int id {get; set;}
}