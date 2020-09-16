import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import absoluteUrl from 'next-absolute-url'
const axios = require('axios')

const Edit = ({ note }) => {

  const [form, setForm] = useState({ title: note.title, description: note.description })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        updateNote()
      } else {
        setIsSubmitting(false)
      }
    }
  }, [errors])

  const updateNote = async () => {

    try {
      await axios.put(`/api/notes/${router.query.id}`, form)

      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let errs = validate()
    setErrors(errs)
    setIsSubmitting(true)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    if (errors[e.target.name]) {
      delete errors[e.target.name]
    }
  }

  const validate = () => {
    let err = {}

    if (!form.title) {
      err.title = 'Title is required'
    }
    if (!form.description) {
      err.body = 'Body is required'
    }

    return err
  }

  return (
    <div className='container text-center'>
      <h3 className='mt-3'>Edit Post</h3>
      <div className="card">
        <div className="card-header">
          Edit Post
        </div>
        <div className="card-body">
          {
            isSubmitting ? 'Loading...'
              :
              <form onSubmit={handleSubmit}>
                <h4>Title:</h4><input type="text" name="title" className='mb-3' value={form.title} onChange={handleChange} />
                {
                  errors.title && <p><i className='text-danger'>{errors.title}</i></p>
                }
                <br />
                <hr className='w-60' />
                <h4>Description:</h4>
                <textarea onChange={handleChange} name="description" value={form.description} cols="30" rows="10" />
                {
                  errors.body && <p><i className='text-danger'>{errors.body}</i></p>
                }
                <br />
                <button type="submit" className='btn btn-primary'>Update</button>
              </form>
          }
        </div>
      </div>
    </div>
  )
}

Edit.getInitialProps = async ({ req, query: { id } }) => {
  const { protocol, host } = absoluteUrl(req)
  const res = await axios.get(`${protocol}//${host}/api/notes/${id}`)

  const { data } = res.data

  return { note: data }
}

export default Edit