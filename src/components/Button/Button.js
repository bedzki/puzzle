import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

// :: Lib
import { getByTestId } from "lib/helper";

const Button = ({ name, color, radius, testId }) => {
    const styleColor = {
        transparent: "bg-transparent",
        red: "bg-red",
    };

    const styleBorderRadius = {
        none: "rounded-none",
        small: "rounded-sm",
        normal: "rounded-md",
        big: "rounded-lg",
    };

    return (
        <button
            className={twMerge(
                "bg-tahiti-700 text-white p-2 m-2",
                styleColor[color],
                styleBorderRadius[radius]
            )}
            {...getByTestId(testId, "container")}
        >
            {name}
        </button>
    );
};

export default Button;

Button.propTypes = {
    name: PropTypes.string,
    testId: PropTypes.string,
    radius: PropTypes.string,
};

Button.defaultProps = {
    name: "",
    testId: "",
    radius: "normal",
};
