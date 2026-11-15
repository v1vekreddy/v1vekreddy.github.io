import { Brain } from "lucide-react";
import type { Skill } from "@/types/common";
export const mySkills: Skill[] = ["Python", "LLMs", "Prompt Engineering", "RAG", "LangGraph", "LangChain", "MCP", "ADK", "OCR", "PaddleOCR-VL", "Vector Search", "Embeddings", "LLM Evaluation", "DeepEval", "FAISS", "Model Evaluation", "FastAPI", "Docker", "Git", "TypeScript"].map(name=>({name,icon:Brain}));
