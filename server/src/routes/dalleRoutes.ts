import express from "express";
import {createImage} from "../controllers/dalleController";

const router = express.Router();
router.route('/').get((req: express.Request, res: express.Response) => {res.send('Hello from DALL-E')})

router.route('/').post(createImage)

export default router;