import './App.css';
import React, { useState } from 'react';
import Card from './components/Card';
import Counter from './components/Counter';
import CurrentDateTime from './components/CurrentDateTime';
import DefaultUser from './components/DefaultUser';
import DisplayText from './components/DisplayText';
import HideToggle from './components/HideToggle';
import Logging from './components/Logging';
import User from './components/User';
import Navbar from './components/Navbar';


function App() {
  const [selected, setSelected] = useState(null);

  const componentsMap = {
    DisplayText,
    CurrentDateTime,
    Logging,
    User,
    Card,
    DefaultUser,
    Counter,
    HideToggle,
  };

  const componentNames = Object.keys(componentsMap);

  const SelectedComponent = selected ? componentsMap[selected] : null;

  return (
    <div>
      <Navbar items={componentNames} selected={selected} onToggle={setSelected} />

      <main className="app-main" style={{ padding: 12 }}>
        {!SelectedComponent && (
          <div>
            <h2>Home</h2>
            <p>Select a component from the navbar to preview it.</p>
          </div>
        )}

        {SelectedComponent && (
          <div>
            {selected === 'User' && (
              <div>
                {/* <h2>User</h2> */}
                <User name="Harsh" age={22} />
              </div>
            )}

            {selected === 'Card' && (
              <div>
                {/* <h2>Cards</h2> */}
                <div>
                  <Card title="Python" description="Python is a Programming Language" />
                  <Card title="Django" description="Django is a Python Framework" />
                  <Card title="DevOps" description="DevOps is a Role" />
                </div>
              </div>
            )}

            {selected !== 'User' && selected !== 'Card' && (
              <div>
                {/* <h2>{selected}</h2> */}
                <SelectedComponent />
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
