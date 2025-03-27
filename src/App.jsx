import { ThemeProvider, Global } from "@emotion/react";
import { globalStyles, theme } from "./styles";
import { BillSelection, BillTable } from "./pages";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setData } from "./controller/Slices/dataSlice";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/pricing.json");
        const data = await res.json();
        if (data) {
          dispatch(setData(data));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
        {/* <div style={{ height: "100vh" }}> */}
          <BillSelection />
        <BillTable />
        {/* </div> */}
        
    </ThemeProvider>
  );
}

export default App;
