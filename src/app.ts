import express, { Request, Response } from 'express';
import userRoutes from './routes/userRoutes';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Set up routes
app.use('/api/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Node.js API with TypeScript!');
});



export default app;
