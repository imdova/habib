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
// Exprience Type
export interface Exprience {
  title: string;
  list: string[];
  alpha: string;
}
// helps Type
export interface helps {
  title: string;
  list: string[];
  icon: ElementType;
}
// project Type
export interface projectType {
  id: string;
  image: string;
  title: string;
  name: string;
  client: string;
  challenge: string;
  clientDetails?: string;
  challengeDetails?: string;
  solution?: string[];
  results?: string[];
}
// Case Study Type
export interface CaseStudyType {
  id: string;
  title: string;
  client: string;
  challenge: string;
  clientDetails?: string;
  challengeDetails?: string;
  solution?: string[];
  results?: string[];
}
