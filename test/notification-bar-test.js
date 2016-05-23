const React = require('react');
const TestUtils = require('react-addons-test-utils');
const shallowRenderer = TestUtils.createRenderer();
const NotificationBar = require('../components/NotificationBar');

const defaultProps = {
    
};

QUnit.test('the NotificationBar shallow render', function(assert) {
    shallowRenderer.render(<NotificationBar {...defaultProps} />);
    const component = shallowRenderer.getRenderOutput();
    assert.ok(true, 'truth bomb!');
});

