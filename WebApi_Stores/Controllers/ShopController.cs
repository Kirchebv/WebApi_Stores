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
    [Route("api/[controller]")]
    [ApiController]
    public class ShopController : ControllerBase
    {
        private readonly DbService _manager;
        public ShopController(DbService manager)
        {
            _manager = manager;
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            Shop shop = _manager.Get(id);

            if (shop == null)
            {
                return NoContent();
            }

            return new JsonResult(shop);
        }

        [HttpPost]
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

            return Ok();
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Put(int id, [FromBody] Shop shop) // [FromBody] JsonElement val
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

            return Ok();
        }

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

            return Ok();
        }

        [HttpGet("characteristics/{id}")]
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
