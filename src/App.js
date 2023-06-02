import React from 'react';
import ButtonComponent from './components/ButtonComponent';
// Sayfa bileşenleri
import AmbulansForm from './forms/AmbulansForm';
import AmbulansList from './istekler/AmbulansList';

function App() {
  const data = [
    {
      name: 'John Doe',
      address: '123 Main St, City',
      phone: '555-1234',
      description: 'Bir acil durum var, yardıma ihtiyacım var.',
      urgency: 'Kritik',
    },
    // Diğer form verileri burada eklenebilir
  ];
  return (
    <div>
      <ButtonComponent logo="animal.svg" path="/ambulans" title="Ambulans" />
      <ButtonComponent logo="animal.svg" path="/ambulanslist" title="AmbulansList" />
    </div>
  );
}

export default App;
