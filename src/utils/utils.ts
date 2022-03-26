import * as React from 'react';
import { Store } from 'react-notifications-component';

export function useStateRef<T>(initialValue: T): [React.MutableRefObject<T>, React.Dispatch<React.SetStateAction<T>>] {
    const [value, setValue] = React.useState<T>(initialValue);

    const ref = React.useRef(value);

    React.useEffect(() => {
        ref.current = value;
    }, [value]);

    return [ref, setValue];
}

export function raiseError(error: any) {
    Store.addNotification({
        title: error.status_message,
        message: error.status_code,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"]
    });
}
