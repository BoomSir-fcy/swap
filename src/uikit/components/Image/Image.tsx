import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import observerOptions from "./options";
import Wrapper from "./Wrapper";
import { ImageProps } from "./types";

const StyledImage = styled.img<{userDrag?: string, borderRadius?: string}>`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  -webkit-user-drag: ${({userDrag}) => userDrag || '' };
  border-radius: ${({ borderRadius }) => borderRadius || ''};
`;

const Placeholder = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Image: React.FC<ImageProps> = ({ src, alt, width, height, borderRadius, ...props }) => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (imgRef.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const { isIntersecting } = entry;
          if (isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      }, observerOptions);
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [src]);

  return (
    <Wrapper ref={imgRef} height={height} width={width} {...props}>
      {isLoaded ? <StyledImage borderRadius={borderRadius} src={src} alt={alt} /> : <Placeholder />}
    </Wrapper>
  );
};

export default Image;
