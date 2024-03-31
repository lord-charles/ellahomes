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
        <div className="px-6 pt-10">
          <h1 className=" font-semibold text-3xl leading-10 text-center uppercase font-heading">
            Frequently Asked Questions
          </h1>
          <div class="max-w-2xl mx-auto mt-7">
            {/* <form class="flex w-full shadow-2xl">
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
            </form> */}
            {/* FAQs */}
            <div className="mt-[35px]">
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Where are you located?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Our apartments are all in Nyali. We offer properties in
                    various locations within Nyali.
                  </Typography>
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
                  <Typography>Do you offer breakfast?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    No, but our houses are equipped with fully furnished
                    kitchens/kitchenettes, and there are shopping centers within
                    walking distance. Additionally, there are several good
                    restaurants in the vicinity.
                  </Typography>
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
                    Can I have an early check-in/late check-out?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes, we provide early check-in and late check-out options,
                    subject to availability.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  aria-controls="panel4d-content"
                  id="panel4d-header"
                >
                  <Typography>Do you allow pets?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Yes, we allow pets only in the villa.</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  aria-controls="panel5d-content"
                  id="panel5d-header"
                >
                  <Typography>
                    Do you offer shuttle or airport pick-up and drop?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    At the moment, we do not offer shuttle or airport pick-up
                    and drop-off services. However, we can recommend reliable
                    transfer services.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  aria-controls="panel6d-content"
                  id="panel6d-header"
                >
                  <Typography>
                    Are there rooms with wheelchair access?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes, most of our houses are wheelchair-friendly, and some
                    also have lifts for easy access to the top-floor houses.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
              >
                <AccordionSummary
                  aria-controls="panel7d-content"
                  id="panel7d-header"
                >
                  <Typography>Can you recommend nearby restaurants?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Some nearby restaurants we recommend are Maasai Beach,
                    Charchoma, and Jumeirah Beachfront.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel8"}
                onChange={handleChange("panel8")}
              >
                <AccordionSummary
                  aria-controls="panel8d-content"
                  id="panel8d-header"
                >
                  <Typography>Do you offer extra bedding?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes, we provide extra bedding upon request at an additional
                    fee.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel9"}
                onChange={handleChange("panel9")}
              >
                <AccordionSummary
                  aria-controls="panel9d-content"
                  id="panel9d-header"
                >
                  <Typography>Do you have a chef?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We do not have an in-house chef, but we can recommend
                    external catering services.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel10"}
                onChange={handleChange("panel10")}
              >
                <AccordionSummary
                  aria-controls="panel10d-content"
                  id="panel10d-header"
                >
                  <Typography>Early Morning Check-in Options</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    a. Pay for an early morning - Pay full amount of one
                    night&apos;s stay. This implies that we will not accept any
                    bookings for the previous night and you are guaranteed an
                    early morning check-in.
                    <br />
                    <br />
                    b. Subject to availability (leave it to chance) - If we do
                    not have an in-house guest, you can check-in early in the
                    morning. Alternatively, if we do have an in-house guest,
                    your check-in will be at the standard time; 12:00 noon.
                    <br />
                    <br />
                    *Kindly note: This option is not applicable during the peak
                    season (18th December - 5th January) & any public holiday.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* footer */}
            <div class="pt-20 mt-20 border-t">
              <h2 class="text-2xl leading-10 text-center uppercase font-heading">
                Can&apos;t find what you are looking for?
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
