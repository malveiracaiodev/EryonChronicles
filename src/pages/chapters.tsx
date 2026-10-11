import { useState } from "react";
import { chapterCatalog } from "../data/chaptercatalog";
import type { ChapterCatalogItem } from "../data/chaptercatalog";

import "./chapters.css";

export default function Chapters() {
    const [selectedChapter, setSelectedChapter] =
        useState<ChapterCatalogItem | null>(null);

    const [selectedSceneId, setSelectedSceneId] =
        useState<string | null>(null);

    function openChapter(chapter: ChapterCatalogItem) {
        setSelectedChapter(chapter);
        setSelectedSceneId(null);
    }

    function backToChapters() {
        setSelectedChapter(null);
        setSelectedSceneId(null);
    }

    function openScene(sceneId: string) {
        setSelectedSceneId(sceneId);
    }

    const selectedScene = selectedChapter?.scenes.find(
        (scene) => scene.id === selectedSceneId
    );

    return (
        <main className="chapters-page">
            <div className="chapters-background-glow" />

            <header className="chapters-header">
                <span className="chapters-eyebrow">
                    O UNIVERSO DE ERYON
                </span>

                <h1>
                    Eryon <span>Chronicles</span>
                </h1>

                <p>
                    Toda jornada começa com uma história.
                    Escolha seu próximo destino.
                </p>
            </header>

            <div className="chapters-container">
                {!selectedChapter ? (
                    <>
                        <div className="chapters-section-heading">
                            <div>
                                <span className="chapters-section-label">
                                    BIBLIOTECA
                                </span>

                                <h2>Capítulos</h2>

                                <p>
                                    Explore a história no seu próprio ritmo.
                                </p>
                            </div>

                            <span className="chapters-total">
                                {chapterCatalog.length}{" "}
                                {chapterCatalog.length === 1
                                    ? "capítulo"
                                    : "capítulos"}
                            </span>
                        </div>

                        <div className="chapters-grid">
                            {chapterCatalog.map((chapter) => (
                                <button
                                    type="button"
                                    className="chapter-card"
                                    key={chapter.id}
                                    onClick={() => openChapter(chapter)}
                                >
                                    <span className="chapter-card-number">
                                        CAPÍTULO{" "}
                                        {String(chapter.number).padStart(2, "0")}
                                    </span>

                                    <span className="chapter-card-title">
                                        {chapter.title}
                                    </span>

                                    <span className="chapter-card-subtitle">
                                        {chapter.subtitle}
                                    </span>

                                    <span className="chapter-card-synopsis">
                                        {chapter.synopsis}
                                    </span>

                                    <span className="chapter-card-footer">
                                        <span>
                                            {chapter.scenes.length}{" "}
                                            {chapter.scenes.length === 1
                                                ? "cena"
                                                : "cenas"}
                                        </span>

                                        <span
                                            className={
                                                chapter.status === "available"
                                                    ? "chapter-status available"
                                                    : "chapter-status coming-soon"
                                            }
                                        >
                                            {chapter.status === "available"
                                                ? "Disponível"
                                                : "Em breve"}
                                        </span>
                                    </span>

                                    <span
                                        className="chapter-card-arrow"
                                        aria-hidden="true"
                                    >
                                        →
                                    </span>
                                </button>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <button
                            type="button"
                            className="chapters-back-button"
                            onClick={backToChapters}
                        >
                            <span aria-hidden="true">←</span>
                            Voltar aos capítulos
                        </button>

                        {!selectedScene ? (
                            <>
                                <div className="selected-chapter-heading">
                                    <span className="chapters-section-label">
                                        CAPÍTULO{" "}
                                        {String(
                                            selectedChapter.number
                                        ).padStart(2, "0")}
                                    </span>

                                    <h2>{selectedChapter.title}</h2>

                                    <p className="selected-chapter-subtitle">
                                        {selectedChapter.subtitle}
                                    </p>

                                    <p className="selected-chapter-synopsis">
                                        {selectedChapter.synopsis}
                                    </p>

                                    <div className="selected-chapter-divider" />

                                    <h3>Selecione uma cena</h3>

                                    <p>
                                        Escolha onde deseja entrar na história.
                                    </p>
                                </div>

                                <div className="chapter-scenes-list">
                                    {selectedChapter.scenes.map(
                                        (scene, index) => (
                                            <button
                                                type="button"
                                                className="chapter-scene-card"
                                                key={scene.id}
                                                onClick={() =>
                                                    openScene(scene.id)
                                                }
                                            >
                                                <span className="chapter-scene-number">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </span>

                                                <span className="chapter-scene-info">
                                                    <span className="chapter-scene-title">
                                                        {scene.title}
                                                    </span>

                                                    {scene.description && (
                                                        <span className="chapter-scene-description">
                                                            {scene.description}
                                                        </span>
                                                    )}
                                                </span>

                                                <span
                                                    className="chapter-scene-arrow"
                                                    aria-hidden="true"
                                                >
                                                    →
                                                </span>
                                            </button>
                                        )
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="chapter-scene-preview">
                                <span className="chapters-section-label">
                                    {selectedChapter.title}
                                </span>

                                <h2>{selectedScene.title}</h2>

                                <p>
                                    {selectedScene.description ??
                                        "Esta cena está pronta para receber seu conteúdo."}
                                </p>

                                <div className="chapter-scene-preview-note">
                                    <span aria-hidden="true">✦</span>

                                    <p>
                                        A área de leitura será conectada aqui
                                        quando adicionarmos o conteúdo da cena.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    className="chapters-back-button"
                                    onClick={() =>
                                        setSelectedSceneId(null)
                                    }
                                >
                                    <span aria-hidden="true">←</span>
                                    Voltar às cenas
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>

            <footer className="chapters-footer">
                <span>ERYON CHRONICLES</span>
                <p>Uma história em constante expansão.</p>
            </footer>
        </main>
    );
}