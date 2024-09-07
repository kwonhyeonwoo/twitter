import React, { useCallback, useState } from 'react'
import WriteTweet from '../WriteTweet'

interface ITweetType {
    tweet: string;
    img: any;
}


const WriteTweetContainer = () => {
    const [data, setData] = useState<ITweetType>({
        tweet: "",
        img: null
    });
    const [file, setFile] = useState<File | null>(null);

    const handleTweetChange = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const { value, name } = e.target;
            setData((prevData) => ({
                ...prevData,
                [name]: value
            }))
        },
        [data],
    );

    const handleFileChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { files } = e.target;
            console.log(files)
            if (files && files.length > 1) {
                console.log(files[0])
                setData((prevData) => ({
                    ...prevData,
                    img: files[0]
                }))
                console.log('data', data)
            }
        },
        [data],
    );
    console.log(data)
    return (
        <WriteTweet
            onTweetChange={handleTweetChange}
            onFileChange={handleFileChange}
        />
    )
}

export default WriteTweetContainer