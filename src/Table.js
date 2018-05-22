import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Rewrite from './Rewrite';
import Tr from './Tr'

const TableStyle = styled.table `
    border-collapse: collapse;
    border: 3px solid #F79361;
    font-family: "Lucida Grande", sans-serif;
    margin: 10px 20px;
`
const ThStyle = styled.th `
    padding: 10px;
    text-align: left;
    font-size: 18px;
    border: 3px solid #1D1B26;
`

const TdStyle = styled.td `
    text-align: center;
    padding: 10px;
    border: 3px solid #1D1B26;
`

class Table extends React.Component {
    state = {
        data: this.props.data
    }

    render() {
        return (
            <TableStyle >
                <tr>
                    <ThStyle> 
                        Наименование товара 
                    </ThStyle>
                    <ThStyle>
                        Артикул  
                    </ThStyle>
                    <ThStyle>
                        Действия для изменения
                    </ThStyle>
                </tr> 
                
                {Object.keys(this.props.data)
                .map( info => {
                    return (
                    <tr key = {info}> 
                            {this.props.rewrite[info] && <Rewrite name = {this.props.data[info]['name']}
                                                                  article = {this.props.data[info]['artile']}
                                                                  nameChange = {this.props.nameChange}
                                                                  articleChange = {this.props.articleChange}
                                                                  RewriteSave = {this.props.RewriteSave(info)} />
                            }

                            {!this.props.rewrite[info] && <Tr name = {this.props.data[info]['name']}
                                                              article = {this.props.data[info]['artile']}
                                                              Rewrite = {this.props.Rewrite(info)}
                                                              Delete = {this.props.Delete(info)}
                                                            />

                            }
                    </tr>
                        )
                    }
                    )
                }   
            </TableStyle>  
        )
    } 
}

export default Table 