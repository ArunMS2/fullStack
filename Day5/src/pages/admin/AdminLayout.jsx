import PropTypes from 'prop-types';
import Navbar from '../../component/Header/Navbar';
import Footer from '../../component/Footer/Footer';
const AdminLayout =({children})=> {
  return (
    <div>
       <Navbar/>
        <main>
            {children}
        </main>  
        <Footer/>
    </div>
  )
}

AdminLayout.propTypes={
    children: PropTypes.node.isRequired
}
export default AdminLayout