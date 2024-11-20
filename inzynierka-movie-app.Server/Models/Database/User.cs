using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

public class User
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    public Guid ID {get; set;}
    public string Email {get; set;}
    public string Username {get; set;}
    public string Password {get; set;}
    public List<WatchlistItem> Watchlist {get; set;}
}

public class LoginUser {
    [JsonPropertyName("email")]
    public string Email {get; set;}
    [JsonPropertyName("password")]
    public string Password {get; set;}
}

public class Settings {
    [JsonPropertyName("username")]
    public string Username {get; set;}
    [JsonPropertyName("password")]
    public string Password {get; set;}
}

public class RegisterUser {
    [JsonPropertyName("email")]
    public string Email {get; set;}
    [JsonPropertyName("username")]
    public string Username {get; set;}
    [JsonPropertyName("password")]
    public string Password {get; set;}
    [JsonPropertyName("confirmed_password")]
    public string Confirmed_Password {get; set;}
}