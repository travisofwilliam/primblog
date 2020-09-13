import Link from 'next/link'

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ justifyContent: 'space-between' }}>
      <Link href="/">
        <a className="navbar-brand">Blog Hub</a></Link>
      <div className="navbar-nav">
        <Link href="/new">
          <a className="nav-item nav-link">Create Post</a>
        </Link>
      </div>
    </nav>
  </div>
)

export default Navbar