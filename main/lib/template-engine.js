'use strict'

const Base = require('main/lib/template-base');

module.exports = (filePath, props, callback) => {
    
    let Component = require(filePath), 
        output = Base.render(Component, props);
    
    return callback(null, output);
    
}
