import {Schema, model, PopulatedDoc, Document} from "mongoose";

interface IPosition {
    name: string;
    cost: number;
    user: any;
    category: any;
}

const positionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    user: {
        ref: "users",
        type: Schema.Types.ObjectId,
    },
    category: {
        ref: "categories",
        type: Schema.Types.ObjectId,
    },
});

export default model<IPosition>("position", positionSchema);
