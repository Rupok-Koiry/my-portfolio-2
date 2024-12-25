import * as factory from '../../utils/handlerFactory';
import Project from './project.model';

export const createProject = factory.createOne(Project);
export const getProject = factory.getOne(Project);
export const getAllProjects = factory.getAll(Project);
export const updateProject = factory.updateOne(Project);
export const deleteProject = factory.deleteOne(Project);
