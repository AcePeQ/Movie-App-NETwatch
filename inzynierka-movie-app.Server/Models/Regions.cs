using System;
using System.Collections.Generic;

public class Regions
{
        public List<Region> results { get; set; }
}

public class Region
{
    public string iso_3166_1 { get; set; }
    public string english_name { get; set; }
}