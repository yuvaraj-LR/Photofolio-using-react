
export default function Ablum(props) {

    const {name, index} = props;

    return (
        <div className="flex flex_col flex_center album_box" key={index}>
            <div className="flex flex_center album_image_bg">
                <i className ="fa-solid fa-images fa-3x"></i>
            </div>
            <p className="bold capitalize album_name_para">
                {name}
            </p>
        </div>
    )
}