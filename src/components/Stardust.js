import {Helmet} from "react-helmet";

function Stardust() {
  return (
    <div className="stardust">
      {/* METADATA SPECIFICALLY FOR THIS PAGE */}
      <Helmet>
        <title>STARDUST DISCOTHEQUE</title>
        <meta name="description" content="You're invited OCT 1 at 10 PM ET" />
        <meta property="og:title" content="ROJI's STARDUST DISCOTHÈQUE" />
        <meta property="og:description" content="You're invited OCT 1 at 10 PM ET" />
        <meta property="og:image"
          content="https://res.cloudinary.com/rojiroji/image/upload/v1663684546/Design/ROJI/stardust_discotheque_1_4x_brlzyt.png" />
        <meta property="og:image:secure_url"
          content="https://res.cloudinary.com/rojiroji/image/upload/v1663684546/Design/ROJI/stardust_discotheque_1_4x_brlzyt.png" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="stardust share card" />
      </Helmet>

      <div className="content">
        <img
          src="https://res.cloudinary.com/rojiroji/image/upload/v1663628805/Design/ROJI/stardust_discotheque_white_1_4x_a4nbca.png"
          style={{width: "80%"}}/>

        <hr />
        <hr />
        <div className="buttonspace">
          <h1>SAT. OCT 1 AT 10 PM ET <br /></h1>
          <a class="button" href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20221002T030000Z%2F20221002T060000Z&text=Sam's%20Birthday%20Party%20(a.k.a%20STARDUST%20DISCOTH%C3%88QUE)&location=Ask%20Sam%20for%20location%20or%20Mixcloud.com&details=Dress%20spacey%20or%20in%20whatever%20makes%20you%20feel%20groovy.%0AWe'll%20have%20snacks%20and%20drinks%20but%20we%20welcome%20more!%0A%0AStreet%20parking%20available%2C%20or%20you%20can%20take%20the%20T%20(66%20bus%2C%2039%20bus%2C%20D%20Green%20Line)">
            <img
              src="https://res.cloudinary.com/rojiroji/image/upload/v1663683760/Design/ROJI/addtogcal_p86bzm.png"
              style={{width: "200px"}}/>
          </a><br></br><br></br>
          <a className="button" href="https://res.cloudinary.com/rojiroji/raw/upload/v1663730484/Design/ROJI/Sam_s_Birthday_Party_a.k.a_STARDUST_DISCOTH%C3%88QUE_piv22e.ics">
            <img
              src="https://res.cloudinary.com/rojiroji/image/upload/v1663683760/Design/ROJI/addtoical_hrxqmr.png"
              style={{width: "200px"}}/>
          </a>

          <h1>IN PERSON AT GIVEN LOCATION &<br /> </h1>
          <a className="button" href="https://www.mixcloud.com/live/rojiroji">
            <img
              src="https://res.cloudinary.com/rojiroji/image/upload/v1663652157/Design/ROJI/liveonmixcloud_c7uith.png"
              style={{width: "300px"}}/>
          </a>
        </div>
        <hr />
        <h2>theme is 'dancing on spaceship earth' <br />+ birthday celebration <br />+👽🚀💫🌎✨🎵</h2>
        <hr />

        <h2>CHECK THE VIBE WITH THIS SAMPLER</h2>
        <iframe style={{borderRadius: "12px"}}
          src="https://open.spotify.com/embed/playlist/3ppAPuBFmsJjGykZFfUkfu?utm_source=generator&theme=0" 
          width="100%"
          height="350" 
          frameBorder="0" 
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>

        <hr />
        <hr />
        <img 
          src="https://res.cloudinary.com/rojiroji/image/upload/v1663648490/Design/ROJI/logo_lockup_i9epc3.png"
          style={{width: "40%"}}/>
          <h2><a href="https://roji.co/">OTHER ROJI THINGS</a></h2>
      </div>
    </div>
  )
}

export default Stardust