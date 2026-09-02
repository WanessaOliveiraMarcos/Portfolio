import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import pt from "./pt.json"
import en from "./en.json"

export interface Project {
  id: string
  title: string
  logo: string
  demo: string
  description: string
  contributions: string[]
  techStack: string[]
  links: { label: string; url: string }[]
  gallery: string[]
  credit?: string
  meta?: string[]
}

type Lang = "pt" | "en"

type ProjectStatic = Omit<Project, "description" | "contributions" | "credit" | "meta">

const PROJECTS: ProjectStatic[] = [
  {
    id: "modus",
    title: "MODUS",
    logo: "/projetos/modus/modus-logo.png",
    demo: "/projetos/modus/demonstracao.mp4",
    techStack: ["React", "TypeScript", "Vite", "PHP", "Laravel", "Docker", "Git"],
    links: [
      { label: "GitHub", url: "https://github.com/WanessaOliveiraMarcos/MODUS" },
    ],
    gallery: [
      "/projetos/modus/tarefas.png",
      "/projetos/modus/home.png",
      "/projetos/modus/budget.png",
      "/projetos/modus/equipe.png",
      "/projetos/modus/email.png",
      "/projetos/modus/indicadores.png",
      "/projetos/modus/logs.png",
      "/projetos/modus/clientes.png",
      "/projetos/modus/projetos.png",
      "/projetos/modus/file.png",
    ],
  },
  {
    id: "governance-hub",
    title: "Governance Hub",
    logo: "/projetos/governance-hub/logo.svg",
    demo: "/projetos/governance-hub/demo.svg",
    techStack: [],
    links: [],
    gallery: [],
  },
]

type LocalizedProject = Pick<Project, "description" | "contributions" | "credit" | "meta">

const LOCALIZED_PROJECTS: Record<Lang, Record<string, LocalizedProject>> = {
  pt: pt.projects,
  en: en.projects,
}

export function useProjects(): Project[] {
  const { i18n } = useTranslation()
  const lang: Lang = i18n.language.startsWith("en") ? "en" : "pt"

  return useMemo(
    () =>
      PROJECTS.map((p) => ({
        ...p,
        ...LOCALIZED_PROJECTS[lang][p.id],
      })),
    [lang],
  )
}

export function useProjectById(id: string | undefined): Project | undefined {
  const projects = useProjects()
  return projects.find((p) => p.id === id)
}