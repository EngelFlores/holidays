import { useEffect, useState } from 'react';
import './App.css';

import { DropDown } from './components/DropDown'

import { getCountries } from './api/countryApi'

function App() {
  const [countries, setCountries] = useState();
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const initialData = await getCountries()
      setCountries(initialData)
    }
    getData()
  }, [])

  return (
    <>
      <DropDown selected={selected} showCountries={setSelected} countries={countries}></DropDown>
    </>
  );
}

export default App;
