import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

const TdStyle = styled.td `
    text-align: center;
    padding: 10px;
    border: 3px solid #1D1B26;
`

class Tr extends React.Component {

    render() {
        return (
                <React.Fragment>
                        <TdStyle>
                            {this.props.name}
                        </TdStyle>
                        <TdStyle>
                            {this.props.article}
                        </TdStyle>
                        <TdStyle>
                                <React.Fragment>
                                    <Button onClick = {() => {this.props.Rewrite}}> редактировать </Button>
                                    <Button onClick = {() => {this.props.Delete}}> удалить </Button>
                                </React.Fragment>
                        </TdStyle>   
                    </React.Fragment>
        )               
    } 
}

export default Tr 