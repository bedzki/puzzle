import React from "react";
import PropTypes from "prop-types";

const Paragraph = ({ name }) => {
    return <div className="bg-red text-white">{name}</div>;
};

export default Paragraph;

Paragraph.propTypes = {
    name: PropTypes.string,
};
