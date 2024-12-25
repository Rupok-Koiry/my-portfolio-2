"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const skill_controller_1 = require("./skill.controller");
const router = express_1.default.Router();
router.route('/').get(skill_controller_1.getAllSkills).post((0, auth_1.default)('admin'), skill_controller_1.createSkill);
router
    .route('/:id')
    .get(skill_controller_1.getSkill)
    .patch((0, auth_1.default)('admin'), skill_controller_1.updateSkill)
    .delete((0, auth_1.default)('admin'), skill_controller_1.deleteSkill);
exports.SkillRoutes = router;
