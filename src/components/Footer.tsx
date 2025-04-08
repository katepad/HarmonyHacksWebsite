import React from 'react';
import '../styles/Global.css'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h5>Follow Us</h5>
          <ul>
            <li>
              <a href = "https://discord.gg/9eK7e3XR6U" target="_blank">
                <img src="/assets/logos/discord_logo.png" alt="Discord" />
              </a>
            </li>
            <li>
              <a href = "https://www.instagram.com/csusmharmonyhacks" target="_blank">
                <img src="/assets/logos/instagram_logo.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href = "https://open.spotify.com/playlist/1T8du2cVHZqBFgwtfAKYbE?si=gHQplIXXRjS0KVgW90y6yA&pi=u-ItcXYbNKRo6f" target="_blank">
                <img src="/assets/logos/spotify_logo.png" alt="Spotify" />
              </a>
            </li>
            <li>
              <a href = "https://www.tiktok.com/@harmonyhackscsusm" target="_blank">
                <img src="/assets/logos/tiktok_logo.png" alt="TikTok" />
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-bar text-center">
          © 2025 Harmony Hacks — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
