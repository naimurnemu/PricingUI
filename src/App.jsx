import { ThemeProvider, Global } from "@emotion/react";
import { globalStyles, theme } from "./styles";
import { Button } from "./components/ui";
import { BillSelection, BillTable } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <div>Hello</div>
      <Button>Button</Button>
      <BillSelection />
      <BillTable />
    </ThemeProvider>
  );
}

export default App;
