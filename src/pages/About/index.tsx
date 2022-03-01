import styles from './styles.module.scss';

export function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>A SOFTGRAF</h1>

            <section className={styles.history}>
                <span>
                    <img src="./assets/images/institucional-softgraf.jpg" />
                </span>
                <div>
                    <h2>Nossa História</h2>
                    <p>
                        A Empresa Softgraf ingressou no mercado de
                        desenvolvimento de aplicações há mais de 25 anos. É
                        pioneira na implementação de TI nas indústrias gráficas
                        e químicas. Tem a missão de criar soluções tecnológicas
                        compatíveis com a realidade do mercado nacional e
                        internacional.
                    </p>
                    <p>
                        Com profissionais especializados e treinados, a empresa
                        presta serviços de acordo com as necessidades de seus
                        clientes. Possui uma metodologia de implementação de
                        trabalho diferenciada, com as melhores tecnologias do
                        mercado.
                    </p>
                    <p>
                        Entre os valores da empresa estão a confiança, o
                        compromisso e a credibilidade. Sempre antenada com as
                        novidades do segmento, aposta constantemente em novas
                        perspectivas tecnológicas para fidelizar e conquistar
                        novos clientes.
                    </p>
                </div>
            </section>

            <section className={styles.presentation}>
                <h1 className={styles.title}>Diferenciais</h1>
                <div className={styles.presentationItems}>
                    <div>
                        <span>
                            <img src="./assets/images/professional.png" />
                        </span>
                        <div>
                            <h2>PROFISSIONAIS ESPECIALIZADOS</h2>
                            <p>
                                Nossos desenvolvedores passam por uma série de
                                treinamentos para se manterem atualizados e
                                especializados nas regras de negócios das quais
                                são designados.
                            </p>
                        </div>
                    </div>
                    <div>
                        <span>
                            <img src="./assets/images/tech.png" />
                        </span>
                        <div>
                            <h2>TECNOLOGIA DE PONTA</h2>
                            <p>
                                Usamos as melhores tecnologias do mercado,
                                desenvolvendo projetos customizados. Apostamos
                                em ferramentas robustas, inteligência artificial
                                e internet das coisas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.support}>
                <span>
                    <img src="./assets/images/support.png" />
                </span>
                <div>
                    <h2>SUPORTE</h2>
                    <p>
                        Nosso suporte é diferenciado. Além do treinamento na
                        implantação do ERP, nosso pós-venda oferece
                        profissionais on-line para sanar qualquer dúvida do
                        cliente.
                    </p>
                </div>
            </section>
        </div>
    );
}
