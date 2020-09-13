import { useState } from 'react'
import { useRouter } from 'next/router'
const axios = require('axios')

const Note = ({ note }) => {

  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    setIsDeleting(true)

    try {
      const deleteID = router.query.id
      await axios.delete(`http://localhost:3000/api/notes/${deleteID}`)

      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container text-center mt-3'>
      {
        isDeleting ? 'Deleting...'
          :
          <div className="card">
            <h4 className="card-header">{note.title}</h4>
            <div className="card-body">
              <p className="card-text">{note.description}</p>
              <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
            </div>
          </div>
      }
    </div>
  )
}

Note.getInitialProps = async ({ query: { id } }) => {
  const res = await axios.get(`http://localhost:3000/api/notes/${id}`)

  const { data } = res.data

  return { note: data }
}

export default Note