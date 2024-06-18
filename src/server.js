import React, { useEffect, useState } from "react";
import axios from "axios";

interface dogImgInterface {
  id: string;
  dogUrl: string;
}

export default function Dogs() {
  const [dogImgArr, setDogImgArr] = useState<dogImgInterface[]>([]);

  useEffect(() => {
    console.log("로드");

    // key가 없으면 응답은 10개씩
    const API_URL =
      "https://api.thedogapi.com/v1/images/search?size=small&format=json&has_breeds=true&order=ASC&page=0&limit=10";
    axios.get(API_URL).then((res) => {
      console.log(res);
      
      // id값과 url만 저장
      const gotData = res.data.map((dogImg: { id: string; url: string }) => ({
        id: dogImg.id,
        dogUrl: dogImg.url,
      }));
      setDogImgArr(gotData);
    });
  }, []);

  return (
    <div className="dog-imgs-container">
      {dogImgArr &&
        dogImgArr.map((dogImg: dogImgInterface) => (
          <div key={dogImg.id} className="dog-img-card">
            <img src={dogImg.dogUrl} />
            <p>cute_{dogImg.id}</p>
          </div>
        ))}
    </div>
  );
}