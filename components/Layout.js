import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Blog Hub</title>

      // Cancelt automatic favicon request
      <link rel="icon" href="data:,"></link>
      <link rel="stylesheet" href="https://bootswatch.com/4/pulse/bootstrap.min.css" />
    </Head>
    <Navbar />
    {children}
  </div>
)

export default Layout