import React from "react";

export default function FoodForm(props) {
  const { className, ...otherProps } = props;
  return (
    <form
      className={["food-form", className].join(" ")}
      action="#"
      {...otherProps}
    />
  );
}
