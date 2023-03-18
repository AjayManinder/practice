
import './App.css';
import Header from './Header/Header';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from "./Pages/About";
import Footer from './Footer/Footer';
import Contact from './Pages/contact';
import Content from './Pages/Content';
import ApiCalling from './Pages/ApiCalling';
import { ContentImg } from './Pages/ContentImg';
function App() {

 const arrays=[
{ id: 1, title: 'Trees', image: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg', description:"A tree is a tall plant that can live for a very long time. It has a single stem or trunk and branches that support leaves. Beneath the ground, a tree has a root system that acts as an anchor and stores the water and nutrients the plant needs to grow." },
{ id: 2, title: 'Ocean', image: 'https://cdn.pixabay.com/photo/2017/02/26/12/39/sunset-2100146__340.jpg', description:"The ocean is a huge body of saltwater that covers about 71 percent of Earth's surface. The planet has one global ocean, though oceanographers and the countries of the world have traditionally divided it into four distinct regions: the Pacific, Atlantic, Indian, and Arctic oceans." },
{ id: 3, title: 'Nature', image: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg', description:"Nature is the ultimate source of our living. Both living and non-living things include nature, and everyone is interdependent, which helps maintain the ecosystem. Plants, animals, and humans all depend on nature for their survival. It supplies oxygen, sunlight, soil, water, and other necessary components." },
{ id: 4, title: 'Mountains', image: 'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320', description:"They usually have steep, sloping sides and sharp or rounded ridges, and a high point, called a peak or summit. Most geologists classify a mountain as a landform that rises at least 1,000 feet (300 meters) or more above its surrounding area." },
{ id: 5, title: 'Moon', image: 'https://www.nature.com/immersive/d41586-022-04372-2/assets/FCYxD00tLr/tonga-sh-h-2560x1440.jpg' , description:"The brightest and largest object in our night sky, the Moon makes Earth a more livable planet by moderating our home planet's wobble on its axis, leading to a relatively stable climate. It also causes tides, creating a rhythm that has guided humans for thousands of years."},
{ id: 6, title: 'Lion', image: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=pexels-pixabay-247502.jpg&fm=jpg', description:"Lions have strong, compact bodies and powerful forelegs, teeth and jaws for pulling down and killing prey. Their coats are yellow-gold, and adult males have shaggy manes that range in color from blond to reddish-brown to black. The length and color of a lion's mane is likely determined by age, genetics and hormones." },
{ id: 7, title: 'City', image: 'https://cdn.theatlantic.com/media/img/photo/2020/10/massachusetts-photos/a01_486924520-1/original.jpg',description:"city, relatively permanent and highly organized centre of population, of greater size or importance than a town or village. The name city is given to certain urban communities by virtue of some legal or conventional distinction that can vary between regions or nations." },
{ id: 8, title: 'Galaxy', image: 'https://www.nasa.gov/sites/default/files/thumbnails/image/potw2122a.jpg', description:"A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity. Our galaxy, the Milky Way, also has a supermassive black hole in the middle. When you look up at stars in the night sky, you're seeing other stars in the Milky Way." },
]

  return (
    <>
    
   
   
<Header/>
   
           <div className="App">
            
           <Routes>
            
                 <Route exact path='/' element={< Home arrays={arrays}/>}></Route>
                 <Route exact path='/About' element={< About />}></Route>
                 
                 <Route exact path='/contact' element={< Contact />}></Route>
                  <Route exact path='/ApiCalling' element={< ApiCalling />}></Route>
                  <Route exact path='/Content/:id' element={< Content />}></Route>
                  <Route exact path='/ContentImg/:title' element={< ContentImg arrays={arrays} />}></Route>
          </Routes>
          </div>
     
       <Footer/>

    </>
  );
}

export default App;
