import * as React from 'react'
import { TextInput } from 'react-native'
import { render, fireEvent } from 'react-native-testing-library'
import { Input } from './Input'

describe('Input', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Input />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('passess value to TextInput', () => {
    const value = 'value'
    const { getByType } = render(<Input value={value} />)
    expect(getByType(TextInput).props.value).toEqual(value)
  })

  it('triggers onChange', () => {
    const handleChange = jest.fn()
    const text = 'text'
    const { getByType } = render(<Input onChange={handleChange} />)
    fireEvent(getByType(TextInput), 'onChangeText', text)
    expect(handleChange).toHaveBeenCalledWith(text)
  })

  it('triggers onSubmit', () => {
    const handleSubmit = jest.fn()
    const { getByType } = render(<Input onSubmit={handleSubmit} />)
    fireEvent(getByType(TextInput), 'onSubmitEditing')
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })

  it('passess returnKeyType to TextInput', () => {
    const returnKeyType = 'send'
    const { getByType } = render(<Input returnKeyType={returnKeyType} />)
    expect(getByType(TextInput).props.returnKeyType).toEqual(returnKeyType)
  })

  it('passess keyboardType to TextInput', () => {
    const keyboardType = 'email-address'
    const { getByType } = render(<Input keyboardType={keyboardType} />)
    expect(getByType(TextInput).props.keyboardType).toEqual(keyboardType)
  })

  it('passess autoFocus to TextInput', () => {
    const autoFocus = true
    const { getByType } = render(<Input autoFocus={autoFocus} />)
    expect(getByType(TextInput).props.autoFocus).toEqual(autoFocus)
  })
})
