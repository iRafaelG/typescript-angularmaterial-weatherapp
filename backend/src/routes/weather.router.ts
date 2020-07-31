// import node module
import { Router, Request, Response } from "express";
import fetch, { Response as FetchResponse } from "node-fetch";

// import models
import IWeather from '../models/Weather';

// import keys
import { config } from '../configs';

// router class
class WeatherRouter {

    public router: Router;

    private OWAPIURI: string = '';
    private OWAPIKEY: string | undefined = '';

    constructor() {
        this.router = Router();
        this.getWeather();
        this.OWAPIKEY = config.key.OWAPIKEY;
        this.OWAPIURI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.OWAPIKEY}&units=metric&q=`;
    }

    getWeather(): void {
        this.router.get('/', async (req: Request, res: Response<IWeather>): Promise<Response<IWeather>> => {

            let { city, country } = req.query;

            let response: Promise<Response<IWeather>> = new Promise<Response<IWeather>>( async (resolve, reject) => {
                try {
                    let response: FetchResponse = await fetch(`${this.OWAPIURI}${city},${country}`);
                    let data: IWeather = await response.json();
                    resolve(res.json(data));
                } catch (error) {
                    reject(res.json(error.message));
                }
            })

            return response;

            /*             let response = await fetch(`${this.OWAPIURI}${city},${country}`);
            let data = await response.json();
            res.json(data);

            return new Promise( async (resolve, reject) => {
                try {
                    let response: FetchResponse = await fetch(`${this.OWAPIURI}${city},${country}`);
                    let data: IWeather = await response.json();
                    resolve(res.json(data));
                } catch (error) {
                    reject(res.json(error.message));
                }
            }) */
        });

    }
}

const weatherRouter = new WeatherRouter();

export default weatherRouter.router;