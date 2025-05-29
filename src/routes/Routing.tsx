import Details from '@/pages/Details'
import Home from '@/pages/Home'
import { Route, Routes } from 'react-router-dom'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  )
}

export default Routing
