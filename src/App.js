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
  )
})
Home.displayName = 'Home'

// const Subscription = React.forwardRef((props, ref) => {
//   return (
//     <>
//       <GetStarted ref={ref} gradient="#ffb800, #ffb800" />
//     </>
//   )
// })
// Subscription.displayName = 'Subscription'

// const LoginUser = React.forwardRef((props, ref) => {
//   return (
//     <>
//       <Login ref={ref} gradient="#ffb800, #ffb800" />
//     </>
//   )
// })
// LoginUser.displayName = 'LoginUser'

// const CreatedUser = React.forwardRef((props, ref) => {
//   return (
//     <>
//       <Created ref={ref} gradient="#ffb800, #ffb800" />
//     </>
//   )
// })
// CreatedUser.displayName = 'CreatedUser'

// const ContactForm = React.forwardRef((props, ref) => {
//   return (
//     <>
//       <Contact ref={ref} gradient="#ffb800, #ffb800" />
//     </>
//   );
// });
// ContactForm.displayName = 'ContactForm';

const App = () => {
  const titleRef = React.useRef()
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

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 600,
      easing: 'ease-out-sine',
    })
  }, [])

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
  }

  return (
    <AuthProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
        <Routes>
          <Route path="/" exact element={<Home ref={titleRef} />} />
          {/* <Route
            path="/subscription"
            element={<Subscription ref={titleRef} />}
          />
          <Route path="/login" element={<LoginUser ref={titleRef} />} />
          <Route path="/created" element={<CreatedUser ref={titleRef} />} />
          <Route path="/contact" element={<ContactForm ref={titleRef} />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
