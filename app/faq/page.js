"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FaqsHero from "../sections/faqs/faqs-hero";
import FaqsCategory from "../sections/faqs/faqs-category";
import FaqsList from "../sections/faqs/faqs-list";
import FaqsForm from "../sections/faqs/faqs-form";

export default function FaqsView() {
  return (
    <div className="bg-white">
      <FaqsHero />

      <Container
        sx={{
          pb: 10,
          pt: { xs: 10, md: 15 },
          position: "relative",
        }}
      >
        <FaqsCategory />

        <Typography
          variant="h3"
          sx={{
            my: { xs: 5, md: 10 },
          }}
          className="text-black"
        >
          Frequently asked questions
        </Typography>

        <div className="flex md:flex-row xxxs:flex-col md:gap-4 xxxs:gap-0 items-center">
          <div className="md:w-[50%] xxxs:w-[100%]">
            <FaqsList />
          </div>
          <div className="md:w-[50%] xxxs:w-[100%]">
            <FaqsForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
