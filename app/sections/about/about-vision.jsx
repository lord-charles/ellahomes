import { m } from "framer-motion";

// import Fab from '@mui/material/Fab';
import Box from "@mui/material/Box";
// import Stack from '@mui/material/Stack';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTranslate } from "@/app/locales";
import { MotionViewport, varFade } from "@/app/components/animate";
// import { alpha, useTheme } from '@mui/material/styles';

// import Image from 'src/components/image';
// import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function AboutVision() {
  // const theme = useTheme();
  const { t } = useTranslate();
  const renderImg = (
    <div>
      {/* <video controls width="100%" className=" object-fill">
        <track kind="captions" srcLang="en" label="English" />
        <source src="/assets/images/about/aboutvid.mp4" type="video/mp4" />
        Sorry, your browser doesn&apos;t support embedded videos.
      </video> */}
    </div>
  );

  // const renderLogo = (
  //   <Stack
  //     direction="row"
  //     flexWrap="wrap"
  //     alignItems="center"
  //     justifyContent="center"
  //     sx={{
  //       width: 1,
  //       zIndex: 9,
  //       bottom: 0,
  //       opacity: 0.48,
  //       position: 'absolute',
  //       py: { xs: 1.5, md: 2.5 },
  //     }}
  //   >
  //     {['ibm', 'lya', 'spotify', 'netflix', 'hbo', 'amazon'].map((logo) => (
  //       <Box
  //         component={m.img}
  //         key={logo}
  //         variants={varFade().in}
  //         alt={logo}
  //         src={`/assets/icons/brands/ic_brand_${logo}.svg`}
  //         sx={{
  //           m: { xs: 1.5, md: 2.5 },
  //           height: { xs: 20, md: 32 },
  //         }}
  //       />
  //     ))}
  //   </Stack>
  // );

  return (
    <Box
      sx={{
        pb: 10,
        position: "relative",
        bgcolor: "background.neutral",
        "&:before": {
          top: 0,
          left: 0,
          width: 1,
          content: "''",
          position: "absolute",
          height: { xs: 80, md: 120 },
          bgcolor: "background.default",
        },
      }}
    >
      <Container component={MotionViewport}>
        <Box
          sx={{
            mb: 10,
            borderRadius: 2,
            display: "flex",
            overflow: "hidden",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {renderImg}

          {/*
          {renderLogo}

          <Fab sx={{ position: 'absolute', zIndex: 9 }}>
            <Iconify icon="solar:play-broken" width={24} />
          </Fab> 
        */}
        </Box>
      </Container>
    </Box>
  );
}
