import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';

const Joke = () => {
  const [joke, setJoke] = useState('');

  const handleShowJoke = () => {
    axios
      .get('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setJoke(response.data.joke);
      })
      .catch((error) => {
        console.error('Error fetching joke:', error);
      });
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>Joke of the Day</h1>
      {<p className='text-xl font-bold m-8'>{joke}</p>}
      {
        <Button
          onClick={handleShowJoke}
          color='gray'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Show me a Joke
        </Button>
      }
    </div>
  );
};

export default Joke;
