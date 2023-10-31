import SingleItem from './SingleItem'
import { useFetchTask } from './reactQueryCustomHook'

const Items = () => {
  const { isLoading, isError, data } = useFetchTask()

  if (isLoading) {
    return <p style={{ margin: '1rem' }}>Loading...</p>
  }

  if (isError) {
    return <p style={{ margin: '1rem' }}>There was an error...</p>
  }

  // if (error) {
  //   return <p style={{ margin: '1rem' }}>{error.response.data}</p>
  // }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </div>
  )
}
export default Items
