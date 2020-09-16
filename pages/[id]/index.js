import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
const axios = require('axios')
import absoluteUrl from 'next-absolute-url'

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
              <button className='btn btn-danger m-1' onClick={handleDelete}>Delete</button>
              <Link href={`/${note._id}/edit`}><button className='btn btn-primary'>Edit</button></Link>
            </div>
          </div>
      }
    </div>
  )
}

Note.getInitialProps = async ({ req, query: { id } }) => {

  const { protocol, host } = absoluteUrl(req)
  const res = await axios.get(`${protocol}//${host}/api/notes/${id}`)

  const { data } = res.data

  return { note: data }
}

export default Note