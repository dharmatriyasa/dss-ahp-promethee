import { useState, useEffect } from "react";

function wrap(cb) {
    try {
        return cb();
    } catch {}
}

const getInitialValue = (key, initialValue) => {
    const cachedValue = getCachedValue(key);
    return cachedValue || initialValue;
}

const getCachedValue = (key) => {
    return wrap(() => {
        JSON.parse(localStorage.getItem(key) || "null")
    });
}

const setCachedValue = (key, value) => {
    return wrap(() =>  {
        JSON.parse(localStorage.setItem(key, JSON.stringify(value)));
    });
}

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(getInitialValue(key, initialValue));

    useEffect(() => {
        const cachedValue = getCachedValue(key);
        setValue(cachedValue);
    }, [key]);

    useEffect(() => {
        setCachedValue(key, value);
    }, [value, key]);

    return [value, setValue];
}

export default useLocalStorage;