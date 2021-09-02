import { shallowMount } from '@vue/test-utils'
import { CAlert as Component } from './../../'

const ComponentName = 'CAlert'
const wrapper = shallowMount(Component)
const customWrapper = shallowMount(Component, {
  props: {
    color: 'success',
  },
  attrs: {
    class: 'bazinga',
  },
  slots: {
    default: 'Hello World!',
  },
})

describe(`Loads and display ${ComponentName} component`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly with slot', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('has a prope class names', () => {
    expect(customWrapper.find('div').classes('alert')).toBe(true)
    expect(customWrapper.find('div').classes('alert-success')).toBe(true)
  })
  it('default slot contains text', () => {
    expect(customWrapper.text()).toBe('Hello World!')
  })
})
