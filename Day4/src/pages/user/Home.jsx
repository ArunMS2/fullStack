import React from 'react'
import ImageSlider from '../../component/ImageSlider';
import Navbar from '../../component/Header/Navbar';
import Explore from './Explore';
import '../../assets/css/Home.css'
import Footer from '../../component/Footer/Footer';
import boat from '../../assets/images/ex1.jpg';
import boat2 from '../../assets/images/pro.jpg';
import boathouse from '../../assets/images/boathouse.jpg';
function Home() {
  const slides = [
      { image: boat },
      { image: boat2 },
      { image: boathouse }
  ];
  return (
    <div>
        <Navbar />
        <ImageSlider slides={slides} autoPlay={true} />
        <Explore/>
        <Footer />
    </div>
  );
}

export default Home