import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowLeftWideFill, RiArrowRightWideFill } from 'react-icons/ri';

const cards = [
  {
    key: 'card1',
    content: (
      <div className="tw-text-white col-md-8">
        <motion.h4
          className="fs-1 fw-bold"
          initial={{ x: "-100%" }}
          animate={{ x: "0" }}
          exit={{ x: "200%", transition: { duration: 0.3 } }}
          transition={{ duration: 0.5 }}
        >
          Your bright future is our mission
        </motion.h4>
        <motion.p
          className="fs-6 tw-text-gray-400"
          initial={{ x: "-100%" }}
          animate={{ x: "0" }}
          exit={{ x: "200%", transition: { duration: 0.3 } }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magni aspernatur molestiae aut laboriosam ut consequatur soluta, et mollitia fuga.
        </motion.p>
        <motion.a
          href="/contact"
          className="btn btn-primary tw-mt-5"
          initial={{ x: "-150%" }}
          animate={{ x: "0" }}
          exit={{ x: "1500%", transition: { duration: 0.3 } }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          apply now
        </motion.a>
      </div>
    )
  },
  {
    key: 'card2',
    content: (
      <div className="tw-text-white col-md-8">
        <motion.h4
          className="fs-1 fw-bold"
          initial={{ y: "-100%" }}
          animate={{ y: "0" }}
          exit={{ y: "200%", transition: { duration: 0.3 } }}
          transition={{ duration: 0.5 }}
        >
          Your bright future is our mission
        </motion.h4>
        <div className="tw-overflow-hidden">
          <motion.p
            className="fs-6 tw-text-gray-400"
            initial={{ y: "-100%" }}
            animate={{ y: "0" }}
            exit={{ y: "200%", transition: { duration: 0.3 } }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magni aspernatur molestiae aut laboriosam ut consequatur soluta, et mollitia fuga.
          </motion.p>
        </div>
        <div className="tw-overflow-hidden">
          <motion.a
            href="/contact"
            className="btn btn-primary tw-mt-5"
            initial={{ y: "-150%" }}
            animate={{ y: "0" }}
            exit={{ y: "150%", transition: { duration: 0.3 } }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            apply now
          </motion.a>
        </div>
      </div>
    )
  },
  {
    key: 'card3',
    content: (
      <div className="tw-text-white col-md-8">
        <div className="tw-overflow-hidden">
          <motion.h4
            className="fs-1 fw-bold"
            initial={{ y: "200%" }}
            animate={{ y: "0" }}
            exit={{ y: "-200%", transition: { duration: 0.3 } }}
            transition={{ duration: 0.5 }}
          >
            Your bright future is our mission
          </motion.h4>
        </div>
        <div className="tw-overflow-hidden">
          <motion.p
            className="fs-6 tw-text-gray-400"
            initial={{ y: "200%" }}
            animate={{ y: "0" }}
            exit={{ y: "-200%", transition: { duration: 0.3 } }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magni aspernatur molestiae aut laboriosam ut consequatur soluta, et mollitia fuga.
          </motion.p>
        </div>
        <div className="tw-overflow-hidden">
          <motion.a
            href="/contact"
            className="btn btn-primary tw-mt-5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, transition: { duration: 0.3 } }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            apply now
          </motion.a>
        </div>
      </div>
    )
  }
];

const Hero = () => {
  const [activeCard, setActiveCard] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      nextCard()
    }, 5000);

    return () => clearInterval(interval);
  }, [activeCard])

  const nextCard = () => {
    setActiveCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setActiveCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  return (
    // <div className="tw-relative" style={{ height: '51rem', zIndex: 1 }}>
    <div
      className="tw-relative tw-bg-cover tw-bg-no-repeat tw-bg-center tw-w-full tw-h-full"
      style={{ backgroundImage: "url('src/assets/images/banner-1.jpg')", zIndex: 1}}
    >

      <div className="container tw-py-64">
        <div className="tw-w-full">
          <AnimatePresence mode="wait">
            {cards.map((card, index) =>
              index === activeCard ? (
                <div key={card.key} className="row tw-overflow-hidden">
                  {card.content}
                </div>
              ) : null
            )}
          </AnimatePresence>

          <div className="d-flex justify-content-between align-items-center tw-mt-4">
            <div>
              {cards.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`tw-inline-block tw-mr-2 tw-w-2 tw-h-2 hover-primary-color ${activeCard === index ? 'tw-bg-color-primary' : 'tw-bg-gray-400'
                    }`}
                ></span>
              ))}
            </div>
            <div>
              <button className="tw-text-gray-400 hover-primary-color fs-1" onClick={prevCard}>
                <RiArrowLeftWideFill />
              </button>
              <button className="tw-text-gray-400 hover-primary-color fs-1" onClick={nextCard}>
                <RiArrowRightWideFill />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-color-secondary tw-opacity-80" style={{zIndex: -1}}></div>
    </div>
  );
};

export default Hero;
