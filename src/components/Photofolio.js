import {useReducer, useState} from "react"

import AlbumList from "./AlbumList";
import Navbar from "./Navbar";
import EmptyBox from "./EmptyBox";
import AddAlbumForm from "./AddAlbumForm";

function photofolioReducer(state, action) {
    switch (action.type) {
        case "ADD":

    }
}

export default function Photofolio() {
    
    const [albumList, setalbumList] = useReducer(photofolioReducer, []);
    const [addAlbumStatus, setAddAlbumStatus] = useState(false)
    
    console.log(albumList.length, "listtt...");

    return (
        <>
            <Navbar />

            <div className="photo_main_content_div">
                <div className="album_details">

                    {addAlbumStatus ? <AddAlbumForm setalbumList={setalbumList}/> : <></>}

                    <div className="flex flex_space_between album_imgae_pad album_head">
                        <h2 className="album_title">Your albums</h2>

                        <button className={addAlbumStatus ? "clear_btn" : "add_btn"} onClick={() => setAddAlbumStatus(!addAlbumStatus)}>{addAlbumStatus ? "Close" : "Add Album"} 
                        </button>
                    </div>
                    <div className="album_content">

                        {albumList.length > 0 ? <AlbumList albumList={albumList} /> : <EmptyBox text="No Album Found. Please Add To View." />}
                    </div>
                </div>
                
                <div className="album_imgae_pad image_details">

                </div>
            </div>
        </>
    )
}