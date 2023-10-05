import { useState } from 'react';
import memesData from '../memesData';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
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
        <img className='form-image' src={meme.randomImage} />
      </div>
    </div>
  );
};

export default Meme;
