import { useState } from "react"
import Gallery from 'react-photo-gallery'

function Filters(props){
    const [filters, setFilters] = useState(
        [
             {
                 class: "filter selected",
                 text: props.selected
             },
             {
                 class: "filter ",
                 text: "Branding"
             },
             {
                 class: "filter",
                 text: "Design"
             },
             {
                class: "filter",
                text: "Illustrations"
            },
             {
                 class: "filter ",
                 text: "Photo"
             },
             {
                 class: "filter",
                 text: "Type"
             },
             {
                 class: "filter",
                 text: "Video"
             },
             {
                 class: "filter",
                 text: "3D"
             },
             
         ]
    )
    const setFilter = (name) => {
        let filtersCopy = [...filters]
        const prevSelected = filters.find(x => x.class === "filter selected")
        const nextSelected = filters.find(x => x.text === name)
        const before = filtersCopy.indexOf(prevSelected)
        const after = filtersCopy.indexOf(nextSelected)
        
        filtersCopy[before].class = "filter"
        filtersCopy[after].class = "filter selected"
        props.setSelected(name)
        setFilters(filtersCopy) 
    }

    return(
        <div>

        <ul className="list-container">
            {filters.map((filter) => {
                return(
                    <li onClick={() => setFilter(filter.text)}>
                        <span className={filter.class} >{filter.text}</span>
                    </li>
                )
            })}           
        </ul>

        </div>
    )
}

function WorkContents(props){
    console.log("props", props)
    const imgs = [
        {
            filter: "design",
            imgs: [
                {
                    // Hibernation Cover
                    src: 'https://www.dropbox.com/s/cx1nasf6p68sdc3/hibernation-web.png', 
                    width: 1,
                    height: 1
                },
                {
                    // Moonlit River Cover
                    src: 'https://www.dropbox.com/s/taqyz7n15up4xr6/moonlitriver-web.png', 
                    width: 1,
                    height: 1
                },
                {
                    // Beta Recruitment 2017
                    src:  'https://www.dropbox.com/s/01x8l9ffisap78u/2017-Recruitment.png', 
                    width: 16,
                    height: 9
                },
                {
                    // The Lost Summer - Title Card
                    src:  'https://www.dropbox.com/s/0naayr6ogcreu9i/TLS-TitleCard.png', 
                    width: 4,
                    height: 3
                },
                {
                    // Island City - Playlist Cover
                    src:  'https://www.dropbox.com/s/8jmib8c8r1oophz/Island%20City%202.jpg', 
                    width: 1,
                    height: 1
                },
                {
                    // CyberSound - Playlist Cover
                    src: 'https://www.dropbox.com/s/y89nhsj0vpc6o9v/CyberSound.jpg',
                    width: 1,
                    height: 1
                },
                {
                    // Hot Nights in Firenze - Playlist Cover
                    src:  'https://www.dropbox.com/s/4wvkh0wm1pz4tq2/HotNightsinFirenze-edit.jpg', 
                    width: 1,
                    height: 1
                },
                // {
                //     // 2004 DMX Express - Playlist Cover
                //     src:  'https://www.dropbox.com/s/rhmnbzuuumwuy8y/2004%20DMX%20Express.jpg', 
                //     width: 1,
                //     height: 1
                // },
                {
                    // Wizard Weekend 2019 - Shirt Design
                    src:  'https://www.dropbox.com/s/gfmntebc2tn5ja6/MAIN.png', 
                    width: 9,
                    height: 16
                },
                {
                    // Wizard Weekend 2020 - Shirt Design
                    src:  'https://www.dropbox.com/s/x0smxwv02ebckuf/Wizard_Weekend_2020v2.png', 
                    width: 4,
                    height: 5
                },
            ],
        },
        {
            filter:"photo",
            imgs: [
                {
                    
                    src:  'https://www.dropbox.com/s/0kljx8x63p1bdel/Big%20Sur.jpg', 
                    width: 9,
                    height: 16
                },
                {
                    src:  'https://www.dropbox.com/s/tkgbwa5hy5odyof/L.jpg', 
                    width: 4,
                    height: 6
                },
                {
                    src:  'https://www.dropbox.com/s/6vpwl0y9r4ep14y/landmark.jpg', 
                    width: 4,
                    height: 6
                },
                {
                    src:  'https://www.dropbox.com/s/zvfgggd3h07q60m/Largs.jpg', 
                    width: 6,
                    height: 4
                },
                {
                    src:  'https://www.dropbox.com/s/jrpd8643x32ctyg/Nahant.jpg', 
                    width: 4,
                    height:3
                },
                {
                    src:  'https://www.dropbox.com/s/ywoymqkiiv4nv95/parco%20neon.jpg', 
                    width: 4,
                    height: 6
                },
            ]                      
        },
        {
            filter:"type",
            imgs: [
                {
                    src:  'https://www.dropbox.com/s/ns26gnsyvo1289d/ROJI-SANS.png', 
                    width: 1,
                    height: 1
                },
            ]
        },
        {
            filter:"video",
            imgs: [
                {
                    // A Summer's End - Clip
                    src: 'https://www.dropbox.com/s/fjvj240d7uvk8gj/ASE-web.gif',
                    width: 6,
                    height: 4
                },
                {
                    // A Summer's Midnight Dream - Clip
                    src: 'https://www.dropbox.com/s/vchbf4nzp4y5gk5/ASMD-web.gif',
                    width: 6,
                    height: 4
                },
                {
                  // Nangs - Clip
                  src: 'https://www.dropbox.com/s/gz9of2zjftu41aj/nangs-web.gif',
                  width: 6,
                  height: 4  
                },
                // {

                //     src:  'https://www.dropbox.com/s/lmgbf6u9h92jwks/Land%27s%20End.MP4', 
                //     width: 4,
                //     height: 5
                // },
                {
                    // Hibernation Promo
                    src:  'https://www.dropbox.com/s/rjmvobe2i4yhvoa/hibernationvideo-web.gif', 
                    width: 4,
                    height: 3
                },
                {
                    // SE/AC
                    src:  'https://www.dropbox.com/s/5jzd6brsswdpxy1/seac-web.gif', 
                    width: 6,
                    height: 4
                },
                
            ]
        },
        {
            filter:"branding",
            imgs: [                     

            {
                // ROJI Logo
                src:  'https://www.dropbox.com/s/uorh4cx5aei75o0/ROJI-png.png', 
                width: 4,
                height: 3
            },
            {
                // Embark Logo
                src: 'https://www.dropbox.com/s/ow43w8k988wxsgt/embark-web.gif',
                width: 1,
                height: 1
            },
            {
                // ROJI-HANO Logo
                src: 'https://www.dropbox.com/s/vklcw2meknhva5u/roji%20hano%20logo.gif',
                width: 1,
                height: 1
            },
            {
                // ALDA Gaming Logo
                src: "https://www.dropbox.com/s/uy3ltp1ahlt2kqo/aldagaming-web.png",
                width: 6,
                height: 4
            },
            {
                // Clicky_D Logo
                src: 'https://www.dropbox.com/s/dk52k1eyfnmitsp/clicky-D-web.gif',
                width: 598,
                height: 232
            },
            {
                // Wizard Logo
                src:  'https://www.dropbox.com/s/3lcqdn51n0p5yct/2020-12-09-073407387.jpg', 
                width: 1,
                height: 1
            },
            {
                // On the Brink Logo
                src: 'https://www.dropbox.com/s/ibgmpm49i7e6phr/onthebrink-web.gif',
                width: 16,
                height: 9
            },
            {
                // Hops of Hollow Logo
                src:  'https://www.dropbox.com/s/4sr35zbw5rloedz/Hops%20of%20Hollow.png', 
                width: 1,
                height: 1
            },
            {
                // JSidney Logo
                src:  'https://www.dropbox.com/s/jajnqlgndbl7b62/monogramv2.png', 
                width: 1,
                height: 1
            },
            {
                // What's the Dill Logo
                src:  'https://www.dropbox.com/s/lup0itb8az3d6mu/WTD%3F.png', 
                width: 1,
                height: 1
            },
            {
                src:  'https://www.dropbox.com/s/xx4e6fm5x79udtf/KINOBEE.png', 
                width: 8,
                height: 3
            },
            {
                src:  'https://www.dropbox.com/s/kgjou7704ytgvsf/Artboard%202%404x.png', 
                width: 1,
                height: 1
            },
        ]               
        },
        {
            filter:"3D",
            imgs: [
                {
                    // Coudaltia: KIX Portable Calcutron
                    src:  'https://www.dropbox.com/s/5hmzrfwjjq55olv/kix_portable_calcatron-web.gif', 
                    width: 16,
                    height: 9
                },
                {
                    // Coudaltia: ZUI 00 Spacecraft
                    src:   'https://www.dropbox.com/s/a0s7xjuu4igb001/zui_00-web.gif', 
                    width: 16,
                    height: 9
                },
            ]            
        },
        {
            filter: "illustrations",
            imgs: [
                {
                    // Koala
                    src:  'https://www.dropbox.com/s/n2j81p4zb15vhbf/Koalad.png', 
                    width: 3,
                    height: 3
                },
                {
                    // Shibi
                    src:  'https://www.dropbox.com/s/5detwsemksusc60/Shibi.png', 
                    width: 4,
                    height: 5
                },
                {
                    //Yeshla
                    src: 'https://www.dropbox.com/s/5dkf0zsbdjf908z/yesha-web.png',
                    width: 5,
                    height: 4
                }
            ]
        }
    ]

    let content = []
    if(props.selected === 'All'){
        imgs.map(x => content = content.concat(x['imgs']))
    }else{
        let key = props.selected === "3D" ? props.selected : props.selected.toLowerCase()
        let collection = imgs.find(x => x.filter === key)

        content = collection.imgs  
    }

    content.map((photo) => photo.src = `${photo.src}?raw=1`)
    console.log(content)
    return(
        <div className='masonry'>
            <Gallery margin={10} photos={content} /> 
        </div>
    )
}

function Work(){
    const [selected, setSelected] = useState('All')
    
    return(
                
    <div className="work">
        <div className="filters">
            <Filters selected={selected} setSelected={setSelected} />
        </div>
        <WorkContents selected={selected} />
    </div>
  
    )
}

export default Work