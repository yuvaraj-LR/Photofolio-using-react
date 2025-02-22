import {useEffect, useReducer, useState} from "react";
import { db } from "../fireBaseInit";
import { addDoc, collection, doc, onSnapshot, setDoc } from "firebase/firestore"; 

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AlbumList from "./AlbumList";
import Navbar from "./Navbar";
import EmptyBox from "./EmptyBox";
import AddAlbumForm from "./AddAlbumForm";
import ImageList from "./ImageList";

function photofolioReducer(state, action) {

    const {payload} = action;

    switch (action.type) {
        case "GET_ALBUM":
            return payload;
        case "GET_IMAGES":
            return state
        case "ADD_ALBUM":
            return state
        case "ADD_IMAGE":
            return state
        default:
            return state;
    }
}

export default function Photofolio() {
    const [albumList, dispatch] = useReducer(photofolioReducer, []);

    const [addAlbumStatus, setAddAlbumStatus] = useState(false);
    const [addImageStatus, setAddImageStatus] = useState(false);
    const [albumDisplayStatus, setAlbumDisplayStatus] = useState(false);
    const [albumName, setAlbumName] = useState("Name");
    const [albumId, setAlbumId] = useState("id");
    
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        const unSub = onSnapshot(collection(db, "Photofolio"), (snapShot) => {
            const albumList = snapShot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
    
            const payload = albumList;

            dispatch({type: "GET_ALBUM", payload})
        })
    }, []);

    const handleImageClick = (id) => {
        setAlbumDisplayStatus(!albumDisplayStatus);
        setAlbumId(id);

        const albumDetails = onSnapshot(doc(db, "Photofolio", id), (doc) => {
            const albumDetail = {...doc.data()};
            setAlbumName(albumDetail.name);

            const payload = albumDetail.photo || [];
            setImageList(payload);
        });
    }

    const handleAddAlbum = async (albumName) => {
        const data = {
            name: albumName,
            photo: []
        }

        const albumListRef = collection(db, "Photofolio");
        const docRef = await addDoc(albumListRef, data);

        setAddAlbumStatus(!addAlbumStatus);
        toast.success("New album has been added successfully!!!");
    }

    const handleAddImageToAnAlbum = async(photoData) => {
        const data = {
            name: albumName,
            photo: [...imageList, photoData]
        }

        const albumListRef = collection(db, "Photofolio");
        await setDoc(doc(albumListRef, albumId), data);

        setAddImageStatus(!addImageStatus);
        toast.success("New Image has been added successfully!!!");
    }

    const handleDeleteImage = async(index) => {
        const newImageList = imageList.filter((_, i) => i !== index);

        const data = {
            name: albumName,
            photo: newImageList
        }

        const albumListRef = collection(db, "Photofolio");
        await setDoc(doc(albumListRef, albumId), data);

        toast.success("Image has been deleted successfully!!!");
    }

    return (
        <>
            <Navbar />

            <ToastContainer limit={3} theme="dark" />
            <div className="photo_main_content_div">
                <div className={!albumDisplayStatus ? "album_details" : "hidden"}>
                    {addAlbumStatus ? <AddAlbumForm isAlbum={true} dispatch={dispatch} handleAddAlbum={handleAddAlbum}/> : <></>}

                    <div className="flex flex_space_between album_imgae_pad album_head">
                        <h2 className="album_title">Your albums</h2>

                        <button className={addAlbumStatus ? "clear_btn" : "add_btn"} onClick={() => setAddAlbumStatus(!addAlbumStatus)}>{addAlbumStatus ? "Close" : "Add Album"} 
                        </button>
                    </div>
                    <div className="album_content">
                        {albumList.length > 0 ? <AlbumList albumList={albumList} handleImageClick={handleImageClick} /> : <EmptyBox text="No Album Found. Please Add To View." />}
                    </div>
                </div>
                
                <div className={albumDisplayStatus ? "album_imgae_pad image_details" : "hidden"}>
                    {/* 1. Add Image Form*/}
                    {addImageStatus ? <AddAlbumForm isAlbum={false} dispatch={dispatch} imageList={imageList} handleAddImageToAnAlbum={handleAddImageToAnAlbum} /> : <></>}

                    {/* 2. div with back button, title, search, add-image button. */}
                    <div className="flex flex_space_between w-100 image_list_head">
                        <div className="flex flex_center">
                            <button className="back_button" onClick={() => setAlbumDisplayStatus(!albumDisplayStatus)}><i className="fa-solid fa-2x fa-circle-left"></i></button>
                            <h2>Images in {albumName}</h2>
                        </div>
                        <div className="flex flex_center flex_gap_10">
                            <button className="back_button"><i className="fa-solid fa-magnifying-glass"></i></button>
                            <button className={addImageStatus ? "clear_btn" : "add_btn"} onClick={() => setAddImageStatus(!addImageStatus)}>{addImageStatus ? "Close" : "Add Image"}</button>
                        </div>
                    </div>

                    {/* 3. div for imagelist pass excat data. */}
                    <div>
                        {imageList.length > 0 ? <ImageList imageList={imageList} handleDeleteImage={handleDeleteImage}/> :  <EmptyBox text="No images for this album." />}
                    </div>
                </div>
            </div>
        </>
    )
}