const Post = require("../models/post.model");
const uploadFile = require("../services/storage.service");

// ======================================
// POST ->  CREATE NEW POST
// ======================================
// NEW POST CREATE CONTROLLER
const createPost = async (req, res) => {
    try {

        const { caption } = req.body;

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image is required"
            });
        }

        const result = await uploadFile(
            req.file.buffer,
            req.file.originalname
        );

        const newPost = new Post({
            image: result.url,
            caption
        });
        
        await newPost.save();

        res.status(201).json({
            success: true,
            message: "Post created successfully",
            post: newPost
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Post creation falied",
            error: error.message
        })
    }
};

// ======================================
// GET ->  RETRIEVE ALL POST
// ======================================
// ALL POSTS GET CONTROLLER
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        if(posts.length === 0) {
            res.status(404).json({
                success: false,
                message: "No posts found",
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Post retrieve successfully",
                posts: posts
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to get any posts",
            error: error
        })
    }
};

// ======================================
// GET ->  RETRIEVE POST BY ID
// ======================================
// SINGLE POST GET CONTROLLER
const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id)
        if(!post) {
            res.status(404).json({
                success: false,
                message: "Post not found",
            })
        } else {
            res.status(200).json({
                success: true,
                post: post
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to get any posts",
            error: error
        })
    }
};

// ======================================
// PATCH ->  UPDATE POST BY ID
// ======================================
// POST PARTIAL FIELD UPDATE CONTROLLER
const updatePost = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            req.body,
            {
                returnDocument: "after",
                runValidators: true
            }
        )

        if (!updatedPost) {
            return res.status(404).json({
                success: false,
                message: 'Post Not Found'
            });
        }

        res.status(200).json({
            success: true,
            message: "Post updated successfully",
            user: updatedPost
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to get any posts",
            error: error
        })
    }
};

// ======================================
// PATCH ->  UPDATE POST BY ID
// ======================================
// POST PARTIAL FIELD UPDATE CONTROLLER
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedPost = await Post.findByIdAndDelete(id)

        if (!deletedPost) {
            return res.status(404).json({
                success: false,
                message: 'Post Not Found'
            });
        }

        res.status(200).json({
            success: true,
            message: "Post deleted successfully",
            user: deletedPost
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to get any posts",
            error: error
        })
    }
};

module.exports = { createPost, getAllPosts, getPostById, updatePost, deletePost };