import { useState } from "react";
import type {
    Chapter,
    SceneContent,
    VideoContent,
} from "../types/chapter";

import "./chapterreader.css";

interface ChapterReaderProps {
    chapter: Chapter;
}

export function ChapterReader({ chapter }: ChapterReaderProps) {
    const [sceneIndex, setSceneIndex] = useState(0);
    const [contentIndex, setContentIndex] = useState(0);
    const [videoTime, setVideoTime] = useState(0);

    const scene = chapter.scenes[sceneIndex];
    const content = scene?.contents[contentIndex];

    if (!scene || !content) {
        return (
            <section className="chapter-reader">
                <p>Este capítulo ainda não possui conteúdo.</p>
            </section>
        );
    }

    const totalContents = chapter.scenes.reduce(
        (total, currentScene) =>
            total + currentScene.contents.length,
        0
    );

    const currentNumber =
        chapter.scenes
            .slice(0, sceneIndex)
            .reduce(
                (total, currentScene) =>
                    total + currentScene.contents.length,
                0
            ) +
        contentIndex +
        1;

    const progress =
        totalContents > 0
            ? (currentNumber / totalContents) * 100
            : 0;

    const isFirstContent =
        sceneIndex === 0 && contentIndex === 0;

    const isLastContent =
        sceneIndex === chapter.scenes.length - 1 &&
        contentIndex === scene.contents.length - 1;

    function goNext() {
        setVideoTime(0);

        if (contentIndex < scene.contents.length - 1) {
            setContentIndex((current) => current + 1);
            return;
        }

        if (sceneIndex < chapter.scenes.length - 1) {
            setSceneIndex((current) => current + 1);
            setContentIndex(0);
        }
    }

    function goPrevious() {
        setVideoTime(0);

        if (contentIndex > 0) {
            setContentIndex((current) => current - 1);
            return;
        }

        if (sceneIndex > 0) {
            const previousSceneIndex = sceneIndex - 1;
            const previousScene =
                chapter.scenes[previousSceneIndex];

            setSceneIndex(previousSceneIndex);
            setContentIndex(previousScene.contents.length - 1);
        }
    }

    function renderContent(item: SceneContent) {
        switch (item.type) {
            case "narration":
                return (
                    <div className="chapter-narration">
                        <span className="chapter-content-label">
                            NARRAÇÃO
                        </span>

                        <p>{item.text}</p>
                    </div>
                );

            case "dialogue":
                return (
                    <div className="chapter-dialogue">
                        <span className="chapter-dialogue-character">
                            {item.character}
                        </span>

                        <p>{item.text}</p>
                    </div>
                );

            case "image":
                return (
                    <figure className="chapter-image-content">
                        <img
                            src={item.src}
                            alt={item.alt}
                        />

                        {item.description && (
                            <figcaption>
                                {item.description}
                            </figcaption>
                        )}
                    </figure>
                );

            case "video":
                return renderVideo(item);
        }
    }

    function renderVideo(item: VideoContent) {
        const activeOverlays = item.overlays.filter(
            (overlay) =>
                videoTime >= overlay.start &&
                videoTime < overlay.end
        );

        return (
            <div className="chapter-video-content">
                {item.description && (
                    <p className="chapter-video-description">
                        {item.description}
                    </p>
                )}

                <div className="chapter-video-stage">
                    <video
                        key={`${sceneIndex}-${contentIndex}`}
                        className="chapter-video"
                        src={item.src}
                        poster={item.poster}
                        controls
                        playsInline
                        preload="metadata"
                        onTimeUpdate={(event) => {
                            setVideoTime(
                                event.currentTarget.currentTime
                            );
                        }}
                        onEnded={() => {
                            // O vídeo termina, mas a leitura não avança
                            // automaticamente. O leitor decide quando seguir.
                        }}
                    />

                    <div className="chapter-video-overlay-layer">
                        {activeOverlays.map((overlay, index) => {
                            if (overlay.type === "narration") {
                                return (
                                    <div
                                        className="chapter-video-narration"
                                        key={`narration-${index}`}
                                    >
                                        <span>
                                            NARRAÇÃO
                                        </span>

                                        <p>{overlay.text}</p>
                                    </div>
                                );
                            }

                            return (
                                <div
                                    className="chapter-video-dialogue"
                                    key={`dialogue-${index}`}
                                >
                                    <span>
                                        {overlay.character}
                                    </span>

                                    <p>{overlay.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section className="chapter-reader">
            <header className="chapter-reader-header">
                <span className="chapter-reader-series">
                    {chapter.series}
                </span>

                <h1>{chapter.title}</h1>

                {chapter.subtitle && (
                    <p className="chapter-reader-subtitle">
                        {chapter.subtitle}
                    </p>
                )}

                {chapter.synopsis && (
                    <p className="chapter-reader-synopsis">
                        {chapter.synopsis}
                    </p>
                )}
            </header>

            <div className="chapter-reader-progress">
                <div className="chapter-progress-labels">
                    <span>
                        CENA {sceneIndex + 1} — {scene.title}
                    </span>

                    <span>
                        {currentNumber} / {totalContents}
                    </span>
                </div>

                <div
                    className="chapter-progress-track"
                    role="progressbar"
                    aria-label="Progresso do capítulo"
                    aria-valuemin={0}
                    aria-valuemax={totalContents}
                    aria-valuenow={currentNumber}
                >
                    <div
                        className="chapter-progress-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <main className="chapter-reader-content">
                <div className="chapter-scene-heading">
                    <span>ERYON CHRONICLES</span>
                    <h2>{scene.title}</h2>
                </div>

                <div className="chapter-content-stage">
                    {renderContent(content)}
                </div>
            </main>

            <nav
                className="chapter-reader-navigation"
                aria-label="Navegação do capítulo"
            >
                <button
                    type="button"
                    className="chapter-nav-button chapter-nav-previous"
                    onClick={goPrevious}
                    disabled={isFirstContent}
                >
                    <span aria-hidden="true">←</span>
                    Anterior
                </button>

                <span className="chapter-nav-counter">
                    {currentNumber} de {totalContents}
                </span>

                <button
                    type="button"
                    className="chapter-nav-button chapter-nav-next"
                    onClick={goNext}
                    disabled={isLastContent}
                >
                    Próximo
                    <span aria-hidden="true">→</span>
                </button>
            </nav>

            <p className="chapter-reader-manual-note">
                Você controla o ritmo da história. Avance quando
                estiver pronto.
            </p>
        </section>
    );
}

export default ChapterReader;