import { Request } from 'express';
import jwt from "jsonwebtoken";
import { User, UserModel } from '../../models';
import { hashPassword } from '../../helpers/passwords';

export const signup = async (email: string, password: string, fullname: string, req: Request): Promise<UserModel> => {
  const newEmailAddress = email.toLowerCase();

  const newUserRecord = await new User({
    email: newEmailAddress,
    password: await hashPassword(password),
    fullname,
  }).save();

  const token = jwt.sign(
    {
      email: newUserRecord.email,
      id: newUserRecord.id,
      fullname: newUserRecord.fullname 
    },
    process.env.TOKEN_SECRET || 'secret'
  );

  // @ts-ignore
  return {
    ...newUserRecord.toJSON(),
    accessToken: token,
  };
};
