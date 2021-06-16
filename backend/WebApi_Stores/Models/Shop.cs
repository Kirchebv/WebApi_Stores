using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi_Stores.Models
{
    public class Shop
    {
        public int Id { get; set; }
        [JsonProperty(Required = Required.Always)]
        [Required]
        [MaxLength(255)]
        [Column(TypeName = "NVARCHAR(255)")]
        public string Store { get; set; }
        [JsonProperty(Required = Required.Always)]
        [Required]
        [MaxLength(2)]
        [Column(TypeName = "char(2)")]
        public string CountryCode { get; set; }
        [JsonProperty(Required = Required.Always)]
        [Required]
        [MaxLength(255)]
        [Column(TypeName = "VARCHAR(255)")]
        public string StoreEmail { get; set; }
        [JsonProperty(Required = Required.Always)]
        [Required]
        [MaxLength(255)]
        [Column(TypeName = "NVARCHAR(255)")]
        public string StoreMgr_FirstName { get; set; }
        [JsonProperty(Required = Required.Always)]
        [Required]
        [MaxLength(255)]
        [Column(TypeName = "NVARCHAR(255)")]
        public string StoreMgr_LastName { get; set; }
        [JsonProperty(Required = Required.Always)]
        [Required]
        [MaxLength(255)]
        [Column(TypeName = "VARCHAR(255)")]
        public string StoreMgr_Email { get; set; }
        [JsonProperty(Required = Required.Always)]
        [Required]
        [Column(TypeName = "SMALLINT")]
        public int Category { get; set; }
        public int Stock_Backstore { get; set; }
        public int Stock_Frontstore { get; set; }
        public int Stock_ShoppingWindow { get; set; }
        public float StockAccuracy { get; set; }
        public float OnFloorAvailability { get; set; }
        public int Stock_MeanAge_days { get; set; }
    }
}
