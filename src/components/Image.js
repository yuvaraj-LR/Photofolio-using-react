export default function Image(props) {
    console.log(props, "propss..");

    const { title, imgSrc } = props;

    return (
        <>
            <div className="flex flex_col image_container" >
                <img src={imgSrc} alt={title} className="image"/>

                <p className="bold capitalize album_name_para image_div_title">{title}</p>
            </div>
        </>
    );
}