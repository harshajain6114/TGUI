import React, { useState } from 'react';
import { AppRoot, List } from '@telegram-apps/telegram-ui';
import { InputSection } from './components/InputSection/InputSection';
import { TooltipSection } from './components/TooltipSection/TooltipSection';
import { ModalSection } from './components/ModalSection/ModalSection';

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => setIsLoggedIn(prevState => !prevState);

  return (
    <AppRoot>
      <List>
        {isLoggedIn ? (
          <div className="app-content">
            <ModalSection />
            <InputSection />
            <TooltipSection />
          </div>
        ) : (
          <div className="login-container">
            <h1 className="login-title">Welcome to Telegram MiniApp</h1>
            <p className="login-subtitle">Please log in to see the content.</p>
            <button 
              onClick={toggleLogin} 
              className="login-button"
            >
              Log In
            </button>
          </div>
        )}
      </List>
    </AppRoot>
  );
};
