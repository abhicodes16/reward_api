const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://abhi_lapsi:Anikesh@16@cluster0.te3od.mongodb.net/reward-db?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
}).then(() => {
    console.log("Connection is successful...");
}).catch((e) => {
    console.log("No connection..!");
})