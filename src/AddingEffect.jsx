import { useEffect, useRef, useState } from "react";

export default function AddingEffect({ prevNumber, newNumber, time }) {
  const [value, setValue] = useState(prevNumber);
  const rafId = useRef(null);

  useEffect(() => {
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / time, 1);
      const interpolated = Math.round(prevNumber + (newNumber - prevNumber) * progress);
      setValue(interpolated);

      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate);
      }
    };

    rafId.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId.current);
  }, [prevNumber, newNumber, time]);

  return <>{value}</>;
}
