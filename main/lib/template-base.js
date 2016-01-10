'use strict';

// define base component class - all components will inherit from this

class Component {
    
    constructor(props) {
        
        // set component 'props'
        
        this.props = props;
        
        // validate props
                
        if(this.constructor.propTypes) {
            
            for(let prop in this.constructor.propTypes) {
                
                if(typeof this.props[prop] !== 'undefined') {
                    
                    // check for regular expression type
                    
                    if(this.constructor.propTypes[prop].constructor.name === 'RegExp') {
                        
                        if(!this.constructor.propTypes[prop].test(this.props[prop])) {
                            
                            throw new Error('invalid props: "' + prop + '" does not match the given regular expression pattern');
                            
                        }
                        
                    // all other types
                    
                    } else if(typeof this.props[prop] !== this.constructor.propTypes[prop]) {
                    
                        throw new Error('invalid props: "' + prop + '" must be a ' + this.constructor.propTypes[prop] + ' but is instead a ' + (typeof this.props[prop]));
                        
                    }
                    
                }
                
            }
            
        }
        
    }
    
    render() {
        
        // default render method
        
        return 'You must override the render method of the base component';
        
    }
    
}

// define valid prop types - thse are just standard js types but we could 
// extend this to add patterns / regex's for more complex validation

const PropTypes = {
    string: 'string',
    boolean: 'boolean',
    object: 'object',
    number: 'number',
    regex: (regex) => new RegExp(regex)
}

// utility method to instantiate and render a component

const render = (Component, props) => {
    
    if(typeof Component !== 'function') {
        
        throw new Error('First argument of render method must be a component class');
        
    }
    
    let componentInstance = new Component(props);
    
    if(typeof componentInstance.render === 'undefined') {
        
        throw new Error('Component "' + componentInstance.constructor.name + '" must contain a render method');
        
    }
    
    let output = componentInstance.render();
    
    if(typeof output !== 'string') {
        
        throw new Error('"render" method of "' + componentInstance.constructor.name + '" component must return a string');
        
    }
        
    return componentInstance.render();
    
}

// exports

module.exports.Component = Component;
module.exports.PropTypes = PropTypes;
module.exports.render = render;