import React from 'react'
import { mount } from 'enzyme'

import { Form } from '../../components'


describe('<Form />', () => {
  let form
  const defaultProps = {
    submitting: false,
    handleSubmit: (values) => {},
    submitLabel: 'Save'
  }

  beforeEach(() => {
    form = mount(<Form {...defaultProps} />)
  })

  it('should renders without button cancel default', () => {
    expect(form.find('button[type="button"]').length).toEqual(0)
  })

  it('should renders button cancel when passed reset and cancelLabel', () => {
    const reset = () => {}
    const cancelLabel = 'Cancel'
    form.setProps({ reset, cancelLabel })

    const button = form.find('button[type="button"]')

    expect(button.length).toEqual(1)
    expect(button.props().onClick).toEqual(reset)
    expect(button.text()).toEqual(cancelLabel)
  })

  it('should disabled submit button when submitting is true', () => {
    form.setProps({ submitting: true })
    expect(form.find('button').props().disabled).toEqual(true)
  })

  it('should render error form when passed', () => {
    const _error = 'Required fields'
    form.setProps({ error: _error })
    expect(form.find('strong').text()).toEqual(_error)
  })

})
