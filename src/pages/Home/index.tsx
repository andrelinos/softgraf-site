import { Header } from '../../components/Header';
import { Slider } from '../../components/Slider';
import { Testimonial } from '../../components/Testimonial';

import styles from './styles.module.scss';

export function Home() {
    return (
        <div className={styles.container}>
            <Slider />
            <section className={styles.solutions}>
                <h1 className={styles.title}>Soluções</h1>
                <p className={styles.description}>
                    Controle móvel dos processos da empresa, em suas mãos.
                </p>
                <div className={styles.solutionsItems}>
                    <div>
                        <img
                            src="./assets/thumbnails/tintas.png"
                            alt="Tintas Gráficas"
                        />
                        <span>Tintas Gráficas</span>
                    </div>

                    <div>
                        <img
                            src="./assets/thumbnails/embalagens.png"
                            alt="Embalagens"
                        />
                        <span>Embalagens</span>
                    </div>

                    <div>
                        <img
                            src="./assets/thumbnails/beleza.png"
                            alt="Cosméticos"
                        />
                        <span>Cosméticos</span>
                    </div>

                    <div>
                        <img
                            src="./assets/thumbnails/impressora.png"
                            alt="Gráficas"
                        />
                        <span>Gráficas</span>
                    </div>
                </div>
                <button>Veja todas as soluções</button>
            </section>
            <section className={styles.default}>
                <div className={styles.testimonial}>
                    <Testimonial />
                </div>
                <div className={styles.defaultItems}>
                    <div>
                        <span>
                            <img
                                src="./assets/images/professional.png"
                                alt="Profissionais capacitado"
                            />
                        </span>
                        <h2>Profissionais capacitados</h2>
                    </div>
                    <div>
                        <span>
                            <img
                                src="./assets/images/tech.png"
                                alt="Tecnologia de ponta"
                            />
                        </span>
                        <h2>Tecnologia de ponta</h2>
                    </div>
                    <div>
                        <span>
                            <img
                                src="./assets/images/support.png"
                                alt="Suporte Técnico"
                            />
                        </span>
                        <h2>Suporte Técnico</h2>
                    </div>
                    <div>
                        <span>
                            <img
                                src="./assets/images/flexible.png"
                                alt="Flexibilidade"
                            />
                        </span>
                        <h2>Flexibilidade</h2>
                    </div>
                </div>
            </section>
            <section className={styles.contact}>
                <div>
                    <h2>Solicite um orçamento</h2>
                    <p>
                        Nossos especialistas estão aptos e prontos para
                        personalizar um orçamento para você.
                    </p>
                    <button>Veja mais</button>
                </div>
            </section>
        </div>
    );
}
