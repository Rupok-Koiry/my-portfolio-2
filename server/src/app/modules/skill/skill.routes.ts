import express from 'express';
import auth from '../../middlewares/auth';
import {
  createSkill,
  deleteSkill,
  getAllSkills,
  getSkill,
  updateSkill,
} from './skill.controller';

const router = express.Router();

router
  .route('/')
  .get(auth('admin'), getAllSkills)
  .post(auth('admin'), createSkill);

router
  .route('/:id')
  .get(auth('admin'), getSkill)
  .patch(auth('admin'), updateSkill)
  .delete(auth('admin'), deleteSkill);

export const SkillRoutes = router;