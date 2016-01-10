'use strict';

const Base = require('main/lib/template-base');

class TestChildComponent extends Base.Component {
    
    constructor(props) {
        
        super(props);
        
    }
    
    render() {
        
        return `The date is ${this.props.now}`;
        
    }
    
}

module.exports = TestChildComponent;