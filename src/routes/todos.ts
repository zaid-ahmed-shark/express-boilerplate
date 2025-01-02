import { Router } from 'express';
import { findOne, findAll, create, update, remove } from '@controllers/todos';

const router = Router();

router.get('/todos', findAll);

router.get('/todos/:id', findOne);

router.post('/todos', create);

router.put('/todos/:id', update);

router.delete('/todos/:id', remove);

export default router;
