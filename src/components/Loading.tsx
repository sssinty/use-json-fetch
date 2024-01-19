import useJsonFetch from "../hoc/useJsonFetch";

const Loading = (url : string) => {
  const [data, loading, error] = useJsonFetch(url)
  console.log(data, loading, error)
}

export default Loading;