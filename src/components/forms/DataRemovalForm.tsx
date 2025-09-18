"use client";

import { useState } from "react";

export default function DataRemovalForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Replace with your actual API endpoint
      const response = await fetch("/api/data-removal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pb-25  max-md:overflow-hidden">
  <div className="container relative max-md:text-center">
    <div className="absolute left-1/2 -bottom-[442px] -translate-x-1/2  flex max-md:flex-col -z-10 max-md:hidden">
      <div className="max-md:hidden max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 blur-[145px]" />
      <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]" />
      <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]" />
    </div>
    <div className="absolute left-1/2 -bottom-[350px] p-[350px] -translate-x-1/2 bg-contain w-full h-full  bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10" />
    <div>
      <div className="grid grid-cols-12 grid-y-10 items-start">
       
        <div className="max-md:col-span-full col-span-12 max-md:mt-5 ">
          <form>
            <div className="grid grid-cols-12 items-center max-lg:gap-y-5 lg:gap-x-6 ">
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="bg-transparent placeholder:text-dark text-black text-light focus:outline-none  leading-[1.5] border rounded-[60px] bg-white dark:bg-dark-200 dark:border-[#31332F] border-borderColour max-lg:col-span-full lg:col-span-8 h-full ps-5 max-lg:py-3.5 focus:border-primary dark:focus:border-primary  duration-300 transition-all outline-none"
              />
              <button className="btn max-lg:col-span-full lg:col-span-4">
                Submit
              </button>
            </div>
          </form>
          <ul className=" flex max-md:flex-col max-lg:gap-y-2.5 items-center max-lg:justify-between lg:gap-5 mt-6 ">
            
          </ul>

          Important: Data removal is irreversible. Once deleted, we cannot recover your data or restore your account.


        </div>
      </div>
    </div>
  </div>
</section>

  );
}
