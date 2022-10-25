import React from "react";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { Image } from "./Image";
import { LoaderIcon } from "./LoaderIcon";

export const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const apiAccessKey = "RoS-9VGMuiXoOrjfYKbYsn7IgKTsMrDfYW4Th-4BzNo";
    axios
      .get(`${apiRoot}/photos/random?client_id=${apiAccessKey}&count=10`)
      .then((res) => setImages([...images, ...res.data]));
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<LoaderIcon />}
      >
        <Image images={images}></Image>
      </InfiniteScroll>
    </div>
  );
};
