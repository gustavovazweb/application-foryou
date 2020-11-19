//ROUTES FILE
//EXPRESS IMPORTING
import express from 'express';

//CLASSES IMPORTING
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

//CONST ROUTES
const routes = express.Router();

//NEW
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

//BACKEND ROUTES
routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

//ROUTES EXPORTING
export default routes;