import React from 'react';
import italian from "../Assets/testYsabel/ita.jpg";
import asian from "../Assets/testYsabel/asian.jpg";


const Colors = () => {
    return (
        <>
            <div className=" items-center justify-center gap-x-16 mt-6 lg:mt-24 ">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-3">Colors</h1>
                <div className=" text-white text-sm lg:text-lg leading-relaxed font-custom4">
                    <p className="mb-4">
                        Color palette për Italinë përfaqësojnë një harmoni të elegancës dhe natyrës, duke përfshirë nuanca të zeza, jeshile, kremi, kafe dhe blu të errët. <br /> <br />
                        Ky kombinim krijon një atmosferë të sofistikuar dhe të ngrohtë, duke sjellë stabilitet, freski dhe një prekje luksoze.<br /> <br />
                        Çdo ngjyrë pasqyron pasionin dhe harmoninë që karakterizon kulturën italiane.
                    </p>
                    <p>
                        Ngjyrat e Azisë përfshijnë nuanca të tokës, të kuqërremta, ari dhe nuanca më të mbyllura, duke krijuar një atmosferë të thellë dhe mistike.
                        Këto ngjyra përfaqësojnë lidhjen me natyrën, pasionin dhe pasurinë, duke shtuar një prekje luksoze dhe harmonike
                        që pasqyron traditat dhe kulturën e pasur aziatike.
                    </p>
                </div>
            </div>

            {/* Full-width image with proper spacing */}
            <div className="w-full mt-6 lg:mt-16">
                <p className="font-custom4 text-4xl lg:text-6xl font-bold text-white mb-4 text-center lg:text-left lg:mt-12">
                    Italian Colors
                </p>
                <div className="w-full mt-10">
                    <img src={italian} alt="Italian Colors" className="w-full  object-contain " />
                </div>
            </div>

            <div className="w-full mt-8 lg:mt-20">
                <p className="font-custom4 text-4xl lg:text-6xl font-bold text-white mb-4 text-center lg:text-left lg:mt-12">
                    Asian Colors
                </p>
                <div className="w-full mt-10">
                    <img src={asian} alt="Italian Colors" className="w-full  object-contain " />
                </div>
            </div>
            
            <div className='mt-12 lg:mt-16'>
                <p className='text-white font-custom4 text-lg lg:-5xl text-center'>Expect to see more rooftop colors</p>
            </div>
        </>
    );
};

export default Colors;
