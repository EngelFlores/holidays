import React from 'react'

import { getHolidays } from '../api/countryApi'

const DropDown = ({ countries, selected, showCountries }) => {

  const getPublicHolidays = async (countryCode) => {
    const holidays = await getHolidays(countryCode)
    groupByMonth(holidays)
    showCountries(!selected)
  }

  const groupByMonth = (holidays) => {
    let month
    let helper
    holidays.map(holiday => {
      const date = holiday.date.split('-')
      month = date[1]
      if(!helper || month !== helper ) {
       helper = month
      }
      return (<span></span>)
    })
  }

  return (
    <>
      <p onClick={() => showCountries(!selected)}>Select a country</p>
      {selected && countries?.length > 0 && countries.map(country => {
        return (
          <p onClick={() => getPublicHolidays(country.countryCode)} key={country.countryCode}>{country.name}</p>
        )
      })}
    </>
  )
}

export { DropDown };