import React, { useState } from 'react';

interface Props {
  title: string;
  options: string[];
  onSelect: (option: string) => void;
}

function Dropdown ({ title, options, onSelect }: Props) {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  function handleSelection (option: string) {
    onSelect(option);
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        {title}
      </button>
      {isOpen && (
        <ul role='menu'>
          {options.map(option => (
            <li key={option} role='menutiem' onClick={() => handleSelection(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Dropdown;
