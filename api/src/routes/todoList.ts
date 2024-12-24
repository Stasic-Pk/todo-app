import express from "express";

import { isAuthenticated, isOwner } from "../middlewares/index.js";
import { addTodotoist, removeTodoFromList } from "../controllers/todoList.js";

export default (router: express.Router) => {
  router.patch("/removeTodo/:id", isAuthenticated, isOwner, removeTodoFromList);
  router.patch("/addTodo/:id", isAuthenticated, isOwner, addTodotoist);
};
