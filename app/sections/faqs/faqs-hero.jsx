import { m } from "framer-motion";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { alpha, useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { bgGradient } from "@/app/theme/css";
import Iconify from "@/app/components/iconify";

export default function FaqsHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl:
            "https://res.cloudinary.com/dn3q6mcwp/image/upload/v1709099464/betty%20Airbnb/villa/asjwktdcmjpzu98halja.jpg",
        }),
        height: { md: 560 },
        py: { xs: 10, md: 0 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: "absolute" },
            textAlign: { xs: "center", md: "unset" },
          }}
        >
          <div>
            <TextAnimate
              text="How"
              sx={{ color: "primary.main" }}
              className="text-green-500 font-extrabold text-[60px] px-1"
            />
            <br />

            <Stack
              spacing={2}
              display="inline-flex"
              direction="row"
              sx={{ color: "common.white" }}
            >
              <TextAnimate
                text="can"
                className="text-white font-extrabold text-[60px] px-0.5"
              />
              <TextAnimate
                text="we"
                className="text-white font-extrabold text-[60px] px-0.5"
              />
              <TextAnimate
                text="help"
                className="text-white font-extrabold text-[60px] px-0.5"
              />
              <TextAnimate
                text="you?"
                className="text-white font-extrabold text-[60px] px-0.5"
              />
            </Stack>
          </div>

          <m.div>
            <TextField
              fullWidth
              placeholder="Search support..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify
                      icon="eva:search-fill"
                      sx={{ color: "text.disabled" }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                mt: 5,
                maxWidth: 360,
                [`& .${outlinedInputClasses.root}`]: {
                  bgcolor: "common.white",
                },
                [`& .${outlinedInputClasses.input}`]: {
                  typography: "subtitle1",
                },
              }}
            />
          </m.div>
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
        <m.span key={index}>{letter}</m.span>
      ))}
    </Box>
  );
}

TextAnimate.propTypes = {
  sx: PropTypes.object,
  text: PropTypes.string,
  variants: PropTypes.object,
};
