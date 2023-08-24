import mongoose from "mongoose"

const URI="mongodb+srv://hercapo:<capo231182>@cluster0.ebdb3vn.mongodb.net/ecommerce?retryWrites=true&w=majority"

await mongoose.connect(URI,{
    serverSelectionTimeoutMS:5000,
})
console.log("Base de datos conectada....")


