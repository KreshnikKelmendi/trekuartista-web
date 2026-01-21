import React from 'react';

interface YsabelDesignProps {
  workName?: string;
  textDescription?: string;
  secondDescription?: string;
  thirdDescription?: string;
  firstMediaItems?: any[];
  secondMediaItems?: any[];
  thirdMediaItems?: any[];
  fifthMediaItems?: any[];
  soundStates?: { [key: number]: boolean };
  toggleSound?: (index: number) => void;
}

const YsabelDesign: React.FC<YsabelDesignProps> = ({
  workName,
  textDescription,
  secondDescription,
  thirdDescription,
  firstMediaItems = [],
  secondMediaItems = [],
  thirdMediaItems = [],
  fifthMediaItems = [],
  soundStates = {},
  toggleSound
}) => {
  return (
    <div className="w-full bg-black">
      <div className="py-0 md:py-[50px] bg-black lg:px-[50px]">
        <div className="flex flex-col p-4 lg:p-0">
          <p className="text-[35px] md:text-[33px] text-white font-bold font-custom leading-[47px] tracking-[1px] lg:tracking-[0px]">
            {workName}
          </p>
          <span className="ml-0 pt-2 lg:mt-0 w-full lg:w-fit 2xl:w-1/2 text-lg font-medium font-custom1 text-white">
            {textDescription}
          </span>
        </div>
      </div>

      <div className="w-full bg-black py-8 lg:py-12">
        <div className="text-center font-custom text-white py-6">
          <p className="text-4xl lg:text-6xl tracking-[1px]">YSABEL SOCIETY</p>
        </div>
      </div>
    </div>
  );
};

export default YsabelDesign;
