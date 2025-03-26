import { Request, Response } from 'express';

// Sample data (in a real app, this might come from a database)
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

export const getUsers = (req: Request, res: Response) => {
  res.status(200).json(users);
};

export const createUser = (req: Request, res: Response) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
};
