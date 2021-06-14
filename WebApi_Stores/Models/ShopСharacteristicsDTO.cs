using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi_Stores.Models
{
    public class ShopСharacteristicsDTO
    {
        public int StoreId { get; set; }
        public int TotalStock { get; set; }
        public float StockAccuracy { get; set; }
        public float OnFloorAvailability { get; set; }
        public int Stock_MeanAge_days { get; set; }
    }
}
