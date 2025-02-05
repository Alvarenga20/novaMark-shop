import React, { useRef, useEffect, useContext, ReactNode } from "react";
import { CSSTransition as ReactCSSTransition } from "react-transition-group";

const TransitionContext = React.createContext({
  parent: {
    show: false,
    appear: false,
    isInitialRender: true,
  },
});

function useIsInitialRender() {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

function CSSTransition({
  show,
  enter = "",
  enterStart = "",
  enterEnd = "",
  leave = "",
  leaveStart = "",
  leaveEnd = "",
  appear = false,
  unmountOnExit = true,
  tag: Component = "div",
  children,
  ...rest
}: {
  show: boolean;
  enter?: string;
  enterStart?: string;
  enterEnd?: string;
  leave?: string;
  leaveStart?: string;
  leaveEnd?: string;
  appear?: boolean;
  unmountOnExit?: boolean;
  tag?: React.ElementType;
  children?: ReactNode;
}) {
  const enterClasses = enter.split(" ").filter(Boolean);
  const enterStartClasses = enterStart.split(" ").filter(Boolean);
  const enterEndClasses = enterEnd.split(" ").filter(Boolean);
  const leaveClasses = leave.split(" ").filter(Boolean);
  const leaveStartClasses = leaveStart.split(" ").filter(Boolean);
  const leaveEndClasses = leaveEnd.split(" ").filter(Boolean);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  const addClasses = (node: HTMLElement | null, classes: string[]) => {
    if (node && classes.length) {
      node.classList.add(...classes);
    }
  };

  const removeClasses = (node: HTMLElement | null, classes: string[]) => {
    if (node && classes.length) {
      node.classList.remove(...classes);
    }
  };

  return (
    <ReactCSSTransition
      appear={appear}
      unmountOnExit={unmountOnExit}
      in={show}
      nodeRef={nodeRef}
      addEndListener={(done: () => void) => {
        nodeRef.current?.addEventListener("transitionend", done, false);
      }}
      onEnter={() => {
        addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
      }}
      onEntering={() => {
        removeClasses(nodeRef.current, enterStartClasses);
        addClasses(nodeRef.current, enterEndClasses);
      }}
      onEntered={() => {
        removeClasses(nodeRef.current, [...enterClasses, ...enterEndClasses]);
      }}
      onExit={() => {
        addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
      }}
      onExiting={() => {
        removeClasses(nodeRef.current, leaveStartClasses);
        addClasses(nodeRef.current, leaveEndClasses);
      }}
      onExited={() => {
        removeClasses(nodeRef.current, [...leaveClasses, ...leaveEndClasses]);
      }}
    >
      <Component ref={nodeRef} {...rest}>
        {children}
      </Component>
    </ReactCSSTransition>
  );
}

function Transition({
  show,
  appear = false,
  ...rest
}: {
  show: boolean;
  appear?: boolean;
  [key: string]: unknown;
}) {
  const { parent } = useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return (
      <CSSTransition
        appear={parent.appear || !parent.isInitialRender}
        show={parent.show}
        {...rest}
      />
    );
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  );
}

export default Transition;
