import Dropdown from './dropdown';
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event';


const title = 'Selecione um pokemon';
const options = [ 'Bulbasaur', 'Squirtle', 'Charmaleon' ];

describe('Dropdown', () => {
  it('should start closed', () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });

  
  it('should show options when open', () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();

    const dropdownButton = screen.getByRole('button');

    userEvent.click(dropdownButton);

    expect(screen.queryByText(options[0])).toBeInTheDocument();
    expect(screen.queryByText(options[1])).toBeInTheDocument();
    expect(screen.queryByText(options[2])).toBeInTheDocument();
  });


  it('should signal an option was selected and close the dropdown', () => {
    const onSelect = jest.fn();
    render(<Dropdown title={title} options={options} onSelect={onSelect} />);

    const dropdownButton = screen.getByRole('button');

    userEvent.click(dropdownButton);

    const option0 = screen.getByText(options[0]);
    const option1 = screen.getByText(options[1]);
    const option2 = screen.getByText(options[2]);

    expect(option0).toBeInTheDocument();
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();

    userEvent.click(option1);

    expect(onSelect).toHaveBeenCalledWith(options[1]);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });


})