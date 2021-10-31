import NotFound from './Pages/NotFound/NotFound'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import ManageServices from './Pages/ManageServices/ManageServices';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
         <Header></Header>
       <Switch>
         <Route exact path='/'>
            <Home></Home>
         </Route>
         <Route path='/home'>
            <Home></Home>
         </Route>
         <Route path='/login'>
            <Login></Login>
         </Route>
         <PrivateRoute path='/booking/:serviceId'>
            <Booking></Booking>
         </PrivateRoute>
        
         <PrivateRoute path='/manageServices'>
            <ManageServices></ManageServices>
         </PrivateRoute>
         <PrivateRoute path='/booking'>
            <Booking></Booking>
         </PrivateRoute>
         <Route path='*'>
            <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
