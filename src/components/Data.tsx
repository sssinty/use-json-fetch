import useJsonFetch from "../hoc/useJsonFetch";

const Data = (url : string) => {
  const [data, loading, error] = useJsonFetch(url)
  console.log(data, loading, error)
}

export default Data;