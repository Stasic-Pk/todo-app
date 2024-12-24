import express from "express";

import authentication from "./authentication.js";
import users from "./users.js";
import todoList from "./todoList.js";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  todoList(router);

  return router;
};
