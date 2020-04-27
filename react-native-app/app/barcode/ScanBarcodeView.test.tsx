import * as React from 'react'
import {
  render,
  fireEvent,
  flushMicrotasksQueue,
} from 'react-native-testing-library'
import { BarcodePicker } from 'scandit-react-native'
import { ScanBarcodeView } from './ScanBarcodeView'
import * as fixture from './ScanBarcodeView.fixture'

const mockUseRef = (obj: unknown) => () =>
  Object.defineProperty({}, 'current', {
    get: () => obj,
    set: () => {},
  })

describe('ScanBarcodeView', () => {
  const navigation: any = {
    navigate: jest.fn(),
  }

  it('renders correctly', () => {
    const { toJSON } = render(<ScanBarcodeView navigation={navigation} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('triggers onScan prop', () => {
    const handleScan = jest.fn()
    const useRef = mockUseRef({ startScanning: jest.fn() })
    const { getByType } = render(
      <ScanBarcodeView
        onScan={handleScan}
        useRef={useRef}
        navigation={navigation}
      />,
    )
    fireEvent(getByType(BarcodePicker), 'onScan', fixture.session)
    expect(handleScan).toHaveBeenCalledWith(fixture.barcode)
  })

  it('starts scanning when active prop is true', async () => {
    const startScanning = jest.fn()
    const useRef = mockUseRef({ startScanning })
    render(<ScanBarcodeView isActive useRef={useRef} navigation={navigation} />)
    await flushMicrotasksQueue()
    // await waitForElement(() => getByType(BarcodePicker))
    expect(startScanning).toHaveBeenCalled()
  })

  it('pause scanning when active prop is false', async () => {
    const startScanning = jest.fn()
    const pauseScanning = jest.fn()
    const useRef = mockUseRef({ pauseScanning, startScanning })
    const { update } = render(
      <ScanBarcodeView isActive useRef={useRef} navigation={navigation} />,
    )
    await flushMicrotasksQueue()
    update(
      <ScanBarcodeView
        isActive={false}
        useRef={useRef}
        navigation={navigation}
      />,
    )
    await flushMicrotasksQueue()
    expect(pauseScanning).toHaveBeenCalled()
  })

  it('resume scanning after pause', async () => {
    const startScanning = jest.fn()
    const resumeScanning = jest.fn()
    const pauseScanning = jest.fn()
    const useRef = mockUseRef({ pauseScanning, startScanning, resumeScanning })
    const { update } = render(
      <ScanBarcodeView isActive useRef={useRef} navigation={navigation} />,
    )
    await flushMicrotasksQueue()
    update(
      <ScanBarcodeView
        isActive={false}
        useRef={useRef}
        navigation={navigation}
      />,
    )
    await flushMicrotasksQueue()
    update(<ScanBarcodeView isActive useRef={useRef} navigation={navigation} />)
    await flushMicrotasksQueue()
    expect(startScanning).toHaveBeenCalledTimes(1)
    expect(pauseScanning).toHaveBeenCalled()
    expect(resumeScanning).toHaveBeenCalled()
  })
})
