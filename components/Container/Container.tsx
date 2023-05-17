import { ReactNode } from "react";
import cn from 'clsx'
import classes from "./Container.module.scss";

export default function Container(props: {children: ReactNode, className?: string }): JSX.Element {
  const { children, className = '' } = props || {}

  return (
      <div className={cn(classes.container, className)}>
        {children}
      </div>
  );
}
