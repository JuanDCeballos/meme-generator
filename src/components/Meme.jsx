import { useEffect, useState } from 'react';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <div className='form-container'>
      <form className='form'>
        <div className='inputs-container'>
          <input
            className='form-elem input'
            type='text'
            placeholder='Top text'
            name='topText'
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            className='form-elem  input'
            type='text'
            placeholder='Bottom text'
            name='bottomText'
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <input
          className='form-elem  btn'
          type='button'
          value='Get a new meme image  🖼'
          onClick={getMemeImage}
        />
      </form>
      <div className='image-container'>
        <img src={meme.randomImage} className='form-image' />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </div>
  );
};

export default Meme;
