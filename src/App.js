import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { mainBody, about, repos } from './editable-stuff/config.js'
import MainBody from './components/home/MainBody'
import AboutMe from './components/home/AboutMe'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Aos from 'aos'
import 'aos/dist/aos.css'
import UsageFirst from './components/home/UsageFirst.jsx'
import UsageSecond from './components/home/UsageSecond.jsx'
import UsageThird from './components/home/UsageThird.jsx'
import { ShowData } from './components/home/Showdata.jsx'
import { AuthProvider } from './hooks/useAuthContext.jsx'
import GetStarted from './components/home/GetStarted.jsx'
import Login from './components/home/Login.jsx'
import Created from './components/home/Created.jsx'
import NavigateUsage from './components/home/NavigateUsage.jsx'
import Contact from './components/home/Contact.jsx'

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.productName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      <ShowData gradient={repos.gradientColors} />
      <AboutMe
        heading={about.heading}
        message={about.message}
        link={about.imageLink}
        imgSize={about.imageSize}
        resume={about.resume}
        gradient={about.gradientColors}
      />
      <NavigateUsage gradient={repos.gradientColors} message={repos.message} />
      <UsageFirst gradient={repos.gradientColors} />
      <UsageSecond gradient={repos.gradientColors} />
      <UsageThird gradient={repos.gradientColors} />
      <Footer gradient={repos.gradientColors} />
      <Navbar ref={ref} />
    </>
  )
})
Home.displayName = 'Home'

const Subscription = React.forwardRef((props, ref) => {
  return (
    <>
      <GetStarted ref={ref} gradient="#ffb800, #ffb800" />
    </>
  )
})
Subscription.displayName = 'Subscription'

const LoginUser = React.forwardRef((props, ref) => {
  return (
    <>
      <Login ref={ref} gradient="#ffb800, #ffb800" />
    </>
  )
})
LoginUser.displayName = 'LoginUser'

const CreatedUser = React.forwardRef((props, ref) => {
  return (
    <>
      <Created ref={ref} gradient="#ffb800, #ffb800" />
    </>
  )
})
CreatedUser.displayName = 'CreatedUser'

const ContactForm = React.forwardRef((props, ref) => {
  return (
    <>
      <Contact ref={ref} gradient="#ffb800, #ffb800" />
    </>
  );
});
ContactForm.displayName = 'ContactForm';

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
          <Route
            path="/subscription"
            element={<Subscription ref={titleRef} />}
          />
          <Route path="/login" element={<LoginUser ref={titleRef} />} />
          <Route path="/created" element={<CreatedUser ref={titleRef} />} />
          <Route path="/contact" element={<ContactForm ref={titleRef} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
