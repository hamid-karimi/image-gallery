import { Fragment } from 'react';
import './App.css';
import Gallery from './components/gallery/Gallery'
import Header from './Header'
import getData from './data'


const App = () => {
  let images = getData();
  return (
    <Fragment>
      <Header />
      <div className="gallery">
        <Gallery imgarr={images} />
      </div>
    </Fragment>
  );
}

export default App;
