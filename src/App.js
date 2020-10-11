import React from 'react';
import { store } from "./store";
import { Provider } from "react-redux";
import { BabysitterController } from "./controllers/Babysitter/index.js"
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Provider store={store}>
        <BabysitterController />
      </Provider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
