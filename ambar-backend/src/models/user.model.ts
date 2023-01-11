import mongoose from 'mongoose';
import { omit } from 'ramda';

export interface UserModel extends mongoose.Document {
  // ACCOUNT DATA
  email: string;
  password: string;
  fullname: string;
  accessToken: string
}

const userSchema = new mongoose.Schema(
  {
    // ACCOUNT DATA
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 200,
    },
    password: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
      maxlength: 120,
    },
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      transform: (_doc, ret) => {
        return omit(
          [
            'password',
          ],
          ret,
        );
      },
      virtuals: true,
    },
  },
);

export const User = mongoose.model<UserModel>('User', userSchema);
