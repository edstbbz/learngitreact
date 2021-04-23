// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({style, className, ...props}) => {
  return <div
    className={`box ${className}`}
    style={{fontStyle: 'italic', ...style}}
    {...props}
    />
}

const App = () => {
  return (
    <div>
    <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
     <Box>sizeless box</Box>
    </div>
  )
}

export default App
