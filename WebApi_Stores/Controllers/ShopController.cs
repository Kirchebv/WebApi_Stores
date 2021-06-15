using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using WebApi_Stores.Models;
using WebApi_Stores.Repositories;

namespace WebApi_Stores.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ShopController : ControllerBase
    {
        private readonly DbService _manager;
        public ShopController(DbService manager)
        {
            _manager = manager;
        }
        /// <summary>
        /// Get shop data by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        /// <response code="200">Success</response>
        [HttpGet("{id:int}", Name = "Get")]
        [ProducesResponseType(typeof(Shop), 200)]
        public IActionResult Get(int id)
        {
            Shop shop = _manager.Get(id);

            if (shop == null)
            {
                return NoContent();
            }

            return new JsonResult(shop);
        }

        /// <summary>
        /// Add new shop
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     {
        ///         "id": 10,
        ///         "store": "Bremen",
        ///         "countryCode": "DE",
        ///         "storeEmail": "Bremen@detego.com",
        ///         "storeMgr_FirstName": "Cory",
        ///         "storeMgr_LastName": "Vivian",
        ///         "storeMgr_Email": "cvivian9@t.co",
        ///         "category": 3,
        ///         "stock_Backstore": 319,
        ///         "stock_Frontstore": 1794,
        ///         "stock_ShoppingWindow": 4,
        ///         "stockAccuracy": 0.817,
        ///         "onFloorAvailability": 0.808,
        ///         "stock_MeanAge_days": 14
        ///     }
        ///
        /// </remarks>
        /// <param name="shop"></param>
        /// <returns></returns>
        /// <response code="201">Shop created</response>
        /// <response code="400">If the item is null</response> 
        [HttpPost]
        [ProducesResponseType(typeof(Shop), 201)]
        public IActionResult Post([FromBody] Shop shop)
        {
            try
            {
                _manager.Create(shop);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return CreatedAtRoute("Get", new { id = shop.Id }, shop);
        }

        /// <summary>
        /// Change shop details
        /// </summary>
        /// <param name="id"></param>
        /// <param name="shop"></param>
        /// <returns></returns>
        /// <response code="200">Success</response>
        /// <response code="400">If the item is null</response> 
        [HttpPut("{id:int}")]
        public IActionResult Put(int id, [FromBody] Shop shop) // [FromBody] JsonElement val
        {
            //JsonElement value;
            //int storeId = 0;
            //bool res = val.TryGetProperty("id", out value);

            //if (res)
            //    storeId = value.GetInt32();

            if (id != shop.Id)
            {
                return BadRequest();
            }

            try
            {
                _manager.Update(shop);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return new EmptyResult();
        }

        /// <summary>
        /// Delete shop data
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        /// <response code="200">Success</response>
        /// <response code="400">If the item is null</response> 
        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _manager.Delete(id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return new EmptyResult();
        }

        /// <summary>
        /// Get shop characteristics
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        /// <response code="200">Success</response>
        [HttpGet("characteristics/{id}")]
        [ProducesResponseType(typeof(ShopСharacteristicsDTO), 200)]
        public IActionResult Сharacteristics(int id)
        {
            ShopСharacteristicsDTO shopСharacteristics = _manager.GetCharacteristics(id);

            if (shopСharacteristics == null)
            {
                return NoContent();
            }

            return new JsonResult(shopСharacteristics);
        }
    }
}
