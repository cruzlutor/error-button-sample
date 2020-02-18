import React from "react";
import { AppLoading } from "expo";
import { View } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Text, Button } from "native-base";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <View style={{ marginTop: 100 }}>
        <Button>
          <Text>Button test</Text>
        </Button>
        <Button light>
          <Text>Button test</Text>
        </Button>
      </View>
    );
  }
}
