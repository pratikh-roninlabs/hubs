import { useEffect, useState, useRef, useCallback } from "react";

export function useRandomMessageTransition(messages, transitionDelay = 3000) {
  const messageTimeoutRef = useRef();
  const [index, setIndex] = useState(0);

  const queueNextMessage = useCallback(
    () => {
      messageTimeoutRef.current = setTimeout(() => {
        setIndex(currentIndex => (currentIndex + 1 >= messages.length ? 0 : currentIndex + 1));
        queueNextMessage();
      }, transitionDelay);
    },
    [setIndex, messages, transitionDelay]
  );

  useEffect(
    () => {
      queueNextMessage();

      return () => {
        clearTimeout(messageTimeoutRef.current);
      };
    },
    [queueNextMessage]
  );

  return messages[index];
}
