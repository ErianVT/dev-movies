import logo from '../../assets/logo.png'

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <img src={logo} alt="Logo" style={{ width: '500px', height: 'auto' }} />
    </div>
  )
}

export default Header
