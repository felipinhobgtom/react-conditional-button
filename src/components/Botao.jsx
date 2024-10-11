function Botao(props){
    const logado = props.logado
    const retornoBotao = logado ? <button>Sair</button> : <button>Entrar</button>

    return retornoBotao
}

export default Botao