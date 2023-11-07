import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import React from 'react'

const dashboard = () => {
  const {getUser} = getKindeServerSession();
  const user = getUser();
  return (
    <div>{user.email}</div>
  )
}

export default dashboard