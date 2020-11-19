//EXPRESS IMPORTING
import express from 'express';

//CORS MODULE IMPORTING
import cors from 'cors';

//ROUTES IMPORTING
import routes from './routes';

//APP CONSTANT
const app = express();

//USING MODULES
app.use(cors());
app.use(express.json());
app.use(routes);

//LISTEN PORT
app.listen(3333);