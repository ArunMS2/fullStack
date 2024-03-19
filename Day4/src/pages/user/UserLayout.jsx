import PropTypes from 'prop-types';
import Navbar from '../../component/Header/Navbar';
import Footer from '../../component/Footer/Footer';
const UserLayout =({children})=> {
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

UserLayout.propTypes={
    children: PropTypes.node.isRequired
}
export default UserLayout