// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import employeeRoutes from './routes/employeeRoutes.mjs';
import { connectDB } from './db.mjs';
import reportRouter from './routes/reportRoutes.mjs';
import authRouter from './routes/authRoutes.mjs';



const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
	cors({
		origin: ['http://localhost:5174',
			 'http://localhost:5173',
			'https://employee-management-system-main-sigma.vercel.app/',
			
			],
		// methods: ['GET', 'PUT', 'POST', 'DELETE'],
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization'],
	}),
);

connectDB();

app.use('/api/employees', employeeRoutes);
app.use('/api/reports', reportRouter);
app.use('/api/auth', authRouter);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
