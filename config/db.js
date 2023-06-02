const mongoose = require("mongoose");
const connectDB = async()=>{
try{
    const conn = await mongoose.connect("mongodb+srv://rahulrajputgsits:rahulrajputgsits@cluster0.jehfmqi.mongodb.net/?retryWrites=true&w=majority" , {
        useNewUrlParser: true,
        // useFindAndModify: true,
        useUnifiedTopology: true
    });
    console.log(`Database Connection True: ${conn.connection.host}`)
}catch(err){
    console.log(err);
    process.exit();
}

};

module.exports = connectDB;