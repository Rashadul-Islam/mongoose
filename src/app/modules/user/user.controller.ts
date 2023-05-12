import { Request, Response } from "express";
import { allUser, createUserServie, findOne } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  const user = await createUserServie(req.body);

  res.status(201).json({
    status: "success",
    data: user,
  });
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await allUser();

  res.status(200).json({
    status: "success",
    data: users,
  });
};

export const singleUser = async (req: Request, res: Response) => {
  const user = await findOne(req.params.id);

  res.status(200).json({
    status: "success",
    data: user,
  });
};
