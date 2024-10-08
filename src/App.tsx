import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import myPicture from './assets/cekiki_alimufki.jpg'  // Add this line
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h2>Assalamualaikum</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <img src={myPicture} alt="Cekiki Alimufki" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
      <img 
        src={myPicture} 
        alt="My Picture" 
        style={{
          width: '100%',
          maxWidth: '390px', // iPhone 12 Pro Max width
          height: 'auto',
          maxHeight: '844px', // iPhone 12 Pro Max height
          objectFit: 'contain',
          cursor: 'pointer' // Add cursor style to indicate clickability
        }}
        onClick={() => setCount((count) => count + 1)} // Add click handler to increment count
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
