import { ThemeProvider, Global } from "@emotion/react";
import { globalStyles, theme } from "./styles";
import { Button } from "./components/ui";

function App() {
  return (
    <container>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <div>Hello</div>
        <Button>Button</Button>
      </ThemeProvider>
    </container>
  );
}

export default App;
