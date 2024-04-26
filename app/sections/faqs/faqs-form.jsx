import { m } from "framer-motion";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { MotionViewport, varFade } from "@/app/components/animate";

// import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function FaqsForm() {
  return (
    <Stack spacing={3}>
      <m.div>
        <Typography variant="h4">{`Haven't found the right help?`}</Typography>
      </m.div>

      <m.div>
        <TextField fullWidth label="Name" />
      </m.div>

      <m.div>
        <TextField fullWidth label="Email" />
      </m.div>

      <m.div>
        <TextField fullWidth label="Subject" />
      </m.div>

      <m.div>
        <TextField
          fullWidth
          label="Enter your message here."
          multiline
          rows={4}
        />
      </m.div>

      <m.div>
        <Button size="large" variant="contained" className="bg-green-500">
          Submit Now
        </Button>
      </m.div>
    </Stack>
  );
}
