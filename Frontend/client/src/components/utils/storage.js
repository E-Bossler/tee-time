export function getFromStorage(key) {
    if (!key) {
        return null;
    }

    try {
        const valueStr = localStorage.getItem(key);
        if (valueStr) {
            // console.log(valueStr)
            return valueStr
        }
        return null;
    } catch (err) {
        return null;
    }
}

export function setInStorage(key, obj) {
    if (!key) {
        console.log(`Error: no key exists`)
    }

    try {
        localStorage.setItem('SessionToken', key)
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}