export interface ChapterCatalogScene {
    id: string;
    title: string;
    description?: string;
}

export interface ChapterCatalogItem {
    id: string;
    number: number;
    title: string;
    subtitle: string;
    synopsis: string;
    status: "available" | "coming-soon";
    scenes: ChapterCatalogScene[];
}

export const chapterCatalog: ChapterCatalogItem[] = [
    {
        id: "calebs-fate",
        number: 1,
        title: "O Despertar",
        subtitle: "Caleb's Fate",
        synopsis:
            "O início de uma jornada em um universo onde o Eryon conecta destinos e esconde mistérios antigos.",
        status: "available",
        scenes: [
            {
                id: "cena-01",
                title: "Cena 01 — O Princípio",
                description: "Introdução do capítulo."
            },
            {
                id: "cena-02",
                title: "Cena 02 — O Primeiro Sinal",
                description: "Uma nova etapa da jornada."
            },
            {
                id: "cena-03",
                title: "Cena 03 — O Despertar",
                description: "O encerramento desta sequência."
            }
        ]
    },
    {
        id: "capitulo-02",
        number: 2,
        title: "A Cidade Portuária",
        subtitle: "Título provisório",
        synopsis:
            "Uma cidade costeira, uma missão inesperada e o surgimento de forças que mudarão o rumo da jornada.",
        status: "coming-soon",
        scenes: [
            {
                id: "cena-01",
                title: "Cena 01 — A Chegada"
            },
            {
                id: "cena-02",
                title: "Cena 02 — O Prefeito"
            },
            {
                id: "cena-03",
                title: "Cena 03 — A Missão"
            },
            {
                id: "cena-04",
                title: "Cena 04 — A Visita"
            },
            {
                id: "cena-05",
                title: "Cena 05 — O Confronto"
            }
        ]
    }
];