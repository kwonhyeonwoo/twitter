import React from 'react'
import "./css/index.css";

interface Props {
    onTweetChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const WriteTweet = ({
    onTweetChange,
    onFileChange
}: Props) => {
    return (
        <div className='write-tweet'>
            <textarea
                rows={5}
                maxLength={180}
                placeholder='Write Post ..'
                name='tweet'
                className='text-write'
                onChange={onTweetChange}
            />
            <div className='button-wrapper'>
                <input
                    name='img'
                    type="file"
                    id='file'
                    onChange={onFileChange} className='file'
                />
                <button className='photo-button'>
                    <label htmlFor="file" style={{ width: "100%", display: "block", }} >
                        add photo
                    </label>
                </button>
                <button className='submit-button'>Save</button>
            </div>
        </div>
    )
}

export default WriteTweet