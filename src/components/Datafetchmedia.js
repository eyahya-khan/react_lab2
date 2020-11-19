import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
  // useMemo,
} from "react";
import "./Img.css";
import { UseroneContext, UsertwoContext } from "../App";
import { Display, Input, Button, Empha } from "./Designstyled";

function Datafetchmedia() {
  const [images, setImages] = useState([]);
  const [number, setNumber] = useState(4);
  const [buttonNumber, setButtonNumber] = useState(4);

  const userone = useContext(UseroneContext);
  const usertwo = useContext(UsertwoContext);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=2&limit=${buttonNumber}`)
      .then((data) => data.json())
      .then((data) => setImages(data));
  }, [buttonNumber]);

  const handleClick = useCallback(() => {
    setButtonNumber(number);
  }, [number]);

  // const formattedNumber = useMemo(() => {
  //   return number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  // }, [number]);

  return (
    <div className="app">
      <header>
        <h1 data-testid="input">
          {userone} {usertwo}
          {-number}
        </h1>
      </header>
      <Display>
        <Input
          type="text"
          value={number}
          // value={formattedNumber}
          onChange={(e) => setNumber(e.target.value)}
          ref={inputRef}
        />
        <Button data-testid="button-up" primary onClick={handleClick}>
          Click
        </Button>
        <Empha>
          <em>Change the number then click</em>
        </Empha>
      </Display>
      <div className="library">
        {images.map((image) => (
          <Image
            key={image.id}
            url={image.download_url}
            author={image.author}
          />
        ))}
      </div>
    </div>
  );
}
function Image({ url, author }) {
  return (
    <a href={url}>
      <figure>
        <img src={url} alt={author} />
        <figcaption>{author}</figcaption>
      </figure>
    </a>
  );
}

export default Datafetchmedia;
