import * as factory from '../../utils/handlerFactory';
import Experience from './experience.model';

export const createExperience = factory.createOne(Experience);
export const getExperience = factory.getOne(Experience);
export const getAllExperiences = factory.getAll(Experience);
export const updateExperience = factory.updateOne(Experience);
export const deleteExperience = factory.deleteOne(Experience);
