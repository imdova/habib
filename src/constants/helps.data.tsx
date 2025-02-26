import { helps } from "@/types";
import {
  BrainCircuit,
  ChartNoAxesCombined,
  CircleDollarSign,
  Cog,
  Store,
  Users,
} from "lucide-react";
// dummy help data
export const HelpsData: helps[] = [
  {
    title: "Business Strategy Development",
    list: [
      "Create tailored growth strategies aligned with your business goals.",
      "Identify new market opportunities and revenue streams.",
    ],
    icon: ChartNoAxesCombined,
  },
  {
    title: "Digital Transformation",
    list: [
      "Implement cutting-edge technologies to streamline operations and enhance customer experiences.",
      "Develop scalable IT infrastructure to support future growth.",
    ],
    icon: BrainCircuit,
  },
  {
    title: "Operational Efficiency",
    list: [
      "Optimize processes to reduce costs and improve productivity.",
      "Introduce automation tools to eliminate manual tasks and errors.",
    ],
    icon: Cog,
  },
  {
    title: "Funding and Investment Readiness",
    list: [
      "Prepare business plans and financial models to attract investors.",
      "Provide guidance on pitching to venture capitalists and angel investors.",
    ],
    icon: CircleDollarSign,
  },
  {
    title: "Market Expansion",
    list: [
      "Develop market entry strategies for new regions and customer segments",
      "Develop scalable IT infrastructure to support future growth.",
    ],
    icon: Store,
  },
  {
    title: "Leadership and Team Development",
    list: [
      "Provide mentorship and training to founders and leadership teams.",
      "Build high-performing teams aligned with your business vision.",
    ],
    icon: Users,
  },
];
