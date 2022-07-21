import './skills.scss'
import { BsPatchCheckFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {SERVER_URL} from '../../constants'

const Skills = () => {
  const [SkillsList, setSkillsList] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try{
      const response = await axios.get(`${SERVER_URL}/api/skills`).then(({ data }) => data)
      return setSkillsList(response)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <section className='skills' id='skills'>
      <div className="container">
        <div className="skills__inner">
          <h1 className="skills__title global-title">Мои навыки</h1>
          <div className="skills__content">
            {SkillsList.map(({ _id, title, exp }) => {
              return(
                <div className="skills__content-anim" data-aos="zoom-in-up" data-aos-duration="1000" key={_id}>
                  <div className="skills__list-wrapper">
                    <h2 className="skills__list-title">{title}</h2>
                    <ul className="skills__list">
                      {exp.map(({ _id, title, level }) => {
                        return(
                          <li className="skills__item" key={_id}>
                            <BsPatchCheckFill className='skills__item-img' />
                            <div className="skills__item-content">
                              <div className="skills__item-title">{title}</div>  
                              <div className="skills__item-level">{level}</div>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills