"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const blog_controller_1 = require("./blog.controller");
const router = express_1.default.Router();
router
    .route('/')
    .get((0, auth_1.default)('admin'), blog_controller_1.getAllBlogs)
    .post((0, auth_1.default)('admin'), blog_controller_1.createBlog);
router
    .route('/:id')
    .get((0, auth_1.default)('admin'), blog_controller_1.getBlog)
    .patch((0, auth_1.default)('admin'), blog_controller_1.updateBlog)
    .delete((0, auth_1.default)('admin'), blog_controller_1.deleteBlog);
exports.BlogRoutes = router;
