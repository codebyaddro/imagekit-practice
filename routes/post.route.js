const express = require("express");
const router = express.Router();
const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require("../controllers/post.controller");
const upload = require("../middlewares/upload.middleware");

router.post("/posts", upload.single("image"), createPost);
router.get("/posts", getAllPosts);
router.get("/posts/:id", getPostById);
router.patch("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);

module.exports = router;