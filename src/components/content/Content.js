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
                padding-top: 100px;
                font-size: 40px;
                text-align: center;
                text-shadow: 0px 3px 6px rgba(0, 0, 0, .2);
                color: #2b2b2b;
                
                @media screen and (max-width: 550px) {
                    font-size: 20px;
                }
            }

            & h2 {
                padding-top: 20px;
                font-size: 30px;
                text-align: center;
                text-shadow: 0px 3px 6px rgba(0, 0, 0, .2);
                color: #2b2b2b;
                
                @media screen and (max-width: 550px) {
                    font-size: 15px;
                }
            }

            & .boxes {
                width: 100%;
                margin-top: 150px;

                & .boxes--box {
                    width: 100%;
                    height: 500px;
                    margin-top: 100px;
                    
                    & .boxes--box--image {
                        width: 40%
                        height: 100%;
                        background-size: cover;
                        background-position: center;
                        overflow: hidden;
                        outline: none;
                        float: left;
                    }

                    & .boxes--box--text {
                        width: 50%;
                        height: 50%;
                        float: left;
                        padding: 5%;

                        & .boxes--box--text-title {
                            font-weight: 700;
                            font-size: 50px;
                            text-align: center;
                            padding: 20px 0 50px 0;
                        }
                    }

                    h3 {
                        padding-top: 20px;
                        font-size: 20px;
                        font-weight: 400;
                        text-align: left;
                        text-shadow: 0px 3px 6px rgba(0, 0, 0, .2);
                        color: #000;
                        padding: 10px 10px 10px 10px;
                        
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
            background: #2b2b2b;
            padding: 15px;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, .3);
            position: relative;
            top: 75px;
            z-index: 2;
            transition: all 0.2s ease-in-out 0.2s;

            & h1 {
                color: #FFFFFF !important;
                padding-top: 0px !important;
            }
        }
    }
`;

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: `O nas`,
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
                    image: `${img1}`,
                    contents: [
                        {
                            id: 1,
                            content: `Sam pomysł stworzenia klubu zrodził się w ich głowach dopiero 
                                    wiosną 2008 roku podczas wypadu na Słowację. Tam właśnie padły 
                                    pierwsze pomysły, w tym nasza obecna nazwa - WOJSKOWY KLUB MOTOCYKLOWY.`
                        },
                        {
                            id: 2,
                            content: `Owe głowy to:`
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
                    image: `${img1}`,
                    contents: [
                        {
                            id: 1,
                            content: `Kolejne lata przyniosły ze sobą dalszy rozwój, podjęcie współpracy i 
                                    zawarcie przyjaźni z innymi klubami , w tym z Blue Knights, Klubem Motocyklowym 
                                    „Sąsiedzi” Pyskowice oraz ciekawymi ludźmi. Udzielamy się w licznych imprezach 
                                    charytatywnych, w 2012 roku przyłączyliśmy się do 20-go Finału WOŚP w Gliwicach. 
                                    Od czasu założenia WKM przydarzyło się wiele bliższych i dalszych, pełnych przygód, 
                                    radości, a czasami także trudnych chwil, podróży na dwóch kółkach.`
                        }
                    ]
                },
                {
                    id: 4,
                    title: `Rozpad`,
                    image: `${img1}`,
                    contents: [
                        {
                            id: 1,
                            content: `Rok 2013 był rokiem wielkich zmian. Nasze szeregi opuścił 
                                    ostatni z założycieli i wieloletni prezes Klubu Tomasz TRZEBIŃSKI. 
                                    Jego decyzja była zaskoczeniem dla wielu z nas, ale takie są koleje losu.
                                    Dalszy ciąg mamy nadzieję pięknej historii Wojskowego Klubu Motocyklowego 
                                    będziemy pisali już bez założycieli dla których nasze drzwi są i będą otwarte.`
                        }
                    ]
                }
            ]
        };
    }

    render() {
        return (
            <StyledContent>
                <div className="container">
                    <div id="content">
                        <h1>{this.state.title}</h1>
                        <div className="boxes">
                            <div className="boxes--box">
                                <div className="boxes--box--image">
                                    <img src={this.state.boxes[0].image}/>
                                </div>
                                <div className="boxes--box--text">
                                    <div className="boxes--box--text-title">
                                        {this.state.boxes[0].title}
                                    </div>
                                    <h3>{this.state.boxes[0].contents[0].content}</h3>
                                </div>
                            </div>
                            <div className="boxes--box">
                                <div className="boxes--box--text">
                                <div className="boxes--box--text-title">
                                        {this.state.boxes[1].title}
                                    </div>
                                    <h3>{this.state.boxes[1].contents[0].content}</h3>
                                </div>
                                <div className="boxes--box--image">
                                    <img src={this.state.boxes[1].image}/>
                                </div>
                            </div>
                            <div className="boxes--box">
                                <div className="boxes--box--image">
                                    <img src={this.state.boxes[2].image}/>
                                </div>
                                <div className="boxes--box--text">
                                    <div className="boxes--box--text-title">
                                        {this.state.boxes[2].title}
                                    </div>
                                    <h3>{this.state.boxes[2].contents[0].content}</h3>
                                </div>
                            </div>
                            <div className="boxes--box">
                                <div className="boxes--box--text">
                                    <div className="boxes--box--text-title">
                                        {this.state.boxes[3].title}
                                    </div>
                                    <h3>{this.state.boxes[3].contents[0].content}</h3>
                                </div>
                                <div className="boxes--box--image">
                                    <img src={this.state.boxes[3].image}/>
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