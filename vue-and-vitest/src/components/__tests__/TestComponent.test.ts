import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TestComponent from '../TestComponent.vue'

describe('TestComponent', () => {
    it('should render', () => {
        let wrapper = mount(TestComponent)
        // check if our component has h1
        expect(wrapper.find('h1').exists()).toBeTruthy()
        // check if our component has h2
        expect(wrapper.find('h2').exists()).toBeTruthy()
        // check if our component has input
        expect(wrapper.find('input').exists()).toBeTruthy()
        // check if our component has button
        expect(wrapper.find('button').exists()).toBeTruthy()
    })

    it('should change header', async () => {
        let wrapper = mount(TestComponent)

        // finds the input tag and sets the value
        await wrapper.find("input[type='text']").setValue('A new header')
        await wrapper.find('button').trigger('click')

        expect(wrapper.find('h1').text()).toBe('A new header')
    })

    it('props renders properly', () => {
        let wrapper = mount(TestComponent, { props: { content: 'Hello Vitest' } })
        // we're checking the h1 tag with class name of second-h1 
        expect(wrapper.find('h1.second-h1').text()).toEqual('Hello Vitest')
    })
})