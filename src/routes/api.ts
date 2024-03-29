import express, { Request, Response } from 'express';
import { createTask, deleteTask, getTask, listTasks } from './tasks.js';
import {
  createTaskType,
  deleteTaskType,
  getTaskType,
  listTaskTypes,
  updateTaskType,
} from './task-types.js';

export const router = express.Router();

export async function index(req: Request, res: Response) {
  return res.json([
    {
      href: '/verkefni',
      methods: ['GET', 'POST'],
    },
    {
      href: '/verkefni/:slug',
      methods: ['GET', 'PATCH', 'DELETE'],
    },
    /*
    {
      href: '/verkefni_klarud',
      methods: ['GET', 'POST'],
    },
    {
      href: '/verkefni_klarud/:slug',
      methods: ['GET', 'PATCH', 'DELETE'],
    },
    */
    {
      href: '/flokkar',
      methods: ['GET', 'POST'],
    },
    {
      href: '/flokkar/:slug',
      methods: ['GET', 'PATCH', 'DELETE'],
    },
  ]);
}

router.get('/', index);

router.get('/verkefni', listTasks);
router.post('/verkefni', createTask);
router.get('/verkefni/:id', getTask);
router.patch('/verkefni/:id', updateTaskType);
router.delete('/verkefni/:id', deleteTask);

router.get('/flokkar', listTaskTypes);
router.post('/flokkar', createTaskType);
router.get('/flokkar/:slug', getTaskType);
router.patch('/flokkar/:slug', updateTaskType);
router.delete('/flokkar/:slug', deleteTaskType);

/*
router.get('/verkefni_klarud', listTaskTypes);
router.post('/verkefni_klarud', createTaskType);
router.get('/verkefni_klarud/:id', getTaskType);
router.patch('/verkefni_klarud/:id', updateTaskType);
router.delete('/verkefni_klarud/:id', deleteTaskType);
*/