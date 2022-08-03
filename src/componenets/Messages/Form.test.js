import {render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store'
import Form from "./Form";


test('testing Form', () => {
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    const initialState = {};
    const store = mockStore(initialState);
    render(
        <Provider store={store}>
            <Form/>
        </Provider>
    );
    const msgElem = screen.getByText(/message/i);
    const btn = screen.getByRole('button');
    const input = screen.getByLabelText(/author/i);

    expect(msgElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();

})