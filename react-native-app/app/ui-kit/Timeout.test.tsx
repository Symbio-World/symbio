import * as React from 'react'
import { View } from 'react-native'
import { render } from 'react-native-testing-library'
import { Timeout } from './Timeout'

jest.useFakeTimers()

describe('Timeout', () => {
  it('calls onTimeout when durationInSeconds is passed ', () => {
    const handleTimeout = jest.fn()
    const duration = 5000
    render(
      <Timeout durationInSeconds={duration} onTimeout={handleTimeout}>
        <View />
      </Timeout>,
    )

    jest.runAllTimers()

    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), duration)
    expect(handleTimeout).toHaveBeenCalledTimes(1)
  })
})
