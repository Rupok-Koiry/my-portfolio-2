"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const project_controller_1 = require("./project.controller");
const router = express_1.default.Router();
router.route('/').get(project_controller_1.getAllProjects).post((0, auth_1.default)('admin'), project_controller_1.createProject);
router
    .route('/:id')
    .get(project_controller_1.getProject)
    .patch((0, auth_1.default)('admin'), project_controller_1.updateProject)
    .delete((0, auth_1.default)('admin'), project_controller_1.deleteProject);
exports.ProjectRoutes = router;
