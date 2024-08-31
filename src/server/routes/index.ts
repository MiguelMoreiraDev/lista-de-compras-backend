import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Hello World!");
});

router.get("/ping", (_, res) => {
  return res.status(StatusCodes.BAD_REQUEST).send("pong");
});

export { router };
