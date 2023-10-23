import React from "react";
import { useEffect, useRef } from "react";

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
  availableElements,
}: {
  key: any;
  isFocusPresent: any;
  availableElement?: any;
  activeElement: Element | null;
  availableElements: any;
}) {
  if (!isFocusPresent) availableElements[0].focus();

  let currentIndex = Array.from(availableElements).findIndex(
    (availableElement) => availableElement === activeElement
  );

  if (key === "ArrowDown") {
    availableElements[currentIndex + 1]?.focus();
  }
  if (key === "ArrowUp") {
    availableElements[currentIndex - 1]?.focus();
  }
}

function handleEvents({ e, parentNode, selectors }) {
  const key = e.key;
  if (!["ArrowUp", "ArrowDown", "Enter"].includes(key)) {
    return;
  }

  const activeElement = document.activeElement;
  let availableElements = parentNode.querySelectorAll(selectors);

  if (!availableElements.length) return;
  const isFocusPresent = parentNode.contains(activeElement);

  if (key === "Enter") {
    handleEnter({ isFocusPresent, activeElement });
  }
  handleArrowKey({ key, isFocusPresent, activeElement, availableElements });
}

function useArrowKeyNavigation({ selectors }) {
  const parentNode = useRef<HTMLDivElement | null>(null);

  const eventHandler = (e) =>
    handleEvents({ e, parentNode: parentNode.current, selectors });

  useEffect(() => {
    document.addEventListener("keydown", eventHandler);
    return () => document.addEventListener("keydown", eventHandler);
  }, [selectors]);

  return parentNode;
}

export function KeyboardNavigation({ selectors = "a,button,input", children }) {
  const parentNode = useArrowKeyNavigation({ selectors });

  return <div ref={parentNode}>{children}</div>;
}
