//npm run test

import { test, expect } from "@jest/globals"
import { normalizeURL, getURLsFromHTML } from "./crawl.js"

test('removes https and trailing slash', () => {
    expect(normalizeURL('https://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
})

test('removes https', () => {
    expect(normalizeURL('https://blog.boot.dev/path')).toBe('blog.boot.dev/path')
})

test('removes http and trailing slash', () => {
    expect(normalizeURL('http://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
})

test('removes http and caps', () => {
    expect(normalizeURL('http://BLOG.boot.dev/path')).toBe('blog.boot.dev/path')
})

test('gives two absolute urls from one relative and one absolute', () => {
    const htmlBody = '<html><body><a href="/page1"><span>Page 1</span></a><a href="https://blog.boot.dev/page2"><span>Page 2</span></a></body></html>';
    const baseURL = 'https://boot.dev';

    const expectedURLs = ['https://boot.dev/page1', 'https://blog.boot.dev/page2'];

    expect(getURLsFromHTML(htmlBody, baseURL)).toEqual(expectedURLs);
})

test('gives one absolute url', () => {
    const inputURL = 'https://blog.boot.dev'
    const inputBody = '<html><body><a href="https://blog.boot.dev"><span>Boot.dev></span></a></body></html>'
    const actual = getURLsFromHTML(inputBody, inputURL)
    const expected = [ 'https://blog.boot.dev/' ]
    expect(actual).toEqual(expected)
  })
  
  test('gives one relative url', () => {
    const inputURL = 'https://blog.boot.dev'
    const inputBody = '<html><body><a href="/path/one"><span>Boot.dev></span></a></body></html>'
    const actual = getURLsFromHTML(inputBody, inputURL)
    const expected = [ 'https://blog.boot.dev/path/one' ]
    expect(actual).toEqual(expected)
  })