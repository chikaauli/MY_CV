import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const SocialMedia = () => {
  const socialMediaLinks = [
    {
      icon: "fa-brands fa-github",
      url: "https://github.com/chikaauli",
      title: "GitHub",
    },
    {
      icon: "fa-brands fa-linkedin",
      url: "https://www.linkedin.com/in/chikaaulia11/",
      title: "LinkedIn",
    },
    {
      icon: "fa-brands fa-instagram",
      url: "https://www.instagram.com/chika.aul/",
      title: "Instagram",
    },
    {
      icon: "fa-brands fa-whatsapp",
      url: "https://wa.me/6285772634680",
      title: "WhatsApp",
    },
    {
      icon: "fa-brands fa-telegram",
      url: "https://t.me/chika_aul",
      title: "Telegram",
    },
  ];

  return (
    <div className="lg:mt-auto mt-10 flex">
      <ul className="flex items-center text-3xl">
        {socialMediaLinks.map((link, index) => (
          <li key={index} className="mr-5 transition hover:text-slate-300">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Link to={link.url} target="_blank" title={link.title}>
                <FontAwesomeIcon icon={link.icon} />
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
