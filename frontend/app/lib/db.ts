import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error(".env.local 내부의 환경변수 MONGODB_URI 가 정의되지 않았습니다.");
}

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log(`Error on DB Connection:${error}`);
    throw new Error("Error connecting to Mongoose");
  }
};

export default connectDB;
