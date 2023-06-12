import React, { useRef, useState } from "react";
import { imageResolver } from "../../../utils/image-resolver";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = ({ data }) => {
  const form = useRef();
  const [formData, setFormData] = useState();
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
    if (!values?.firstName) {
      errors.firstName = "This field is required!";
    }
    if (!values?.email) {
      errors.email = "This field is required!";
    } else if (!emailRegex.test(values?.email)) {
      errors.email = "Please enter your correct email address";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    if (Object.keys(formErrors)?.length === 0) {
      emailjs
        .sendForm(
          "service_yctbuxw",
          "template_kxw1g9a",
          form.current,
          "Fr81sg7v-UO0lfmgX"
        )
        .then(
          function (response) {
            toast.success("email sent successfully");
            e.target.reset();
          },
          function (error) {
            toast.error("email not sent");
          }
        );
    } else {
      toast.error(`email not sent`);
    }
  };

  return (
    <>
      <div className="py-[50px] ">
        <div
          style={{ backgroundImage: `url("/static/images/gradient.png")` }}
          className="max-w-[1200px]  lg:px-0 mx-auto bg-cover rounded-l-[21px] shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-white rounded-[21px] lg:py-[74px] py-8 px-9 lg:px-[109px] shadow-lg">
              <h2 className="md:text-[32px] sm:text-3xl text-[24px] leading-[38px] font-[600] tracking-wider md:leading-[34px] text-[#14142B] mb-[15px]">
                {data?.title}
              </h2>
              <p className="text-[14px] font-[500] tracking-wider leading-[24px] text-[#4E4B66] mb-[40px]">
                {data?.description}
              </p>
              {data?.cta?.map((item, index) => (
               <a href={item?.link} 
                  key={index}
                  className=" bg-white bg-opacity-60 rounded-[12px] backdrop-blur-2xl shadow-md p-[15px] flex gap-x-[25px] items-center mb-[15px]"
                >
                  <div className="flex items-center">
                    <img
                      src={imageResolver(item.img).path}
                      alt="contact image"
                      className="contact"
                    />
                  </div>
             
                    <p className="text-[#14142B] text-[14px] leading-[24px] font-[600] w-full">
                      {item?.name}
                    </p>
                    {/* <p className="text-[14px] leading-[24px] font-[500] text-[#4E4B66] text-left ">
                      {item?.link}
                    </p> */}
                  </a>
              
              ))}
            </div>
            <div className="py-[51px] rounded-r-[40px]">
              <div className="px-[42px]">
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="w-full pb-[10px]">
                    <input
                      type="text"
                      className="px-[24px] py-[14px] w-full bg-[#FFFFFF] bg-opacity-70 backdrop-blur-2xl rounded-2xl placeholder:text-[#A0A3BD] placeholder:text-[16px] placeholder:leading-[28px] placeholder:font-[400] "
                      placeholder="Your Name *"
                      id="firstName"
                      name="firstName"
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div className="w-full pb-[10px]">
                    <input
                      type="Number"
                      className="px-[24px] py-[14px] w-full bg-[#FFFFFF] bg-opacity-70 backdrop-blur-2xl rounded-2xl placeholder:text-[#A0A3BD] placeholder:text-[16px] placeholder:leading-[28px] placeholder:font-[400]"
                      placeholder="Phone Number *"
                      id="phone"
                      name="phone"
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="w-full pb-[10px]">
                    <input
                      type="email"
                      className="px-[24px] py-[14px] w-full bg-[#FFFFFF] bg-opacity-70 backdrop-blur-2xl rounded-2xl placeholder:text-[#A0A3BD] placeholder:text-[16px] placeholder:leading-[28px] placeholder:font-[400]"
                      placeholder="Email *"
                      id="email"
                      name="email"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="w-full pb-[15px]">
                    <textarea
                      cols="30"
                      rows="6"
                      className="w-full rounded-2xl bg-opacity-70 backdrop-blur-2xl bg-[#FFFFFF] py-[20px] px-[24px] placeholder:text-[#A0A3BD] placeholder:text-[16px] placeholder:leading-[28px] placeholder:font-[400]"
                      placeholder="Message..."
                      id="message"
                      defaultValue={""}
                      name="message"
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <div>
                    <button className="bg-[#5F2EEA] rounded-[40px] w-full text-[16px] leading-[28px] font-[600] text-[#F7F7FC] py-[11px]">
                      Get a consultation
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
