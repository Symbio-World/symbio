import { toTree } from './toTree'

describe('ToTree', () => {
  it('handles empty object', () => {
    const tree = toTree([])
    expect(tree).toEqual({})
  })

  it('handles flat object with string values', () => {
    const tree = toTree([
      { path: ['key1'], value: 'a1' },
      { path: ['key2'], value: 'a2' },
      { path: ['key3'], value: 'a3' },
    ])
    expect(tree).toEqual({
      key1: 'a1',
      key2: 'a2',
      key3: 'a3',
    })
  })

  it('handles flat object with boolean value', () => {
    const tree = toTree([
      { path: ['key1'], value: 'a1' },
      { path: ['key2'], value: false },
      { path: ['key3'], value: 'a3' },
    ])
    expect(tree).toEqual({
      key1: 'a1',
      key2: false,
      key3: 'a3',
    })
  })

  it('handles flat object with null', () => {
    const tree = toTree([
      { path: ['key1'], value: 'a1' },
      { path: ['key2'], value: null },
      { path: ['key3'], value: 'a3' },
    ])
    expect(tree).toEqual({
      key1: 'a1',
      key2: null,
      key3: 'a3',
    })
  })

  it('handles flat object with undefined', () => {
    const tree = toTree([
      { path: ['key1'], value: 'a1' },
      { path: ['key2'], value: undefined },
      { path: ['key3'], value: 'a3' },
    ])
    expect(tree).toEqual({
      key1: 'a1',
      key2: undefined,
      key3: 'a3',
    })
  })

  it('handles empty array value', () => {
    const tree = toTree([
      { path: ['key1'], value: 'a1' },
      { path: ['key2'], value: [] },
      { path: ['key3'], value: 'a2' },
    ])
    expect(tree).toEqual({
      key1: 'a1',
      key2: [],
      key3: 'a2',
    })
  })

  it('handles non-empty array value', () => {
    const tree = toTree([
      { path: ['key1'], value: 'a1' },
      { path: ['key2', 0], value: 'a2' },
      { path: ['key2', 1], value: 'a3' },
      { path: ['key3'], value: 'a4' },
    ])
    expect(tree).toEqual({
      key1: 'a1',
      key2: ['a2', 'a3'],
      key3: 'a4',
    })
  })

  it('handles empty object value', () => {
    const tree = toTree([
      { path: ['key1'], value: 'a1' },
      { path: ['key2'], value: {} },
      { path: ['key3'], value: 'a4' },
    ])
    expect(tree).toEqual({
      key1: 'a1',
      key2: {},
      key3: 'a4',
    })
  })

  it('handles non-empty object value', () => {
    const tree = toTree([
      { path: ['key1'], value: 'a1' },
      { path: ['key2', 'key3'], value: 'a2' },
      { path: ['key2', 'key4'], value: 'a3' },
      { path: ['key5'], value: 'a4' },
    ])
    expect(tree).toEqual({
      key1: 'a1',
      key2: {
        key3: 'a2',
        key4: 'a3',
      },
      key5: 'a4',
    })
  })

  it('handles mixed array value', () => {
    const tree = toTree([
      { path: ['key1'], value: 'a1' },
      { path: ['key2', 0], value: 'a2' },
      { path: ['key2', 1, 'key3'], value: 'a3' },
      { path: ['key4'], value: 'a4' },
    ])
    expect(tree).toEqual({
      key1: 'a1',
      key2: ['a2', { key3: 'a3' }],
      key4: 'a4',
    })
  })

  // TODO
  // it('handles complex object', () => {
  //   const tree = toTree([
  //     { path: ['key1'], value: 'a1' },
  //     { path: ['key2', 'key3'], value: {} },
  //     { path: ['key2', 'key4', 0], value: 'a2' },
  //     { path: ['key2', 'key4', 1], value: 'a3' },
  //     { path: ['key2', 'key4', 2, 'key5'], value: 'a4' },
  //     { path: ['key2', 'key4', 2, 'key6'], value: [] },
  //     { path: ['key2', 'key4', 2, 'key7'], value: {} },
  //     { path: ['key2', 'key8', 'key9', 'key10'], value: 'a5' },
  //     { path: ['key11'], value: 'a6' },
  //   ])
  //   expect(tree).toEqual({
  //     key1: 'a1',
  //     key2: {
  //       key3: {},
  //       key4: ['a2', 'a3', { key5: 'a4', key6: [], key7: {} }],
  //       key8: {
  //         key9: {
  //           key10: 'a5',
  //         },
  //       },
  //     },
  //     key11: 'a6',
  //   })
  // })
})
