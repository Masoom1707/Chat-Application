import React from 'react'
import { useAuthStore } from '../store/authStore'
import { NavLink } from 'react-router-dom';
import { LogOut, Settings, UserRoundCheck } from 'lucide-react';

const Navbar = () => {
  const {logout,authUser} = useAuthStore();
  return (
    <header>
      <div className="title">
        <h2>ChitChat</h2>
      </div>
      <div className="options">
        <NavLink>
          <Settings width={"2.9vh"} />
          <span>Settings</span>
        </NavLink>
        {authUser && (<>
          <NavLink className='nav-User' to={"/profile"}>
            <UserRoundCheck width={"2.9vh"} />
            <span>Profile</span>
          </NavLink>
          <button onClick={logout}>
          <LogOut width={"2.9vh"}/>
            <span>Log out</span>
          </button>
        </>)}
      </div>
    </header>
  )
}

export default Navbar