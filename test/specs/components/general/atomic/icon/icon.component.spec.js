import { shallowMount } from '@vue/test-utils'
import IconComponent from '@/components/general/atomic/icon/icon.component'

describe('Testing icon component in general component ', () => {
  it('render material icon', () => {
    const props = {
      type: 'material-icons'
    }

    const wrapper = shallowMount(IconComponent, {
      propsData: props,
      slots: {
        default: 'edit'
      }
    })

    expect(wrapper.html()).toContain(
      '<i class="ef-icon material-icons">edit</i>'
    )
  })
})
