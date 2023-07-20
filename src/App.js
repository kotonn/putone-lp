import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { mainBody } from './editable-stuff/config.js'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { AuthProvider } from './hooks/useAuthContext.jsx'
import Top from './components/home/Top.jsx'
import Navigation from './components/Navbar.jsx'
import { About } from './components/home/About.jsx'
import Functions from './components/home/Functions.jsx'
import News from './components/home/News.jsx'
import Contact from './components/home/Contact.jsx'
import Footer from './components/Footer.jsx'
import { Bars } from 'react-loader-spinner'

const Home = React.forwardRef((props, ref) => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className={`loader ${fadeOut ? 'fade-out' : ''}`}>
        <Bars
          height="50"
          width="50"
          color="#ff914d"
          ariaLabel="bars-loading"
          wrapperClass="loader_spinner"
          visible={true}
        />
      </div>
    );
  } else {
    return (
      <>
        <Top
          gradient={mainBody.gradientColors}
          title={`${mainBody.productName}`}
          message={mainBody.message}
          icons={mainBody.icons}
          ref={ref}
        />
        <About />
        <Functions />
        <News />
        <Contact />
        <Navigation ref={ref} />
        <Footer />
      </>
    );
  }
})
Home.displayName = 'Home'

const App = () => {
  const titleRef = React.useRef()

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 600,
      easing: 'ease-out-sine',
    })
  }, [])

  return (
    <AuthProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
        <Routes>
          <Route path="/" exact element={<Home ref={titleRef} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
