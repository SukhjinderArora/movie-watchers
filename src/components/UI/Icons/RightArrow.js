import React from "react";

const RightArrow = (props)  => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width={props.width}
      height={props.height}
      enableBackground="new 0 0 511.995 511.995"
      version="1.1"
      viewBox="0 0 511.995 511.995"
      xmlSpace="preserve"
    >
      <path
        fill={props.color}
        d="M138.664 511.995c-2.646 0-5.313-.979-7.375-2.958-4.25-4.073-4.396-10.823-.333-15.083L358.56 255.995 130.956 18.037c-4.063-4.26-3.917-11.01.333-15.083 4.25-4.083 11-3.896 15.083.333L381.039 248.62c3.938 4.125 3.938 10.625 0 14.75L146.373 508.704a10.656 10.656 0 01-7.709 3.291z"
      />
      <linearGradient
        id="a"
        x1="-45.064"
        x2="-30.717"
        y1="636.747"
        y2="630.057"
        gradientTransform="matrix(21.3333 0 0 -21.3333 996.381 13791.614)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#FFF" stopOpacity="0.2" />
        <stop offset="1" stopColor="#FFF" stopOpacity="0" />
      </linearGradient>
      <path
        fill="url(#a)"
        d="M138.664 511.995c-2.646 0-5.313-.979-7.375-2.958-4.25-4.073-4.396-10.823-.333-15.083L358.56 255.995 130.956 18.037c-4.063-4.26-3.917-11.01.333-15.083 4.25-4.083 11-3.896 15.083.333L381.039 248.62c3.938 4.125 3.938 10.625 0 14.75L146.373 508.704a10.656 10.656 0 01-7.709 3.291z"
      />
    </svg>
  );
}

export default RightArrow;