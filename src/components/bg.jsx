import star from '../videos/star.mp4';

function Star() {
  return (
    <video
      src={star}
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
  );
}

export default Star;