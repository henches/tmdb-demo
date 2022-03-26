import * as React from 'react';

export function useStateRef<T>(initialValue: T): [React.MutableRefObject<T>, React.Dispatch<React.SetStateAction<T>>] {
    const [value, setValue] = React.useState<T>(initialValue);

    const ref = React.useRef(value);

    React.useEffect(() => {
        ref.current = value;
    }, [value]);

    return [ref, setValue];
}


export function useStateRef3(initialValue: any) {
    const [value, setValue] = React.useState(initialValue);

    const ref = React.useRef(value);

    React.useEffect(() => {
        ref.current = value;
    }, [value]);

    return [value, setValue, ref];
}