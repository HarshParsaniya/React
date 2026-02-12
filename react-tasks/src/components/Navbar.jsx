import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ items = [], selected, onToggle }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => setCollapsed(c => !c);

  return (
    <nav className="navbar" role="navigation">
      <div className="nav-left">
        <button className="toggle-btn" onClick={toggle} aria-expanded={!collapsed}>
          ☰ {collapsed ? 'Show the Menu' : 'Hide the Menu'}
        </button>
      </div>

      {!collapsed && (
        <div className={`nav-items${!collapsed ? ' expanded' : ''}`}>
          <button
            className={`nav-btn ${selected === null ? 'active' : ''}`}
            onClick={() => onToggle(null)}
          >
            Home
          </button>

          {items.map(name => (
            <button
              key={name}
              className={`nav-btn ${selected === name ? 'active' : ''}`}
              onClick={() => onToggle(selected === name ? null : name)}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
