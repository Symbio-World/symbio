import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import { Scanner } from './scanner'
import { Overlay } from './overlay'
import { testSession } from './scanner.fixture'

describe('Scanner', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Scanner />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders 0 overlays at the start', () => {
    const testRenderer = renderer.create(<Scanner />)
    const testInstance = testRenderer.root
    const overlays = testInstance.findAllByType(Overlay)
    expect(overlays.length).toBe(0)
  })

  // TODO
  // it('renders overlay when scanned', () => {
  //   const testRenderer = renderer.create(<Scanner />, {
  //     createNodeMock: (element) => {
  //       console.log('entered')
  //       if (element.type === 'BarcodePicker') {
  //         console.log('here')
  //         return {
  //           stopScanning: () => {}
  //         };
  //       }
  //       return null;
  //     }
  //   })
  //   const testInstance = testRenderer.root
  //   testRenderer.getInstance().onScan(testSession)
  //   const overlays = testInstance.findAllByType(Overlay)
  //   expect(overlays.length).toBe(1)
  // });

  // TODO
  // it('can remove overlay', () => {
  //   const testRenderer = renderer.create(<Scanner />)
  //   const testInstance = testRenderer.root
  //   testRenderer.getInstance().onRecognizeNewCodes(testSession)
  //   const overlays = testInstance.findAllByType(Overlay)
  //   expect(overlays.length).toBe(testSession.allTrackedCodes.length)
  //   overlays[0].props.onClose()
  //   const updatedOverlays = testInstance.findAllByType(Overlay)
  //   expect(updatedOverlays.length).toBe(testSession.allTrackedCodes.length - 1)
  // })
})
