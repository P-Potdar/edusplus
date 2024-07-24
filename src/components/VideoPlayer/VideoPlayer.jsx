import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'
import { useRef } from 'react';

const VideoPlayer = ({playState, setPlayState}) => {
    const player = useRef(null);
    const closePlayer = (event) => {
        if (event.target === player.current) {
            setPlayState(false);
        }
    }
    return (
        <div onClick={closePlayer} className={`video-player ${playState ? '' : 'hide'}`} ref={player}>
            <video src={video} autoPlay muted controls></video>
        </div>
    );
};

export default VideoPlayer;