import { useEffect } from "react";
import * as wasm from "react-wasm";

const App: React.VFC = () => {
  useEffect(() => {
    wasm.greet();
  }, [])

  return <div>App</div>;
}

export default App;
