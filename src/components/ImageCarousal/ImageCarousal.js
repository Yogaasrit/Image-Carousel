import { useState } from "react";

const ImageCarousal = () => {
  let url = "";
  const image = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQRZZ5oFLmZ0DJjA3KNGMFYHaXD5XGdogZCA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ntkBegE0xN0mazH_jwjSQ0Clz8xzV-ir5w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmYERK1viHFMOZVcez8Myq5xm-tFdmOZLlg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMtI5J4PPFRrxfgdVpFS2V2HSBJWs3u7A6XJRd4W82fxWjfZe87qBHwigeunuUvo0NCs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr8jneLEqMkctVb2vKJxN4f2IAwKbJT_deFg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz2Kj-D4Ssm7M1ZybWsp9Lq1vS72l3P_2amQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtiMdsZgZE82XAITjL0Q6gP8y-TPShiOGT5g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtiMdsZgZE82XAITjL0Q6gP8y-TPShiOGT5g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSVjeYUeFXt-hoqw2kVzbO2N6gyQVU42iNQ&usqp=CAU",
  ];
  const [getData, setData] = useState(0);
  const handlePrevious = () => {
    setData(getData === 0 ? image.length - 1 : getData - 1);
  };
  const handleNext = () => {
    setData(getData === image.length - 1 ? 0 : getData + 1);
  };

  url = image[getData];
  return (
    <div>
      <button onClick={handlePrevious}>PREVIOUS</button>
      <img src={url}></img>
      <button onClick={handleNext}>NEXT</button>
    </div>
  );
};
export default ImageCarousal;
