import React, { useState } from 'react';

// Sample data for countries
const countriesData = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "GB", name: "United Kingdom" },
  { code: "AU", name: "Australia" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
  { code: "CN", name: "China" },
  { code: "IN", name: "India" },
  { code: "NG", name: "Nigeria" },
];

function Select({ country, onChange }) {

  // Sort countries alphabetically by name
  const sortedCountries = countriesData.sort((a, b) => a.name.localeCompare(b.name));
  console.log(sortedCountries);

  // Render the select dropdown with sorted countries
  return (
    <select value={country} onChange={onChange}>
      {sortedCountries.map(({ code, name }) => (
        <option key={code} value={name.toLowerCase()}>
          {name}
        </option>
      ))}
    </select>
  );
}

export default Select