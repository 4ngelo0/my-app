import styles from './Frase.module.css';

function Pessoa({nome, idade, profissao, foto}){
    return(
        <div className={styles.pessoaContainer}>
            <div className={styles.pessoaContent}>
                <h2>Nome: {nome}</h2>
                <img src={foto} alt={nome} />
                <p>Idade: {idade}</p>
                <p>profissão: {profissao}</p>
            </div>
        </div>
    )
}

export default Pessoa;