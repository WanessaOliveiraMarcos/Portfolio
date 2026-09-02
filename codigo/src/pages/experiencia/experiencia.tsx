import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { BackButton } from "@/components/back-button"
import { Timeline } from "./timeline";

export function Experiencia() {
  const { t } = useTranslation();

  const data = useMemo(() => [
    {
      title: t("pages.experiencia.titulo1"),
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {t("pages.experiencia.conteudo1_1")}
          </p>
        </div>
      ),
    },
    {
      title: t("pages.experiencia.titulo2"),
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {t("pages.experiencia.conteudo2_1")}
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {t("pages.experiencia.conteudo2_2")}
          </p>
        </div>
      ),
    },
    {
      title: t("pages.experiencia.titulo3"),
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {t("pages.experiencia.conteudo3_1")}
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {t("pages.experiencia.conteudo3_2")}
          </p>
        </div>
      ),
    },
    {
      title: t("pages.experiencia.titulo4"),
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {t("pages.experiencia.conteudo4_1")}
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {t("pages.experiencia.conteudo4_2")}
          </p>
        </div>
      ),
    },
    {
      title: t("pages.experiencia.titulo5"),
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {t("pages.experiencia.conteudo5_1")}
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {t("pages.experiencia.conteudo5_2")}
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {t("pages.experiencia.conteudo5_3")}
          </p>
        </div>
      ),
    },
    {
      title: t("pages.experiencia.titulo6"),
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            {t("pages.experiencia.conteudo6_1")}
          </p>
        </div>
      ),
    },
  ], [t]);

  return (
    <div className="min-h-screen w-full relative bg-zinc-950">
      <BackButton />
      <div className="absolute top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
