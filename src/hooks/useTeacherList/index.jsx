import { useState, useEffect } from "react"
import {apiService} from "../../services/api"

function useTheacherList () {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const fetchData = async () => {
    const response = await apiService.get('/teachers')

    setError(response.error)
    setData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    teachers: data,
    error
  }
}

export default useTheacherList