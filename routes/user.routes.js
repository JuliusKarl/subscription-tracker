import { Router } from 'express';

const userRouter = Router();

userRouter.get('/users', (req, res) => res.send({body: {title: 'GET all users'}}));

userRouter.get('/:id', (req, res) => res.send({body: {title: 'GET user details'}}));

userRouter.post('/', (req, res) => res.send({body: {title: 'CREATE all users'}}));

userRouter.put('/:id', (req, res) => res.send({body: {title: 'UPDATE user by id'}}));

userRouter.delete('/:id', (req, res) => res.send({body: {title: 'DELETEE user by id'}}));

export default userRouter