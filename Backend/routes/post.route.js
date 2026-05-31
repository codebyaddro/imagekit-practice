const express = require("express");
const router = express.Router();
const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require("../controllers/post.controller");
const upload = require("../middlewares/upload.middleware");

router.post("/", upload.single("image"), createPost);
router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;