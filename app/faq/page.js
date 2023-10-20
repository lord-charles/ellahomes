"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import Image from "next/image";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  return (
    <main className="flex flex-col flex-1">
      <div>
        <div className="absolute xxxs:top-[9vh] lg:top-[11vh] z-[1]">
          <Image
            src="/banners/bg4.jpeg"
            width={3000}
            height={3000}
            alt="bg"
            className="object-cover w-screen lg:h-[27rem] md:h-[27rem] xxxs:h-[25rem] blur-[0px]"
          />
        </div>
        <div className="px-6 py-10 mt-[340px]">
          <div className="relative max-w-6xl pt-16 pb-10 mx-auto md:pt-20">
            <h1 className=" font-semibold text-3xl leading-10 text-center uppercase font-heading">
              Frequently Asked Questions
            </h1>
          </div>
          <div class="max-w-2xl mx-auto mt-7">
            <form class="flex w-full shadow-2xl">
              <input
                type="text"
                class="outline-none w-full px-3 py-4 text-sm font-medium border-gray-200 rounded-l md:px-7 focus:ring-0 focus:border-gray-200"
                placeholder="Search your questions here"
              />
              <button
                class="px-4 font-medium text-white rounded-r md:px-6 focus:outline-none bg-lime-500"
                type="submit"
              >
                Search
              </button>
            </form>

            {/* qas */}
            <div className="mt-[35px]">
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>
                    How do I start the home buying process?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ol className="custom-list ml-10">
                    <li>Determine your budget.</li>
                    <li>Get pre-approved for a mortgage.</li>
                    <li>Research neighborhoods and property types.</li>
                    <li>Work with a real estate agent.</li>
                    <li>Visit homes, make an offer, and negotiate terms.</li>
                    <li>Complete inspections and finalize financing.</li>
                    <li>
                      Close the deal and take possession of your new home.
                    </li>
                  </ol>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography>
                    What should I consider when selling my home?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ol className="custom-list ml-10">
                    <li>
                      Pricing: Set the right price based on market conditions
                      and property value.
                    </li>
                    <li>
                      Home Preparation: Make necessary repairs and stage your
                      home for showings.
                    </li>
                    <li>
                      Marketing: Promote your property through online listings,
                      social media, and signage.
                    </li>
                    <li>
                      Showings: Accommodate potential buyers for property
                      viewings.
                    </li>
                    <li>
                      Negotiations: Be open to negotiating offers and terms.
                    </li>
                    <li>
                      Closing: Prepare for the closing process and transferring
                      ownership.
                    </li>
                  </ol>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>
                    What is a mortgage and how does it work?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ol className="custom-list ml-10">
                    <li>You apply for a mortgage with a lender.</li>
                    <li>
                      The lender assesses your credit, income, and financial
                      history.
                    </li>
                    <li>
                      If approved, you receive a loan for a specific amount.
                    </li>
                    <li>
                      You make regular payments, including interest and
                      principal.
                    </li>
                    <li>Over time, you build equity in your home.</li>
                    <li>
                      If you default on payments, the lender may foreclose on
                      the property.
                    </li>
                  </ol>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>
                    What is a real estate agent&apos;s role in buying/selling a
                    home?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ol className="custom-list ml-10">
                    <li>
                      For Buyers: They find suitable properties, negotiate
                      offers, and guide you through the purchase process.
                    </li>
                    <li>
                      For Sellers: They market your property, find qualified
                      buyers, and negotiate the best deal.
                    </li>
                    <li>
                      They provide expertise on market trends, pricing, and
                      legal aspects.
                    </li>
                  </ol>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>
                    What is a home inspection, and is it necessary?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ol className="custom-list ml-10">
                    <li>
                      A home inspection is a thorough evaluation of a
                      property&apos;s condition. It&apos;s essential because:
                    </li>
                    <li>
                      It identifies hidden issues, helping buyers make informed
                      decisions.
                    </li>
                    <li>
                      It can uncover safety concerns or necessary repairs.
                    </li>
                    <li>
                      It can be used to negotiate repairs or price adjustments.
                    </li>
                    <li>Lenders may require it for mortgage approval.</li>
                  </ol>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* footer */}
            <div class="pt-20 mt-20 border-t">
              <h2 class="text-2xl leading-10 text-center uppercase font-heading">
                Can’t find what you are looking for?
              </h2>
              <div class="flex flex-col items-center justify-center mt-6 space-y-3 md:space-y-0 md:space-x-3 md:flex-row">
                <button class="px-8 py-4 font-medium bg-white border-2 rounded-full text-lime-500 focus:outline-none border-lime-500">
                  Email your queries
                </button>

                <button class="px-8 py-4 font-medium text-white border-2 rounded-full bg-lime-500 focus:outline-none border-lime-500">
                  Request to callback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default dynamic(() => Promise.resolve(FAQ), {
  ssr: false,
});
