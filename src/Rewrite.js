import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

const TdStyle = styled.td `
    text-align: center;
    padding: 10px;
    border: 3px solid #1D1B26;
`

class Rewrite extends React.Component {
    state = {
        name: this.props.name,
        article: this.props.article
    }

    render() {
        return (
                <React.Fragment>
                    <TdStyle>
                        <input id = "name" 
                               type = "text" 
                               value = {this.state.name}
                               onChange = {this.props.nameChange} 
                        />
                    </TdStyle>
                    <TdStyle>
                        <input id = "article" 
                               type = "text" 
                               value = {this.state.article}
                               onChange = {this.props.articleChange}
                        />
                    </TdStyle>
                    <TdStyle>
                        <Button onClick = {() => {this.props.RewriteSave}}> сохранить </Button>
                        </TdStyle> 
                </React.Fragment>  
                )
            }
}

export default Rewrite 