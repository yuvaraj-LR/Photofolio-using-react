export default function Image(props) {
    const { title, imgSrc, index, handleDeleteImage} = props;

    console.log(index, "index....");

    return (
        <div className="flex flex_col image_wrapper" key={index}>
            <div className="flex flex_col image_container" >
                <img src={imgSrc} alt={title} className="image"/>

                <p className="bold capitalize album_name_para image_div_title">{title}</p>

            </div>
            <button className="del_btn" onClick={() => handleDeleteImage(index)}>Delete</button>
        </div>
    );
}