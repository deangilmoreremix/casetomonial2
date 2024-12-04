import { 
  Briefcase, Code, Stethoscope, GraduationCap, 
  FlaskConical, LineChart 
} from "lucide-react";
import type { CaseStudyType } from "@/types";

export const caseStudyTypes: CaseStudyType[] = [
  {
    title: "Business Impact",
    description: "Showcase how your solution drove business transformation and ROI.",
    icon: <Briefcase className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    type: "business",
    industry: "Business"
  },
  {
    title: "Technical Solution",
    description: "Detail the technical challenges and innovative solutions implemented.",
    icon: <Code className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=2000",
    type: "technical",
    industry: "Technology"
  },
  {
    title: "Healthcare Innovation",
    description: "Document medical breakthroughs and patient care improvements.",
    icon: <Stethoscope className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000",
    type: "medical",
    industry: "Healthcare"
  },
  {
    title: "Academic Research",
    description: "Present academic findings and research methodologies.",
    icon: <GraduationCap className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80&w=2000",
    type: "academic",
    industry: "Education"
  },
  {
    title: "Research & Development",
    description: "Document R&D processes and breakthrough innovations.",
    icon: <FlaskConical className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=2000",
    type: "research",
    industry: "Research"
  },
  {
    title: "Market Analysis",
    description: "Deep dive into market trends and competitive analysis.",
    icon: <LineChart className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2000",
    type: "consulting",
    industry: "Consulting"
  }
];

export const sectionTypes = [
  {
    type: "overview",
    title: "Executive Summary",
    description: "High-level overview of the case study"
  },
  {
    type: "challenge",
    title: "Challenge",
    description: "Key problems and obstacles faced"
  },
  {
    type: "solution",
    title: "Solution",
    description: "Implemented approach and methodology"
  },
  {
    type: "results",
    title: "Results",
    description: "Quantifiable outcomes and impact"
  },
  {
    type: "conclusion",
    title: "Conclusion",
    description: "Key takeaways and lessons learned"
  }
];