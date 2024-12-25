"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const experience_controller_1 = require("./experience.controller");
const router = express_1.default.Router();
router
    .route('/')
    .get((0, auth_1.default)('admin'), experience_controller_1.getAllExperiences)
    .post((0, auth_1.default)('admin'), experience_controller_1.createExperience);
router
    .route('/:id')
    .get((0, auth_1.default)('admin'), experience_controller_1.getExperience)
    .patch((0, auth_1.default)('admin'), experience_controller_1.updateExperience)
    .delete((0, auth_1.default)('admin'), experience_controller_1.deleteExperience);
exports.ExperienceRoutes = router;
