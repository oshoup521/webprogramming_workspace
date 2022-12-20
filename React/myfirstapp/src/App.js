import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Employee from './components/Employee';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <Jumbotron></Jumbotron>
      <Employee></Employee>
      <Footer></Footer>
    </div>
  );
}

export default App;
