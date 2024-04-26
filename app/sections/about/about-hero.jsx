import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { MotionContainer, varFade } from "@/app/components/animate";
import { useTranslate } from "@/app/locales";

export default function AboutHero() {
  const { t } = useTranslate();
  return (
    <Box
      sx={{
        height: { md: 560 },
        py: { xs: 10, md: 0 },
        overflow: "hidden",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage:
          "url(/assets/background/overlay_1.svg), url(/assets/images/about/hero.jpg)",
      }}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: "absolute" },
            textAlign: {
              xs: "center",
              md: "unset",
            },
          }}
        >
          <TextAnimate
            text={t("Hi")}
            variants={varFade().inRight}
            sx={{ color: "primary.main" }}
            className="text-green-500"
          />

          <br />

          <Stack
            spacing={2}
            display="inline-flex"
            direction="row"
            sx={{ color: "common.white" }}
          >
            <TextAnimate text={t("We")} />
            <TextAnimate text={t("Are")} />
          </Stack>

          <div variants={varFade().inRight}>
            <Typography
              variant="h4"
              sx={{
                mt: 3,
                color: "common.white",
                fontWeight: "fontWeightSemiBold",
              }}
            >
              {t(
                "Ella Homes, offering stylish, affordable fully furnished apartments in Nyali, conveniently close to malls."
              )}
            </Typography>
          </div>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function TextAnimate({ text, variants, sx, ...other }) {
  return (
    <Box
      sx={{
        typography: "h1",
        overflow: "hidden",
        display: "inline-flex",
        ...sx,
      }}
      {...other}
    >
      {text.split("").map((letter, index) => (
        <h2
          key={index}
          variants={variants || varFade().inUp}
          className="font-bold  text-[60px]"
        >
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
