'use strict';

const express = require('express');
const TemplateEngine = require('main/lib/template-engine');
const TestComponent = require('main/components/test-component');
const app = express();

// set express view engine

app.engine('js', TemplateEngine);
app.set('views', 'main/components');
app.set('view engine', 'js');

// default route

app.get('/', (request, response) => {
              
    response.status(200).render('test-component', {name: 'Nigel'});
    
});

// start server!

app.listen(8080, () => console.log('App is running on port 8080'));