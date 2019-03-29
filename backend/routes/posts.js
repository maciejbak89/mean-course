const express = require('express');

const PostsController = require('../controllers/posts');

const checkAuth = require('../middleware/check-auth');
const extractImage = require('../middleware/image');

const router = express.Router();

router.post('', checkAuth, extractImage, PostsController.createPost);

router.put('/:id', checkAuth, extractImage, PostsController.updatePost);

router.get('', PostsController.getPosts);

router.get('/:id', PostsController.getPost);

router.delete('/:id', checkAuth, PostsController.deletePost);

module.exports = router;