import Gallery from "react-photo-gallery";
import Content from "./content";

export function Project(props) {
    console.log("props", props);
    const { match } = props;

    let allContent = [];
    Content.map(x => (allContent = allContent.concat(x["imgs"])));

    const backStory = allContent.filter(x => x.name === match.params.name);
    const content = backStory[0];

    console.log("content", content);

    if (content.relatedContent) {
        content.src = `${content.src}?raw=1`;

        console.log("photos", content.relatedContent.photos);
        content.relatedContent.photos.map(photo => (photo.src = `${photo.src}?raw=1`));

        console.log("related photos", content.relatedContent.photos);
        return (
            <div className="project">
                <div className="project-photos">
                    <img className="project-img" width="600px" height="500px" src={content.src} alt={content.name} />
                    <Gallery margin={5} photos={content.relatedContent.photos} direction={"column"} />
                </div>

                <div className="project-info">
                    <h1>{content.name}</h1>
                    <p className="project-paragraph">{content.relatedContent.text}</p>
                    <div className="project-tags">
                        {content.relatedContent.tags.map(tag => {
                            return <p>{tag}</p>;
                        })}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <img src={content.src} alt={content.name} />
            </div>
        );
    }
}
