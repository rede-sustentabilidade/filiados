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
    expect(inputField.find('label').length).toEqual(0)
  })

  it('should renders label when passed', () => {
    const label = 'Name'
    inputField.setProps({ label })
    expect(inputField.find('label').text()).toEqual(label)
  })

  it('should renders error if touched and error passed', () => {
    const error = 'Name required'
    inputField.setProps({ meta: { error, touched: true } })
    expect(inputField.find('span').text()).toEqual(error)
  })
})
