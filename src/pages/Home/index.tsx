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
            </section>
        </div>
    );
}
