import Album from "./Album";

export default function AlbumList(albumList) {
    return (
        <div className="flex flex_wrap">  
            {albumList.albumList.map((album, index) => (
                // <Ablum name={album.name} index={index} />
                <Album name={album.name} index={index}/>
            ))}
        </div>
    )
}