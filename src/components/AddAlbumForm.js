

export default function AddAlbumForm(props) {

    const {setalbumList} = props;
    

    return (
        <>
            <div className="flex flex_col create_ablum_container">
                <h2>Create Album</h2>

                <form className="relative">
                    <input placeholder="Album Name" className="create_album_input" />
                    
                    <button className="clear_btn clear_absolute_btn">Clear</button>
                    <button className="flex flex_center create_btn">Create</button>
                </form>
            </div>  
        </>
    )
}