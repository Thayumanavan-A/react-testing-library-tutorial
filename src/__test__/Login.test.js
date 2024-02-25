import {render,screen}  from '@testing-library/react';
import Login from '../Login';

test('checking component loaded',() =>{
    render(<Login/>);
    expect(screen.getByText(/Login/)).toBeInTheDocument();
})

test('checking email & password inputs are empty', () => {
    render(<Login/>);
    expect(screen.getByPlaceholderText('Email')).toHaveValue("");
    expect(screen.getByPlaceholderText('Password')).toHaveValue("");
})