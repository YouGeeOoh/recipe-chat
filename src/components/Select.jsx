import React, { useState } from 'react'
// import {getCountries} from 'country-list'


function Select({country, onChange}) {
  
  return (
    <select name="country" id="country" value={country} onChange={onChange}>
        <option value="nigeria">Nigeria</option>
        <option value="ghana">Ghana</option>
        <option value="usa">USA</option>
    </select>
  );
}

export default Select