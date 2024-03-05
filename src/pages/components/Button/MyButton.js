import { useState } from "react";

export function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <button onClick={handleClick}>
            Clicked {count} time
        </button>
    );
}