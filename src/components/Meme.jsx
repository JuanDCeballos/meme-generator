import { useState } from 'react';
import memesData from '../memesData';

const Meme = () => {
  const [memeImage, setMemeImage] = useState('');

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <div className='form-container'>
      <form className='form'>
        <div className='inputs-container'>
          <input className='form-elem input' type='text' />
          <input className='form-elem  input' type='text' />
        </div>
        <input
          className='form-elem  btn'
          type='button'
          value='Get a new meme image  🖼'
          onClick={getMemeImage}
        />
      </form>
      <div className='image-container'>
        <img className='form-image' src={memeImage} />
      </div>
    </div>
  );
};

export default Meme;
