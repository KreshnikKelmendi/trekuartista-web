import React, { useRef, useState } from 'react';
import { FaDownload, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import logo from "../Assets/treku circle.png";
import video from "../Assets/jaffaplus/jaffa-4.mp4"
import jaffa1 from "../Assets/jaffaplus/jaffa-1.png"
import jaffa2 from "../Assets/jaffaplus/jaffa-2.png"
import jaffa3 from "../Assets/jaffaplus/jaffa-3.png"
import jaffa5 from "../Assets/jaffaplus/jaffa-5.png"
import jaffa6 from "../Assets/jaffaplus/jaffa-6.png"
import jaffa7 from "../Assets/jaffaplus/jaffa-7.png"
import palette1 from "../Assets/jaffaplus/palette-1.png"
import palette2 from "../Assets/jaffaplus/palette-2.png"
import palette3 from "../Assets/jaffaplus/palette-3.png"
import palette4 from "../Assets/jaffaplus/palette-4.png"
import redapple from "../Assets/jaffaplus/Red Apple (1).mp4"
import vitaminat from "../Assets/jaffaplus/artbordg (1).mp4"
import VideoJaffaComponent from './VideoJaffaComponent';
import plusin from "../Assets/jaffaplus/dd.mp4"
import lemonade from "../Assets/jaffaplus/LEMONADE.mp4"


const JaffaPlusPresentation = ({ title, text1, text2, media, fullScreenItem }) => {
  

    return (
        <>
            <div className="w-full px-4 lg:px-[55px] bg-black">
                <div className='flex justify-center'>
                    <img src={logo} alt='' className='py-10 lg:py-16 w-28 lg:w-52' />
                </div>
                <div className='flex flex-col jlg:ustify-between lg:flex-row pb-6 pt-0 lg:pt-10'>
                    <div className='text-[#f9e2c7] lg:w-1/2'>
                        <p className="text-4xl lg:text-6xl font-custom3 uppercase text-left">{title}</p>
                        <p className='pt-6 font-custom4 text-sm lg:text-base'>{text1}</p>
                        <p className='pt-6 font-custom4 text-sm lg:text-base'>{text2}</p>
                    </div>

                    <div className="pt-8 lg:pt-0 lg:ml-20">
                        <div className="block space-y-8">
                            {/* Number 1 */}
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-full bg-[#ff9d00] text-white flex items-center justify-center font-bold font-custom3 text-3xl">1</div>
                                <div className='flex flex-col text-[#f9e2c7] w-full lg:w-[100%]'>
                                    <p className='font-custom4 font-bold text-base lg:text-xl uppercase'>Rritja e Ndërgjegjësimit për Brandin</p>
                                    <p className="font-custom4 text-sm lg:text-base">Të bëhemi sinonim i cilësisë dhe inovacionit në kategorinë e pijeve.</p>
                                </div>
                            </div>
                            {/* Number 2 */}
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-full bg-[#ff9d00] text-white flex items-center justify-center font-bold font-custom3 text-3xl">2</div>
                                <div className='flex flex-col text-[#f9e2c7] w-full lg:w-[100%]'>
                                    <p className='font-custom4 font-bold text-base lg:text-xl uppercase'>Angazhimi me Audiencën</p>
                                    <p className="font-custom4 text-sm lg:text-base">Të krijojmë lidhje personale dhe emocionuese përmes kanaleve digjitale.</p>
                                </div>
                            </div>
                            {/* Number 3 */}
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-full bg-[#ff9d00] text-white flex items-center justify-center font-bold font-custom3 text-3xl">3</div>
                                <div className='flex flex-col text-[#f9e2c7] w-full lg:w-[100%]'>
                                    <p className='font-custom4 font-bold text-base lg:text-xl uppercase'>Rritja e Shitjeve</p>
                                    <p className="font-custom4 text-sm lg:text-base">Të tërheqim konsumatorët ekzistues dhe të rinj duke ofruar vlera të veçanta dhe përvoja unike.</p>
                                </div>
                            </div>
                            {/* Number 4 */}
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-full bg-[#ff9d00] text-white flex items-center justify-center font-bold font-custom3 text-3xl">4</div>
                                <div className='flex flex-col text-[#f9e2c7] w-full lg:w-[100%]'>
                                    <p className='font-custom4 font-bold text-base lg:text-xl uppercase'>Zgjerimi në Tregje të Reja</p>
                                    <p className="font-custom4 text-sm lg:text-base">Të prezantojmë Jaffa Plus në rajone dhe audienca të reja.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full pt-16 lg:pt-20'>
                    <p className="text-4xl lg:text-6xl font-custom3 uppercase text-left text-[#f9e2c7]">Gjuha e komunikimit</p>
                    <div className='flex flex-col justify-between'>
                        <div className='lg:w-full text-[#f9e2c7] pt-6'>
                            <p className='font-custom4 text-sm lg:text-base'>Çelësi i vizualizimit i referohet elementeve grafike minimale, fotografisë dhe
                                thënjeve që përdoren në mënyrë të përsëritur në komunikimin e marketingut si
                                pjesë e një fushate aktuale. Vizualizimi luan rol të madh në njohjen e një marke
                                qoftë në rastet kur krijohet apo kur rifreskohet.
                                Elementet grafike janë të ilustruara në formë të ikonave minimale, brenda
                                kornizës së katrorit sikur vetë marka që ka Jaffa Plus. Ato paraqesin tërë gamën
                                e produkteve, të projektuara si koncept bashkëkohor, krijojnë lidhje dhe besueshmëri
                                me audiencën.
                            </p>
                            <p className='font-custom4 text-sm lg:text-base pt-6'>
                                Fotografitë kanë për qëllim që të sjellin në pah cilësinë e produktit, përvojën e
                                konsumatorit, të përçojnë emocion dhe ta pozicionojnë Jaffa Plus si markën më
                                të mirë në treg.
                            </p>
                            <p className='font-custom4 text-sm lg:text-base pt-6'>
                                Përcaktimi në këtë paletë të ngjyrave, përveç që na kujton secilën stinë, bëhet
                                edhe urë lidhëse me karakterin e produkteve që ofron Jaffa Plus dhe shijët e
                                larmishme të saj.
                            </p>
                            <p className='font-custom4 text-sm lg:text-base pt-6'>
                                <ul className="list-disc pl-5">
                                    <li><strong>AD HOC</strong> - Për postime që pësojnë si rrjedhë e ngjarjeve me nam ose rëndësi</li>
                                    <li><strong>THEME</strong> - Ilustrim, emocion, paketim 3D, color text / quotes</li>
                                    <li><strong>POST</strong> - për secilën shije / post dhe tekst</li>
                                    <li><strong>2L</strong> - Familja, Shoqëria</li>
                                    <li><strong>1L</strong> - Me e tregu se sa praktike është</li>
                                    <li><strong>0.5L</strong> - Individuale</li>
                                </ul>
                            </p>

                        </div>
                        <div className="pt-5 lg:pt-16 ">
                            {/* Section Title */}
                            <p className="font-custom3 text-3xl text-green-900 ">TEMAT KRYESORE</p>

                            {/* Responsive Layout */}
                            <div className="bg-black p-5">
                                {/* Large Screen: Table Layout */}
                                <div className="hidden lg:block overflow-x-auto">
                                    <table className="min-w-full table-auto text-[#f9e2c7]">
                                        <thead>
                                            <tr className="border-b border-gray-600">
                                                <th className="text-left py-3 px-6 text-2xl lg:text-3xl font-custom3 uppercase">Animacion/Text</th>
                                                <th className="text-left py-3 px-6 text-sm lg:text-base font-custom4">Lëvizja që i jep jetë shijes!</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Taste of the Day Section */}
                                            <tr className="border-b border-gray-600">
                                                <td className="py-3 px-6 text-2xl lg:text-3xl font-custom3 uppercase">Taste of the Day</td>
                                                <td className="py-3 px-6 text-sm lg:text-base font-custom4">Një përjetim/ndjenjë e re në ditë.</td>
                                            </tr>

                                            {/* Photoshooting Section */}
                                            <tr className="border-b border-gray-600">
                                                <td className="py-3 px-6 text-2xl lg:text-3xl font-custom3 uppercase">Photoshooting</td>
                                                <td className="py-3 px-6 text-sm lg:text-base font-custom4">
                                                    Çdo imazh, një histori shijeje! Perfeksioni i kapur në çdo kënd dhe çdo detaj.
                                                </td>
                                            </tr>

                                            {/* Video/Top View Section */}
                                            <tr className="border-b border-gray-600">
                                                <td className="py-3 px-6 text-2xl lg:text-3xl font-custom3 uppercase">Video/Top View</td>
                                                <td className="py-3 px-6 text-sm lg:text-base font-custom4">
                                                    Një perspektivë më e afërt me shijen! Pamje që të bëjnë ta ndjesh aromën/shijen përtej videos.
                                                </td>
                                            </tr>

                                            {/* Themes Section */}
                                            <tr className="border-b border-gray-600">
                                                <td className="py-3 px-6 text-2xl lg:text-3xl font-custom3 uppercase">Temat do perdoren si:</td>
                                                <td className="py-3 px-6">
                                                    <ul className="list-disc pl-5 pt-4 font-custom4 text-sm lg:text-base">
                                                        <li>“Sa ta sheh syni, kualitet i yni.”</li>
                                                        <li>“Shnosh si molla e Jaffa Plus-it”</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Small Screen: Flex Layout */}
                                <div className="lg:hidden text-[#f9e2c7]">
                                    {/* Animacion/Text Section */}
                                    <div className="border-b border-gray-600 pb-4">
                                        <h2 className="text-2xl lg:text-3xl font-custom3 uppercase">Animacion/Text</h2>
                                        <p className="text-sm lg:text-base font-custom4">Lëvizja që i jep jetë shijes!</p>
                                    </div>

                                    {/* Taste of the Day Section */}
                                    <div className="border-b border-gray-600 pb-4 mt-6">
                                        <h2 className="text-2xl lg:text-3xl font-custom3 uppercase">Taste of the Day</h2>
                                        <p className="text-sm lg:text-base font-custom4">Një përjetim/ndjenjë e re në ditë.</p>
                                    </div>

                                    {/* Photoshooting Section */}
                                    <div className="border-b border-gray-600 pb-4 mt-6">
                                        <h2 className="text-2xl lg:text-3xl font-custom3 uppercase">Photoshooting</h2>
                                        <p className="text-sm lg:text-base font-custom4">
                                            Çdo imazh, një histori shijeje! Perfeksioni i kapur në çdo kënd dhe çdo detaj.
                                        </p>
                                    </div>

                                    {/* Video/Top View Section */}
                                    <div className="border-b border-gray-600 pb-4 mt-6">
                                        <h2 className="text-2xl lg:text-3xl font-custom3 uppercase">Video/Top View</h2>
                                        <p className="text-sm lg:text-base font-custom4">
                                            Një perspektivë më e afërt me shijen! Pamje që të bëjnë ta ndjesh aromën/shijen përtej videos.
                                        </p>
                                    </div>

                                    {/* Themes Section */}

                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                {/* social media */}


            </div>
            <div className='w-full lg:px-[55px] pt-16 lg:pt-20 bg-black'>
                <p className='font-custom3 text-[#f9e2c7] text-3xl lg:text-6xl text-center pb-6 lg:pb-0'>SOCIAL MEDIA THEME 3FEB-21FEB</p>
                <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-[4px] lg:mt-16 h-full">
                <VideoJaffaComponent src={plusin} />
                  
                    <VideoJaffaComponent src={redapple} />
                 
                    {/* <div className='h-full'>
                    <VideoJaffaComponent src={lemonade} />
                    </div> */}
                <div className='w-full h-full'>
                    <img src={jaffa3} alt='w- h- object-cover' className='h-[25vh] lg:h-[100vh] object-cover' />
                    </div>
                  
                </div>
                <div className=' py-[4px] w-full'>
                <VideoJaffaComponent src={video} />
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-[4px]">
                    <div className=''>
                <VideoJaffaComponent src={vitaminat} />
                </div>
                    <img src={jaffa6} alt='' className='h-full object-cover ' />
                    <img src={jaffa7} alt='' className='h-full object-fill ' />

                </div>

                <div className='w-full px-4 lg:px-0 pt-16 lg:pt-20'>
                    <p className='font-custom3 text-[#f9e2c7] text-3xl lg:text-6xl text-center pb-6 lg:pb-0'>TYPOGRAPHY AND COLOR PALETTE</p>
                    <div className="lg:pt-16">
                        <img src={palette1} alt='' />
                    </div>
                </div>

                <div className='w-full px-4 lg:px-0 pt-16 lg:pt-20'>
                    <p className='font-custom3 text-[#f9e2c7] text-3xl lg:text-6xl text-center pb-6 lg:pb-0'>ILUSTRATION AND PATTERN</p>
                    <div className="lg:pt-0">
                        <img src={palette2} alt='' />
                        <img src={palette3} alt='' />
                    </div>
                    <div className="mx-auto text-[#f9e2c7] w-full lg:w-3/4 2xl:w-1/2 py-16 space-y-6">
                        <h2 className="font-custom3 text-3xl lg:text-4xl font-bold">
                            Për Jaffa Plus, çdo pemë është lidhja me shijen e freskisë dhe natyrës!
                        </h2>

                        <div className="border-t border-[#f9e2c7] w-1/3 mx-auto"></div>

                        <p className="font-custom3 text-lg lg:text-xl leading-relaxed">
                            <span className="font-semibold">ILUSTRIME:</span> <br />Pemat, të cilat frymëzojnë freskinë e shijes së Jaffa Plus,
                            pasqyrohen në çdo ilustrim që sjell energji dhe aromë.
                        </p>

                        <p className="font-custom3 text-lg lg:text-xl leading-relaxed">
                            <span className="font-semibold">PATERNAT:</span> <br />Çdo produkt Jaffa Plus përmban freskinë e natyrës, e cila vjen
                            direkt nga pemët, për një përvojë shijesh të pasur.
                        </p>

                        <p className="font-custom3 text-lg lg:text-xl font-semibold">
                            Me Jaffa Plus, freskia e pemëve kthehet në shije të paharrueshme!
                        </p>
                    </div>
                    <div className="lg:pt-0 pb-8 ">
                        <img src={palette4} alt='' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default JaffaPlusPresentation;
