import React, { ChangeEvent } from "react";

import "./Select.css";

export interface SelectProps<T> {
  listOptions: T[];
  value: string;
  name: string;
  className?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = <T extends {
  id: string;
  text: string;
}>(props: SelectProps<T>) => (
  <select className="select" name={props.name} value={props.value} onChange={props.onChange}>
    {props.listOptions.map((item) => (
      <option selected={props.value === item.id} value={item.id} key={item.id}>
        {item.text}
      </option>
    ))}
  </select>
);
