import express from 'express';
import auth from '../../middlewares/auth';
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProject,
  updateProject,
} from './project.controller';

const router = express.Router();

router
  .route('/')
  .get(auth('admin'), getAllProjects)
  .post(auth('admin'), createProject);

router
  .route('/:id')
  .get(auth('admin'), getProject)
  .patch(auth('admin'), updateProject)
  .delete(auth('admin'), deleteProject);

export const ProjectRoutes = router;
