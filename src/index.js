const express = require('express')
const app = express();

const routes = require('./routers/companyDetails');

app.use(express.json())

app.use("/", routes);

app.listen(8000, () => console.log("Server running on port 8000"));
