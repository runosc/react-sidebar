import '../node_modules/bootstrap/scss/bootstrap.scss'
import './styles/_styles.scss'
import AdminLayout from './layouts/AdminLayout'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Helmet from 'react-helmet'

function App() {
  const { dark } = useSelector((state) => state.site)

  return (
    <div className={dark ? 'dark' : 'light'}>
      <Helmet>
        <title>Admin Paneli</title>
      </Helmet>
      <AdminLayout />
      <ToastContainer />
    </div>
  )
}

export default App
