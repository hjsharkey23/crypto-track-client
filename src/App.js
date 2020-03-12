import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './layout/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'

// import Layout from './layout/Layout'
import Coins from './coins/Coins'
import Coin from './coins/Coin'
import CoinCreate from './coins/CoinCreate'
import CoinEdit from './coins/CoinEdit'
import Home from './Home'

// import Alert from 'react-bootstrap/Alert'
import { AlertList } from 'react-bs-notifier'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: [],
      timeout: 2000,
      position: 'bottom-left'
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  // alert = (message, type) => {
  //   this.setState({ alerts: [...this.state.alerts, { message, type }] })
  // }

  alert = (message, type, headline = '', timeout = 2000) => {
    const newAlert = {
      id: (new Date()).getTime(),
      type: type,
      headline: headline,
      message: message
    }

    this.setState(prevState => ({
      alerts: [...prevState.alerts, newAlert]
    }), () => {
      setTimeout(() => {
        const index = this.state.alerts.indexOf(newAlert)
        if (index >= 0) {
          this.setState(prevState => ({
            // remove the alert from the array
            alerts: [...prevState.alerts.slice(0, index), ...prevState.alerts.slice(index + 1)]
          }))
        }
      }, timeout)
    })
  }

  render () {
    const { alerts, user, timeout, position } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        <AlertList
          position={position}
          alerts={alerts}
          timeout={timeout}
        />
        <main className="container">
          <Route exact path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route exact path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} exact path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/coins' render={() => (
            <Coins alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/coin-create' render={() => (
            <CoinCreate alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/coins/:id' render={({ match }) => (
            <Coin alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/coins/:id/edit' render={({ match }) => (
            <CoinEdit alert={this.alert} user={user} />
          )} />
          <Route exact path='/' render={() => (
            <Home />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App

// import React from 'react';
// import './App.scss';
// import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';
// function App() {
//   return (
//     <div className="App">
//       <header>
//         <Navbar expand="lg" variant="dark" bg="dark">
//           <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">
//                   <Nav.Link href="#home">Home</Nav.Link>
//                   <Nav.Link href="#link">Link</Nav.Link>
//                   <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                     <NavDropdown.Item>Action</NavDropdown.Item>
//                     <NavDropdown.Item>Another action</NavDropdown.Item>
//                     <NavDropdown.Item>Something</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                 </NavDropdown>
//               </Nav>
//               <Form inline>
//                 <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                 <Button variant="outline-success">Search</Button>
//               </Form>
//           </Navbar.Collapse>
//         </Navbar>
//       </header>
//       <div className="container">
//         <div className="row mt-5">
//             <div className="col-lg-4 mb-4 grid-margin">
//               <div className="card h-100">
//                   <h4 className="card-header">Card Title</h4>
//                   <div className="card-body">
//                     <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
//                   </div>
//                   <div className="card-footer">
//                     <Button variant="btn btn-primary">Learn More</Button>
//                   </div>
//               </div>
//             </div>
//             <div className="col-lg-4 mb-4 grid-margin">
//               <div className="card h-100">
//                   <h4 className="card-header">Card Title</h4>
//                   <div className="card-body">
//                     <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.</p>
//                   </div>
//                   <div className="card-footer">
//                     <Button variant="btn btn-primary">Learn More</Button>
//                   </div>
//               </div>
//             </div>
//             <div className="col-lg-4 mb-4 grid-margin">
//               <div className="card h-100">
//                   <h4 className="card-header">Card Title</h4>
//                   <div className="card-body">
//                     <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
//                   </div>
//                   <div className="card-footer">
//                     <Button variant="btn btn-primary">Learn More</Button>
//                   </div>
//               </div>
//             </div>
//         </div>
//         <div className="row mb-4">
//           <div className="col-sm-12 grid-margin">
//             <div className="card h-100">
//               <h4 className="card-header">Table</h4>
//               <div className="card-body">
//                 <Table striped bordered hover>
//                   <thead>
//                     <tr>
//                       <th>#</th>
//                       <th>First Name</th>
//                       <th>Last Name</th>
//                       <th>Username</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>1</td>
//                       <td>Mark</td>
//                       <td>Otto</td>
//                       <td>@mdo</td>
//                     </tr>
//                     <tr>
//                       <td>2</td>
//                       <td>Jacob</td>
//                       <td>Thornton</td>
//                       <td>@fat</td>
//                     </tr>
//                     <tr>
//                       <td>3</td>
//                       <td colSpan="2">Larry the Bird</td>
//                       <td>@twitter</td>
//                     </tr>
//                   </tbody>
//                 </Table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;
