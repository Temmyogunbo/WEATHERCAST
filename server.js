import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import logger from 'morgan';
import chalk from 'chalk';

const port = process.env.PORT || 8000;
const app = express();

dotenv.config();
app.use(logger('dev'));
app.use(express.static(`${__dirname}/dist`));
app.use('*', (request, response) => {
    response.sendFile(path.join(
        __dirname,
        '/dist/index.html',
    ));
});

app.listen(port, error => 
    error ? logger(error) : console.log(chalk.blue(`App running on port ${port}`))
);