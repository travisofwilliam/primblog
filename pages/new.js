import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
const axios = require('axios')

const NewPost = () => {

  const [form, setForm] = useState({ title: '', description: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createNote()
      } else {
        setIsSubmitting(false)
      }
    }
  }, [errors])

  const createNote = async () => {
    try {
      await axios.post('/api/notes', form)

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
      <h3 className='mt-3'>Create New Post</h3>
      <div className="card">
        <div className="card-header">
          New Post
        </div>
        <div className="card-body">
          {
            isSubmitting ? 'Loading...'
              :
              <form onSubmit={handleSubmit}>
                <h4>Title:</h4><input type="text" name="title" className='mb-3' onChange={handleChange} />
                {
                  errors.title && <p><i className='text-danger'>{errors.title}</i></p>
                }
                <br />
                <hr className='w-60' />
                <h4>Description:</h4>
                <textarea onChange={handleChange} name="description" id="" cols="30" rows="10" />
                {
                  errors.body && <p><i className='text-danger'>{errors.body}</i></p>
                }
                <br />
                <button type="submit" className='btn btn-primary'>Create</button>
              </form>
          }
        </div>
      </div>
    </div>
  )
}

export default NewPost