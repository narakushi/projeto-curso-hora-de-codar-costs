import styles from './/home.module.css';
import savings from '../../img/savings.svg';

function Home(){
    return (
        <section>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <a href="/">Criar Projetos</a>
            <img src={savings} alt="Costs" />
        </section>
    )
}

export default Home;