import axios from "axios";
import { useEffect, useState } from "react";
// interface IuseJsonFetch {
//   data: object,
//   loading: boolean,
//   error: string,
// }

function useJsonFetch (url : string) {
  const [data, setData] = useState<object>({})
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)

  const fatchData = () => {
    axios.get(url)
    .then((resspons) => {
      setData(resspons.data)
    })
    .catch((error : string) => {setError(error)})
    .finally(() => {setLoading(true)})
  }

  useEffect(() => {
    void fatchData
  }, [url])

  return [{data, loading, error}]
}

export default useJsonFetch;