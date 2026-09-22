import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Biscoito from "./screens/Biscoito";

const Stack = createNativeStackNavigator();

export default function App() {
  const [contador, setContador] = useState(0);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <Home {...props} contador={contador} />}
        </Stack.Screen>

        <Stack.Screen name="Biscoito">
          {(props) => (
            <Biscoito {...props} contador={contador} setContador={setContador} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
