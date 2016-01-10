# es6-template-engine
A simple ES6 based Express template engine

## Usage

1. Register the template engine with your express app:
    
        const express = require('express');
        const app = express();
    
        app.engine('js', TemplateEngine);
        app.set('views', 'main/components'); // location of your components
        app.set('view engine', 'js');
    
2. Render the view, passing in the path to the component and props which will available to the component class:

        app.get('/', (request, response) => {
              
            response.status(200).render('my-component', {foo: 'bar'});
        
        });

## Components

### Basic component class

        const Base = require('main/lib/template-base');

        class MyComponent extends Base.Component {
            
            constructor(props) {
                
                super(props);
                
            }
            
            render() {
                
                return `The prop foo is: ${this.props.foo}`;
                
            }
            
        }
        
### Validating props

        MyComponent.propTypes = {
            someStringProp: Base.PropTypes.string,
            someNumberProp: Base.PropTypes.number,
            someBooleanProp: Base.PropTypes.boolean,
            someSpecialPattern: Base.PropTypes.regex('[A-Z][a-z]')
        }