import React, { useState, useRef, useEffect } from 'react';
import pinkLogo from "../Assets/pinkLogo.png";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const Modal = ({ closeModal }) => (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={closeModal}></span>
      <p className="font-custom1">
        We have received your message and would like to thank you for writing to us!
      </p>
    </div>
  </div>
);

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.6
  });

  const controls = useAnimation(); // Define controls here

  const sendEmail = async (e) => {
    e.preventDefault();

    setIsSending(true);

    try {
      const result = await emailjs.sendForm(
        'service_f75mxdg',
        'template_30u7p67',
        form.current,
        'wrDNx2dqNINsXxEHy'
      );

      console.log(result.text);
      showSuccessPopup();
    } catch (error) {
      console.log(error.text);
    } finally {
      setIsSending(false);
    }
    e.target.reset();
  };

  const showSuccessPopup = () => {
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 4000);
  };

  const closeModal = () => {
    setIsSent(false);
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const formFieldsVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col bg-black text-white lg:flex-row lg:px-[50px]">
      {/* First Div */}
      <div className="w-full lg:w-1/2 flex flex-col px-4 py-7 lg:py-[85px]">
        <div className="h-full">
          <h1 className="text-4xl flex md:text-5xl lg:text-[33px] font-bold font-custom leading-[47px]">
            GET IN TOUCH
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img src={pinkLogo} className="w-8 md:w-10 lg:w-[40px] h-8 md:h-10 lg:h-[34px] mt-3 lg:mt-0 ml-4 object-contain lg:object-cover" alt="" />
            </motion.div>
          </h1>
          <p className="text-base py-[49px] font-custom1 font-thin lg:w-[425px]">
            We like working together and performing professionally.<br /> <br />
            Our team includes experienced business strategists, communication specialists, graphic
            and web designers, 3D animators, drawing illustrators, and programmers, ensuring that our
            clients receive professionalism and polish.
          </p>
        </div>
      </div>

      {/* Second Div - Contact Form */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={formFieldsVariants}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 flex px-4 2xl:ml-[247px] lg:py-[85px]"
        ref={ref}
      >
        <form ref={form} onSubmit={sendEmail} className="w-full lg:mx-[47px] lg:mt-14 font-custom text-lg">
          <motion.div variants={formFieldsVariants} className="mb-[11px]">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full py-2 placeholder-[#D9D9D9] text-white bg-black focus:outline-none border-b rounded-none"
              placeholder="Your Name"
              required
            />
          </motion.div>
          <motion.div variants={formFieldsVariants} className="mb-[11px]">
            <input
              type="text"
              id="company"
              name="company"
              className="w-full py-2 placeholder-[#D9D9D9] text-white bg-black focus:outline-none border-b rounded-none"
              placeholder="Company Name"
            />
          </motion.div>
          <motion.div variants={formFieldsVariants} className="mb-[11px]">
            <input
              type="text"
              id="role"
              name="role"
              className="w-full py-2 placeholder-[#D9D9D9] text-white bg-black focus:outline-none border-b rounded-none"
              placeholder="Your Role"
            />
          </motion.div>
          <motion.div variants={formFieldsVariants} className="mb-[11px]">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full py-2 placeholder-[#D9D9D9] text-white bg-black focus:outline-none border-b rounded-none"
              placeholder="Phone Number"
            />
          </motion.div>
          <motion.div variants={formFieldsVariants} className="mb-[11px]">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full py-2 placeholder-[#D9D9D9] text-white bg-black focus:outline-none border-b rounded-none"
              placeholder="Email Address"
              required
            />
          </motion.div>
          <motion.div variants={formFieldsVariants} className="mb-[11px]">
            <textarea
              id="message"
              name="message"
              className="w-full py-2 placeholder-[#D9D9D9] text-white bg-black focus:outline-none border-b rounded-none"
              placeholder="Tell Us how we can help"
              rows="3"
              required
            ></textarea>
          </motion.div>
          <div className="mt-4">
            <button
              className="my-6 w-[207px] text-white hover:bg-white transition duration-500 ease-in-out hover:text-black text-base border border-white font-medium font-custom1 py-2 px-4 rounded-none"
              type="submit"
              disabled={isSending}
            >
              {isSending ? 'SENDING...' : 'SUBMIT'}
            </button>
            {isSent && <Modal closeModal={closeModal} />}
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
