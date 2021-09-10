
import * as mongoose from 'mongoose';

export const produtoschema = new mongoose.Schema({
  nome: String,
  preco: Number,
});