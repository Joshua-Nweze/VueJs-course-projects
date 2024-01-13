import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { screen, fireEvent } from '@testing-library/vue'
import server from './apiMockup.test'  // Import your mockup file

import ApiCall from '../ApiCall.vue'

describe('ApiCall', () => {
  // Start server before all tests
  beforeAll(() => server.listen())
  // Reset server handlers between tests
  afterEach(() => server.resetHandlers())
  // Close server after all tests
  afterAll(() => server.close())

  it('fetch data correctly', async () => {
    let wrapper = mount(ApiCall)

    // clicks btn and makes api call and return data
    await wrapper.find('button.getQuestions').trigger('click')
  })
})
