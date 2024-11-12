﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using inzynierka_movie_app.Server.Data;
using System.Configuration;
using Microsoft.Extensions.Configuration;
using System.Text.RegularExpressions;

namespace inzynierka_movie_app.Server
{
    public class UsersController : Controller
    {
        private readonly inzynierka_movie_appServerContext _context;
        private readonly IConfiguration _configuration;

        public UsersController(inzynierka_movie_appServerContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] RegisterUser registerUser) {
            if(registerUser == null) {
                return BadRequest("Invalid user data");
            }

            if(string.IsNullOrWhiteSpace(registerUser.Email) ||
             string.IsNullOrWhiteSpace(registerUser.Username) || 
             string.IsNullOrWhiteSpace(registerUser.Password) || 
             string.IsNullOrWhiteSpace(registerUser.Confirmed_Password)) 
            {
                return BadRequest("All fiels are required");
            }

            var emailPattern = @"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
            if(!Regex.IsMatch(registerUser.Email, emailPattern)) {
                return BadRequest("Invalid email format");
            }

            string usernamePattern = @"^[A-Za-z][A-Za-z0-9_]{2,11}$";
            if(!Regex.IsMatch(registerUser.Username, usernamePattern) || registerUser.Username.Length < 3 || registerUser.Username.Length > 12) {
                return BadRequest("Invalid username format");
            }

            string passwordPattern = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$";
            if(!Regex.IsMatch(registerUser.Password, passwordPattern)) {
                return BadRequest("Invalid password format");
            }

            if(registerUser.Password != registerUser.Confirmed_Password) {
                return BadRequest("Passwords are not the same");
            }
      
            if(await _context.User.AnyAsync(user => user.Email == registerUser.Email) || await _context.User.AnyAsync(user => user.Username == registerUser.Username)) {
                return BadRequest("User with this e-mail address or username exists");
            }


            var user = new User 
            {
                Email = registerUser.Email,
                Username = registerUser.Username,
                Password = registerUser.Password,
                Watchlist = new List<WatchlistItem>(),
            };

            _context.User.Add(user);
            await _context.SaveChangesAsync();

            return Ok("Register sucessed");
        }

        // GET: Users
        public async Task<IActionResult> Index()
        {
            return View(await _context.User.ToListAsync());
        }

        // GET: Users/Details/5
        public async Task<IActionResult> Details(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.User
                .FirstOrDefaultAsync(m => m.ID == id);
            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }

        // GET: Users/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Users/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ID,Email,Username,Password")] User user)
        {
            if (ModelState.IsValid)
            {
                user.ID = Guid.NewGuid();
                _context.Add(user);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(user);
        }

        // GET: Users/Edit/5
        public async Task<IActionResult> Edit(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.User.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return View(user);
        }

        // POST: Users/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(Guid id, [Bind("ID,Email,Username,Password")] User user)
        {
            if (id != user.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(user);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserExists(user.ID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(user);
        }

        // GET: Users/Delete/5
        public async Task<IActionResult> Delete(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.User
                .FirstOrDefaultAsync(m => m.ID == id);
            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }

        // POST: Users/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            var user = await _context.User.FindAsync(id);
            if (user != null)
            {
                _context.User.Remove(user);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool UserExists(Guid id)
        {
            return _context.User.Any(e => e.ID == id);
        }
    }
}
