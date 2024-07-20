import Album from "./Album";

export default function AlbumList(props) {

    const {albumList} = props;

    return (
        <div className="flex flex_center flex_wrap">  
            {albumList.map((album, index) => (
                // <Ablum name={album.name} index={index} />
                <Album name={album.name} index={index}/>
            ))}
        </div>
    )
}