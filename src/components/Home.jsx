import './Home.css';
import NavbarComponent from './Navbar.jsx';
import Menu from './Menu.jsx';
import Card from './Card.jsx';

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <Menu>
            <h1>Menu Content</h1>
            <p>This is the content inside the Menu.</p>
            <div className='flex flex-row'>
                <Card>
                    <h1>Card1 Content</h1>
                    <p>This is the content inside the card.</p>
                </Card>
                <Card>
                    <h1>Card2 Content</h1>
                    <p>This is the content inside the card.</p>
                </Card>
            </div>
            <div className='flex'>
                <Card>
                    <h1>Card3 Content</h1>
                    <p>This is the content inside the card.</p>
                </Card>
                <Card>
                    <h1>Card4 Content</h1>
                    <p>This is the content inside the card.</p>
                </Card>
            </div>
            <div className='flex'>
                <Card>
                    <h1>Card1 Content</h1>
                    <p>This is the content inside the card.</p>
                </Card>
                <Card>
                    <h1>Card2 Content</h1>
                    <p>This is the content inside the card.</p>
                </Card>
            </div>
            <div className='flex'>
                <Card>
                    <h1>Card1 Content</h1>
                    <p>This is the content inside the card.</p>
                </Card>
                <Card>
                    <h1>Card2 Content</h1>
                    <p>This is the content inside the card.</p>
                </Card>
            </div>
      </Menu>
    </div>
  );
}

export default App;
