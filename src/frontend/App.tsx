import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Infinite Experiment!</h1>
      <p>You clicked the button {count} times.</p>
      <button
        onClick={handleIncrement}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Click Me!
      </button>
    </div>
  );
};

export default App;
