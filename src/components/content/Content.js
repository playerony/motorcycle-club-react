import React, { Component } from 'react';
import img1 from '../../static/img/content1.png';
import img2 from '../../static/img/content2.png';
import img3 from '../../static/img/content3.png';
import img4 from '../../static/img/content4.png';
import { slideInLeft } from 'react-animations';
import Waypoint from 'react-waypoint';
import './Content.scss';
import { keyframes } from 'styled-components';

class Content extends Component {
    state = {
        title: `O nas`,
        farewell: `Serdecznie zapraszamy do naszego grona wszystkich, którym odpowiada formuła WKM.`,
        boxes: [
            {
                id: 1,
                title: `Historia`,
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
        ],
        content1Animation: false,
        content2Animation: false,
        content3Animation: false,
        content4Animation: false
    };

    handleContent1Animation = () => {
        this.setState({
            ...this.state,
            content1Animation: true
        })
    }

    handleContent2Animation = () => {
        this.setState({
            ...this.state,
            content2Animation: true
        })
    }

    handleContent3Animation = () => {
        this.setState({
            ...this.state,
            content3Animation: true
        })
    }

    handleContent4Animation = () => {
        this.setState({
            ...this.state,
            content4Animation: true
        })
    }

    render() {
        const slideInLeftAnimation = keyframes`${slideInLeft}`;

        return (
            <div className="content-wrapper">
                <div id="content">
                    <h1><span>Dlaczego</span> WKM?</h1>
                    <div className="boxes">
                        <Waypoint onEnter={this.handleContent1Animation}>
                            <div className="boxes--box" id="content1">
                                <div className="boxes--box--image" style={{animation: this.state.content1Animation ? `3s ${slideInLeftAnimation}` : ``}}>
                                    <img src={this.state.boxes[0].image} alt={this.state.boxes[0].image}/>
                                </div>
                                <div className="boxes--box--text" style={{animation: this.state.content1Animation ? `2s ${slideInLeftAnimation}` : ``}}>
                                    <div className="boxes--box--text-title">
                                        {this.state.boxes[0].title}
                                    </div>
                                    <h3>{this.state.boxes[0].contents[0].content}</h3>
                                </div>
                            </div>
                        </Waypoint>
                        <Waypoint onEnter={this.handleContent2Animation}>
                            <div className="boxes--box" id="content2">
                                <div className="boxes--box--text" style={{animation: this.state.content2Animation ? `2s ${slideInLeftAnimation}` : ``}}>
                                    <div className="boxes--box--text-title">
                                        {this.state.boxes[1].title}
                                    </div>
                                    <h3>{this.state.boxes[1].contents[0].content}</h3>
                                </div>
                                <div className="boxes--box--image" style={{animation: this.state.content2Animation ? `2s ${slideInLeftAnimation}` : ``}}>
                                    <img src={this.state.boxes[1].image} alt={this.state.boxes[1].image}/>
                                </div>
                            </div>
                        </Waypoint>
                        <Waypoint onEnter={this.handleContent3Animation}>
                            <div className="boxes--box">
                                <div className="boxes--box--image" style={{animation: this.state.content3Animation ? `2s ${slideInLeftAnimation}` : ``}}>
                                    <img src={this.state.boxes[2].image} alt={this.state.boxes[2].image}/>
                                </div>
                                <div className="boxes--box--text" style={{animation: this.state.content3Animation ? `2s ${slideInLeftAnimation}` : ``}}>
                                    <div className="boxes--box--text-title">
                                        {this.state.boxes[2].title}
                                    </div>
                                    <h3>{this.state.boxes[2].contents[0].content}</h3>
                                </div>
                            </div>
                        </Waypoint>
                        <Waypoint onEnter={this.handleContent4Animation}>
                            <div className="boxes--box">
                                <div className="boxes--box--text" style={{animation: this.state.content4Animation ? `2s ${slideInLeftAnimation}` : ``}}>
                                    <div className="boxes--box--text-title">
                                        {this.state.boxes[3].title}
                                    </div>
                                    <h3>{this.state.boxes[3].contents[0].content}</h3>
                                </div>
                                <div className="boxes--box--image" style={{animation: this.state.content4Animation ? `2s ${slideInLeftAnimation}` : ``}}>
                                    <img src={this.state.boxes[3].image} alt={this.state.boxes[3].image}/>
                                </div>
                            </div>
                        </Waypoint>
                    </div>
                    <div className="content-description">
                        <h1>{this.state.farewell}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;