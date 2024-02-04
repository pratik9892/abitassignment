import React from "react";
import Releasecomp from "./Releasecomp";

const Release = () => {
  return (
    <div className="h-[846px] w-full bg-[#FFFFFF] py-40 flex  flex-col items-center  justify-around border-b-2 border-[#D8D8D8]">
      <div className="w-[1240px] h-[75px] flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-normal text-[#000000]">Releases</h1>
          <p className="text-base font-normal italic">
            Videos that you upload in collaboration with aBit appear here.
          </p>
        </div>
        <div className="flex items-center justify-between gap-5">
          <Releasecomp num="1" text="Shared Video" />
          <Releasecomp num="$9510" text="Funds Raised" />
          <Releasecomp num="317" text="Co-owner community" />
          <Releasecomp num="$3804" text="Co-owner Earnings" />
        </div>
      </div>
      <div className="h-[771] w-[1240px] ">
        <div className="flex items-center gap-6">
          <div className="h-[312px] w-[283.64px] bg-[#EDEDED] rounded-3xl flex items-end justify-between flex-col -p-10">
            <div className="w-full h-full flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2849 32C14.1803 32 13.2848 31.1046 13.2848 30V2C13.2848 0.895431 14.1803 0 15.2848 0H16.7151C17.8197 0 18.7152 0.895431 18.7152 2V30C18.7152 31.1046 17.8197 32 16.7152 32H15.2849ZM2 18.7152C0.895431 18.7152 0 17.8197 0 16.7152V15.2849C0 14.1803 0.895431 13.2848 2 13.2848H30C31.1046 13.2848 32 14.1803 32 15.2848V16.7152C32 17.8197 31.1046 18.7152 30 18.7152H2Z"
                  fill="#959595"
                  fill-opacity="0.57"
                />
              </svg>
            </div>
            <div className="px-4 py-4">
              <h2 className="text-sm font-normal text-[#A0A0A0] text-center">
                You haven’t uploaded any videos with aBit yet. Add now!
              </h2>
            </div>
          </div>
          <div
            className="h-[312px] w-[283.64px] 
          bg-[url('https://s3-alpha-sig.figma.com/img/87c0/3d4c/1a546c66ea689708d7a03042db7eb340?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ULW4opCyBNR4gglbz5riXHrd9nhVXO2wbmK0BZbMIQBinj1i4IrB2yZuXnAiiDQHc6NDb~Btxti3vgWPw93IgFb3TWODD-M8AmnXQmo9HSB1ht595J4w-ztExu-mKtFIAIjphRslFPSKhXljVLQ4hg2~emFvAzsqBzjgMP810YQVzhR9Hig-vSa7D-IFdCsSjNl4liESfq04FvX8C2NbHmy7ugM4jRALpzFZ7myE3wsuxoAO~65ijEdPeuHe6gHXGTzhvJiH3Af7WTd7EG3urWPXpcoLXFycq8021QzzWW1wSuv-Bjr3a5JgCYbfBuetaybOzJu6YQCLdtycyBJLkA__')] rounded-3xl flex items-end justify-between flex-col -p-10
          bg-cover
          drop-shadow-2xl
          "
          >
            <h1 className="flex items-start font-bold  text-xl text-[#FFFFFF] pr-16 pt-4">The Sound of Silence</h1>
            <div className="w-full h-full flex items-end justify-center ">
              <div className="w-[246.76px] h-[52.36px] bg-[#FFFFFF] bg-opacity-20 px-4 rounded-xl my-4 flex items-center justify-between font-inter">
                <div className="flex items-center flex-col">
                    <p className="font-medium text-[#FFFFFF] text-xs">Shares</p>
                    <p className="font-bold text-sm text-[#FFFFFF]" >317</p>
                </div>
                <div className="flex items-center flex-col">
                    <p className="font-medium text-[#FFFFFF] text-xs">Offered</p>
                    <p className="font-bold text-sm text-[#FFFFFF]" >75%</p>
                </div>
                <div className="flex items-center flex-col">
                    <p className="font-medium text-[#FFFFFF] text-xs">Raised</p>
                    <p className="font-bold text-sm text-[#FFFFFF]" >$9510</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Release;
