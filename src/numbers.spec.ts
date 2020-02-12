import { toNumber } from './numbers'

test('toNumber should convert string to Number', () => {
    expect(toNumber('1')).toBe(1)
    expect(toNumber('1.2')).toBe(1.2)
    expect(toNumber('1.200,50')).toBe(1200.5)
    expect(toNumber('a212,1B')).toBe(212.1)
    expect(toNumber('abc')).toBe(0)
})