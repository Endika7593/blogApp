import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar15.jpg'
import { FaEdit, FaCheck } from 'react-icons/fa'

const UserProfile = () => {
  const [avatar, setAvatar] = useState('')
  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/sdfsdf`} className="btn">My Posts</Link>

        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={Avatar} alt="" />
            </div>
            {/* Formulairo para actuaizar el avatar */}
            <form className="avatar__form">
              <input type="file" name="avatar" id="avatar" onCange={e => setAvatar(e.target.files[0])} accept="png, jpg, jpeg" />
              <label htmlFor="avatar"><FaEdit/></label>
            </form>
            <button className='profile__avatar-btn'><FaCheck/></button>
          </div>

          <h1>Ernest Achiever</h1>
        </div>
      </div>
    </section>
  )
}

export default UserProfile
