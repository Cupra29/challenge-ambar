import { Request } from "express";
import jwt from "jsonwebtoken";
import { User } from "../../models";
import { Account } from "../../types/user.types";
import { checkPassword } from "../../helpers/passwords";

export const signin = async (
  email: string,
  password: string,
  req: Request
): Promise<Account> => {
  const userRecord = await User.findOne({
    email: email.toLowerCase(),
  });

  if (!userRecord) {
    throw new Error("That user does not exists.");
  }

  const isValidPassword = await checkPassword(password, userRecord.password);
  if (!isValidPassword) throw new Error("Email or password are wrong.");

  const token = jwt.sign(
    {
      email: userRecord.email,
      id: userRecord.id,
      fullname: userRecord.fullname 
    },
    process.env.TOKEN_SECRET || 'secret'
  );

  // @ts-ignore
  return {
    ...userRecord.toJSON(),
    accessToken: token,
  };
};
