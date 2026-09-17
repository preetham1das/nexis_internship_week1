import { useState } from "react";
import Button from "./Button";

function Form({ onSubmit }) {

    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (name.trim()) {
            onSubmit(name.trim());
            setName("");
        }
    }

    return (
        <form className="subscribe-form" onSubmit={handleSubmit}>

            <input
                aria-label="Your name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
            />

            <Button text="Subscribe" type="submit" />

        </form>
    );
}

export default Form;