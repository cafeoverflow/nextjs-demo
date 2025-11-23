import React from 'react'
import Hello from '../components/hello'

const Home = () => {
  console.log('test')
  return (
    <main>
      <div className='text-1xl'>Welcome to Next.js with TypeScript!</div>
      <Hello />
    </main>
  )
}

export default Home