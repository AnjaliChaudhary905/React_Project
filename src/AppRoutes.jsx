
import { Routes,Route } from 'react-router-dom'
import { Home,About,Contact,Menu,Services,PageNotFound,AllergyAdvice } from './pages'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/allergy-advice' element={<AllergyAdvice/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

export default AppRoutes