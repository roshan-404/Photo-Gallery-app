import React, { useState } from 'react';
import ImageGrid from './comps/imageGrid';
import Modal from './comps/modal';
import Title from './comps/Title';
import UploadForm from './comps/uploadForm';

function App() {
  const [selectedImg , setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={ selectedImg } setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
