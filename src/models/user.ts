import { Schema, model, Document } from 'mongoose';

export interface User extends Document {
  username: string;
  email: string;
  password: string;
}

const schema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const Users = model<User>('user', schema);

export default Users;
