import useData from './useData'

const useFilms = () => useData('films')
// const useFilms = () => useData('http://localhost:3004/films')   // Using fetch via local server

export default useFilms
