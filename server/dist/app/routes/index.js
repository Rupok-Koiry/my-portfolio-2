"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../modules/auth/auth.route");
const blog_routes_1 = require("../modules/blog/blog.routes");
const skill_routes_1 = require("../modules/skill/skill.routes");
const experience_route_1 = require("../modules/experience/experience.route");
const project_routes_1 = require("../modules/project/project.routes");
const user_route_1 = require("../modules/user/user.route");
const router = (0, express_1.Router)();
// Define the routes for each module
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/blogs',
        route: blog_routes_1.BlogRoutes,
    },
    {
        path: '/skills',
        route: skill_routes_1.SkillRoutes,
    },
    {
        path: '/experiences',
        route: experience_route_1.ExperienceRoutes,
    },
    {
        path: '/projects',
        route: project_routes_1.ProjectRoutes,
    },
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
];
// Register each module route with the router
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
