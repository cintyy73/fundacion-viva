import Details from '@/pages/Details'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import { Route, Routes } from 'react-router-dom'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Routing
