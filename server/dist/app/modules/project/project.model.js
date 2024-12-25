"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    img: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    mainTech: {
        type: String,
        required: true,
    },
    techStack: {
        type: [String],
        required: true,
    },
    liveLink: {
        type: String,
        required: true,
    },
    highlights: {
        type: [String],
        required: true,
    },
    tag: {
        type: String,
        required: true,
    },
});
const Project = (0, mongoose_1.model)('Project', projectSchema);
exports.default = Project;
