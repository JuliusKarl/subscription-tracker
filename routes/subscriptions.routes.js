import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/subscriptions', (req, res) => res.send({body: {title: 'GET all subscriptions'}}));

subscriptionRouter.get('/:id', (req, res) => res.send({body: {title: 'GET subscription details'}}));

subscriptionRouter.post('/', (req, res) => res.send({body: {title: 'CREATE all subscriptions'}}));

subscriptionRouter.put('/:id', (req, res) => res.send({body: {title: 'UPDATE subscription'}}));

subscriptionRouter.delete('/:id', (req, res) => res.send({body: {title: 'DELETE subscription'}}));

subscriptionRouter.delete('/user/:id', (req, res) => res.send({body: {title: 'GET all user subscriptions'}}));

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({body: {title: 'CANCEL subscription'}}));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({body: {title: 'GET upcoming renewals'}}));

export default subscriptionRouter