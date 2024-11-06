// Button.js

import React from "react";
import './Button.css'

const Button = ({callApi}) => {
    return <button onClick={callApi}>
        Click to generate a joke.
    </button>;
}

// Export Button Component
export default Button;