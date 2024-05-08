import mongoose, {Schema} from "mongoose";


const userSchema = new Schema({
    firstName: String,
    lastName: String,
});

const User = mongoose.models.User || mongoose.model("User",userSchema);

export default User;