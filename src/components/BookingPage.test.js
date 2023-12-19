import { render, screen } from "@testing-library/react";
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