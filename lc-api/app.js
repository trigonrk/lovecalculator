import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import router from './routes/index.js';

const PORT = 3000;

// Set up the express app
const app = express();
app.options('*', cors()) 
// app.use(cors({
//     maxAge: 1000,
//     credentials: false,
//     methods: 'GET, HEAD, OPTIONS, PUT, POST, DELETE',
//     headers: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
// }));
// app.options('*', cors());
app.use(cors())
// app.use(cors());
// app.use(cors({origin: 'http://localhost:8000'}));
// Parse incoming requests data
app.use( bodyParser.json() ); // support json encoded bodies
app.use( bodyParser.urlencoded({ extended: true }) ); // support encoded bodies

app.listen( PORT, err => {
    if (err) {
        console.log(err);
        throw err;
    } else {
        // console.log( `Server running on port: ${PORT} --- Running on ${process.env.NODE_ENV} --- Make something great.!`)
        console.log( 'Logging initialization' );
        console.log( chalk.blue( `Server running on port: ${PORT}`) );
        console.log( chalk.yellow( `Running on ${process.env.NODE_ENV}`) );
    }
});

app.use( router );