import bannerImg from '../assets/banner.jpg';

export default function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',          // Cover whole div, crop if needed
        backgroundPosition: 'center',     // Center the image
        backgroundRepeat: 'no-repeat',    // No repeat
        height: '300px',                  // Adjust height as needed
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        borderRadius: '8px',
        textShadow: '1px 1px 3px rgba(0,0,0,0.7)' // For better text readability
      }}
    >
      <h1>Welcome to RedBus Clone</h1>
      <p>Book your bus tickets now!</p>
    </div>
  );
}
