const React = require('react');
const TestUtils = require('react-addons-test-utils');
const ReactDOM = require('react-dom');
const Tweet = require('../components/Tweet.react');

QUnit.module('bitbucket-inbox', {
    beforeEach: function() {
        this.render = props => {
            this.component = TestUtils.renderIntoDocument(<Tweet {...props} />);
            this.el = ReactDOM.findDOMNode(this.component);
        };
    },
});

QUnit.test('it renders one Inbox component', function(assert) {
    this.render();
    const renderedComponent = TestUtils.scryRenderedComponentsWithType(this.component, Tweet);
    assert.equal(renderedComponent.length, 1, 'expected only 1 Tweet component');
    assert.ok(TestUtils.isCompositeComponent(this.component), 'expected component to be a Tweet component');
});
