import { test, expect } from "@jest/globals"
import { sortPages } from "./report.js"

test('sorts objects by count', () => {
    const input = {tags: 62, gsajjjas: 63, balh: 1,   munnvark: 2}
    const actual = sortPages(input)
    const expected = {gsajjjas: 63, tags: 62, munnvark: 2, balh: 1}
    expect(actual).toEqual(expected)
    }
  )

  test('sortPages null case', () => {
    const input = {}
    const actual = sortPages(input)
    const expected = {}
    expect(actual).toEqual(expected)
  })