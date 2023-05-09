import React from 'react'
import Nav from './components/nav/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Works from './components/works/Works'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Services from './components/services/Services'
import Documentation from './components/documentation/Documentation'
import Satisfaction from './components/satisfaction/Satisfaction'
import WorkSpace from './components/workSpace/WorkSpace'
import Customers from './components/customers/Customers'
import Speeches from './components/speeches/Speeches'
import Questions from './components/questions/Questions'
import Testimonials from './components/testimonials/Testimonials'
import Project from './components/project/Project'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Nav />
          <Home />
          <Services />
          <Documentation />
          <Satisfaction />
          <WorkSpace />
          <Customers />
          <Speeches />
          <Questions />
          <Testimonials />
          <Project />
          <Footer top={16600} />
        </Route>
        <Route path='/works'>
          <Nav />
          <Works />
          <Testimonials top={4400} />
          <Project top={7600} />
          <Footer top={8100} />
        </Route>
        <Route path='/about'>
          <Nav />
          <About />
          <WorkSpace top={12850} />
          <Project top={16050} />
          <Footer top={16500} />
        </Route>
        <Route path='/contact'>
          <Nav />
          <Contact />
          <Footer top={1900} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
