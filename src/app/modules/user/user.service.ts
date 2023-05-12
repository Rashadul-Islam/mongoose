import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserServie = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);

  await user.save();
  // console.log(user.fullName()); //custom instance
  return user;
};

export const allUser = async (): Promise<IUser[]> => {
  const users = User.find();

  return users;
};

export const findOne = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne(
    { id: payload },
    { name: 1, email: 1, contactNo: 1 }
  );

  return user;
};
