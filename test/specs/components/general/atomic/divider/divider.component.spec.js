import { shallowMount } from '@vue/test-utils'
import DividerComponent from '@/components/general/atomic/divider/divider.component'

describe('Testing icon component in general component ', () => {
  it('render divider component', () => {
    const props = {
    }

    const wrapper = shallowMount(DividerComponent, {
      propsData: props
    })

    expect(wrapper.contains('.ef-divider')).toBe(true)
  })
  it('render divider component with inset style', () => {
    const props = {
      inset: true
    }

    const wrapper = shallowMount(DividerComponent, {
      propsData: props
    })

    expect(wrapper.contains('.ef-divider--inset')).toBe(true)
  })
  it('render divider component with dark theme', () => {
    const props = {
      dark: true
    }

    const wrapper = shallowMount(DividerComponent, {
      propsData: props
    })

    expect(wrapper.contains('.ef-divider--dark')).toBe(true)
  })
  it('render divider component with light theme', () => {
    const props = {
      light: true
    }

    const wrapper = shallowMount(DividerComponent, {
      propsData: props
    })

    expect(wrapper.contains('.ef-divider--light')).toBe(true)
  })
})
