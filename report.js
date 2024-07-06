function printReport(pages) {
    console.log('Report is starting')
    console.log('Sorting pages')
    const sortedPages = sortPages(pages)
    for (let [key, value] of Object.entries(sortedPages)) {
        console.log(`Found ${value} internal links to ${key}`)
    }
}

function sortPages(pages) {
    const sortedPagesObj = Object.fromEntries(
        Object.entries(pages).sort((a, b) => b[1] - a[1])
    )

    return sortedPagesObj
}

export { printReport, sortPages }