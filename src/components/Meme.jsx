const Meme = () => {
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
        />
      </form>
    </div>
  );
};

export default Meme;
