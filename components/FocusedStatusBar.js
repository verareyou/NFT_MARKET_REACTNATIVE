import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar {...props} animated={true} hidden={false} translucent={true} />
  ) : null;
};

export default FocusedStatusBar;

