import useData from './useData'

const usePlanets = () => useData('http://localhost:3004/planets')

export default usePlanets
