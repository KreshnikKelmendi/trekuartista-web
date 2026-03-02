import React from "react";
import social01 from "../Assets/newEra/new-era-social/social-01 (1).webp";
import social02 from "../Assets/newEra/new-era-social/social-01 (2).webp";
import social03 from "../Assets/newEra/new-era-social/social-01 (3).webp";
import social04 from "../Assets/newEra/new-era-social/social-01 (4).webp";
import social05 from "../Assets/newEra/new-era-social/social-01 (5).webp";  
import social06 from "../Assets/newEra/new-era-social/social-01 (6).webp";
import social07 from "../Assets/newEra/new-era-social/social-01 (7).webp";
import social08 from "../Assets/newEra/new-era-social/social-01 (8).jpg";
import social09 from "../Assets/newEra/new-era-social/social-01 (9).jpg";
import social10 from "../Assets/newEra/new-era-social/social-01 (10).jpg";
import social11 from "../Assets/newEra/new-era-social/50 SHAPE - ANIMATION.mp4";
import social12 from "../Assets/newEra/new-era-social/social-01 (12).jpg";
import social13 from "../Assets/newEra/new-era-social/social-01 (13).jpg";
import social14 from "../Assets/newEra/new-era-social/social-01 (14).jpg";
import social15 from "../Assets/newEra/new-era-social/social-01 (15).jpg";

const NewEraSocialMedia = ({ fullScreenItem }) => {
    const mediaItems = [
        social01, social02, social03, social04, social05,
        social06, social07, social08, social09, social10,
        social11, social12, social13, social14, social15,
    ];

    return (
        <div className="grid grid-cols-3 gap-1">
            {mediaItems.map((mediaItem, index) => (
                <div
                    key={index}
                    className="relative group overflow-hidden cursor-pointer"
                    onClick={() => fullScreenItem(mediaItem, index)}
                >
                    {typeof mediaItem === "string" && mediaItem.endsWith(".mp4") ? (
                        <video src={mediaItem} autoPlay muted loop playsInline className="w-full object-cover" />
                    ) : (
                        <img src={mediaItem} alt={`New Era social media ${index + 1}`} className="w-full object-cover" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default NewEraSocialMedia;
