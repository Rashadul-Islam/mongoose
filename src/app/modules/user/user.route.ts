import express from "express";
import { createUser, getUsers, singleUser } from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.post("/create-user", createUser);
router.get("/:id", singleUser);

export default router;
