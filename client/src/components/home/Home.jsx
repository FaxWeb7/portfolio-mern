import Header from './header/Header'
import Logo from './logo/Logo'
import './home.scss'

const Home = () => {
  return (
    <section className="home" id='home'>
      <Header />
      <Logo />
    </section>
  )
}

export default Home