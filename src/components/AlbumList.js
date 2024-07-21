import Album from "./Album";

export default function AlbumList(props) {

    const {albumList, handleImageClick} = props;

    return (
        <div className="flex flex_center flex_wrap">  
            {albumList.map((album, i) => (
                // <Ablum name={album.name} index={index} />
                <Album name={album.name} id={album.id} handleImageClick={handleImageClick}/>
            ))}
        </div>
    )
}