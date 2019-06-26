import React, { Component } from 'react'
import { Container, Sidebar } from 'semantic-ui-react'
import Footer from './Components/Footer'
import Map from './Components/Map'
import MenuSidebar from './Components/MenuSidebar'
import { Switch, Route } from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import HowThisWorks from './Components/HowThisWorks'
import AboutProject from './Components/AboutProject'
import BeingStockholmBeta from './Components/BeingStockholmBeta'
import Contact from './Components/Contact'
import Faq from './Components/Faq'
import MyProfile from './Components/MyProfile'
import AdminPage from './Components/AdminPage'
import { connect } from 'react-redux'


class App extends Component {

  render() {
    return (
      <>
        <Sidebar.Pushable
          as={Container}
          id='main-content'>

          <Switch>
            <Route exact path='/' component={Map}></Route>
            <Route exact path='/admin' component={AdminPage}></Route>
            <Route exact path='/how-this-works' component={HowThisWorks}></Route>
            <Route exact path='/about' component={AboutProject}></Route>
            <Route exact path='/being-stockholm-beta' component={BeingStockholmBeta}></Route>
            <Route exact path='/faq' component={Faq}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/log-in' component={Login}></Route>
            <Route exact path='/sign-up' component={SignUp}></Route>
            <Route exact path='/my-profile' component={MyProfile}></Route>
          </Switch>

          <MenuSidebar/>
        </Sidebar.Pushable>
        <Footer />    
      </>
    )
  }
}

export default connect()(App)
