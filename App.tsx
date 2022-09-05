import { StatusBar } from "expo-status-bar";
import { Home } from "./src/pages/Home";
import { Theme } from "./src/templates/theme";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Theme>
        <Home />
      </Theme>
    </>
  );
}
