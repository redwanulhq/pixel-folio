export const saveToLocalStorage = (key, data) => {
  const state = JSON.stringify(data);
  try {
    localStorage.setItem(key, state);
  } catch (error) {
    if (error instanceof DOMException && error.name === "QuotaExceededError") {
      console.error("Storage quota exceeded");
      localStorage.clear();
    } else {
      console.error(
        "An error occurred while accessing local storage:",
        error.message
      );
    }
  }
};

export const loadFromLocalStorage = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key) || null);
  } else return undefined;
};
