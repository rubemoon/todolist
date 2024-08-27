import React, { useState } from "react";
import Todo from "../../pages/todo";
import Home from "../../pages/home";
import Sobre from "../../pages/sobre";

enum EnumPaginas {
    'home' = 'home',
    'todo' = 'todo',
    'sobre' = 'sobre'
}

const Router = () => {
    const [getPaginaAtual, setPaginaAtual] = useState<EnumPaginas>(EnumPaginas.home)


    const renderizarCabecalho = () => (
        <div>
            <button onClick={() => setPaginaAtual(EnumPaginas.home)}>Inicio</button>
            <button onClick={() => setPaginaAtual(EnumPaginas.todo)}>Todo</button>
            <button onClick={() => setPaginaAtual(EnumPaginas.sobre)}>Sobre</button>
        </div>
    )

    const renderizarPagina = () => {
        switch (getPaginaAtual) {
            case EnumPaginas.home: return <Home />
            case EnumPaginas.todo: return <Todo />
            case EnumPaginas.sobre: return <Sobre />
            default: return <div><h1>home</h1></div>
        }
    }

    return (
        <div>
            {renderizarCabecalho()}
            {renderizarPagina()}
        </div>
    )
}

export default Router;