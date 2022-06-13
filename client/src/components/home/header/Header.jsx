import './header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__inner'>
          <div className='header__subtitle'>I<span>'</span>m</div>
          <h1 className='header__name'>FaxWeb</h1>
          <h2 className='header__description'>web-developer</h2>
        </div>
      </div>
    </div>
  )
}

export default Header