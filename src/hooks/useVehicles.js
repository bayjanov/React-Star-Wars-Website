import useData from './useData'

const useVehicles = () => useData('http://localhost:3004/vehicles')

export default useVehicles
