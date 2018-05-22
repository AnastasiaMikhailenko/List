import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button'
import Table from './Table'

const InputStyle = styled.input `
    border: 1px solid ##1D1B26; //цвет рамки
    border-radius: 3px; //закругление углов (общее)
    height: 24px; // высота на свое усмотрение
    width: 160px; // ширина на свое усмотрение
    color: #1D1B26; //цвет шрифта в обычном состоянии
    font-size: 15px; // Размер шрифта
    font-family: Tahoma; // Стиль шрифта
    margin: 10px 20px;

    &::placeholder {
        color: #1D1B26; //цвет шрифта в обычном состоянии
        font-size: 15px; // Размер шрифта
        font-family: Tahoma; // Стиль шрифта
        padding: 5px;
    }
`

class Main extends React.Component {
    state = {
        click: false,
        n: [],
        a: [],
        data: [],
        rewrite: []
    }

    HandleChangeAdd = () => {
        this.setState( {click: true} );
    }

    HandleChangeSave = () => {
        this.setState( {click: false})
        let newInfo = {
            name: this.state.n,
            article: this.state.a
        }
        this.setState({data: this.state.data.concat(newInfo)})
        this.setState({rewrite: this.state.rewrite.concat(false)})
    }

    nameChange = (event) => {
        {this.setState({n: event.target.value})}
    }

    articleChange = (event) => {
        {this.setState({a: event.target.value})}
    } 

    Delete = (key) => {
        console.log(key)
        this.state.data.splice(key,1)
        this.setState({data: this.state.data})
    }

    Rewrite = (key) => {
        this.state.rewrite.splice(key,1,true)
        this.setState({rewrite: this.state.rewrite})
    }

    RewriteSave = (key) => {
        this.state.rewrite.splice(key,1,false)
        this.setState({rewrite: this.state.rewrite})
        let newInfo = {
            name: this.state.n,
            article: this.state.a
        }
        console.log(newInfo)
        this.state.data.splice(key,1,newInfo)
        this.setState({data: this.state.data})
    }

    render() {
        
        return (
            <React.Fragment>
                <Button onClick = {this.HandleChangeAdd}> 
                    Добавить 
                </Button> 
                {this.state.click && 
                    <p>
                        <form>
                            <InputStyle id = "name" 
                                        type="text" 
                                        placeholder = "Наименование товара" 
                                        onChange = {this.nameChange} 
                            />
                            <InputStyle id = "article" 
                                        type="text" 
                                        placeholder = "Артикул" 
                                        onChange = {this.articleChange} 
                            />
                        </form>
                        <Button onClick = {this.HandleChangeSave}> 
                            Сохранить
                        </Button>
                    </p>}
                <Table data = {this.state.data} 
                       Delete = {this.Delete} 
                       Rewrite = {this.Rewrite} 
                       rewrite = {this.state.rewrite}
                       nameChange = {this.nameChange} 
                       articleChange = {this.articleChange}
                       RewriteSave = {this.RewriteSave}
                />
            </React.Fragment>  
        )
    }
}

export default Main 