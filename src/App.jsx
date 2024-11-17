import React from 'react'
import assets from './assets/assets'
const App = () => {
  return (
    <div>
      {assets.map(asset=>{return <img height={500} src = {asset}/>})}
    </div>
  )
}

export default App;