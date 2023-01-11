import express from "express";
import { HomeController } from "../controllers";

export default express.Router().get("/", HomeController.hello);
