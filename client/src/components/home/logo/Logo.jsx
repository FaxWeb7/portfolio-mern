import './logo.scss'
import logo from '../../../assets/logo.jpg'
import { BsMouse } from 'react-icons/bs'
import { useEffect } from 'react'

const Logo = () => {
  useEffect(() => {
    const bb = document.querySelector('.logo');
    const bb2 = document.querySelector('.circles');
    bb.addEventListener('click', () => {
      if (bb2.classList[1] === undefined){
        bb2.classList.add('active')
        bb.addEventListener('click', () => {
          if (bb2.classList[1] !== undefined){
            bb2.classList.remove('active')
            bb.addEventListener('click', () => {
              if (bb2.classList[1] === undefined){
                bb2.classList.add('active')
                bb.addEventListener('click', () => {
                  if (bb2.classList[1] !== undefined){
                    bb2.classList.remove('active')
                    bb.addEventListener('click', () => {
                      if (bb2.classList[1] === undefined){
                        bb2.classList.add('active')
                        bb.addEventListener('click', () => {
                          if (bb2.classList[1] !== undefined){
                            bb2.classList.remove('active')
                            bb.addEventListener('click', () => {
                              if (bb2.classList[1] === undefined){
                                bb2.classList.add('active')
                                bb.addEventListener('click', () => {
                                  if (bb2.classList[1] !== undefined){
                                    bb2.classList.remove('active')
                                    bb.addEventListener('click', () => {
                                      if (bb2.classList[1] === undefined){
                                        bb2.classList.add('active')
                                        bb.addEventListener('click', () => {
                                          if (bb2.classList[1] !== undefined){
                                            bb2.classList.remove('active')
                                            
                                          }
                                        })
                                      }
                                    }); 
                                  }
                                });
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            }); 
          }
        }); 
      }
    }); 
  }, [])

  return (
    <div className='logo-container'>
      <div className="container">
        <div className='logo'> 
          {/* <div className="circles">
          </div> */}
          <img src={logo} alt="logo" />
        </div>

        <a href="#footer" className='scroll-down'>
          <hr />
          <h5>Scroll Down</h5>
          <BsMouse />
          <hr />
        </a>
      </div>
    </div>
  )
}

export default Logo