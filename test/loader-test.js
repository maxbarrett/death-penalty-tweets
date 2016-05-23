const React = require('react');
const TestUtils = require('react-addons-test-utils');
//import { findWithType, findWithClass } from 'react-shallow-testutils';
const shallowRenderer = TestUtils.createRenderer();
const Loader = require('../components/Loader');

QUnit.test('the Loader when paging', function(assert) {
    shallowRenderer.render(<Loader paging />);
    const component = shallowRenderer.getRenderOutput();

    assert.ok(component.type === 'div', 'expected component type to be div');
    assert.ok(component.props.className === 'loader active', 'expected class to be \'loader active\'');
    
});

QUnit.test('the Loader when not paging', function(assert) {
    shallowRenderer.render(<Loader />);
    const component = shallowRenderer.getRenderOutput();

    assert.ok(component.props.className === 'loader ', 'expected class to be \'loader\'');
});

QUnit.test('the Loader children', function(assert) {
    shallowRenderer.render(<Loader />);
    const component = shallowRenderer.getRenderOutput();

    assert.ok(component.props.children.type === 'img', 'expected child type to be \'img\'');
});
