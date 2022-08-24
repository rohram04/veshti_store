import "../styles/globals.css";
import Layout from "../components/layout";
// import { store, persistor } from "../hooks/configureStore";
import { Provider, useDispatch } from "react-redux"; // defaults to localStorage for web

import { store, persistor } from "../hooks/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { PageLoader } from "../components/loader";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<PageLoader stroke="#000000" />}
        persistor={persistor}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
