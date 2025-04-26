import express from 'express';
import { getEmployeeDemographics, getSalaryDistribution, getSkillsInventory } from '../controllers/reportController.mjs';


const reportRouter = express.Router();

reportRouter.get('/salary-distribution', getSalaryDistribution);
reportRouter.get('/skills-inventory', getSkillsInventory);
reportRouter.get('/employee-demographics', getEmployeeDemographics);

export default reportRouter;
