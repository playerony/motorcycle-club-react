import React, { Component } from 'react';
import styled from 'styled-components';
import img1 from '../../static/img/content1.png';
import img2 from '../../static/img/content2.png';
import img3 from '../../static/img/content3.png';
import img4 from '../../static/img/content4.png';

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

            & > h1 {
                padding-top: 50px;
                font-size: 35px;
                text-align: center;
                text-shadow: 0px 3px 6px rgba(0, 0, 0, .2);
                color: #2b2b2b;
                font-weight: 400;

                & > span {
                    font-weight: 800;
                }
                
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

                & .boxes--box {
                    width: 100%;
                    height: 400px;
                    margin-top: 90px;
                    
                    & .boxes--box--image {
                        width: 52%
                        height: 100%;
                        margin: auto;
                        background-size: contain;
                        background-position: center;
                        overflow: hidden;
                        outline: none;
                        box-shadow: inset 0px 400px 0px rgba(146, 93, 217, .4),
                                          0px 3px 6px rgba(0, 0, 0, .3);
                        float: left;

                        @media screen and (max-width: 1000px) {
                            width: 0px;
                            height: 0px;
                        }
                    }

                    & .boxes--box--text {
                        width: 36%;
                        height: 50%;
                        float: left;
                        padding: 6%;
                        text-align: center;
                        position: relative;
                        top: 50%;

                        & .boxes--box--text-title {
                            font-weight: 800;
                            font-size: 36px;
                            text-align: left;
                            padding-left: 9px;
                            color: #2b2b2b;
                        }

                        & > h3 {
                            padding-top: 20px;
                            font-size: 20px;
                            font-weight: 500;
                            text-align: left;
                            color: rgba(0, 0, 0, .5);
                            padding: 10px 10px 10px 10px;
                            
                            @media screen and (max-width: 550px) {
                                font-size: 12px;
                            }
                        }

                        @media screen and (max-width: 1000px) {
                            width: 86%;
                        }
                    }
                }

                @media screen and (max-width: 1000px) {
                    width: 100%;
                    margin-top: -90px;
                }
            } 
        }

        & .content--text {
            margin: 30px auto;
            background: #2b2b2b;
            padding: 15px;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, .3);
            position: relative;
            bottom: -75px;
            z-index: 2;
            transition: all 0.2s ease-in-out 0.2s;
            font-weight: 700;
            font-size: 22px;
            text-align: center;

            & h1 {
                color: #FFFFFF !important;
                padding-top: 0px !important;
            }

            @media screen and (max-width: 1000px) {
                font-size: 14px;
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
                    title: `Powstanie`,
                    image: `${img1}`,
                    contents: [
                        {
                            id: 1,
                            content: `Historia powstania klubu, to historia ludzi, którzy zarazili 
                                    nas swoją pasją, stylem życia i miłością do motocykli. Nie sposób
                                    nie wymienić takich nazwisk jak Bartek KOSAR, Mirek BANIA czy Rafał GÓRSKI.`
                        }
                    ]
                },
                {
                    id: 2,
                    title: `Pomysł`,
                    image: `${img2}`,
                    contents: [
                        {
                            id: 1,
                            content: `Sam pomysł stworzenia klubu zrodził się w ich głowach dopiero 
                                    wiosną 2008 roku podczas wypadu na Słowację. Tam właśnie padły 
                                    pierwsze pomysły, w tym nasza obecna nazwa.`
                        }
                    ]
                },
                {
                    id: 3,
                    title: `Rozwój`,
                    image: `${img3}`,
                    contents: [
                        {
                            id: 1,
                            content: `Kolejne lata przyniosły ze sobą dalszy rozwój, podjęcie współpracy i 
                                    zawarcie przyjaźni z innymi klubami, w tym m.in. z Blue Knights. 
                                    Udzielamy się w licznych imprezach charytatywnych, w 2012 roku 
                                    przyłączyliśmy się do 20-go Finału WOŚP w Gliwicach. 
                                    Od czasu założenia WKM przydarzyło się wiele bliższych i dalszych, 
                                    pełnych przygód, radości, a czasami także trudnych chwil, podróży na dwóch kółkach.`
                        }
                    ]
                },
                {
                    id: 4,
                    title: `Rozpad`,
                    image: `${img4}`,
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
                        <h1><span>Dlaczego</span> WKM?</h1>
                        <div className="boxes">
                            <div className="boxes--box">
                                <div className="boxes--box--image">
                                    <img src={this.state.boxes[0].image}/>
                                </div>
                                <div className="boxes--box--text" style={{transform: `translateY(-50%)`}}>
                                    <div className="boxes--box--text-title">
                                        {this.state.boxes[0].title}
                                    </div>
                                    <h3>{this.state.boxes[0].contents[0].content}</h3>
                                </div>
                            </div>
                            <div className="boxes--box">
                                <div className="boxes--box--text" style={{transform: `translateY(-50%)`}}>
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
                                <div className="boxes--box--text" style={{transform: `translateY(-75%)`}}>
                                    <div className="boxes--box--text-title">
                                        {this.state.boxes[2].title}
                                    </div>
                                    <h3>{this.state.boxes[2].contents[0].content}</h3>
                                </div>
                            </div>
                            <div className="boxes--box">
                                <div className="boxes--box--text" style={{transform: `translateY(-70%)`}}>
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