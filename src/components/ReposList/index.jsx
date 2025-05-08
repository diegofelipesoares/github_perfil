import { useEffect, useState } from "react";

import styles from "./ReposList.module.css";

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]); //lista de repositórios
    const [estaCarregando, setEstaCarregando] = useState(true); //estado para frase está carregando
    // useEffect é usado para executar efeitos colaterais, como chamadas de API,
    // quando o componente é montado. O array vazio [] indica que o efeito será executado
    // apenas uma vez, quando o componente for carregado pela primeira vez.
    useEffect(() => {
        //Quando entrar no useEffect, volta carregando para true
        setEstaCarregando(true);
        // Faz uma requisição à API do GitHub para buscar os repositórios
        fetch(`https://api.github.com/users/diegofelipesoares/repos`)
        // O retorno da requisição (uma "Promise") é transformado em JSON.
        .then(res => res.json())
        // O resultado em JSON é recebido como 'resJson'.
        .then(resJson => {
            // Colocando conteúdo no useState, no repos
            // Adicionando tempo de espera de 3 segundos para atrasos na requisição
            setTimeout(( ) => {
                setEstaCarregando(false); //para frase "esta carregando..."
                setRepos(resJson);
            },3000)
        })
    }, [nomeUsuario]);

    return(
        
        <div className="container">

            {estaCarregando ? (
                <h1>Carregando...</h1>
            ):(
                <ul className={styles.list}>
                    {repos.map(repositorio => (
                        <li className={styles.listItem} key={repositorio.id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> {repositorio.name} <br />
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> {repositorio.language} <br />
                            </div>
                            <div className={styles.itemLink}>
                                <a target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            
        </div>
    )
}

export default ReposList;