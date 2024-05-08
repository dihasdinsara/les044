import {mongoose} from "mongoose";


const connectMongoDB = async() => {
try{
    await mongoose.connect(process.env.MONGO_LINK);
    console.log("database connected");
} catch (error) {
    console.log(error);
}
    
};

export default connectMongoDB;