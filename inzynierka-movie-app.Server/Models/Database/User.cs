using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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


