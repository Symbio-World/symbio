import React, { useEffect } from 'react';
import { Scanner } from './scanner';
import RNBootSplash from "react-native-bootsplash";

export const Home = () => {
  let init = async () => {
    // …do multiple async tasks
  };

  useEffect(() => {
    init().then(() => {
      RNBootSplash.hide({ duration: 250 });
    });
  }, []);

  return <Scanner />
}
