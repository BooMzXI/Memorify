export function SortedByTime(contents) {
    if (!contents) return [];
    return contents.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

export function SortedByName(contents) {
    if (!contents) return [];
    return contents.sort((a,b) => a.title[0].localeCompare(b.title))
}