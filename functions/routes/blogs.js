const express = require('express'),
  router = express.Router(),
  Blog = require('../models/Blog');

// INDEX - Show all blogs
router.get('/', (req, res) => {
  res.render('landing');
});
router.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    err ? console.log('err') : res.render('index', { blogs: blogs });
  });
});

// NEW - Show new blog form
router.get('/blogs/new', (req, res) => {
  res.render('new');
});

// CREATE - Create new form and redirect
router.post('/blogs', (req, res) => {
  Blog.create(req.body.blog, (err, newBlog) => {
    err ? res.render('new') : res.redirect('/blogs');
  });
});

// SHOW - Show info about specific blog
router.get('/blogs/:id', (req, res) => {
  Blog.findById(req.params.id, (err, foundBlog) => {
    err ? res.redirect('/blogs') : res.render('show', { blog: foundBlog });
  });
});

// EDIT - Show edit form from specific blog
router.get('/blogs/:id/edit', (req, res) => {
  Blog.findById(req.params.id, (err, foundBlog) => {
    err ? res.redirect('/blogs') : res.render('edit', { blog: foundBlog });
  });
});

// UPDATE - Update specific blog and redirect
router.put('/blogs/:id', (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
    err ? res.redirect('/blogs') : res.redirect(`/blogs/${req.params.id}`);
  });
});

// DESTROY - Delete specific blog then redirect
router.delete('/blogs/:id', (req, res) => {
  Blog.findByIdAndRemove(req.params.id, err => {
    err ? res.redirect('/blogs') : res.redirect('/blogs');
  });
});

module.exports = router;
