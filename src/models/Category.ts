import {Schema, model} from "mongoose";

interface ICategory {
    name: string;
    imageSrc: string;
    user: any;
}

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    imageSrc: {
        type: String,
        default: "",
    },
    user: {
        ref: "users",
        type: Schema.Types.ObjectId,
    },
});

export default model<ICategory>("categories", categorySchema);
