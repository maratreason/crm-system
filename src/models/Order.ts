import {Schema, model} from "mongoose";

interface IOrderList {
    name: string;
    quantity: number;
    cost: number;
}

interface IOrder {
    data: Date;
    order: number;
    list: IOrderList[];
    user: any;
}

const orderSchema = new Schema({
    data: {
        type: Date,
        default: Date.now,
    },
    order: {
        type: Number,
        required: true,
    },
    list: [
        {
            name: {
                type: String
            },
            quantity: {
                type: Number
            },
            cost: {
                type: Number
            },
        }
    ],
    user: {
        ref: "users",
        type: Schema.Types.ObjectId,
    },
});

export default model<IOrder>("orders", orderSchema);
