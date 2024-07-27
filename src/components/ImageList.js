import Image from "./Image";

export default function ImageList(props) {
    const { imageList, handleDeleteImage } = props;

    return (
        <div className="flex flex_wrap flex_center w-100 image_list_container">
            {imageList.map((image, i) => {
                return <Image title={image.title} imgSrc={image.img_url} index={i} handleDeleteImage={handleDeleteImage}/>;
            })}
        </div>
    );
}