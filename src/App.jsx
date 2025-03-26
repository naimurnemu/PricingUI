import { ThemeProvider, Global } from "@emotion/react";
import { globalStyles, theme } from "./styles";
import { Button } from "./components/ui";
import { BillSelection, BillTable } from "./pages";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setData } from "./controller/Slices/dataSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch("/pricing.json");
        const data = await res.json();
        dispatch(setData(data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
