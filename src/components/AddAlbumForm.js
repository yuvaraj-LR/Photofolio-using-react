import {useRef, useEffect} from "react";
import { toast } from "react-toastify";

export default function AddAlbumForm(props) {

    const {isAlbum, dispatch} = props;

    const albumNameInput = useRef(null);
    const imageTitleInput = useRef(null);
    const imageUrlInput = useRef(null);

    function handleAlbumSubmit(e) {
        e.preventDefault();

        if(albumNameInput.current.value != "") {
            toast("Album Added Successfully.")
            dispatch({type: "ADD", albumName: {name: albumNameInput.current.value}})
        }
        albumNameInput.current.value = "";
        albumNameInput.current.focus();
    }

    function handleImageSubmit(e) {
        e.preventDefault();

    }

    useEffect(() => {
        albumNameInput?.current?.focus();
    }, [])

    return (
        <>
            <div className="flex flex_col create_ablum_container">
                <h2>{isAlbum ? "Create Album" : "Add Image"}</h2>

                {
                isAlbum ? 
                    <form onSubmit={(e) =>handleAlbumSubmit(e)} className="relative" >
                        <input placeholder="Album Name" className="create_album_input" ref={albumNameInput} value={albumNameInput.value}/>
                        
                        <button className="clear_btn clear_absolute_btn" onClick={() => {albumNameInput.current.value = ""}}>Clear</button>
                        <button className="flex flex_center create_btn">Create</button>
                    </form>
                : 
                    <form onSubmit={(e) => handleImageSubmit(e)} className="relative">
                        <input placeholder="Image Title" className="create_album_input" ref={imageTitleInput} value={imageTitleInput.value}/>
                        <input placeholder="Image URL" className="create_album_input" ref={imageUrlInput} value={imageUrlInput.value}/>

                        <button className="clear_btn clear_absolute_btn" onClick={() => {imageTitleInput.current.value = ""}} >Clear</button>
                        
                        <button className="clear_btn clear_absolute_btn clear_absolute_btn_imgurl" onClick={() => {imageUrlInput.current.value = ""}} >Clear</button>
                    </form>
                }
            </div>  
        </>
    )
}