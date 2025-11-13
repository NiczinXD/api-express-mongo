import mongoose from "mongoose"

mongoose.connect(process.env.CONEXAO_MONGO);

let db = mongoose.connection;
export default db;