import Image from "next/image";
import { useState, useEffect, SetStateAction } from "react";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import uniqid from "uniqid";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "facebook-clone-6c38e.firebaseapp.com",
  projectId: "facebook-clone-6c38e",
  storageBucket: "facebook-clone-6c38e.appspot.com",
  messagingSenderId: "337509918932",
  appId: "1:337509918932:web:4f1b7c8fb17951b73f7341",
};

initializeApp(firebaseConfig);

const storage = getStorage();
const storageRef = ref(storage, uniqid());

const Img = () => {
  const [loading, setLoading] = useState(0);
  const [img, setImg] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e: any) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (image) {
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setLoading(+progress.toFixed(0));
        },
        error => {
          // Handle unsuccessful uploads
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            console.log("File available at", downloadURL);
            setImg(downloadURL);
          });
        }
      );
    }
  };

  return (
    <div>
      {img && <Image src={img} height={100} width={200} alt="" />}
      <h1>{loading}%</h1>
      <input type="file" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default Img;
