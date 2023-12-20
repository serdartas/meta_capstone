import { render, screen, fireEvent } from "@testing-library/react";
import BookingPage from './BookingPage';
import { BrowserRouter } from 'react-router-dom';

test('Renders the reservation button', () => {
    render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const submitButton = screen.getByRole("button", {name: /Make your reservation/i});
    expect(submitButton).toBeInTheDocument();
})

test('Renders the header', () => {
    render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const bookingHeader = screen.getByText("Book your table!");
    expect(bookingHeader).toBeInTheDocument();
})

test('Times initializes correctly', () => {
    render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const timesSelect = screen.getByLabelText("Choose time");
    expect(timesSelect).toBeInTheDocument();
    expect(timesSelect.childElementCount).toBeGreaterThanOrEqual(2);
    expect(screen.getByRole('option', { name: 'Select a time...' }).selected).toBe(true);
})

test('Validation shows error', () => {
    render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const validationText = screen.getByText("Validation Error");
    expect(validationText).toBeInTheDocument();
})

test('Validation works', () => {
    render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const timesSelect = screen.getByLabelText("Choose time");
    const options = timesSelect.querySelectorAll('option');
    // Find the first time and select
    for (let i = 0; i < options.length; i++) {
        if(options[i].value !== 'Select a time...'){
            fireEvent.change(timesSelect, { target: { value:
                options[i].value } });
            break;
        }
    }
    const validationText = screen.queryByText("Validation Error");
    const validationStyle = window.getComputedStyle(validationText);
    expect(validationStyle.display).toBe('none');
})