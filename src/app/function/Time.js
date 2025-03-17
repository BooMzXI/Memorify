export function Time(timestamp) {
    const DateNow = new Date().getTime()
    const createdTime = new Date(timestamp).getTime() - (new Date().getTimezoneOffset() * 60 * 1000);
    const diff = DateNow - createdTime
    const min = 1000 * 60;
    const hour = min * 60;
    const day = hour * 24;
    const week = day * 7;
    if (diff < min) {
        return 'now'
    } else if (diff < hour){
        const minutes = Math.floor(diff / min)
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    } else if (diff < day) {
        const h = Math.floor(diff / hour)
        return `${h} hour${h > 1 ? 's' : ''} ago`
    } else {
        const d = Math.floor(diff / day)
        return `${d} day${d > 1 ? 's' : ''} ago`
    }
}