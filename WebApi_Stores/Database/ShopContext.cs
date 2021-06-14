using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using WebApi_Stores.Models;

namespace WebApi_Stores
{
    public class ShopContext : DbContext
    {
        public ShopContext(DbContextOptions<ShopContext> options) : base(options)
        {
            Debug.WriteLine("CREATE");
        }
        public DbSet<Shop> Shops { get; set;}

        public override void Dispose()
        {
            Debug.WriteLine("DISPOSE");
            base.Dispose();
        }
    }
}
