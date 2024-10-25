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

public class WatchProviders {
    public Dictionary<string,CountryProvider> results {get; set;}
}

public class CountryProvider
{
    public string link { get; set; }
    public List<Provider> flatrate { get; set; }
    public List<Provider> buy { get; set; }
    public List<Provider> rent { get; set; }
}

public class Provider
{
    public string logo_path { get; set; }
    public int provider_id { get; set; }
    public string provider_name { get; set; }
    public int DisplayPriority { get; set; }
}

