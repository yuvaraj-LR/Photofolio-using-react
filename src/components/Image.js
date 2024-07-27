export default function Image(props) {
    const { title, imgSrc, index, handleDeleteImage} = props;

    console.log(index, "index....");

    return (
        <div className="flex flex_col image_wrapper" key={index}>
            <div className="flex flex_col image_container" >
                <img src={imgSrc} alt={title} className="image"/>

                <p className="bold capitalize album_name_para image_div_title">{title}</p>

            </div>

            <div className="flex button_actions">
                <button className="del_btn" onClick={() => handleDeleteImage(index)}>Delete</button>
                <a href={imgSrc} className="w-100" download>
                    <button className="w-100 down_btn">Download</button>
                </a>
            </div>

        </div>
    );
}