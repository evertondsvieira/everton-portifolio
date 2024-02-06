/* eslint-disable react/no-unescaped-entities */
"use client";
import { Fade } from "react-awesome-reveal";
import { Container } from "../../components/Container";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface IContact {
  title: string;
  description: string;
  action: string;
  href: string;
  icon: React.ComponentType<any>;
  iconBgColor: string;
}

const Contact: React.FC = () => {
  const contactData = [
    {
      title: "My phone",
      description: `I'm available for a voice chat or we can exchange messages on WhatsApp`,
      action: "Call now",
      href: "https://wa.me/5566984141471",
      icon: FaPhoneAlt,
      iconBgColor: "bg-green-600",
    },
    {
      title: "My email",
      description:
        "Send me an email reporting feedbacks, suggestions and ideas",
      action: "Call now",
      href: "mailto:vieiraeverton33@hotmail.com",
      icon: MdEmail,
      iconBgColor: "bg-orange-600",
    },
    {
      title: "My LinkedIn",
      description: `We can create more constant interactions as well as a sharing network`,
      action: "Go to LinkedIn now",
      href: "https://www.linkedin.com/in/everton-da-silva-vieira/",
      icon: FaLinkedin,
      iconBgColor: "bg-cyan-600",
    },
  ];
  
  return (
    <Container bgColor={true}> 
      <div id="Contacts" className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full min-h-screen gap-8">
        <Fade direction="up" delay={500}>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl text-justify">
              Let's set up a conversation and{" "}
              <p className="text-red-500">develop our creativity</p> together?
            </h1>
            <p className="text-2xl text-justify">
              Here are all my contact information, I'll be happy to talk to you.
            </p>
          </div>
        </Fade>
        <Fade direction="up" delay={1000}>
          <div className="flex flex-col gap-8">
            {contactData.map((item) => (
              <div
                key={item.title}
                className="flex flex-row items-center gap-4"
              >
                <div
                  className={`flex items-center justify-center text-white ${item.iconBgColor}  p-8 rounded-lg cursor-pointer`}
                >
                  <item.icon size={23} />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-xl">{item.title}</h2>
                  <p className="text-xl text-justify">{item.description}</p>
                  <a href={item.href} target="blank">
                    <p className="text-black text-xl cursor-pointer hover:text-red-500">
                      {item.action}
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </Container>
  );
};

export default Contact;
