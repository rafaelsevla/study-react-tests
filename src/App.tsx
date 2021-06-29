import React, { useState } from 'react';
import Dropdown from './ui/dropdown'

function App() {
  const [ selectedPokemon, setSelectedPokemon ] = useState<string | null>(null);

  return (
    <div className='App'>
      {selectedPokemon && <span>Seu Pokemon: {selectedPokemon}</span>}

      <Dropdown
        title='Selecione seu Pokemon inicial'
        options={[ 'Bulbasaur', 'Squirtle', 'Charmaleon' ]}
        onSelect={option => setSelectedPokemon(option)}
      />
    </div>
  );
}

export default App;
