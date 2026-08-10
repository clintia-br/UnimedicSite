"use client";

import { useState } from "react";
import { Collapsible } from "./Collapsible";
import { Icon } from "./Icon";

type AccordionItem = { q: string; a: string };

type AccordionProps = {
  items: AccordionItem[];
  defaultOpen?: number;
  className?: string;
};

/** FAQ accordion. The plus rotates 45° to a × as each row opens. */
export function Accordion({ items, defaultOpen = -1, className }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`uni-acc ${className ?? ""}`}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <Collapsible
            key={it.q}
            open={isOpen}
            onToggle={() => setOpen(isOpen ? -1 : i)}
            className="uni-acc-item"
            headerClassName="uni-acc-btn"
            bodyClassName="uni-acc-body"
            header={
              <>
                <span className="uni-acc-q">{it.q}</span>
                <span className="uni-acc-plus" style={{ transform: isOpen ? "rotate(45deg)" : "none", transition: "transform var(--dur-slow) var(--ease-standard)" }}>
                  <Icon name="plus" size={17} />
                </span>
              </>
            }
          >
            {it.a}
          </Collapsible>
        );
      })}
    </div>
  );
}
