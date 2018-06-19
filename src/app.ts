import * as express from 'express';
import * as morgan from 'morgan'
import apiRouter from './routes/api';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

export const app: express.Application = express();

app.use(require('body-parser').json());
app.use(morgan('dev'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use('/api', apiRouter);
