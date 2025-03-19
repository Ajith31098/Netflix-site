import React from "react";
import { action,originals,thriller,romance,documentory } from '../../urls'
import RowPost from "../RowPost/RowPost";
import NavBar from "../Navbar/NavBar";
import Banner from "../Navbar/Banner/Banner";


function Home() {
  return (
      <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Originals' />
        <RowPost url={action} title='Action' isSmall />
        <RowPost url={thriller} title='Thriller' isSmall />
        <RowPost url={romance} title='Horror' isSmall />
        <RowPost url={documentory} title='Documentary' isSmall />
      </div>
  );
}

 
export default Home;