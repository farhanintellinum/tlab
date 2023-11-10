import React from "react";

type Props = {
  title: string;
  desc: string;
  platform: string;
  releaseDate: string;
  img: string;
  link: string;
  genre: string;
};

const ProductCard = (props: Props) => {
  const { img, title, desc, platform, releaseDate, link, genre } = props;
  return (
    <a
      className="bg-white rounded-[8px] px-[12px] pt-[12px] pb-[24px] flex flex-col gap-3 w-full cursor-pointer hover:opacity-80"
      href={link}
      target="_blank"
    >
      <div className="w-full relative ">
        <img src={img} alt="product" className="w-full rounded-[4px]" />
        <span className="absolute bottom-3 ms-2 py-1 px-4 bg-[#C1E1FF] rounded-[34px] font-semibold text-[#0E385F]">
          {genre}
        </span>
      </div>

      <h5 className="text-xl">{title}</h5>
      <p>{desc}</p>

      <hr className="text-[ECF0F8]" />
      <div className="grid grid-cols-2">
        <div>
          <h6 className="text-[#A0A7B9]">Platform</h6>
          <p>{platform}</p>
        </div>
        <div>
          <h6 className="text-[#A0A7B9]">Release Date</h6>
          <p>{releaseDate}</p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
