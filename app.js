import express from 'express';

import { PORT } from './config/env.js'; 

import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'
import subscriptionRouter from './routes/subscriptions.routes.js'
import connectToDatabase from './database/mongodb.js';

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/users', userRouter);
app.use('/subscriptions', subscriptionRouter);

app.get('/', (req, res) => {
    res.send({body: 'Welcome to the subscription tracker API!'});
})

app.listen(PORT, async () => {
    console.log(`Subscription tracker API is running on http://localhost:${PORT}`);
    await connectToDatabase();
});

export default app;