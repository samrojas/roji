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
                text: "Drawing"
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
                text: "3D Modeling"
             }
             
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
                src: 'https://www.dropbox.com/s/1q487ajny0c6zis/embark.gif',
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
                // Clicky_D Logo
                src: 'https://www.dropbox.com/s/urnpv71udp9w8yp/clickyd-web2.gif',
                width: 4,
                height: 3
            },
            {
                // Wizard Logo
                src:  'https://www.dropbox.com/s/zg4q12wdkuv9a2b/wizemblem.jpg', 
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
                // Hops of Hollow Logo
                src:  'https://www.dropbox.com/s/ldgr9mjvhqqz8k1/HOH-web.png', 
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
                // JSidney Logo
                src:  'https://www.dropbox.com/s/jajnqlgndbl7b62/monogramv2.png', 
                width: 1,
                height: 1
            },
            {
                // Voyagers Logo
                src: 'https://www.dropbox.com/s/2khj2piz4btg45j/voyagers-web.jpg',
                width: 1,
                height: 1
            },
            {
                // ROJI-SONO
                src: 'https://www.dropbox.com/s/9ecvwigc315864h/rojisono_lockup.png',
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
                // ROJI in Neon
                src: 'https://www.dropbox.com/s/qkqi84z1sq82qhx/rojineon-web.gif',
                width: 4,
                height: 3
            },
            {
                // We Are Unsilenceable Logo
                src:  'https://www.dropbox.com/s/kgjou7704ytgvsf/Artboard%202%404x.png', 
                width: 1,
                height: 1
            },
            {
                // Baylor FHE
                src: 'https://www.dropbox.com/s/6omq1f8jz7udlb8/BUFHE-web.png',
                width: 4,
                height: 3
            }
        ]               
        },

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
                    // Baylor Student Activities
                    src:  'https://www.dropbox.com/s/u71oyarqydujm8s/BU-Graphic.jpg', 
                    width: 16,
                    height: 9
                },
                {
                    // Wizard Weekend 3.0
                    src: 'https://www.dropbox.com/s/esrz5nytie64eki/ani3.0.gif',
                    width: 1,
                    height: 1
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
                    // Wizard Weekend 2019
                    src:  'https://www.dropbox.com/s/x6ngarbow1nsjpy/ww-graphic-web.png', 
                    width: 3,
                    height: 4
                },
                {
                    // Wizard Weekend 2020
                    src:  'https://www.dropbox.com/s/ihnd6r1ts9ei0gz/WizardWeekend%202020-web.jpg', 
                    width: 3,
                    height: 4
                },
            ],
        },

        {
            filter: "drawing",
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
        },

        {
            filter:"photo",
            imgs: [
                {
                    // Big Sur
                    src:  'https://www.dropbox.com/s/iq4lfru34xedx2y/bigsur-web.jpeg', 
                    width: 9,
                    height: 16
                },
                {
                    // L Train
                    src:  'https://www.dropbox.com/s/x5dscu0eehllk1p/L-web.jpeg', 
                    width: 4,
                    height: 6
                },
                {
                    // Yokohama Landmark
                    src:  'https://www.dropbox.com/s/4hogu9wdd8u406i/landmark-web.jpeg', 
                    width: 4,
                    height: 6
                },
                {
                    // Largs Coast
                    src:  'https://www.dropbox.com/s/dl3rgghvp4ux939/Largs-web.jpeg', 
                    width: 6,
                    height: 4
                },
                {
                    // PARCO Neon
                    src:  'https://www.dropbox.com/s/5zkoqcxovpj6ivb/parco-web.jpeg', 
                    width: 4,
                    height: 6
                },
                {
                    // Nahant Beach
                    src:  'https://www.dropbox.com/s/aeiopx6nr7mpeqh/Nahant-web.jpeg', 
                    width: 4,
                    height:3
                },
                {
                    // Les Invalides
                    src: 'https://www.dropbox.com/s/doixbowruv0qf8w/lesinvalides-web.jpeg',
                    width: 3,
                    height: 4
                },
                {
                    // Zurich Station
                    src:'https://www.dropbox.com/s/7xhyo7ad6daq47p/zurichcentralstation-web.jpeg',
                    width: 16,
                    height: 9
                },
                {
                    // Venetian Lamp
                    src: 'https://www.dropbox.com/s/uot21gmjjswu8jt/venetianlamp-web.jpeg',
                    width: 9,
                    height: 16
                },
                {
                    // Under Neon Lights
                    src: 'https://www.dropbox.com/s/decbem6i430hh5b/underneonlights-web.jpeg',
                    width: 2048,
                    height: 938
                },
                {
                    // Needle
                    src: 'https://www.dropbox.com/s/fihbsw8g75mim2p/needle-web.jpeg',
                    width: 9,
                    height: 16
                },
                {
                    // River Seine
                    src: 'https://www.dropbox.com/s/xsjuf9gdwf85hb4/seine-web.jpeg',
                    width: 4,
                    height: 3
                },
                {
                    // Travelling Robot
                    src: 'https://www.dropbox.com/s/x8clx1ln9tq6oyo/travellingrobot-web.jpeg',
                    width: 3,
                    height: 4
                },
                {
                    // Sunset
                    src: 'https://www.dropbox.com/s/lvo3942ciezejbv/sunset-web.jpeg',
                    width: 4,
                    height: 3
                },
                {
                    // Eiffel Tower
                    src: 'https://www.dropbox.com/s/e1cqdgx400qrvfu/eiffeltower-web.jpeg',
                    width: 4,
                    height: 3
                },
                {
                    // Culzean Castle
                    src: 'https://www.dropbox.com/s/y2uw7rqzejx27em/culzeancastle-web.jpeg',
                    width: 4,
                    height: 3
                },
                {
                    // Barcelona Metro
                    src: 'https://www.dropbox.com/s/vfzjh0u20wvuff9/barcametro-web.jpeg',
                    width: 16,
                    height: 9
                },
                {
                    // Waco Steel Bridge
                    src: 'https://www.dropbox.com/s/jpzx5qezz7x3hi2/wacobridge-web.jpeg',
                    width: 4,
                    height: 3
                },
                {
                    // Rocky Shores
                    src: 'https://www.dropbox.com/s/bk39z2t867dq87n/rockyshores-web.jpeg',
                    width: 4,
                    height: 3
                },
                {
                    // Bath Street
                    src: 'https://www.dropbox.com/s/wus6t9vhao0m70e/bath-web.jpeg',
                    width: 4,
                    height: 3
                },
                {
                    // Abandoned Warehouse
                    src: 'https://www.dropbox.com/s/z9fqsg9u5lawg2k/abandonedwarehouse-web.jpeg',
                    width: 16,
                    height: 9
                },
                {
                    // Appalachians
                    src: 'https://www.dropbox.com/s/ng5mttzotm4j73k/appalachians-web.jpeg',
                    width: 16,
                    height: 9
                },
                {
                    // Brooklyn Bridge
                    src: 'https://www.dropbox.com/s/r2tx9es5ttg4wym/brooklynbdridge-web.jpeg',
                    width: 3,
                    height: 4
                },
                {
                    // Chinatown Tunnel
                    src: 'https://www.dropbox.com/s/ub95xjoyqyyfhdt/chinatowntunnel.jpeg',
                    width: 4608,
                    height: 2112
                },
                {
                    // Institut de France
                    src: 'https://www.dropbox.com/s/pijzh0l5hakv459/institutdefrance-web.jpeg',
                    width: 4,
                    height: 3
                },
                {
                    // Golden Gate
                    src: 'https://www.dropbox.com/s/sjrx5emc8jub9bn/goldengate-web.jpeg',
                    width: 9,
                    height: 16
                },
                {
                    // Land's End
                    src:'https://www.dropbox.com/s/vbxfz8z5zm2x9gp/landsend-web.jpeg',
                    width: 16,
                    height: 9
                },

                {
                    // Nijo
                    src: 'https://www.dropbox.com/s/5lyrdnooszt49hw/nijo-web.jpeg',
                    width: 4,
                    height: 3
                },
                {
                    // Orange Line
                    src: 'https://www.dropbox.com/s/z4rhpcqsskoub8k/orangeline-web.jpeg',
                    width: 9,
                    height: 16
                },
                {
                    // Senso-ji
                    src: 'https://www.dropbox.com/s/if7mzx0azl5lwim/senso-ji-web.jpeg',
                    width: 3,
                    height: 4
                },
                {
                    // Zephyr
                    src: 'https://www.dropbox.com/s/i3arhlwaj8a6k26/zephyr-web.jpeg',
                    width: 16,
                    height: 9
                },
                {
                    // Amsterdam
                    src: 'https://www.dropbox.com/s/jhpj23o4tfmkuti/ams-web.jpeg',
                    width: 3,
                    height: 4
                },
                {
                    // Avon River
                    src: 'https://www.dropbox.com/s/wzfxqedzzsp89at/riveravon-web.jpeg',
                    width: 4,
                    height: 3
                }
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
            filter:"3d modeling",
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
            <Gallery margin={5} photos={content} direction={"column"}/> 
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