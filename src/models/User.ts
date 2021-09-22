import {Schema, model} from "mongoose";

interface IUser extends Document {
    email: string;
    password: string;
}

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export default model<IUser>("users", userSchema);
