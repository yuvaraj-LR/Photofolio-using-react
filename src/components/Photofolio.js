import {useState} from "react"

import AlbumList from "./AlbumList";
import Navbar from "./Navbar";
import EmptyBox from "./EmptyBox";


export default function Photofolio() {
    
    const [albumList, setalbumList] = useState([]);

    return (
        <>
            <Navbar />
            <div className="photo_main_content_div">
                <div className="album_details">
                    <div className="flex flex_space_between album_imgae_pad album_head">
                        <h2 className="album_title">Your albums</h2>

                        <button className="add_btn">Add Album</button>
                    </div>
                    <div className="album_content">

                        {albumList.length < 0 ? <AlbumList albumList={albumList} /> : <EmptyBox text="No Album Found. Please Add To View." />}
                    </div>
                </div>
                
                <div className="album_imgae_pad image_details">

                </div>
            </div>
        </>
    )
}