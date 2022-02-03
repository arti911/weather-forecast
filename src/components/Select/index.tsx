import React from "react";

import { ISelect } from "./index.interface";

import "./style.scss";

const Select = <T extends {
    id: string;
    text: string;
  }>(props: ISelect<T>) => (
  <select className="select" name={props.name} value={props.value} onChange={props.onChange}>
    {props.listOptions.map((item) => (
      <option selected={props.value === item.id} value={item.id} key={item.id}>
        {item.text}
      </option>
    ))}
  </select>
);

export default Select;
