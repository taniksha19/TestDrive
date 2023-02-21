//Required packages

const express = require('express');

const vehicleRoute = require('./routes/vehicleRoute');
const customerFunctionalityRoutes = require('./routes/customerFunctionalityRoutes');
const executiveRoute = require('./routes/executiveRoute');
const registrationRoutes = require('./routes/registrationRoutes');
const testdriveRoute = require('./routes/testdriveRoute');

const app = express();

//Initialization

app.use(express.json());
app.use("/vehicle", vehicleRoute);
app.use("/customer", customerFunctionalityRoutes);
app.use("/executive", executiveRoute);
app.use("/registration", registrationRoutes);
app.use("/testdrive", testdriveRoute);


//Start the server at 3005 port

app.listen(3005, ()=> {
    console.log("Server running on port 3005");
});
