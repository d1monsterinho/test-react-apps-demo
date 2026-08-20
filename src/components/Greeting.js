import {useState} from "react";

const Greeting = () => {
    const [isTextChanged, setIsTextChanged] = useState(false);

    const handleChangeTextClick = () => {
        setIsTextChanged(prev => !prev);
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {!isTextChanged && <p>It's good to see you!</p>}
            {isTextChanged && <p>Text Changed!</p>}
            <button onClick={handleChangeTextClick}>Change Text</button>
        </div>
    );
}

export default Greeting;