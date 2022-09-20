
const SPOTIFY_COLLECTIONS = [
    "https://open.spotify.com/embed/playlist/2AZnEW009GVYOmH3wvWUlm?utm_source=generator",
    "https://open.spotify.com/embed/playlist/5yYxhzVWiSfYfvqTe81O22?utm_source=generator",
    "https://open.spotify.com/embed/playlist/0SaW6wK2gn9mKGFusUU7XD?utm_source=generator",
    "https://open.spotify.com/embed/playlist/3KMvAQkikKDuXBBwUKSpC2?utm_source=generator",
    "https://open.spotify.com/embed/playlist/6Ypbl3jJHG1lfdJZ3Sh5lt?utm_source=generator"
];

function Radio() {
    return(
        <div class="radio-page-container">
            <div class="radio-left-content">
                <div class="radio-live-container">
                    <p class="radio-section-title">Live</p>
                    <div class="radio-live-window">
                        <iframe width="100%" height="250" src="https://www.mixcloud.com/widget/follow/?u=%2Frojiroji%2F" frameborder="0" ></iframe>                        
                    </div>
                </div>

                <div class="radio-previous-container">
                    <p class="radio-section-title">Previous Sets</p>
                    <div class="radio-previous-sets-wrapper">
                            <div class="radio-sets">
                            <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Frojiroji%2Fisland-city%2F" frameborder="0" ></iframe>
                            </div>
                            <div class="radio-sets">
                                <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Frojiroji%2Fcybersound-ii%2F" frameborder="0" ></iframe>
                            </div>
                            <div class="radio-sets">
                                <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Frojiroji%2Fthe-sultanas-summer-soir%C3%A9e%2F" frameborder="0" ></iframe>
                            </div>
                            <div class="radio-sets">
                                <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Frojiroji%2Fsunshine-follies%2F" frameborder="0" ></iframe>
                            </div>
                            <div class="radio-sets">
                            <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Frojiroji%2Froji-presents-a-knit-to-remember%2F" frameborder="0" ></iframe>
                            </div>
                    </div>
                </div>
            </div>

           {  <div class="radio-right-content">
                <div class="radio-collections-container">
                    <p class="radio-section-title">Collections</p>
                    <div class="radio-collections-wrapper">
                        <div class="radio-collection">
                            <iframe src="https://open.spotify.com/embed/playlist/2AZnEW009GVYOmH3wvWUlm?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                        <div class="radio-collection">
                            <iframe src="https://open.spotify.com/embed/playlist/5yYxhzVWiSfYfvqTe81O22?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                        <div class="radio-collection">
                            <iframe src="https://open.spotify.com/embed/playlist/0SaW6wK2gn9mKGFusUU7XD?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                        <div class="radio-collection">
                            <iframe src="https://open.spotify.com/embed/playlist/3KMvAQkikKDuXBBwUKSpC2?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                        <div class="radio-collection">
                            <iframe src="https://open.spotify.com/embed/playlist/7Fzw8Qe89tDLUfPiTbKEf7?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                        <div class="radio-collection">
                            <iframe src="https://open.spotify.com/embed/playlist/6Ypbl3jJHG1lfdJZ3Sh5lt?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                        <div class="radio-collection">
                            <iframe src="https://open.spotify.com/embed/playlist/5ZNVuoOKoimoC8J8hEP2se?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                        <div class="radio-collection">
                            <iframe src="https://open.spotify.com/embed/playlist/4fGXfE2iXKwy9fNjaztMkJ?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                        {/* { {SPOTIFY_COLLECTIONS.map(collection => {
                            return (
                                <Link
                                    activeClass="active"
                                    to="top"
                                    smooth={true}
                                    spy={true}
                                    duration={1000}
                                    offset={-150}
                                    className="list"
                                    onClick={() => setFilter(filter.text)}
                                >
                                    <span className={filter.class}>{filter.text}</span>
                                </Link>
                            );
                        })} } */}
                    </div>
                </div>
            </div> }
        </div>
    );
}

export default Radio