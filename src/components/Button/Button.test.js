/* 
    yarn test src/components/Button/Button.test.js 
*/
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

// :: Components
import Button from "./Button";

// :: Constants
const testId = "button";
const TEST_IDS = {
    container: `${testId}-container`,
};

describe("Button component", () => {
    test("render component", async () => {
        render(<Button testId={testId} />);

        expect(screen.getByTestId(TEST_IDS.container)).toBeInTheDocument();
    });

    test("change button color", async () => {
        render(<Button testId={testId} color={"red"} />);

        expect(screen.getByTestId(TEST_IDS.container)).toHaveClass("bg-red");
    });
});
