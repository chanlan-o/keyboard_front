import React from 'react';
import Header from './Header';
import KeyboardSlider from './KeyboardSlider';
// import KeyboardInfo from './KeyboardInfo';
import FilterForm from './FilterForm';

function Home() {
  return (
    <div>
      <Header />
      <KeyboardSlider />
      { /* <KeyboardInfo /> */}
      <FilterForm />
    </div>
  );
}

export default Home;
