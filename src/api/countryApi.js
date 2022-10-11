import axios from 'axios'

const baseUrl = 'https://date.nager.at/api/v3'

export const getCountries = async () => {
  const url = `${baseUrl}/AvailableCountries`
  return (await axios.get(url)).data
}

export const getHolidays = async (countryCode) => {
  const url = `${baseUrl}/PublicHolidays/2022/${countryCode}`
  return (await axios.get(url)).data
}