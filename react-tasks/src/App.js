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

      <main className="app-main app-container">
        {!SelectedComponent && (
          <div className="card">
            <h2>Home</h2>
            <p className="muted">Select a component from the navbar to preview it.</p>
          </div>
        )}

        {SelectedComponent && (
          <div>
            {selected === 'User' && (
              <User name="Harsh" age={22} />
            )}

            {selected === 'Card' && (
              <div className="component-grid">
                <Card title="Python" description="Python is a Programming Language" />
                <Card title="Django" description="Django is a Python Framework" />
                <Card title="DevOps" description="DevOps is a Role" />
              </div>
            )}

            {selected !== 'User' && selected !== 'Card' && (
              <SelectedComponent />
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
