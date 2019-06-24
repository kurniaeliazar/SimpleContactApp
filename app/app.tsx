import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import reactotronSaga from "reactotron-redux-saga";

import reducer from "./reducer";
import { watcherSaga } from "./contacts/sagas";

import Main from "./contacts/views/Main";

const RootStack = createStackNavigator(
  {
    ContactMainScreen: {
      screen: Main
    }
  },
  {
    initialRouteName: "ContactMainScreen"
  }
);

let Navigation = createAppContainer(RootStack);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

if (__DEV__) {
  (Reactotron.configure({
    name: "Simplecontact App"
  }) as typeof Reactotron).useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/
    },
    editor: false, // there are more options to editor
    errors: { veto: stackFrame => false }, // or turn it off with false
    overlay: false // just turning off overlay
  });
  Reactotron.use(reactotronRedux()).use(reactotronSaga({}));
  Reactotron.connect();
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
