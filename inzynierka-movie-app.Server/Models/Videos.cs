using System;
using System.Collections.Generic;
public class Videos
{
        public List<Video> results { get; set; }
}

public class Video
{
    public string key {get; set;}
    public string type {get; set;}
    public Boolean official {get; set;}
}