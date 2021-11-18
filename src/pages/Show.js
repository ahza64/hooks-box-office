import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config'

const Show = () => {
  const { id } = useParams()

  const [show, setShow] = useState(null)

  useEffect( () => {
    apiGet(`/shows/${id}?embed[]=seasons&ambed[]=cast`).then(results => {
      setShow(results)
    })
  }, [id])

  console.log('show', show);

  return (
    <div>
      this is show page
    </div>
  )
}

export default Show
