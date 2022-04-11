import { useState } from "react";
import Gallery from "react-photo-gallery";
import * as Scroll from "react-scroll";
import scrollImage from "../img/rojiscrolltop.png";
import withSizes from "react-sizes";

function Filters(props) {
    const Link = Scroll.Link;
    const [filters, setFilters] = useState([
        {
            class: "filter selected",
            text: props.selected
        },
        {
            class: "filter",
            text: "Design"
        },
        {
            class: "filter",
            text: "Illustration"
        },
        {
            class: "filter",
            text: "Merch"
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
            text: "3DCG"
        }
    ]);
    const setFilter = name => {
        let filtersCopy = [...filters];
        const prevSelected = filters.find(x => x.class === "filter selected");
        const nextSelected = filters.find(x => x.text === name);
        const before = filtersCopy.indexOf(prevSelected);
        const after = filtersCopy.indexOf(nextSelected);

        filtersCopy[before].class = "filter";
        filtersCopy[after].class = "filter selected";
        props.setSelected(name);
        setFilters(filtersCopy);
    };

    return (
        <div>
            <ul className="list-container">
                {filters.map(filter => {
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
                })}
            </ul>
        </div>
    );
}

function WorkContents(props) {
    const imgs = [
        {
            filter: "branding",
            imgs: [
               ]
        },

        {
            filter: "design",
            imgs: [
                {
                    // ROJI Logo
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946087/Design/ROJI/ROJI-png_gzu0dv.png",
                    width: 4,
                    height: 3
                },
                {
                    // Embark Logo
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623945449/Design/Embark/embark-web.gif",
                    width: 1,
                    height: 1
                },
                {
                    // ROJI-HANO Logo
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946065/Design/ROJI/roji_hano_logo_irjrb2.gif",
                    width: 1,
                    height: 1
                },
                {
                    // Clicky_D Logo
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623945395/Design/ClickyD/clickyd-web.gif",
                    width: 4,
                    height: 3
                },
                {
                    // Wizard Logo
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623945033/Design/The%20Cauldron/wizemblem_pitrlg.jpg",
                    width: 1,
                    height: 1
                },
                {
                    // ALDA Gaming Logo
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623944857/Design/ALDA%20Gaming/aldagaming-web.png",
                    width: 6,
                    height: 4
                },
                {
                    // Hops of Hollow Logo
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623945497/Design/Hops%20of%20Hollow/HOH-web.png",
                    width: 1,
                    height: 1
                },
                {
                    // On the Brink Logo
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623945195/Design/On%20The%20Brink/onthebrink-web_fl5kcz.gif",
                    width: 16,
                    height: 9
                },
                {
                    // Voyagers Logo
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623945232/Design/Voyagers/voyagers-web_xcicxy.jpg",
                    width: 1,
                    height: 1
                },
                {
                    // ROJI-SONO
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946128/Design/ROJI/rojisono_lockup_ls2iik.png",
                    width: 1,
                    height: 1
                },
                {
                    // What's the Dill Logo
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946025/Design/What%27s%20the%20Dill/WTD_imcl9g.png",
                    width: 1,
                    height: 1
                },
                {
                    // We Are Unsilenceable Logo
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623945289/Design/We%20Are%20Unsilenceable/WAU-web_ettkiv.png",
                    width: 1,
                    height: 1
                },
                {
                     // KN
                     src: "https://res.cloudinary.com/rojiroji/image/upload/v1623945309/Design/KN/KN_final_ozbu81.png",
                     width: 1,
                     height:1
                },

                {
                    // ROJI in Neon
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1630647262/Design/ROJI/rojineon-web_qv8o7n.gif",
                    width: 4,
                    height: 3
                },
                {
                    // Sunshine Follies - Mix Cover
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1649441284/Design/Playlist%20Covers/Sunshine_Follies_r22cg6.jpg",
                    width: 1,
                    height: 1
                },
                {
                    // Hibernation Cover
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623945552/Design/J%20Sidney/hibernation-web.png",
                    width: 1,
                    height: 1
                },
                {
                    // Moonlit River Cover
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623945582/Design/J%20Sidney/moonlitriver-web_nbsxvf.png",
                    width: 1,
                    height: 1
                },
                {
                    // Ritmo del Sol - Playlist Cover
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1649441290/Design/Playlist%20Covers/ritmodelsol_cbzsnl.jpg",
                    width: 1,
                    height: 1
                },
                {
                    // A Late Nite - Mix Cover
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1649441320/Design/Playlist%20Covers/A_Late_Night_bp4p9f.jpg",
                    width: 1,
                    height: 1
                },
                {
                    // Sunny Daze - Playlist Cover
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1630648379/Design/Playlist%20Covers/sunnydaze3_o5wttf.jpg",
                    width: 1,
                    height: 1
                },
                {
                    // Wizard Weekend 3.0
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623945153/Design/The%20Cauldron/ezgif.com-optimize_ukbnho.gif",
                    width: 1,
                    height: 1
                },
                {
                    // The Lost Summer - Title Card
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623948346/Videos/Summer%20Saga/TLS-TitleCard.png",
                    width: 4,
                    height: 3
                },
                {
                    // Primavera - Playlist Cover
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623945797/Design/Playlist%20Covers/Primavera2022_zt89fg.jpg",
                    width: 1,
                    height: 1
                },
                {
                    // Island City - Playlist Cover
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1649441261/Design/Playlist%20Covers/Island_City_22_v3_jfgwh3.jpg",
                    width: 1,
                    height: 1
                },
                {
                    // Island City Nights - Playlist Cover
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1649441341/Design/Playlist%20Covers/Island_City_Nights_nyr15q.jpg",
                    width: 1,
                    height: 1
                },
                {
                    // CyberSound - Playlist Cover
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1649705780/Design/Playlist%20Covers/CyberSound2_lxtsm1.jpg",
                    width: 1,
                    height: 1
                },
                {
                    // Hot Nights in Firenze - Playlist Cover
                    src: "https://res.cloudinary.com/rojiroji/image/upload/c_scale,w_482/v1623945822/Design/Playlist%20Covers/HotNightsinFirenze-edit_bzyicx.jpg",
                    width: 1,
                    height: 1
                },
                {
                    // Rhythm and Bass - Playlist Cover
                    src: "https://res.cloudinary.com/rojiroji/image/upload/c_scale,w_481/v1623945802/Design/Playlist%20Covers/R_BASS2_lghsp6.jpg",
                    width: 1,
                    height: 1
                },
                {
                    // Airtunes - Playlist Cover
                    src:  'https://res.cloudinary.com/rojiroji/image/upload/v1649441276/Design/Playlist%20Covers/Airtunes22_hulnin.jpg',
                    width: 1,
                    height: 1
                },
                {
                    // Wizard Weekend 2019
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623945051/Design/The%20Cauldron/ww-graphic-web_meusyq.png",
                    width: 3,
                    height: 4
                },
                {
                    // Wizard Weekend 2020
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623945043/Design/The%20Cauldron/WizardWeekend_2020-web_f8tcfg.jpg",
                    width: 3,
                    height: 4
                }
            ]
        },

        {
            filter: "illustration",
            imgs: [
                {
                    //Yeshla
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623948408/Art/yesha-web.png",
                    width: 5,
                    height: 4
                },
                {
                    //Tashi
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623948441/Art/Tashi-web.jpg",
                    width: 5,
                    height: 4
                }
            ]
        },

        {
            filter: "merch",
            imgs: [
                {
                    // Tan Hat
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1630649813/Design/ROJI/tanhat.png",
                    width: 4,
                    height: 3
                },
                {
                    // Black Hat
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1630651469/Design/ROJI/blackhat.png",
                    width: 4,
                    height: 3
                },
                {
                    // Cauldron Tee
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1630651594/Design/The%20Cauldron/Cauldron_T-Shirt_MockUp_Front_pycugi.png",
                    width: 1,
                    height: 1
                },
                {
                    // CyberSound Tee
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1630652187/Design/ROJI/cybersound-tee_r125o2.png",
                    width: 1,
                    height: 1
                },
                {
                    // Hackathon Tee
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1649452030/Design/Apparel/Hackathon_v1_one-color_th6rf1.jpg",
                    width: 1,
                    height: 1
                }

            ]
        },


        {
            filter: "photo",
            imgs: [
                {
                    // Big Sur
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946729/Photos/bigsur-web.jpg",
                    width: 9,
                    height: 16
                },
                {
                    // L Train
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946731/Photos/L-web.jpg",
                    width: 4,
                    height: 6
                },
                {
                    // Yokohama Landmark
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946731/Photos/landmark-web.jpg",
                    width: 4,
                    height: 6
                },
                {
                    // Largs Coast
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946731/Photos/Largs-web.jpg",
                    width: 6,
                    height: 4
                },
                {
                    // PARCO Neon
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946732/Photos/parco-web.jpg",
                    width: 4,
                    height: 6
                },
                {
                    // Nahant Beach
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946732/Photos/Nahant-web.jpg",
                    width: 4,
                    height: 3
                },
                {
                    // Les Invalides
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946731/Photos/lesinvalides-web.jpg",
                    width: 3,
                    height: 4
                },
                {
                    // Zurich Station
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946734/Photos/zurichcentralstation-web.jpg",
                    width: 16,
                    height: 9
                },
                {
                    // Venetian Lamp
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946734/Photos/venetianlamp-web.jpg",
                    width: 9,
                    height: 16
                },
                {
                    // Under Neon Lights
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946734/Photos/underneonlights-web.jpg",
                    width: 2048,
                    height: 938
                },
                {
                    // Needle
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946732/Photos/needle-web.jpg",
                    width: 9,
                    height: 16
                },
                {
                    // River Seine
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946733/Photos/seine-web.jpg",
                    width: 4,
                    height: 3
                },
                {
                    // Travelling Robot
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946734/Photos/travellingrobot-web.jpg",
                    width: 3,
                    height: 4
                },
                {
                    // Sunset
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946733/Photos/sunset-web.jpg",
                    width: 4,
                    height: 3
                },
                {
                    // Eiffel Tower
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946730/Photos/eiffeltower-web.jpg",
                    width: 4,
                    height: 3
                },
                {
                    // Culzean Castle
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946730/Photos/culzeancastle-web.jpg",
                    width: 4,
                    height: 3
                },
                {
                    // Barcelona Metro
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946729/Photos/barcametro-web.jpg",
                    width: 16,
                    height: 9
                },
                {
                    // Steel Bridge
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946734/Photos/wacobridge-web.jpg",
                    width: 4,
                    height: 3
                },
                {
                    // Rocky Shores
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946732/Photos/rockyshores-web.jpg",
                    width: 4,
                    height: 3
                },
                {
                    // Bath Street
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946729/Photos/bath-web.jpg",
                    width: 4,
                    height: 3
                },
                {
                    // Abandoned Warehouse
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946729/Photos/abandonedwarehouse-web.jpg",
                    width: 16,
                    height: 9
                },
                {
                    // Appalachians
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946729/Photos/appalachians-web.jpg",
                    width: 16,
                    height: 9
                },
                {
                    // Brooklyn Bridge
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946730/Photos/brooklynbdridge-web.jpg",
                    width: 3,
                    height: 4
                },
                {
                    // Chinatown Tunnel
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946730/Photos/chinatowntunnel-web.jpg",
                    width: 4608,
                    height: 2112
                },
                {
                    // Institut de France
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946731/Photos/institutdefrance-web.jpg",
                    width: 4,
                    height: 3
                },
                {
                    // Golden Gate
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946730/Photos/goldengate-web.jpg",
                    width: 9,
                    height: 16
                },
                {
                    // Land's End
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946731/Photos/landsend-web.jpg",
                    width: 16,
                    height: 9
                },

                {
                    // Nijo
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946732/Photos/nijo-web.jpg",
                    width: 4,
                    height: 3
                },
                {
                    // Orange Line
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946732/Photos/orangeline-web.jpg",
                    width: 9,
                    height: 16
                },
                {
                    // Senso-ji
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946733/Photos/senso-ji-web.jpg",
                    width: 3,
                    height: 4
                },
                {
                    // Zephyr
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946734/Photos/zephyr-web.jpg",
                    width: 16,
                    height: 9
                },
                {
                    // Amsterdam
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946729/Photos/ams-web.jpg",
                    width: 3,
                    height: 4
                },
                {
                    // Avon River
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946733/Photos/riveravon-web.jpg",
                    width: 4,
                    height: 3
                }
            ]
        },

        {
            filter: "type",
            imgs: [
                {
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623946040/Design/ROJI/ROJI-SANS_j1p8kc.png",
                    width: 1,
                    height: 1
                }
            ]
        },

        {
            filter: "video",
            imgs: [
                {
                    // A Summer's End - Clip
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623948330/Videos/Summer%20Saga/A_Summer_s_End_ftzfvx.jpg",
                    width: 6,
                    height: 4
                },
                {
                    // A Summer's Midnight Dream - Clip
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623948341/Videos/Summer%20Saga/Screen_Shot_2017-09-04_at_12.18.41_AM_iasqic.png",
                    width: 6,
                    height: 4
                },
                {
                    // Nangs - Clip
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623948366/Videos/nangs-web.gif",
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
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1623945555/Design/J%20Sidney/hibernationvideo-web.gif",
                    width: 4,
                    height: 3
                },
                {
                    // SE/AC
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1630647462/Videos/SyncExp-AsyncCons/seac-web_f1v3bg.gif",
                    width: 6,
                    height: 4
                }
            ]
        },

        {
            filter: "3DCG",
            imgs: [
                {
                    // Coudaltia: KIX Portable Calcutron
                    src: "https://www.dropbox.com/s/5hmzrfwjjq55olv/kix_portable_calcatron-web.gif",
                    width: 16,
                    height: 9
                },
                {
                    // Peach
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1649444502/Design/peach_bmhye6.gif",
                    width: 16,
                    height: 9
                },
                {
                    // Coudaltia: ZUI 00 Spacecraft
                    src: "https://www.dropbox.com/s/a0s7xjuu4igb001/zui_00-web.gif",
                    width: 16,
                    height: 9
                },
                {
                    // Missing Maps
                    src: "https://res.cloudinary.com/rojiroji/image/upload/v1649451802/Design/Missing%20Maps/MM_badge_hkrxbv.gif",
                    width: 1,
                    height: 1
                }
            ]
        }
    ];

    let content = [];
    if (props.selected === "All") {
        imgs.map(x => (content = content.concat(x["imgs"])));
    } else {
        let key = props.selected === "3DCG" ? props.selected : props.selected.toLowerCase();
        let collection = imgs.find(x => x.filter === key);

        content = collection.imgs;
    }

    content.map(photo => (photo.src = `${photo.src}?raw=1`));
    return (
        <div className="masonry">
            <Gallery margin={5} photos={content} direction={"column"} />
        </div>
    );
}

function Work({ isMobile }) {
    const [selected, setSelected] = useState("All");
    const Link = Scroll.Link;
    return (
        <div id="top" className="work">
            <div className="filters">
                <Filters selected={selected} setSelected={setSelected} />
                <Link
                    activeClass="active"
                    to="top"
                    smooth={true}
                    spy={true}
                    duration={1000}
                    offset={-150}
                    className="toTop"
                >
                    <img width={isMobile ? 50 : 70} height={isMobile ? 50 : 70} src={scrollImage}></img>
                </Link>
            </div>
            <WorkContents selected={selected} />
        </div>
    );
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 480
});

export default withSizes(mapSizesToProps)(Work);
