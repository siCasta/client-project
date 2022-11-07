import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/product/:pid' />
        </Routes>
    )
}

export default App
