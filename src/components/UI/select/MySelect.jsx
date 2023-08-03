import React from 'react';
import styles from './MySelect.modul.scss'

function MySelect({options, defaultValue, value, onChange}) {

  return (

        <select value={value} className={styles}
        onChange={(event) => onChange(event.target.value)}
        >
          <option disabled={true} value="">{defaultValue}</option>
          {options.map((option) => 
              <option key={option.value} value={option.value}>{option.name}</option>
          )}
        </select>
  )
}

export default MySelect;
