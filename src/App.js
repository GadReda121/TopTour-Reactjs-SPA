import React, { Component } from 'react';
import EightSection from './Components/EightSection/EightSection';
import FifthSection from './Components/FifthSection/FifthSection';
import FristSection from './Components/FirstSection/FristSection';
import FourSection from './Components/FourSection/FourSection';
import Navbar from './Components/Navbar/Navbar';
import SecondSection from './Components/SecondSection/SecondSection';
import SevenSection from './Components/SevenSection/SevenSection';
import SixSection from './Components/SixSection/SixSection';
import ThirdSection from './Components/ThirdSection/ThirdSection';
import Routes from './Components/Router/Routers';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div  style={{display:'grid', gridRowGap:'150px'}} >
        <FristSection />
        <Routes />
        <SecondSection />
        <ThirdSection />
        <FourSection />
        <FifthSection />
        <SixSection />
        <SevenSection />
        <EightSection />
        </div>
      </div>
    )
  }
}

export default App;