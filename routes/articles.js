const express = require('express')
const Article = require('./../models/article')
const router = express.Router()


router.get('/new', (req, res) => {
    res.render('articles/new', {article: new Article()}) 
})

router.get('/edit:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.render('articles/edit', {article: article})        
})

router.get('/:id', async (req, res) => { 
    const article =  await Article.findById(req.params.id)   
    if (article == null) res.redirect('/')
    res.render('articles/show', {article: article})          
})

router.post('/', async (req, res) => {
    let article  = new Article ({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown, 
        author: req.body.author
    })

   try { article = await article.save() 
   res.redirect(`/articles/${article.id}`)}    

   catch (e) {
       res.render('articles/new', {article: article})
   }
})

router.put('/id:', (req, res) => {
    
})

router.delete('/:id', async (req, res) => {
await Article.findByIdAndDelete(req.params.id) 
res.redirect('/')  
})

module.exports = router   