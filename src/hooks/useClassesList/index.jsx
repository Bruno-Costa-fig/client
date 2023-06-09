import { useState, useEffect } from "react"
import {apiService} from "../../services/api"

function useClassesList () {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const fetchData = async () => {
    const response = await apiService.get('/classes')

    const dados = []

    if(!!response.data){
      for(let i = 0; i < response.data.length; i++){
        const teacher = await apiService.get(`/teachers/${response.data[i].teacherId}`)

        if(!!teacher.data){
          dados.push({
            teacher: {...teacher.data},
            ...response.data[i]
          })
          console.log(dados)
        }
      }
    }

    setError(response.error)
    setData(dados)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    classes: data,
    error
  }
}

export default useClassesList