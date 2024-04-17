import React from "react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { storage, auth } from "../../config/firebase";
import { usePageContext } from "../../Context/PageContext";
import { useSellerContext } from "../../Context/SellerContext";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
function Photobar() {
  const [fileUpload, setFileUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const { uid } = usePageContext();
  const { storedImg, setStoredImg } = useSellerContext();
  const imageListRef = ref(storage, `profile/${uid}`);

  const uploadFile = async () => {
    if (!fileUpload) return;
    const filesFolderRef = ref(storage, `profile/${uid}/${fileUpload.name}`);

    const deleteFolderRef = ref(storage, `profile/${uid}`);
    try {
      const listResult = await listAll(deleteFolderRef);
      listResult.items.forEach(async (item) => {
        await deleteObject(item);
      });
    } catch (error) {
      console.error("Error deleting existing image:", error);
    }
    try {
      await uploadBytes(filesFolderRef, fileUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setStoredImg(url);
        });
        setFileUpload(null);
        console.log("success");
      });
    } catch (err) {
      console.error(err);
      console.error(uid);
    }
  };

  const fetchImages = async () => {
    try {
      const response = await listAll(imageListRef);
      const urls = await Promise.all(
        response.items.map((item) => getDownloadURL(item))
      );
      setStoredImg(urls);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="flex flex-col mx-auto w-11/12 ">
      <img
        src={storedImg}
        alt=""
        className="border-solid  w-40 h-36 max-h-36 min-h-36 border-2 mt-1 bg-black border-darkgold  rounded-lg mx-auto"
      />

      <input
        type="file"
        className=" mt-1 mx-auto"
        onChange={(e) => setFileUpload(e.target.files[0])}
      />
      <Button
        onClick={uploadFile}
        className="bg-black text-gold  w-40 mx-auto mt-1 mb-0"
      >
        Upload Store Photo
      </Button>
    </div>
  );
}

export default Photobar;
