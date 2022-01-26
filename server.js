const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express() 

mongoose.connect('mongodb://localhost/blog') 

// set view engine to ejs so that html can be printed to the screen
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false })) 

app.use(methodOverride('_method'))

// These are the articles that are displayed on the landing page by default 

app.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc'})
    
    res.render('articles/index', {articles: articles})
})

app.use('/articles', articleRouter)

app.listen(5000)