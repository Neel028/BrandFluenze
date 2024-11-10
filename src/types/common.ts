import { PropsWithChildren } from "react"

export type CommonComponentProps = {
     className?:string
} & PropsWithChildren

export interface Feature {
    icon:any,
    title: string;
    description: string;
    features: string[];
}

export interface Faq  {
    id: string;
    question: string;
    answer: string;
  };