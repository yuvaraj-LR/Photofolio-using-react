import Image from "./Image";

export default function ImageList(props) {
    const { imageList } = props;
    console.log(imageList, "imageListimageList");

    return (
        <>
            {imageList.map((image, i) => {
                console.log(image.title, "Immm");
                return <Image title={image.title} imgSrc={image.img_url} key={i} />;
            })}
        </>
    );
}