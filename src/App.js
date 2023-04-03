import AppRouter from "./router/AppRouter.jsx";
import { ToastContainer } from "react-toastify";
// toastcontainerı çağırmazsak toastify çalışmıyor.

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
