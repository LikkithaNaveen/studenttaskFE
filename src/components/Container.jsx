import React from "react";

export default function Container({ children, className }) {
  return (
    <div className={"max-w-screen-xl mx-auto bg-secondary" + className}>{children}</div>
  );
}
