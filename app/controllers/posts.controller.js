const { postService } = require("../services");

exports.getAllPosts = (req, res) => {
    try {
        const posts = postService.getAllPosts();
        res.status(200).send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getPost = (req, res) => {
    const { id } = req.params;
    try {
        const post = postService.getPostById(id);
        res.status(200).send(post);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getPostByUserId = (req, res) => {
    const { userId } = req.params;
    try {
        const posts = postService.getPostByUserId(userId);
        res.status(200).send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
}