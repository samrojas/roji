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
                 text: "Design"
             },
             {
                 class: "filter",
                 text: "Branding"
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
             {
                 class: "filter",
                 text: "Illustrations"
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
            filter: "design",
            imgs: [
                {
                    src: 'https://www.dropbox.com/s/hp615fnlay3tohg/Hibernation%20Cover.png', 
                    width: 1,
                    height: 1
                },
                {
                    src: 'https://www.dropbox.com/s/qzf9mcqqprhyqk8/Moonlit_River_CoverV4.png', 
                    width: 1,
                    height: 1
                },
                {
                    src: 'https://www.dropbox.com/s/7wre3u93szfhdpn/NON-cover.png', 
                    width: 1,
                    height: 1
                },
                {
                    src:  'https://www.dropbox.com/s/01x8l9ffisap78u/2017-Recruitment.png', 
                    width: 16,
                    height: 9
                },
                {
                    src:  'https://www.dropbox.com/s/susakjefdyabsui/A%20Summer%27s%20End.jpg', 
                    width: 4,
                    height: 3
                },
                {
                    src:  'https://www.dropbox.com/s/v7kd3yl24q8f15a/A%20Summer%27s%20Midnight%20Dream.jpg', 
                    width: 4,
                    height: 3
                },
                {
                    src:  'https://www.dropbox.com/s/0naayr6ogcreu9i/TLS-TitleCard.png', 
                    width: 4,
                    height: 3
                },
                {
                    src:  'https://www.dropbox.com/s/zmjslwbi82igxxx/Island%20City_FINAL.png', 
                    width: 1,
                    height: 1
                },
                {
                    src:  'https://www.dropbox.com/s/4wvkh0wm1pz4tq2/HotNightsinFirenze-edit.jpg', 
                    width: 1,
                    height: 1
                },
                {
                    src:  'https://www.dropbox.com/s/rhmnbzuuumwuy8y/2004%20DMX%20Express.jpg', 
                    width: 1,
                    height: 1
                },
                {
                    src:  'https://www.dropbox.com/s/gfmntebc2tn5ja6/MAIN.png', 
                    width: 4,
                    height: 5
                },
                {
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
                    width: 9,
                    height: 16
                },
                {
                    src:  'https://www.dropbox.com/s/6vpwl0y9r4ep14y/landmark.jpg', 
                    width: 9,
                    height: 16
                },
                {
                    src:  'https://www.dropbox.com/s/zvfgggd3h07q60m/Largs.jpg', 
                    width: 4,
                    height: 3
                },
                {
                    src:  'https://www.dropbox.com/s/jrpd8643x32ctyg/Nahant.jpg', 
                    width: 4,
                    height:3
                },
                {
                    src:  'https://www.dropbox.com/s/ywoymqkiiv4nv95/parco%20neon.jpg', 
                    width: 9,
                    height: 16
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
                    src:  'https://www.dropbox.com/s/8yu68lmd6rcof7y/A%20Summer%27s%20Midnight%20Dream.mp4', 
                    width: 4,
                    height: 5
                },
                {
                    src:  'https://www.dropbox.com/s/lmgbf6u9h92jwks/Land%27s%20End.MP4', 
                    width: 4,
                    height: 5
                },
                {
                    src:  'https://www.dropbox.com/s/rcm09iweu4d79tl/ROJI-SONO%20Sessions%3A%20Remember%20Summer%20Days%20Promo.mp4', 
                    width: 4,
                    height: 5
                },
                {
                    src:  'https://www.dropbox.com/s/cvbdfo04q66lr88/ROJI-SONO%20Sessions%3A%20CyberSound%20Promo.mp4', 
                    width: 4,
                    height: 5
                },
                {
                    src:  'https://www.dropbox.com/s/mxe6hosi1v6wjws/Hibernation%20Promo.mp4', 
                    width: 4,
                    height: 5
                },
                {
                    src:  '', 
                    width: 4,
                    height: 5
                },
                {
                    src:  'https://www.dropbox.com/s/l2kx135c9jcggof/Nucleus%20of%20Now%20Promo.mp4', 
                    width: 4,
                    height: 5
                },
                {
                    src:  'https://www.dropbox.com/s/vcvdkngnhwh8a5s/SUBJECT_01.mp4', 
                    width: 4,
                    height: 5
                },
                
            ]
        },
        {
            filter:"branding",
            imgs: [                     
            // {
            //     src:  'https://www.dropbox.com/s/cbrnn984k27u2is/Baylor%20FHE%20final.png', 
            //     width: 4,
            //     height: 5
            // },
            // {
            //     src:  'https://media.giphy.com/media/XKS43DNcWuxR7Mk7DL/giphy.gif', 
            //     width: 4,
            //     height: 3
            // },
            {
                src:  'https://www.dropbox.com/s/uorh4cx5aei75o0/ROJI-png.png', 
                width: 4,
                height: 3
            },
            {
                src:  'https://www.dropbox.com/s/adcgh85rxuaynub/embark.png', 
                width: 8,
                height: 3
            },
            {
                src:  'https://www.dropbox.com/s/3lcqdn51n0p5yct/2020-12-09-073407387.jpg', 
                width: 1,
                height: 1
            },
            {
                src:  'https://www.dropbox.com/s/4sr35zbw5rloedz/Hops%20of%20Hollow.png', 
                width: 1,
                height: 1
            },
            {
                src:  'https://www.dropbox.com/s/jajnqlgndbl7b62/monogramv2.png', 
                width: 1,
                height: 1
            },
           
            {
                src:  'https://www.dropbox.com/s/j2xlm4iz4v25cii/brinkv2.svg', 
                width: 1,
                height: 1
            },
            {
                src:  'https://www.dropbox.com/s/lup0itb8az3d6mu/WTD%3F.png', 
                width: 1,
                height: 1
            },
            {
                src:  'https://www.dropbox.com/s/f5t3y84o3ytfkr9/full-logo.png', 
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
                    src:  'https://sketchfab.com/3d-models/kix-aa2d4496a51641229ff8528cb2b9e249', 
                    width: 4,
                    height: 5
                },
                {
                    src:   'https://sketchfab.com/3d-models/zui-00-658354193b7f4e098a59ff792c909412', 
                    width: 4,
                    height: 5
                },
            ]            
        },
        {
            filter: "illustrations",
            imgs: [
                {
                    src:  'https://www.dropbox.com/s/n2j81p4zb15vhbf/Koalad.png', 
                    width: 4,
                    height: 5
                },
                {
                    src:  'https://www.dropbox.com/s/5detwsemksusc60/Shibi.png', 
                    width: 4,
                    height: 5
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