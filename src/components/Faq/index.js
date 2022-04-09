import React, { Fragment } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./fancy-example.css";

const Index = () => {
  return (
    <Fragment>
      <hr />
      <div className="faqs">
        <Accordion>
          {FaqLists.map((faq, index) => {
            return (
              <AccordionItem key={index}>
                <AccordionItemHeading>
                  <AccordionItemButton>{faq.question}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>{faq.answer}</p>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      <style jsx>
        {`
          .faqs {
            max-width: 1000px;
            margin: 2rem auto;
            // background-color: #e5e5e5;
            padding: 3rem 2rem;
          }
        `}
      </style>
    </Fragment>
  );
};

const FaqLists = [
  {
    question: "What harsh truths do you prefer to ignore?",
    answer:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    question: "Is free will real or just an illusion?",
    answer:
      "In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.",
  },
  {
    question: "What harsh truths do you prefer to ignore?",
    answer:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    question: "Is free will real or just an illusion?",
    answer:
      "In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.",
  },
  {
    question: "What harsh truths do you prefer to ignore?",
    answer:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    question: "Is free will real or just an illusion?",
    answer:
      "In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.",
  },
  {
    question: "What harsh truths do you prefer to ignore?",
    answer:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    question: "Is free will real or just an illusion?",
    answer:
      "In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.",
  },
  {
    question: "What harsh truths do you prefer to ignore?",
    answer:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    question: "Is free will real or just an illusion?",
    answer:
      "In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.",
  },
];

export default Index;
