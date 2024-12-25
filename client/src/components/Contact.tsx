import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Element } from "react-scroll";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import FindMe from "./FindMe";
import Button from "./Button";
import { GoMail } from "react-icons/go";
import { HiOutlinePhone } from "react-icons/hi";
import contactImg from "/images/contact.svg";

interface IFormInput {
  name: string;
  number: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Element name="contact">
      <Section>
        <SectionTitle
          subtitle="CONTACT"
          title="Contact With Me"
          className="text-center"
        />
        <div className="flex flex-col gap-6 md:flex-row xl:gap-8">
          <div className="flex-1 rounded-xl bg-default px-6 pb-8 shadow-default">
            <img src={contactImg} alt="contact" />
            <h3 className={`text-2xl font-medium lg:text-3xl`}>Rupok Koiry</h3>
            <p className="my-4 text-sm text-secondary md:text-base lg:text-lg">
              Looking for a professional web developer? Contact me for expert
              web development services. Let&apos;s discuss your project
              requirements and bring your vision to life.
            </p>
            <div className="flex flex-col justify-between xl:flex-row xl:items-center">
              <div>
                <div className="mb-4 flex items-center gap-3 text-sm md:text-base lg:text-lg">
                  <p className="rounded-full bg-default p-3 text-xl text-primary shadow-default lg:text-2xl">
                    <HiOutlinePhone />
                  </p>
                  <p>
                    Phone <br />
                    <span className="font-medium text-secondary">
                      01719032457
                    </span>
                  </p>
                </div>
                <div className="mb-4 flex items-center gap-3 text-sm md:text-base lg:text-lg">
                  <p className="rounded-full bg-default p-3 text-xl text-primary shadow-default lg:text-2xl">
                    <GoMail />
                  </p>
                  <p>
                    Email <br />
                    <span className="font-medium text-secondary">
                      koiry.rupok@gmail.com
                    </span>
                  </p>
                </div>
              </div>
              <FindMe />
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-1 rounded-xl bg-default px-6 py-8 shadow-default"
          >
            <div className="mb-4 flex flex-col gap-4 md:flex-row lg:mb-6">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-primary lg:text-base"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "*Name is required" })}
                  className="focus-border-primary w-full rounded-lg border-2 border-secondary bg-gray-100 px-3 py-3 text-sm caret-primary focus:outline-none dark:bg-[#191b1e] dark:focus:border-primary md:text-base lg:px-5 lg:text-lg"
                />
                {errors.name && (
                  <p className="text-sm text-red-500 lg:text-base">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label
                  htmlFor="number"
                  className="mb-1 block text-sm font-medium text-primary lg:text-base"
                >
                  Number:
                </label>
                <input
                  type="tel"
                  id="number"
                  {...register("number")}
                  className="focus-border-primary w-full rounded-lg border-2 border-secondary bg-gray-100 px-3 py-3 text-sm caret-primary focus:outline-none dark:bg-[#191b1e] dark:focus:border-primary md:text-base lg:px-5 lg:text-lg"
                />
              </div>
            </div>
            <div className="mb-4 lg:mb-6">
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-primary lg:text-base"
              >
                Email:
              </label>
              <input
                type="text"
                id="email"
                {...register("email", { required: "*Email is required" })}
                className="focus-border-primary w-full rounded-lg border-2 border-secondary bg-gray-100 px-3 py-3 text-sm caret-primary focus:outline-none dark:bg-[#191b1e] dark:focus:border-primary md:text-base lg:px-5 lg:text-lg"
              />
              {errors.email && (
                <p className="text-sm text-red-500 lg:text-base">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-4 lg:mb-6">
              <label
                htmlFor="subject"
                className="mb-1 block text-sm font-medium text-primary lg:text-base"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject", { required: "*Subject is required" })}
                className="focus-border-primary w-full rounded-lg border-2 border-secondary bg-gray-100 px-3 py-3 text-sm caret-primary focus:outline-none dark:bg-[#191b1e] dark:focus:border-primary md:text-base lg:px-5 lg:text-lg"
              />
              {errors.subject && (
                <p className="text-sm text-red-500 lg:text-base">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div className="mb-4 lg:mb-6">
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-primary lg:text-base"
              >
                Message:
              </label>
              <textarea
                id="message"
                {...register("message", { required: "*Message is required" })}
                className="focus-border-primary w-full resize-none rounded-lg border-2 border-secondary bg-gray-100 px-3 py-3 text-sm caret-primary focus:outline-none dark:bg-[#191b1e] dark:focus:border-primary md:text-base lg:px-5 lg:text-lg"
                rows={6}
              ></textarea>
              {errors.message && (
                <p className="text-sm text-red-500 lg:text-base">
                  {errors.message.message}
                </p>
              )}
            </div>
            <div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Section>
    </Element>
  );
};

export default Contact;
