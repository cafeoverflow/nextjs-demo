import React from 'react'
import Hello from '../../components/hello'

const Home = () => {
  console.log('test')

  // the closest error boundary is in app/(root)/error.tsx
  throw new Error('Test error for error boundary')

  return (
    <main>
      <div className='text-1xl'>Welcome to Next.js with TypeScript!</div>
      <Hello />
    </main>
  )
}

export default Home