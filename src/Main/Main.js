import React from "react";
import './Mains.css';
import muse from '../assets/playlist/lovelive.jpg';
import bandori from '../assets/playlist/sasanqua.jpg';
import aqours from '../assets/playlist/aqours.jpg';
import liella from '../assets/playlist/liella.jpg';
import nijigasaki from '../assets/playlist/nijigasaki.jpg';
import printemps from '../assets/playlist/printemps.webp'
import lily from '../assets/playlist/lilywhite.webp';
import bibi from '../assets/playlist/bibi.webp';


const Main = () => {
    return (
        <>
            <div className="main-container">
                <div className="playlist-container">
                    <div id="result-playlists">
                        <div className="playlist">
                            <h1 id="greeting"></h1>
                            <h2 className="session">Navegar por todas as seções</h2>
                        </div>

                        <div className="offer__scroll-container">
                            <div className="offer__list">
                                <section className="offer__list-item">

                                    <a href="" className="cards">
                                        <div className="cards card1">
                                            <img src={muse} alt="Love Live!" />
                                            <span>Muse</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card2">
                                            <img src={bandori} alt="Bang Dream!" />
                                            <span>Bang Dream!</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card3">
                                            <img src={aqours} alt="Aqours" />
                                            <span>BiBi</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card4">
                                            <img src={liella} alt="Liella!!" />
                                            <span>Liella!!</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card5">
                                            <img src={nijigasaki} alt="Nijigasaki" />
                                            <span>Nijigasaki</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card6">
                                            <img src={printemps} alt="printemps" />
                                            <span>Printemps</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card7">
                                            <img src={lily} alt="Lily White" />
                                            <span>Lily White</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card8">
                                            <img src={bibi} alt="BiBi" />
                                            <span>BiBi</span>
                                        </div>
                                    </a>
                                </section>
                            </div>
                        </div>
                    </div>

                    <div id="result-artist" className="hidden">
                        <div className="grid-container">
                            <div className="artist-card" id="">
                                <div className="card-img">
                                    <img id="artist-img" className="artist-img" />
                                    <div className="play">
                                        <span className="fa fa-solid fa-play"></span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <a title="Foo Fighters" className="vst" href=""></a>
                                        <span className="artist-name" id="artist-name"></span>
                                        <span className="artist-categorie">Artista</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Main;