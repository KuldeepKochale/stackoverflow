import React,{ useState } from 'react'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake,faPen } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Avtar/Avtar'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UserProfile.css'

const UserProfile = () => {

    const { id } = useParams();
    const users = useSelector((state) => state.usersReducer)
    const currentProfile = users.filter((user) => user._id === id)[0]  // as this is an array so we will be needing the fist element as that element will be our current user
    // console.log(currentProfile)
    const currentUser = useSelector((state) => state.currentUserReducer)
    
    const [Switch, setSwitch] = useState(false);

  return (
      <div className='home-container-1'>
          <LeftSidebar />
          <div className='home-container-2'>
              <section>
                  <div className='user-details-container'>
                      <div className='user-details'>
                          <div className='avatar'>
                          <Avatar backgroundColor='purple' color='white' fontSize='50px' px='40px' py='45px' borderRadius='15px'>
                            {currentProfile?.name.charAt(0).toUpperCase()}
                          </Avatar></div>
                          <div className='user-name'>
                              <h1 style={{fontSize:'33px'}}>{currentProfile?.name}</h1>
                              <p><FontAwesomeIcon icon={faBirthdayCake} /> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                          </div>
                          <div>
                              {
                                  currentUser?.result._id === id && (
                                      <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>
                                        <FontAwesomeIcon icon={faPen} /> Edit Profile
                                      </button>
                                  )
                              }
                          </div>
                      </div>
                  </div>
                  <>
                      {
                          Switch ? (
                              <EditProfileForm currentUser={currentUser} setSwitch={ setSwitch} /> 
                          ) : (
                                  <ProfileBio currentProfile={ currentProfile} />
                          )
                     }
                  </>
              </section>
          </div>
    </div>
  )
}

export default UserProfile