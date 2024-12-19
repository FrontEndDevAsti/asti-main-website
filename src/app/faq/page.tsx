// "use client";

import FaqArea from "@/components/faq/FaqArea";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";

export const metadata = {
  title: "Blog Details Vixan - Digital  Creative Agency Next js Template",
};


interface DataType {
  id: string;
  question: string;
  ans: string;
}

interface level3 {
  title: string;
  faqData: DataType[];
}

const level3: level3 = {
  title: "Level 3",
  faqData: [
    {
      id: "One",
      question: `What is the design process for branding?`,
      ans: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying conse quences lalin karar or one avoids a pain that produces no resultant pleasure.`,
    },
    {
      id: "Two",
      question: `What services does your agency offer?`,
      ans: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying conse quences lalin karar or one avoids a pain that produces no resultant pleasure.`,
    },
  ],
};

const level4: level3 = {
  title: "Level 4",
  faqData: [
    {
      id: "One",
      question: `What is the ds`,
      ans: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying conse quences lalin karar or one avoids a pain that produces no resultant pleasure.`,
    },
    {
      id: "Two",
      question: `What services does your agency offer?`,
      ans: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying conse quences lalin karar or one avoids a pain that produces no resultant pleasure.`,
    },
  ],
};
// export const metadata = {
//   title: "Faq Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <FaqArea title={level3.title} faqData={level3.faqData} />

            <FaqArea title={level4.title} faqData={level4.faqData} />

            <div className="cs_height_150 cs_height_lg_60"></div>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
