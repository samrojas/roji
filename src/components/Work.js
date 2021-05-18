import { useCallback, useState } from "react";
import Gallery from "react-photo-gallery";
import * as Scroll from "react-scroll";
import SelectedImage from "./SelectedImage";
import Content from "./content";

function Filters(props) {
    const Link = Scroll.Link;
    const [filters, setFilters] = useState([
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
    const imgs = Content;
    let content = [];
    if (props.selected === "All") {
        imgs.map(x => (content = content.concat(x["imgs"])));
        console.log("imgs", imgs);
    } else {
        let key = props.selected === "3D" ? props.selected : props.selected.toLowerCase();
        let collection = imgs.find(x => x.filter === key);

        content = collection.imgs;
    }

    content.map(photo => (photo.src = `${photo.src}?raw=1`));

    const imageRenderer = useCallback(({ index, left, top, direction, key, photo }) => (
        <SelectedImage
            key={key}
            margin={"2px"}
            direction={"column"}
            index={index}
            photo={photo}
            left={left}
            top={top}
        />
    ));

    return (
        <div className="masonry">
            <Gallery margin={5} photos={content} direction={"column"} renderImage={imageRenderer} />
        </div>
    );
}

function Work() {
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
                    <p>To Top ^</p>
                </Link>
            </div>
            <WorkContents selected={selected} />
        </div>
    );
}

export default Work;
