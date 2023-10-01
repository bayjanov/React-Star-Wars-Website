import useData from './useData'

const useCharacters = () => useData('http://localhost:3004/characters')

export default useCharacters
