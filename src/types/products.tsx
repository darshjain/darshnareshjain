import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type Product = {
  title: string;
  description: string;
  thumbnail: StaticImageData;
  images: StaticImageData[] | string[];
  href: string;
  slug?: string;
  stack?: string[];
  content?: ReactNode | string;
  architecture?: {
    cols: number;
    rows: number;
    nodes: {
      id: string;
      label: string;
      type: string;
      col: number;
      row: number;
      sublabel?: string;
    }[];
    connections: { from: string; to: string; label?: string }[];
  };
};
