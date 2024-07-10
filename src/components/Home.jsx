import './Home.css';
import NavbarComponent from './Navbar.jsx';
import Menu from './Menu.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';
import ContactForm from './ContactForm.jsx';

function App() {
  return (
    <div className="App" id='home'>
      <NavbarComponent></NavbarComponent>
      <Menu>
      <h1 className='text-2xl'>Your Progress</h1>
            <div className='flex'>
                <Card cardName="Finansal Temeller" to="/FinansalOkuryazarliginTemelleri" >
                </Card>
                <Card>
                </Card>
            </div>
      </Menu>
      <Menu>
       
            <h1 className='text-2xl'>All Courses</h1>
            <div className='flex'>
                <Card>
                </Card>
                <Card>
                    
                </Card>
            </div>
            <div className='flex'>
                <Card>
                    
                </Card>
                <Card>
                    
                </Card>
            </div>
            <div className='flex'>
                <Card>
                    
                </Card>
                <Card>
                    
                </Card>
            </div>
            <div className='flex'>
                <Card>
                    
                </Card>
                <Card>
                    
                </Card>
            </div>
      </Menu>
      <div id='contact'>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
