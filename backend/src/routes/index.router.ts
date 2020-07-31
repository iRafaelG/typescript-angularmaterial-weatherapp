// import node modules
import { Router, Request, Response } from "express";

// initializations

// router class
class IndexRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.getIndex();
    }

    getIndex(): void {
        this.router.get('/', (req: Request, res: Response): Response => {
            return res.send(`To request weather data, please, send your request to "/weather" endpoint.

            Example: https://the-foxes.herokuapp.com/weather?city=Madrid&country=ES
            `)
        })
    }
}

const indexRouter = new IndexRouter();

export default indexRouter.router;