import React from "react";

const FavoriteAnime = () => {
  const animeList = ["Fate", "Garden of Sinners", "Tsukihime", "The Witch on the Holy Night", "Hunter x Hunter"];

  return (
    <div>
      <h2>My Favorite Anime</h2>
      <ul>
        {animeList.map((anime, index) => (
          <li key={index}>{anime}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteAnime;
