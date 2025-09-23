'use client';

import { useState } from 'react';
import Chat from './Chat';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className="floating-chat-button"
        aria-label="Open chat"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z"
            fill="currentColor"
          />
        </svg>
        {!isOpen && (
          <span className="floating-chat-pulse"></span>
        )}
      </button>

      {/* Chat Modal Overlay */}
      {isOpen && (
        <div className="chat-modal-overlay" onClick={closeChat}>
          <div className="chat-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="chat-modal-header">
              <h3 className="chat-modal-title">Chat with Ojaswini</h3>
              <button
                onClick={closeChat}
                className="chat-modal-close"
                aria-label="Close chat"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="chat-modal-content">
              <Chat />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
