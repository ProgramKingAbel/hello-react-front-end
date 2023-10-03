import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/features/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.message);
  useEffect(() => {
    if (!greeting) {
      dispatch(fetchMessage())
        .then(() => {
        // eslint-disable-next-line
          console.log('Greeting fetched successfully');
        })
        .catch((error) => {
        // eslint-disable-next-line
          console.error('Error fetching greeting:', error);
        });
    }
  }, [dispatch, greeting]);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
