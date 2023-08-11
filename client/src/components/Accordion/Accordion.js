import { useEffect } from "react";
import { useToggle } from "../../hooks/useToggle";
import "../../index.css";
import { useClientRect } from "../../hooks/useClientRect";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export function Accordion({ title = "title", children }) {
  const [state, toggle] = useToggle();
  return (
    <div className="flex flex-col px-3 py-2 tablet:px-5 tablet:py-3">
      <button
        className={
          "flex flex-col border-solid border-b-2 pb-2 " +
          (state ? "drop-shadow-lg" : "")
        }
        onClick={toggle}
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full justify-between">
            <h2 className="text-lg ">{title}</h2>
            <ChevronRightIcon
              className={
                "h-6 w-6 text-black-500 duration-200 transition-transform " +
                (state ? "rotate-90" : "")
              }
            />
          </div>
        </div>
      </button>
      <AccordionContent children={children} state={state} />
    </div>
  );
}
export function AccordionContent({ state, children }) {
  let [height, contentRef] = useClientRect();
  useEffect(() => {
    if (state) {
      contentRef.current.style.maxHeight = height + "px";
    } else {
      contentRef.current.style.maxHeight = "0";
    }
  }, [state, height]);

  return (
    <div
      ref={contentRef}
      className={
        "duration-500 transition-all bg-white " +
        (state ? "overflow-auto" : "overflow-hidden")
      }
    >
      {children}
    </div>
  );
}
