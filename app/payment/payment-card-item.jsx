import PropTypes from "prop-types";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Label from "@components/label";
import Iconify from "@components/iconify";
import CustomPopover, { usePopover } from "@components/custom-popover";
import { useTranslate } from "../locales";

// ----------------------------------------------------------------------

export default function PaymentCardItem({ card, sx, ...other }) {
  const popover = usePopover();
  const { t } = useTranslate();

  return (
    <>
      <Stack
        spacing={1}
        component={Paper}
        variant="outlined"
        sx={{
          p: 2.5,
          width: 1,
          position: "relative",
          ...sx,
        }}
        {...other}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Iconify
            icon={
              (card.cardType === "visa" && "logos:visa") || "logos:mastercard"
            }
            width={36}
          />

          {card.primary && <Label color="info">{t("Default")}</Label>}
        </Stack>

        <Typography variant="subtitle2">{card.cardNumber}</Typography>

        <IconButton
          onClick={popover.onOpen}
          sx={{
            top: 8,
            right: 8,
            position: "absolute",
          }}
        >
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </Stack>

      <CustomPopover open={popover.open} onClose={popover.onClose}>
        <MenuItem onClick={popover.onClose}>
          <Iconify icon="eva:star-fill" />
          {t("Set as primary")}
        </MenuItem>

        <MenuItem onClick={popover.onClose}>
          <Iconify icon="solar:pen-bold" />
          {t("Edit")}
        </MenuItem>

        <MenuItem onClick={popover.onClose} sx={{ color: "error.main" }}>
          <Iconify icon="solar:trash-bin-trash-bold" />
          {t("Delete")}
        </MenuItem>
      </CustomPopover>
    </>
  );
}

PaymentCardItem.propTypes = {
  card: PropTypes.object,
  sx: PropTypes.object,
};
