'use strict'
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

const regRouter = require('./routers/reg');

const app = express();

app.set('views', path.join(__dirname, 'app/views'));

nunjucks.configure('app/views', {
    express: app,
    autoescape: true,
    tags: {
        blockStart: `<%`,
        blockEnd: `%>`,
        variableStart: `<$`,
        variableEnd: `$>`,
        commentStart: `<#`,
        commentEnd: `#>`
      }
});

app.set('view engine', 'html');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.redirect('/reg');
})

app.use('/reg', regRouter); 

app.listen(3000, () => {
    console.log('Server is started...')
});