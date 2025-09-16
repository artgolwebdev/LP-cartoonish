import { forwardRef } from 'react';
import { useVideo } from '../../hooks/useVideo';

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

export const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ src, autoPlay = true, muted = true, loop = true, playsInline = true, className, ...props }, ref) => {
    const videoRef = useVideo({ autoPlay, muted, loop, playsInline });

    return (
      <div className="video-container">
        <video
          ref={ref || videoRef}
          className={`${className} motion-safe`}
          preload="metadata"
          poster=""
          {...props}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
);

Video.displayName = 'Video';
