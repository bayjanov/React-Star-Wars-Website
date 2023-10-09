import { useState, useEffect } from 'react'
import db from '../../db.json'

const useData = (key) => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    try {
      const fetchedData = db[key]
      if (fetchedData) {
        setData(fetchedData)
      } else {
        setError('Data not found')
      }
    } catch (err) {
      setError(err.message)
    }
  }, [key])

  return { data, error }
}

export default useData

/* // Version that uses local server

import { useState, useEffect } from 'react'
import axios from 'axios'  // for axios 

const useData = (endpoint) => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const source = axios.CancelToken.source()

    axios
      .get(endpoint, { cancelToken: source.token })
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        if (axios.isCancel(err)) return
        setError(err.message)
      })

    return () => source.cancel()
  }, [endpoint])

  return { data, error }
}

export default useData
*/

// Using fetch
/*
import { useState, useEffect } from 'react'

const useData = (endpoint) => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    fetch(endpoint, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((result) => {
        setData(result)
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        setError(err.message)
      })

    return () => controller.abort()
  }, [endpoint])

  return { data, error }
}

export default useData
*/
