import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Loader from '../components/Loader';

const shallowRenderer = TestUtils.createRenderer();

QUnit.module('Loader');

QUnit.test('the Loader is a div', assert => {
    const component = shallowRenderer.render(<Loader />);

    assert.ok(component.type === 'div', 'expected component type to be div');
});

QUnit.test('the Loader has correct class names', assert => {
    const component = shallowRenderer.render(<Loader paging />);

    assert.ok(component.props.className === 'loader active', 'expected class to be \'loader active\''); 
});

QUnit.test('the Loader class when not paging', assert => {
    const component = shallowRenderer.render(<Loader />);

    assert.ok(component.props.className === 'loader ', 'expected class to be \'loader\'');
});

QUnit.test('the Loader\'s has a child image', assert => {
    const component = shallowRenderer.render(<Loader />);

    assert.ok(component.props.children.type === 'img', 'expected child type to be \'img\'');
});
