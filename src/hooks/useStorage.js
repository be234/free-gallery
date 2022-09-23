import { useEffect, useState } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase/config";


const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const stroageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        stroageRef.put(file).on('state_change', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await stroageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt })
            setUrl(url);
        })
    }, [file])
    return { progress, url, error }
};

export default useStorage;