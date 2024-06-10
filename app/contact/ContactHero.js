"use client";

import { m } from "framer-motion";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import { useTranslate } from "../locales";
import { MotionContainer, varFade } from "../components/animate";
import { bgGradient } from "../theme/css";

// ----------------------------------------------------------------------

const CONTACTS = [
  {
    country: "Nyali",
    address: "1st Ave, Mombasa",
    phoneNumber: "254 701374731",
    email: "info@ellahomeske.com",
  },
  {
    country: "Mission",
    address: "To offer the best furnished/selfcatering apartments.",
  },
  {
    country: "Vision",
    address: "To be the leading short staycation provider in east Africa",
  },
  {
    country: "Value",
    address:
      "To offer Memorable stay to our clients and offer value for money.",
  },
];

// ----------------------------------------------------------------------
export default function ContactHero() {
  const theme = useTheme();
  const { t } = useTranslate();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: "/assets/images/contact/hero.jpg",
        }),
        height: { md: 560 },
        py: { xs: 10, md: 0 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: "absolute" },
            textAlign: { xs: "center", md: "unset" },
          }}
        >
          <TextAnimate
            text={t("Where")}
            sx={{ color: "primary.main" }}
            variants={varFade().inRight}
            className="text-green-500 font-extrabold text-[60px]"
          />
          <br />

          <Stack
            spacing={2}
            display="inline-flex"
            direction="row"
            sx={{ color: "common.white" }}
          >
            <TextAnimate
              text={t("to")}
              className="text-white font-extrabold text-[60px]"
            />
            <TextAnimate
              text={t("find")}
              className="text-white font-extrabold text-[60px]"
            />
            <TextAnimate
              text={t("us?")}
              className="text-white font-extrabold text-[60px]"
            />
          </Stack>

          <Stack
            spacing={5}
            alignItems={{ xs: "center", md: "unset" }}
            direction={{ xs: "column", md: "row" }}
            sx={{ mt: 5, color: "common.white" }}
          >
            {CONTACTS.map((contact) => (
              <Stack key={contact.country} sx={{ maxWidth: 180 }}>
                <h2 variants={varFade().in}>
                  <Typography variant="h6" gutterBottom>
                    {contact.country}
                  </Typography>
                </h2>
                <h2 variants={varFade().inRight}>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {contact.address}
                  </Typography>
                </h2>
                {contact.phoneNumber && (
                  <h2 variants={varFade().inRight}>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {contact.phoneNumber}
                    </Typography>
                  </h2>
                )}
                {contact.email && (
                  <h2 variants={varFade().inRight}>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {contact.email}
                    </Typography>
                  </h2>
                )}
              </Stack>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function TextAnimate({ text, variants, sx, ...other }) {
  return (
    <Box
      component={m.div}
      sx={{
        typography: "h1",
        overflow: "hidden",
        display: "inline-flex",
        ...sx,
      }}
      {...other}
    >
      {text.split("").map((letter, index) => (
        <h2 key={index} variants={variants || varFade().inUp}>
          {letter}
        </h2>
      ))}
    </Box>
  );
}

TextAnimate.propTypes = {
  sx: PropTypes.object,
  text: PropTypes.string,
  variants: PropTypes.object,
};
