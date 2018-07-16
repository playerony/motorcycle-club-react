import React, { Component } from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
    .container {
        max-width: 900px;
        margin: auto;
        padding: 10px;
        & > #description {
            margin-top: 40px;
            text-align: justify;
            background: #FFFFFF;
                padding: 15px;
                box-shadow: 0px 3px 6px rgba(0, 0, 0, .3);
        }
        & > .content {
            margin-top: 20px;
            h1 {
                text-align: center;
                text-shadow: 0px 3px 6px rgba(0, 0, 0, .2);
                & > span {
                    color: #8A52D6;
                }
            }
        }
    }
`;

class Content extends Component {
    state = {
        clubDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                          deserunt mollit anim id est laborum.`

    };

    render() {
        return (
            <StyledContent>
                <div className="container">
                    <div className="content">
                        <h1>O nas</h1>
                        <div id="description">
                            {this.state.clubDescription}
                        </div>
                    </div>
                </div>
            </StyledContent>
        );
    }
}

export default Content;