import mongoose from "mongoose";

export default async () => {
    return mongoose.connect("mongodb+srv://rutuja:rutuja@cluster0.xg61akw.mongodb.net/react_blogs", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("Connection is successfull!"));
};