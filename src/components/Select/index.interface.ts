import { ChangeEvent } from "react";

export interface ISelect<T> {
  listOptions: T[];
  value: string;
  name: string;
  className?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
