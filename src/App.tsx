import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './page/Main';
import Nav from './layout/Nav';
import NewIssue from './page/NewIssue';

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/new" element={<NewIssue />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
