using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquipmentController : ControllerBase
    {
        // GET: api/Equipment
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Equipment/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST: api/Equipment
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Equipment/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Equipment/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
