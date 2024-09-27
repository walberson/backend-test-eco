import { Router } from "express";
import { AuthenticationController } from "./modules/authentication/AuthenticationController.js";

const authenticationController = new AuthenticationController();

const routes = Router();

routes.post("/", authenticationController.handle);
routes.get("/", (req, res) => {
  res.send("Hello World");
});
export { routes };
