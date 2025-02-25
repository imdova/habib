import { ElementType } from "react";

export interface BaseHeaderProps {
  pathname: string;
}

// Define the User type
export type UserProps = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

export interface Exprience {
  title: string;
  list: string[];
  alpha: string;
}
export interface helps {
  title: string;
  list: string[];
  icon: ElementType;
}
