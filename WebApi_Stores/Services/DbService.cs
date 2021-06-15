using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi_Stores.Models;

namespace WebApi_Stores.Repositories
{
    public class DbService
    {

        private readonly IServiceProvider _provider;

        public DbService(IServiceProvider provider)
        {
            _provider = provider;
        }

        public void Create(Shop model)
        {
            using var scope = _provider.CreateScope();
            var Context = scope.ServiceProvider.GetRequiredService<ShopContext>();

            model.Id = 0;
            Context.Shops.Add(model);
            Context.SaveChanges();
        }

        public void Delete(int id)
        {
            using var scope = _provider.CreateScope();
            var Context = scope.ServiceProvider.GetRequiredService<ShopContext>();

            var toDelete = Context.Shops.FirstOrDefault(m => m.Id == id);
            if (toDelete != null)
            {
                Context.Shops.Remove(toDelete);
                Context.SaveChanges();
            }
        }

        public Shop Update(Shop model)
        {
            using var scope = _provider.CreateScope();
            var Context = scope.ServiceProvider.GetRequiredService<ShopContext>();

            var toUpdate = Context.Shops.FirstOrDefault(m => m.Id == model.Id);

            if (toUpdate != null)
            {
                Context.Entry(toUpdate).State = EntityState.Detached;

                toUpdate = model;
                Context.Update(toUpdate);
                Context.SaveChanges();
            }

            return toUpdate;
        }

        public Shop Get(int id)
        {
            using var scope = _provider.CreateScope();
            var Context = scope.ServiceProvider.GetRequiredService<ShopContext>();

            return Context.Shops.FirstOrDefault(m => m.Id == id);
        }

        public ShopСharacteristicsDTO GetCharacteristics(int id)
        {
            using var scope = _provider.CreateScope();
            var Context = scope.ServiceProvider.GetRequiredService<ShopContext>();

            IEnumerable<ShopСharacteristicsDTO> result = Context.Shops.Where(s => s.Id == id).Select(s => new ShopСharacteristicsDTO() { StoreId = s.Id, TotalStock = s.Stock_Backstore + s.Stock_Frontstore + s.Stock_ShoppingWindow, StockAccuracy = s.StockAccuracy, OnFloorAvailability = s.OnFloorAvailability, Stock_MeanAge_days = s.Stock_MeanAge_days });

            return result.FirstOrDefault();
        }
    }
}
