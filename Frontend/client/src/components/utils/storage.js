export function getFromStorage(key) {
    if (!key) {
        return null;
    }

    try {
        const valueStr = localStorage.getItem(key);
        if (valueStr) {
            return JSON.parse(valueStr)
        }
        return null;
    } catch {
        return null;
    }
}

export function setInStorage(key, obj) {
    if (!key) {
        console.log(`Error: no key exists`)
    }

    try {
        localStorage.setItem(key, JSON.stringify(obj))
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}