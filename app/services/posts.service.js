const { posts } = require('../mock')

exports.getAllPosts = () => {
    return posts;
}

exports.getPostById = (id) => {
    return posts.find(p => p.id == id);
}

exports.getPostByUserId = (userId) => {
    return posts.filter(p => p.userId == userId);
}