using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace MapVisualization.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class KeysController : ControllerBase
    {
        private readonly ILogger<DataController> logger;

        private readonly IConfiguration configuration;

        public KeysController(ILogger<DataController> logger, IConfiguration configuration)
        {
            this.logger = logger;

            this.configuration = configuration;
        }

        [HttpGet("bingmapsapi")]
        public ActionResult<Dictionary<string, string>> GetBingMapsApiKey()
        {
            return new Dictionary<string, string>() { { "key", configuration.GetSection("BING_MAPS_API").Value } };
        }

        [HttpPost("directlinetoken")]
        public async Task<ActionResult<ChatConfig>> GetDirectLineToken()
        {


            var secret = configuration.GetSection("DIRECT_LINE_SECRET").Value;
            var directLineURL = configuration.GetSection("DIRECT_LINE_URL").Value;

            HttpClient client = new HttpClient();

            HttpRequestMessage request = new HttpRequestMessage(
                HttpMethod.Post,
                directLineURL);

            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", secret);

            var userId = $"dl_{Guid.NewGuid()}";

            request.Content = new StringContent(
                JsonConvert.SerializeObject(
                    new { User = new { Id = userId } }),
                    Encoding.UTF8,
                    "application/json");

            var response = await client.SendAsync(request);
            string token = String.Empty;

            if (response.IsSuccessStatusCode)
            {
                var body = await response.Content.ReadAsStringAsync();
                token = JsonConvert.DeserializeObject<DirectLineToken>(body).token;
            }

            var config = new ChatConfig()
            {
                secretToken = token,
                userID = userId
            };

            return config;
        }
    }

    public class DirectLineToken
    {
        public string conversationId { get; set; }
        public string token { get; set; }
        public int expires_in { get; set; }
    }
    public class ChatConfig
    {
        public string secretToken { get; set; }
        public string userID { get; set; }
    }

}