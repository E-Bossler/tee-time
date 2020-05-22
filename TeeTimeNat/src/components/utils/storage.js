///path that reads and write json file
///seperate json file that stores the users

export function getFromStorage(key) {
  if (!key) {
    return null;
  }

  try {
    const valueStr = localStorage.getItem(key);
    if (valueStr) {
      return valueStr;
    }
    return null;
  } catch (err) {
    return null;
  }
}

export function setInStorage(key, obj) {
  try {
    localStorage.setItem('SessionToken', key);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}
