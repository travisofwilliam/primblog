import { useState } from 'react'
import Link from 'next/link'
const axios = require('axios')

const Index = ({ notes }) => {

  return (
    <div className='container text-center'>
      <h3 className='m-3'>Blog Posts</h3>
      <div className='row'>
        {
          notes.map((note) => {
            return (
              <div key={note._id} className='col-sm-4 mb-4'>
                <div className="card">
                  <div className="card-header">
                    <h5>{note.title}</h5>
                  </div>
                  <div className="card-body">
                    <p>{note.description}</p>
                    <Link href={`/${note._id}`}>
                      <a className="btn btn-primary mr-2">View</a>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

Index.getInitialProps = async () => {
  const res = await axios.get('http://localhost:3000/api/notes')

  const data = res.data.data

  return { notes: data }
}

export default Index