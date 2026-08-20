import Async from "./Async";
import {render, screen} from "@testing-library/react";

describe('Async Component', () => {
    test('renders posts list items after http request resolves', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'id1', title: 'mocked title'}]
        });

        render(<Async/>);

        const listItemElements = await screen.findAllByRole('listitem', {}, {timeout: 5000});
        expect(listItemElements).not.toHaveLength(0);
    });
})