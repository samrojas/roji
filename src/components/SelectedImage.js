import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const SelectedImage = ({ index, photo, margin, direction, top, left }) => {
    const history = useHistory();

    const [photoSelected, setPhotoSelected] = useState({});
    const [selected, setSelected] = useState(false);
    const cont = {
        backgroundColor: "#eee",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative"
    };

    const imgStyle = {
        transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
    };

    if (direction === "column") {
        cont.position = "absolute";
        cont.left = left;
        cont.top = top;
    }

    const handleOnClick = e => {
        setPhotoSelected(photo);
        setSelected(true);
    };

    useEffect(() => {
        console.log("photo", photoSelected);
        if (selected) {
            history.push(`/project/${photoSelected.name}`);
        }
    }, [photoSelected, history, selected]);
    return (
        <div style={{ margin, height: photo.height, width: photo.width, ...cont }} className="picture">
            <img style={{ ...imgStyle }} alt={photo.title} {...photo} onClick={handleOnClick} />
            {/* <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style> */}
        </div>
    );
};

export default SelectedImage;
