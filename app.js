import express, { urlencoded } from 'express';

import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'
import subscriptionRouter from './routes/subscriptions.routes.js'
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './models/middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';

const app = express();

// Middlewares
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser())

// Routes
app.get('/', (req, res) => {
    res.send({ body: 'Welcome to the subscription tracker API!' });
})
app.use('/api/v1/auth', authRouter);
app.use('/users', userRouter);
app.use('/subscriptions', subscriptionRouter);

app.use(errorMiddleware);

app.listen(PORT, async () => {
    console.log(`Subscription tracker API is running on http://localhost:${PORT}`);
    await connectToDatabase();
});

export default app;