import express from 'express';
import auth from '../../middlewares/auth';
import { getMe, updateMe } from './user.controller';

const router = express.Router();

router.get('/me', auth('user', 'admin'), getMe);
router.patch('/me', auth('user', 'admin'), updateMe);

export const UserRoutes = router;
