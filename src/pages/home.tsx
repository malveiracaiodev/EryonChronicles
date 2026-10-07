import "./home.css";

function Home() {
    return (
        <main className="home-page">

            {/* ========================================
                HERO
            ======================================== */}

            <section className="home-hero">

                <div className="hero-banner">
                    <img
                        src="https://malveiracaiodev.github.io/FragmentosDaEternidade/assets/header-zZzbw1Jk.png"
                        alt="Eryon Chronicles"
                    />
                </div>

                <div className="hero-content">

                    <p className="hero-eyebrow">
                        UM NOVO UNIVERSO ESTÁ DESPERTANDO
                    </p>

                    <p className="hero-description">
                        Uma história sobre poder, destino, descobertas
                        e as forças que moldam um mundo muito maior
                        do que seus habitantes imaginam.
                    </p>

                    <a
                        href="#historia"
                        className="hero-button"
                    >
                        <span>▶</span>
                        Entrar na história
                    </a>

                </div>

                <div className="hero-scroll">
                    <span>DESLIZE PARA EXPLORAR</span>
                    <div className="scroll-line"></div>
                </div>

            </section>


            {/* ========================================
                INTRODUÇÃO AO UNIVERSO
            ======================================== */}

            <section className="home-introduction">

                <div className="section-heading">

                    <span className="section-kicker">
                        O UNIVERSO
                    </span>

                    <h2>
                        Tudo começa com <span>Eryon.</span>
                    </h2>

                </div>

                <div className="introduction-content">

                    <p>
                        Eryon é a força que atravessa este mundo.
                        Alguns aprendem a utilizá-la. Outros nascem
                        ligados a ela de maneiras que ninguém consegue
                        explicar.
                    </p>

                    <p>
                        Existem cidades, criaturas, governos,
                        guerreiros e pessoas comuns tentando sobreviver
                        em um mundo onde forças extraordinárias podem
                        mudar o destino de todos.
                    </p>

                    <p>
                        Mas existem coisas que ainda permanecem
                        escondidas.
                    </p>

                </div>

            </section>


            {/* ========================================
                HISTÓRIA
            ======================================== */}

            <section
                id="historia"
                className="story-preview"
            >

                <div className="story-content">

                    <span className="section-kicker">
                        A HISTÓRIA
                    </span>

                    <h2>
                        Caleb's Fate
                    </h2>

                    <p className="story-chapter">
                        CAPÍTULO I
                    </p>

                    <h3>
                        O Despertar
                    </h3>

                    <p className="story-description">
                        Caleb desperta em um mundo que não conhece.
                        Sem respostas, sem compreender completamente
                        aquilo que existe dentro dele, sua jornada
                        começa ao lado de Kylo.
                    </p>

                    <p className="story-description">
                        O que inicialmente parece ser apenas o começo
                        de uma nova vida logo revela que há muito mais
                        acontecendo por trás daquele mundo.
                    </p>

                    <a
                        href="/historia"
                        className="story-button"
                    >
                        Ler o capítulo
                        <span>→</span>
                    </a>

                </div>

            </section>


            {/* ========================================
                EXPLORAÇÃO
            ======================================== */}

            <section className="explore-section">

                <div className="section-heading">

                    <span className="section-kicker">
                        EXPLORE
                    </span>

                    <h2>
                        Descubra <span>Eryon Chronicles</span>
                    </h2>

                    <p>
                        O universo será construído conforme a história
                        cresce.
                    </p>

                </div>

                <div className="explore-grid">

                    <a
                        href="/personagens"
                        className="explore-card"
                    >
                        <span className="card-number">
                            01
                        </span>

                        <div>
                            <h3>Personagens</h3>

                            <p>
                                Conheça aqueles que darão vida a esta
                                história.
                            </p>
                        </div>

                        <span className="card-arrow">
                            →
                        </span>
                    </a>


                    <a
                        href="/mundo"
                        className="explore-card"
                    >
                        <span className="card-number">
                            02
                        </span>

                        <div>
                            <h3>O Mundo</h3>

                            <p>
                                Descubra lugares, povos e forças que
                                existem além da jornada de Caleb.
                            </p>
                        </div>

                        <span className="card-arrow">
                            →
                        </span>
                    </a>


                    <div className="explore-card explore-card-coming">

                        <span className="card-number">
                            03
                        </span>

                        <div>
                            <h3>Eryon</h3>

                            <p>
                                O sistema de poder e os mistérios que
                                cercam essa força ainda serão revelados.
                            </p>
                        </div>

                        <span className="coming-label">
                            EM DESENVOLVIMENTO
                        </span>

                    </div>

                </div>

            </section>


            {/* ========================================
                FRASE FINAL
            ======================================== */}

            <section className="home-closing">

                <div className="closing-line"></div>

                <p>
                    Toda grande história começa com uma pergunta.
                </p>

                <h2>
                    E esta é apenas a primeira.
                </h2>

                <a
                    href="#historia"
                    className="closing-button"
                >
                    Começar
                </a>

            </section>

        </main>
    );
}

export default Home;