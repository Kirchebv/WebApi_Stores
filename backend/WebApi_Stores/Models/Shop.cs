using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi_Stores.Models
{
    [Table("shops")]
    public class Shop
    {
        [Column("id")]
        public int Id { get; set; }
        [JsonProperty(Required = Required.Always)]
        [Required]
        [MaxLength(255)]
        [Column("store",TypeName = "VARCHAR(255)")]
        public string Store { get; set; }
        [JsonProperty(Required = Required.Always)]
        [Required]
        [MaxLength(2)]
        [Column("countrycode", TypeName = "char(2)")]
        public string CountryCode { get; set; }
        [JsonProperty(Required = Required.Always)]
        [Required]
        [MaxLength(255)]
        [Column("storeemail", TypeName = "VARCHAR(255)")]
        public string StoreEmail { get; set; }
        [JsonProperty(Required = Required.Always)]
        [Required]
        [MaxLength(255)]
        [Column("storemgr_firstname", TypeName = "VARCHAR(255)")]
        public string StoreMgr_FirstName { get; set; }
        [JsonProperty(Required = Required.Always)]
        [Required]
        [MaxLength(255)]
        [Column("storemgr_lastname", TypeName = "VARCHAR(255)")]
        public string StoreMgr_LastName { get; set; }
        [JsonProperty(Required = Required.Always)]
        [Required]
        [MaxLength(255)]
        [Column("storemgr_email", TypeName = "VARCHAR(255)")]
        public string StoreMgr_Email { get; set; }
        [JsonProperty(Required = Required.Always)]
        [Required]
        [Column("category", TypeName = "SMALLINT")]
        public int Category { get; set; }
        [Column("stock_backstore")]
        public int Stock_Backstore { get; set; }
        [Column("stock_frontstore")]
        public int Stock_Frontstore { get; set; }
        [Column("stock_shoppingwindow")]
        public int Stock_ShoppingWindow { get; set; }
        [Column("stockaccuracy")]
        public float StockAccuracy { get; set; }
        [Column("onflooravailability")]
        public float OnFloorAvailability { get; set; }
        [Column("stock_meanage_days")]
        public int Stock_MeanAge_days { get; set; }
    }
}
