import Button from './component/Button';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Nav from './layout/Nav';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <div className="px-8 mt-6">
        <Button bgColor={'#1f883d'} fontColor={'white'} />
      </div>
      <Footer />
    </>
  );
}

export default App;
