import express from "express";
import {getPosts, postCreate} from "../controllers/postController";

const router = express.Router();

router.route("/").get(getPosts);

router.route("/").post(postCreate);

export default router;