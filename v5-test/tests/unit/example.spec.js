import { mount } from '@vue/test-utils'

test('increments counter value on button click', async () => {
  const Counter = {
    template: `
      <div>
        <button @click="count++">Add up</button>
        <p>Total clicks: {{ count }}</p>
      </div>
    `,
    data() {
      return { count: 0 }
    }
  }
  
  const wrapper = mount(Counter)
  const button = wrapper.find('button')
  const text = wrapper.find('p')

  expect(text.text()).toContain('Total clicks: 0')

  await button.trigger('click')

  expect(text.text()).toContain('Total clicks: 1')
})

test('increments counter value on checkmark click', async () => {
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
  
  const wrapper = mount(Counter)
  const input = wrapper.find('input')
  const text = wrapper.find('p')

  expect(text.text()).toContain('Total clicks: 0')

  await input.trigger('click')

  expect(text.text()).toContain('Total clicks: 1')
})

// test('is the component still there?', async () => {
//   const text = document.querySelector("p");

//   expect(text.textContent).toContain('Total clicks: 0')
// })