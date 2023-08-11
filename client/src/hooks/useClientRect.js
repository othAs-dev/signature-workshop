import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export function useClientRect() {
  const [height, setHeight] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    setHeight(ref.current.scrollHeight);
  });
  return [height, ref];
}
