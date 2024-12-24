import express from "express";

import { getUserById } from "../db/users.js";

export const removeTodoFromList = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  const { id } = req.params;
  const { todo } = req.body;

  const user = await getUserById(id);

  const todoIndex = user.todoList.findIndex((element) => {
    return element._id.toHexString() == todo._id;
  });

  if (todoIndex === -1) {
    return res.sendStatus(404);
  }

  user.todoList.splice(todoIndex, 1);
  await user.save();

  return res.status(200).json(user).end();
};

export const addTodotoist = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  const { id } = req.params;
  const { todo } = req.body;

  const user = await getUserById(id);

  user.todoList[user.todoList.length] = todo;
  await user.save();

  return res.status(200).json(user).end();
};
