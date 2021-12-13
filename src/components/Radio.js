function Radio() {
    return(
        <div class="radio-page-container">
            <div class="radio-left-content">
                <div class="radio-live-container">
                    <p class="radio-section-title">Live</p>
                    <div class="radio-live-window">
                        <iframe src="https://mixlr.com/users/8206991/embed?artwork=true&color=#d92e2e" frameborder="0" scrolling="no" height="180px" width="100%"></iframe>
                        {/* <small><a href="http://mixlr.com/rojisono" id="mixlr-link">rojisono is on Mixlr</a></small> */}
                    </div>
                </div>

                <div class="radio-previous-container">
                    <p class="radio-section-title">Previous Sets</p>
                    <div class="radio-previous-sets-wrapper">
                        <iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Frojiroji%2Froji-presents-a-knit-to-remember%2F" frameborder="0" ></iframe>
                    </div>
                </div>
            </div>

            <div class="radio-right-content">
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
                            <iframe src="https://open.spotify.com/embed/playlist/6Ypbl3jJHG1lfdJZ3Sh5lt?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Radio