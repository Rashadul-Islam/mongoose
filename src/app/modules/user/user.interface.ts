import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: string;
  role: "student";
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

export interface IUserMethods {
  fullName(): string;
}

//for custom static method
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdmins(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
