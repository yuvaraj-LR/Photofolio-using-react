import {useRef, useEffect} from "react";

export default function AddAlbumForm(props) {

    const {setalbumList} = props;

    const albumNameInput = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleClear() {
        albumNameInput.current.value = ""
    }

    useEffect(() => {
        albumNameInput.current.focus();
    }, [])

    return (
        <>
            <div className="flex flex_col create_ablum_container">
                <h2>Create Album</h2>

                <form onSubmit={(e) =>handleSubmit(e)} className="relative" >
                    <input placeholder="Album Name" className="create_album_input" ref={albumNameInput} value={albumNameInput.value}/>
                    
                    <button className="clear_btn clear_absolute_btn" onClick={handleClear}>Clear</button>
                    <button className="flex flex_center create_btn">Create</button>
                </form>
            </div>  
        </>
    )
}