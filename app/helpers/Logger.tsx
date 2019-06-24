import Reactotron from "reactotron-react-native";

export function log(info: any) {
  Reactotron.log(info);
}

export function warn(info: any) {
  Reactotron.warn(info);
}

export function debug(info: any) {
  Reactotron.debug(info);
}

export function error(info: any) {
  Reactotron.error(logInfo);
}
