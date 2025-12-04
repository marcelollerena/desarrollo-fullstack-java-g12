import "./styles.css";

import { Card } from "./components/card/card";
import { mockData } from "./mock/card-items";

function App() {
  return (
    <main>
      <div className="items-container">
        {mockData.map((card) => (
          <Card {...card} />
        ))}
      </div>
    </main>
  );
}

export default App;
