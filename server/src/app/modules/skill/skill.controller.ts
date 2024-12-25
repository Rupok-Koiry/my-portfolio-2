import * as factory from '../../utils/handlerFactory';
import Skill from './skill.model';

export const createSkill = factory.createOne(Skill);
export const getSkill = factory.getOne(Skill);
export const getAllSkills = factory.getAll(Skill);
export const updateSkill = factory.updateOne(Skill);
export const deleteSkill = factory.deleteOne(Skill);
