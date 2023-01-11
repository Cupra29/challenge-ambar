import { Application } from "express";
import AuthRoutes from "./auth.routes";
import HomeRoutes from "./home.routes";
import { isLoggedIn } from "../middlewares";

export default function routes(app: Application): void {
  // Public
  app.use("/auth", AuthRoutes);

  // Private : Token needed
  app.use("/home", isLoggedIn, HomeRoutes);
}
