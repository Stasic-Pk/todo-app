import express from "express";

import { deleteUser, getAllUsers, getUserByToken, logOutUser, updateUser } from "../controllers/users.js";
import { isAuthenticated, isOwner } from "../middlewares/index.js";

export default (router: express.Router) => {
  router.get("/users", isAuthenticated, getAllUsers);
  router.get("/getUserByToken", getUserByToken);

  router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
  router.patch("/users/:id", isAuthenticated, isOwner, updateUser);
  router.patch("/logOut/:id", isAuthenticated, isOwner, logOutUser)
};
