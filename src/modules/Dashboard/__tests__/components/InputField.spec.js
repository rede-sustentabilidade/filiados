import React from 'react'
import { mount } from 'enzyme'

import { InputField } from '../../components'


describe('<InputField />', () => {
  let inputField
  const defaultProps = {
    input: {},
    type: 'text'
  }


  beforeEach(() => {
    inputField = mount(<InputField {...defaultProps} />)
  })

  it('should renders without label by default', () => {
    expect(inputField.find('TextField').props().hintText).toEqual(null)
    expect(inputField.find('TextField').props().errorText).toEqual(null)
  })

  it('should renders label when passed', () => {
    const label = 'Name'
    inputField.setProps({ label })
    expect(inputField.find('TextField').props().hintText).toEqual(label)
  })

  it('should renders error if touched and error passed', () => {
    const error = 'Name required'
    inputField.setProps({ meta: { error, touched: true } })
    expect(inputField.find('TextField').props().errorText).toEqual(error)
  })
})
