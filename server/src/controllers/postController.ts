import Post from "../mongodb/models/post";
import {v2 as cloudinary} from "cloudinary";
import process from "process"
import * as dotenv from "dotenv";
import express from "express";

dotenv.config();

cloudinary.config({
    cloud_name: 'dkfoqgoso',
    api_key: '781369384578856',
    api_secret: 'hhKD9M5cDns5BOocciy-0acNg_A'
});

export const getPosts = async (req: express.Request, res: express.Response) => {
    try {
        const posts = await Post.find({});

        res.status(200).json({ success: true, data: posts})
    } catch (error) {
        res.status(500).json({ success: false, message: error})
    }
}

export const postCreate = async (req: express.Request, res: express.Response) => {
    try {
        const {name, prompt, photo} = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);

        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url
        })

        res.status(201).json({success: true, data: newPost});
    } catch (error) {
        res.status(500).json({success: false, message: error});
    }
}