import express from "express";

import {
  deleteUserById,
  getUserById,
  getUserBySessionToken,
  getUsers,
} from "../db/users.js";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getUserByToken = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const token = req.cookies["SECRET"];

    if (!token) {
      return res.sendStatus(401);
    }

    const user = await getUserBySessionToken(token);

    if (!user) {
      return res.sendStatus(403);
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log("Error fetching user by token:", error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateUser = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    if (!username) {
      return res.sendStatus(400);
    }

    const user = await getUserById(id);

    user.username = username;
    await user.save();

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const logOutUser = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const { id } = req.params;

    const user = await getUserById(id);

    if (!user) {
      return res.sendStatus(404);
    }

    user.authentication.sessionToken = null;
    await user.save();

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
