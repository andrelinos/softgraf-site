import styles from './styles.module.scss';

export function Footer() {
    return (
        <div className={styles.container}>
            <h1>SOFTGRAF</h1>
            <div className={styles.contact}>
                <span>contato@softgraf.com.br</span>
                <span>(11) 9 9452-6227 | (11) 2615-3129</span>
                <span>Rua João Peixoto Viegas, 169 - Conjunto 06</span>
                <span>Interlagos - São Paulo/SP</span>
            </div>
            <div className={styles.contact}>
                <span>TODOS OS DIREITOS RESERVADOS - 2018</span>
                <span>Andrelino Silva</span>
            </div>
        </div>
    );
}
