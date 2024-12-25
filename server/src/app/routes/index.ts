import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BlogRoutes } from '../modules/blog/blog.routes';
import { SkillRoutes } from '../modules/skill/skill.routes';
import { ExperienceRoutes } from '../modules/experience/experience.route';
import { ProjectRoutes } from '../modules/project/project.routes';
import { UserRoutes } from '../modules/user/user.route';

const router = Router();

// Define the routes for each module
const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/skills',
    route: SkillRoutes,
  },
  {
    path: '/experiences',
    route: ExperienceRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
];

// Register each module route with the router
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
