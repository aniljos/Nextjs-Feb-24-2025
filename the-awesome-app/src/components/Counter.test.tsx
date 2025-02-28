import {render, screen, fireEvent} from '@testing-library/react';
import { Counter } from './Counter';

//test-suite(optional)
// describe("Counter test", () => {

//     //write the tests

// })

test("render Counter", () => {

    render(<Counter initialCount={5}/>);
    const text =  screen.getByText("Count: 5");
    expect(text).toBeInTheDocument();
})
test("increment Counter", () => {

    render(<Counter initialCount={5}/>);
    const text =  screen.getByText("Count: 5");
    expect(text).toBeInTheDocument();
    const incBtn = screen.getByText("Inc");
    fireEvent.click(incBtn);
    const updatedtext =  screen.getByText("Count: 6");
    expect(updatedtext).toBeInTheDocument();


})