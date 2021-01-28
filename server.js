const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;



app.use(express.json());
app.use(cors());
require("./server/routes/routes")(app);
app.listen(8000, () => {
    console.log(`listening on port: ${port}`)
});