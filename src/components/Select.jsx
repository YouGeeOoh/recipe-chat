import React, { useState } from 'react'
import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";


function Select({country, onChange}) {
  countries.registerLocale(en);
  
  const countryList = Object.entries(countries.getNames("en"))
    .map(([code, name]) => ({
      code,
      name
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  
  
  return (
   <select value={country} onChange={onChange}>
    {countryList.map(({ code, name }) => (
      <option key={code} value={name.toLowerCase()}>
      {name}
    </option>
  ))}
</select>
  );
}

export default Select