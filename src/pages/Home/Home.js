import React from "react";
import PropTypes from "prop-types";
import { getByTestId } from "lib/helper";

const Home = ({ testId }) => {
    return (
        <div
            className="bg-gray-100 text-gray-900 text-center py-10"
            {...getByTestId(testId, "container")}
        >
            Home Page
        </div>
    );
};

export default Home;

Home.propTypes = {};
