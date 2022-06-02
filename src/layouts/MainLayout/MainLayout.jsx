import { Link, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <header
        style={{
          height: '50px',
          padding: '5px 10px',
          backgroundColor: '#000',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 9999,
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#fff',
          }}
        >
          <h1
            style={{
              fontSize: '24px',
            }}
          >
            Mine💥sweeper
          </h1>
        </Link>
      </header>
      <main
        style={{
          paddingBlock: '50px',
          minHeight: '95vh',
        }}
      >
        <Outlet />
      </main>
      <footer
        style={{
          height: '50px',
          padding: '5px 10px',
          backgroundColor: '#000',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          © 2022 Tien Hoang Vo. All rights reserved
        </p>
      </footer>
    </>
  )
}

export default MainLayout
