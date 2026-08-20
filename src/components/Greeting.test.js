import Greeting from "./Greeting";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Greeting Component', () => {
    test('renders h2 with the "Hello World" text', () => {
        // Arrange
        render(<Greeting/>);

        // Act
        // ...nothing needed for now

        // Assert
        const helloWorldHeader = screen.getByText('Hello World', {exact: false});
        expect(helloWorldHeader).toBeInTheDocument();
        expect(helloWorldHeader.tagName).toBe('H2');
    });

    test('renders "It\'s good to see you!" in a paragraph when text is NOT changed by button', () => {
        render(<Greeting/>);

        const greetingParagraph = document.querySelector('p');
        expect(greetingParagraph).toBeInTheDocument();
        expect(greetingParagraph.textContent).toBe('It\'s good to see you!');

        const textChangedParagraph = screen.queryByText('Text Changed!');
        expect(textChangedParagraph).toBeNull();
    });

    test('renders "Text Changed!" in a paragraph when text is changed by button', async () => {
        render(<Greeting/>);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const textChangedParagraph = document.querySelector('p');
        expect(textChangedParagraph).toBeInTheDocument();
        expect(textChangedParagraph.textContent).toBe('Text Changed!');

        const greetingParagraph = screen.queryByText('It\'s good to see you!');
        expect(greetingParagraph).toBeNull();
    });
});

