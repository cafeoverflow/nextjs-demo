import React from 'react'

// Async Server Component
const UserDetails = async({params}: { params: Promise<{ id: string } >}) => {
  const { id } = await params
  return (
    <div>
      Showing details for user #{id}
    </div>
  )
}



export default UserDetails