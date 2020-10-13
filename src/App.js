import React from 'react';
import { store } from "./store";
import { Provider } from "react-redux";
import { BabysitterController } from "./controllers/Babysitter/index.js"

function App() {
  return (
    <Provider store={store}>
      <BabysitterController />
    </Provider>
  );
}

export default App;
