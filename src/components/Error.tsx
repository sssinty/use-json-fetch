import useJsonFetch from "../hoc/useJsonFetch";

const Error = (url : string) => {
  const [data, loading, error] = useJsonFetch(url)
  console.log(data, loading, error)
}

export default Error;