import Greeting from "./Greeting";
import {render, screen} from "@testing-library/react";

describe('Greeting Component', () => {
    test('Greeting h2 is present', () => {
        // Arrange
        render(<Greeting/>);

        // Act
        // ...nothing needed for now

        // Assert
        const helloWorldHeader = screen.getByText('Hello World', {exact: false});
        expect(helloWorldHeader).toBeInTheDocument();
        expect(helloWorldHeader.tagName).toBe('H2');

        const greetingParagraph = document.querySelector('p');
        expect(greetingParagraph).toBeInTheDocument();
        expect(greetingParagraph.textContent).toBe("It's good to see you!");
    });
});

