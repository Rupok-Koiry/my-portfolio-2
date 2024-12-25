import express from 'express';
import auth from '../../middlewares/auth';
import {
  getAllExperiences,
  createExperience,
  getExperience,
  updateExperience,
  deleteExperience,
} from './experience.controller';

const router = express.Router();

router
  .route('/')
  .get(auth('admin'), getAllExperiences)
  .post(auth('admin'), createExperience);

router
  .route('/:id')
  .get(auth('admin'), getExperience)
  .patch(auth('admin'), updateExperience)
  .delete(auth('admin'), deleteExperience);

export const ExperienceRoutes = router;
