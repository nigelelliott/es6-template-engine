'use strict';

const Base = require('main/lib/template-base');
const TestChildComponent = require('main/components/test-child-component');

class TestComponent extends Base.Component {
    
    constructor(props) {
        
        super(props);
        
    }
    
    getDate() {
        
        return new Date();
        
    }
    
    render() {
        
        return `
            <p>Hello ${this.props.name}!</p>
            <p>Below we are including a child component...</p>
            <p>${Base.render(TestChildComponent, {now: this.getDate()})}</p>
        `;
        
    }
    
}

TestComponent.propTypes = {
    name: Base.PropTypes.regex('[a-z]')
}

module.exports = TestComponent;