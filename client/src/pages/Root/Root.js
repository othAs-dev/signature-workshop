import React from 'react'
import { Outlet } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { useAuth } from '../../hooks/useAuth'

export default function Root() {
  const auth = useAuth();
  return (
    <div className='flex flex-col gap-12'>
      <div>
        <Outlet></Outlet>
      </div>
      <Button color={'primary'} callback={auth.logout} name="Sign Out" />
    </div>
  )
}
