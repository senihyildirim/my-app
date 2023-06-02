import React, { useEffect } from 'react';

const AracList = () => {

    const data = [
        {
          name: 'John Doe',
          address: '123 Main St, City',
          phone: '555-1234',
          description: 'Bir acil durum var, yardıma ihtiyacım var.',
          urgency: 'Kritik',
        },
        {
            name: 'John Doe',
            address: '123 Main St, City',
            phone: '555-1234',
            description: 'Bir acil durum var, yardıma ihtiyacım var.',
            urgency: 'Kritik',
          },
      ];
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', color: '#333' }}>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Yolcu Tasiyabilenler</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}> 
            <table style={{ borderCollapse: 'collapse', width: '80%', borderRadius:'20px'}}>
                <thead>
                    <tr style={{ backgroundColor: '#f07f13', color: '#fff' }}>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>İsim</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Adres</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Telefon</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Açıklama</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Aciliyet</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.address}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.phone}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.description}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.urgency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

    </div>
    </div>

  );
};

export default AracList;
