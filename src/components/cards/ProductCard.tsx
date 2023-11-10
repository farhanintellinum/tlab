import React from "react";

type Props = {
  title: string;
  desc: string;
  platform: string;
  releaseDate: string;
  img: string;
  link: string;
};

const ProductCard = (props: Props) => {
  const { img, title, desc, platform, releaseDate, link } = props;
  return (
    <a
      className="bg-white rounded-[8px] px-[12px] pt-[12px] pb-[24px] flex flex-col gap-3 w-full cursor-pointer hover:opacity-80"
      href={link}
      target="_blank"
    >
      <img src={img} alt="product" className="w-full rounded-[4px]" />

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
