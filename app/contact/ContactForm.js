import { m } from "framer-motion";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslate } from "../locales";
import { MotionViewport, varFade } from "../components/animate";

// ----------------------------------------------------------------------

export default function ContactForm() {
  const { t } = useTranslate();

  return (
    <Stack spacing={5} className="px-5 lg:mx-[320px]">
      <div>
        <Typography
          variant="h3"
          className="text-black text-[30px] font-semibold pt-5"
        >
          {t("Feel free to contact us.")} <br />
          {t("We will be glad to hear from you.")}
        </Typography>
      </div>
      <div className="flex xxxs:flex-col md:flex-row w-full md:space-x-[50px] xxxs:space-y-[50px] items-center">
        <div className="w-full">
          <Stack spacing={3}>
            <div>
              <TextField fullWidth label={t("Name")} />
            </div>

            <div>
              <TextField fullWidth label={t("Email")} />
            </div>

            <div>
              <TextField fullWidth label={t("Subject")} />
            </div>

            <div>
              <TextField
                fullWidth
                label={t("Enter your message here.")}
                multiline
                rows={4}
              />
            </div>
          </Stack>

          <div variants={varFade().inUp}>
            <Button
              size="large"
              variant="contained"
              className="bg-green-500 p-2 my-4"
            >
              {t("Submit Now")}
            </Button>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7960.005432842018!2d39.727593!3d-4.019839!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMDEnMTEuNCJTIDM5wrA0Myc0OC43IkU!5e0!3m2!1sen!2ske!4v1714130252042!5m2!1sen!2ske"
          width="1152"
          height="648"
          class="w-full h-[440px] border-0 relative top-[-40px]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Stack>
  );
}
