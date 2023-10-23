import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from '../src/layout/Main/Main';
import './App.scss';

function handleEnter({ isFocusPresent, activeElement }) {
  if (!isFocusPresent) return;

  if (
    activeElement.nodeName === "INPUT" &&
    ["radio", "checkbox"].includes(activeElement.type)
  ) {
    activeElement.click();
  }
}

function handleArrowKey({
  key,
  isFocusPresent,
  availableElement,
  activeElement,
  availableElements
}: {
  key: any
  isFocusPresent:any,
  availableElement?: any,
  activeElement: Element | null ,
  availableElements: any
}) {
  // console.log({ isFocusPresent, activeElement, availableElement });
  if (!isFocusPresent) availableElements[0].focus();

  const currentIndex = Array.from(availableElements).findIndex(
    (availableElement) => availableElement === activeElement
  );

  if (key === "ArrowDown") {
    availableElements[currentIndex + 1]?.focus();
    console.log(currentIndex, key)
  }
  if (key === "ArrowUp") {
  
    availableElements[currentIndex - 1]?.focus();
    console.log(currentIndex, key)
  }
  if (key === "ArrowLeft") {                              //added
    availableElements[currentIndex +1]?.focus();
    console.log(currentIndex, key)
  } 
  if (key === "ArrowRight") {                             //added
    availableElements[currentIndex + 1]?.focus();
    console.log(currentIndex, key)
  }
}

function handleEvents({ e, parentNode, selectors }) {
  const key = e.key;
  if (!["ArrowUp", "ArrowDown", "ArrowLeft","ArrowRight", "Enter"].includes(key)) {  //added
    console.log("invalid key", key);
    return;
  }

  const activeElement = document.activeElement;
  const availableElements = parentNode.querySelectorAll(selectors); 
  console.log("availableElements",availableElements)

  // No elements are available to loop through.
  if (!availableElements.length) return;
  const isFocusPresent = parentNode.contains(activeElement);

  if (key === "Enter") {
    handleEnter({ isFocusPresent, activeElement });
  }
  handleArrowKey({ key, isFocusPresent, activeElement, availableElements });
}


function useArrowKeyNavigation({selectors}){
  const parentNode = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const eventHandler = (e) => handleEvents({ e, parentNode: parentNode.current, selectors });
    document.addEventListener("keydown", eventHandler);
    return () => document.addEventListener("keydown", eventHandler);
  }, []);
  
  return parentNode;
}

export function ArrowKeyNav({ selectors = "a,button,input", children }) {
  const parentNode = useArrowKeyNavigation({selectors})

  return (
    <div ref={parentNode}>
      {children}
    </div>
  );
}



function App() {
  return (
    <Router>
      <ArrowKeyNav>
         <Main />   
        </ArrowKeyNav>   
    </Router>
  );
}

export default App;
