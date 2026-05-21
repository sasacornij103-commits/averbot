const Query = require("samp-query");

const SERVER_IP = "51.91.91.92";
const SERVER_PORT = 7777;

console.log("AVERBOT STARTING...");

/* CHECK SERVER */

setInterval(() => {

    Query(
        {
            host: SERVER_IP,
            port: SERVER_PORT
        },
        (err, res) => {

            if(err)
            {
                console.log("SERVER OFFLINE");
                return;
            }

            console.log(
    "ONLINE:",
    res.online,
    "/",
    res.maxplayers
   );

        }
    );

},5000);