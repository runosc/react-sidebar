import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Egitim from '../pages/Egitim/Egitim'
import Deneyim from '../pages/Deneyim/Deneyim'
import SporcuList from '../components/SporcuList/SporcuList'
import UyruklarList from '../components/Uyruklar/UyruklarList'
import Sporcular from '../components/Sporcular/Sporcular'
import SporcuProfil from '../components/SporcuProfil/SporcuProfil'
import Navbarr from '../components/Navbar/Navbarr'
import Ayarlar from '../components/Ayarlar/Ayarlar'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import Hata from '../components/Hata/Hata'





const AdminLayout = () => {
  const {dilToggleAyar}=useSelector(state =>state.site)
  return (
    <div role="navigation">
      <BrowserRouter>
        <Sidebar />
        <div className="home_content">
          <Navbarr/>
          <div className="home_content_inner">
            <Routes>
              <Route path="/" element={<h1>Anasayfa</h1>}></Route>
              <Route path="/hakkimda" element={<h1>Hakkımda</h1>}></Route>
              <Route path="/sporcular/tum" element={<Sporcular/>}></Route>
              <Route path="/sporcular/list" element={<SporcuList/>}></Route>
              <Route path='/profil/:id' element={<SporcuProfil/>}></Route>
              <Route path='/ayarlar' element={<Ayarlar/>}></Route>



              <Route path="/egitim" element={<Egitim />}></Route>
              <Route path="/egitim/okullar" element={<h1>Okullar</h1>}></Route>

              
              <Route path="/deneyim" element={dilToggleAyar?<Deneyim/>:<Hata />}></Route>
              {/* <Route path="/hata" element={<Hata />}></Route> */}

              <Route path="/uyruklar" element={<UyruklarList />}></Route>

              <Route path="/beceri" element={<h1>Beceri</h1>}></Route>
              <Route path="/iletisim" element={<h1>İletişim</h1>}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default AdminLayout
