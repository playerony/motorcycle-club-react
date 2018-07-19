import React, { Component } from 'react';
import styled from 'styled-components';
import img1 from '../../static/img/img1.jpg';

const StyledContent = styled.div`
    .container {
        max-width: 1000px;
        margin: auto;
        padding: 10px;

        & > #content {
            margin-top: 20px;

            $ .content--text {
                margin: 30px auto;
                color: red;
                background-color: #FFFFFF;
                padding: 15px;
                box-shadow: 0px 3px 6px rgba(0, 0, 0, .3);
            }

            & > .description {
                margin: 30px;
                text-align: justify;
                font-size: 18px;
                color: #FFF;
                padding: 15px;
            }

            & h1 {
                padding-top: 20px;
                font-size: 40px;
                text-align: center;
                text-shadow: 0px 3px 6px rgba(0, 0, 0, .2);
                color: #FFF;
                
                @media screen and (max-width: 550px) {
                    font-size: 20px;
                }
            }

            & h2 {
                padding-top: 20px;
                font-size: 30px;
                text-align: center;
                text-shadow: 0px 3px 6px rgba(0, 0, 0, .2);
                color: #FFF;
                
                @media screen and (max-width: 550px) {
                    font-size: 15px;
                }
            }

            & .boxes {
                width: 100%;
                height: 400px;
                margin-top: 20px;
                display: flex;

                & .boxes--box {
                    width: 100%;
                    
                    & .boxes--box--image {
                        width: 300px;
                        height: 300px;
                        padding: 20px 20px 20px 50px;
                        background-size: cover;
                        background-position: center;
                        overflow: hidden;
                        outline: none;
                        float: left;
                    }

                    & .boxes--box--text-right { 
                        position: absolute;
                        z-index: 2;
                        width: 660px;
                        float: left;
                        padding: 50px 0 20px 290px;
                    }

                    h3 {
                        padding-top: 20px;
                        font-size: 20px;
                        text-align: left;
                        text-shadow: 0px 3px 6px rgba(0, 0, 0, .2);
                        color: #FFF;
                        
                        @media screen and (max-width: 550px) {
                            font-size: 10px;
                        }
                    }
                }

                @media screen and (max-width: 800px) {
                    flex-direction: column;
                }
            } 
        }

        & .content--text {
            margin: 30px auto;
            background: #FFFFFF;
            padding: 15px;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, .3);
            position: relative;
            top: 75px;
            z-index: 2;

            & h1 {
                color: black !important;
            }
        }
    }
`;

class Content extends Component {
    state = {
        title: `Historia powstania`,
        clubName: `Wojskowego Klubu Motocyklowego`,
        clubAbbreviation: `WKM`,
        farewell: `Serdecznie zapraszamy do naszego grona wszystkich, którym odpowiada formuła WKM.`,
        boxes: [
            {
                id: 1,
                title: `Historia powstania`,
                image: `${img1}`,
                contents: [
                    {
                        id: 1,
                        content: `Historia powstania klubu, to historia ludzi, którzy zarazili 
                                  nas swoją pasją, stylem życia i miłością do motocykli. Nie sposób
                                  nie wymienić takich nazwisk jak Bartek KOSAR, Mirek BANIA czy Rafał GÓRSKI.`
                    },
                    {
                        id: 2,
                        content: `Szczególne słowa uznania należą się największemu poskromcy, 
                                  przede wszystkim  własnego umysłu Grześkowi WAWRZYŃSKIEMU.`
                    },
                    {
                        id: 3,
                        content: `!!!  Serdeczne dzięki  !!!`
                    }
                ]
            },
            {
                id: 2,
                title: `Pomysł`,
                image: `#`,
                contents: [
                    {
                        id: 1,
                        content: `text1`
                    },
                    {
                        id: 2,
                        content: `text2`
                    }
                ],
                names: [
                    {
                        id: 1,
                        content: "Radek Bartosik"
                    },
                    {
                        id: 2,
                        content: "Jasiu Cholewka"
                    },
                    {
                        id: 3,
                        content: "Sebastian Grant"
                    },
                    {
                        id: 4,
                        content: "Adam Lasota"
                    },
                    {
                        id: 5,
                        content: "Zbychu Mucha"
                    },
                    {
                        id: 6,
                        content: "Robert Szczerbka"
                    },
                    {
                        id: 7,
                        content: "Tomasz Trzebiński"
                    }
                ]
            },
            {
                id: 3,
                title: `Rozwój`,
                image: `#`,
                contents: [
                    {
                        id: 1,
                        content: `text1`
                    },
                    {
                        id: 2,
                        content: `text2`
                    }
                ]
            },
            {
                id: 4,
                title: `Rozpad`,
                image: `#`,
                contents: [
                    {
                        id: 1,
                        content: `text1`
                    }
                ]
            }
        ]
    };

    render() {
        return (
            <StyledContent>
                <div className="container">
                    <div id="content">
                        <h2>{this.state.title}</h2>
                        <h2>{this.state.clubName}</h2>
                        <h1>{this.state.clubAbbreviation}</h1>
                        <div className="boxes">
                            <div className="boxes--box">
                                <div className="boxes--box--image">
                                    <img src={this.state.boxes[0].image} style={{backgroundImage: `url(${img1})`}}/>
                                </div>
                                <div className="boxes--box--text-right">
                                    <h3>{this.state.boxes[0].contents[0].content}</h3>
                                    <h3>{this.state.boxes[0].contents[1].content}</h3>
                                    <h2>{this.state.boxes[0].contents[2].content}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="content--text">
                            <h1>{this.state.farewell}</h1>
                        </div>
                    </div>
                </div>
            </StyledContent>
        );
    }
}

export default Content;