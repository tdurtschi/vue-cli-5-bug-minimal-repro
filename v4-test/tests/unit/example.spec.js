import { mount } from '@vue/test-utils'

const Counter = {
  template: `
    <div>
      <input type="checkbox" @change="count++">Add up</input>
      <p>Total clicks: {{ count }}</p>
    </div>
  `,
  data() {
    return { count: 0 }
  }
}

test('increments counter value on click', async () => {
  const wrapper = mount(Counter)
  const input = wrapper.find('input')
  const text = wrapper.find('p')

  expect(text.text()).toContain('Total clicks: 0')

  await input.trigger('click')

  expect(text.text()).toContain('Total clicks: 1')
})