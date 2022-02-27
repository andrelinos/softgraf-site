import { Header } from '../../components/Header';
import { Slider } from '../../components/Slider';

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
                    <span className={styles.logo}>LOGO</span>
                    <span className={styles.title}>Depoimentos</span>
                    <p>
                        "Desde a fundação da Sellerink, em 1995, nosso sistema
                        de informática é o CromoSystem da Softgraf. Com o passar
                        dos anos, o sistema foi customizado, ampliado e
                        diversificado para atender a todas as nossas
                        necessidades, desde a área técnica até a administrativa,
                        financeira e comercial. Temos uma ferramenta completa,
                        que nos ajuda na gestão e no aperfeiçoamento do nosso
                        negócio, a partir de completos registros e relatórios
                        gerenciais. Além disso, temos à disposição um suporte
                        técnico de alto nível e analistas que entendem
                        rapidamente a necessidade de customização, fazendo com
                        que nosso sistema esteja sempre atualizado
                        tecnologicamente e disponível em diversas plataformas."
                    </p>
                    <span>
                        GILBERTO LAVIERO ( DIRETOR ) – “VERTI PRODUTOS QUIMICOS
                        LTDA.”
                    </span>
                </div>
                <div>
                    <div>
                        <span>IMAGE</span>
                        <span>Profissionais capacitados</span>
                    </div>
                    <div>
                        <span>IMAGE</span>
                        <span>Tecnologia de ponta</span>
                    </div>
                    <div>
                        <span>IMAGE</span>
                        <span>Suporte Técnico</span>
                    </div>
                    <div>
                        <span>IMAGE</span>
                        <span>Flexibilidade</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
