// import node modules
import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

// import routers
import indexRouter from '../routes/index.router';
import weatherRouter from "../routes/weather.router";

// class
class WeatherApp {

    app: Application;

    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    // settings
    settings() {
        this.app.set('port', process.env.PORT || 3000);
    }
    // middlewares
    middlewares() {
        if(process.env.NODE_ENV !== 'prod') {
            this.app.use(morgan('dev'));
        }
        this.app.use(cors());
    }
    // routes
    routes(){
        this.app.use(indexRouter);
        this.app.use('/weather', weatherRouter);
    }
    // start
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`);
        })
    }
}

export default WeatherApp;