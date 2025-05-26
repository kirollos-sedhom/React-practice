import React, { useEffect, useState } from "react";

function getValueFromStorage(
  key: string,
  initialValue: string | (() => string)
) {
  const savedValue = localStorage.getItem(key);

  if (savedValue) {
    const parsedSavedValue = JSON.parse(savedValue);
    return parsedSavedValue;
  }

  if (initialValue instanceof Function) {
    // in case the initial value is a function that returns a string
    return initialValue();
  }
  return initialValue;
}
export default function useLocalStorage(key: string, initialValue: string) {
  const [value, setValue] = useState(getValueFromStorage(key, initialValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
