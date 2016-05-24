import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Loader from '../components/Loader';

const shallowRenderer = TestUtils.createRenderer();

QUnit.test('the Loader is a div with correct class names', assert => {
    shallowRenderer.render(<Loader paging />);
    const component = shallowRenderer.getRenderOutput();

    assert.ok(component.type === 'div', 'expected component type to be div');
    assert.ok(component.props.className === 'loader active', 'expected class to be \'loader active\''); 
});

QUnit.test('the Loader classes when not paging', assert => {
    shallowRenderer.render(<Loader />);
    const component = shallowRenderer.getRenderOutput();

    assert.ok(component.props.className === 'loader ', 'expected class to be \'loader\'');
});

QUnit.test('the Loader\'s has a child image', assert => {
    shallowRenderer.render(<Loader />);
    const component = shallowRenderer.getRenderOutput();

    assert.ok(component.props.children.type === 'img', 'expected child type to be \'img\'');
});
