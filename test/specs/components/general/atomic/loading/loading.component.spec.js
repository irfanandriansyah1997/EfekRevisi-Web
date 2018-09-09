import { shallowMount } from '@vue/test-utils'
import LoadingComponent from '@/components/general/atomic/loading/loading.component'

describe('Testing icon component in general component ', () => {
  it('render loading component', () => {
    const props = {
      type: 'default'
    }

    const wrapper = shallowMount(LoadingComponent, {
      propsData: props
    })

    expect(wrapper.contains('.ef-loading-circle')).toBe(true)
  })
  it('render loading component with google type', () => {
    const props = {
      type: 'google'
    }

    const wrapper = shallowMount(LoadingComponent, {
      propsData: props
    })

    expect(wrapper.contains('.ef-loading-circle--google-type')).toBe(true)
  })
})
