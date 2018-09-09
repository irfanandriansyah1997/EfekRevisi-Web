import { shallowMount } from '@vue/test-utils'
import BadgesComponent from '@/components/general/atomic/badges/badges.component'

describe('Testing icon component in general component ', () => {
  test('render badge', () => {
    const props = {}

    const wrapper = shallowMount(BadgesComponent, {
      propsData: props,
      slots: {
        default: '<span>Message</span><span slot="badge">5</span>'
      }
    })

    // Contain
    expect(wrapper.find('.ef-badges__content').text()).toContain('Message')

    // Badges
    expect(wrapper.find('.ef-badges__badges').text()).toContain('5')
  })
  test('render badge with color is purple-light', () => {
    const props = {
      color: 'purple-light'
    }

    const wrapper = shallowMount(BadgesComponent, {
      propsData: props,
      slots: {
        default: '<span>Message</span><span slot="badge">5</span>'
      }
    })

    // Badges
    expect(wrapper.contains('.ef-badges--color-purple-light')).toBe(true)
  })
  test('render badge with position left', () => {
    const props = {
      position: 'left'
    }

    const wrapper = shallowMount(BadgesComponent, {
      propsData: props,
      slots: {
        default: '<span>Message</span><span slot="badge">5</span>'
      }
    })

    // Badges
    expect(wrapper.contains('.ef-badges--left')).toBe(true)
  })
  test('test beforeEnter method', () => {
    const wrapper = shallowMount(BadgesComponent)
    const element = document.createElement('div')

    expect(wrapper.vm.beforeEnter(element).style.opacity).toBe('0')
  })
})
