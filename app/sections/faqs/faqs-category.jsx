import { m } from "framer-motion";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import ListItemButton from "@mui/material/ListItemButton";

import Image from "@/app/components/image";
import TextMaxLine from "@/app/components/text-max-line";
import Iconify from "@/app/components/iconify";
import { useBoolean } from "@/app/hooks/use-boolean";
import { useResponsive } from "@/app/hooks/use-responsive";

// ----------------------------------------------------------------------

const CATEGORIES = [
  {
    label: "Managing Your Airbnb Account",
    icon: "/assets/icons/faqs/ic_account.svg",
    href: "#",
  },
  {
    label: "Payment and Transactions",
    icon: "/assets/icons/faqs/ic_payment.svg",
    href: "#",
  },
  {
    label: "Check-In and Check-Out",
    icon: "/assets/icons/faqs/ic_delivery.svg",
    href: "#",
  },
  {
    label: "Issues with the Property",
    icon: "/assets/icons/faqs/ic_package.svg",
    href: "#",
  },
  {
    label: "Cancellation and Refund Policies",
    icon: "/assets/icons/faqs/ic_refund.svg",
    href: "#",
  },
  {
    label: "Host Guarantees and Assurances",
    icon: "/assets/icons/faqs/ic_assurances.svg",
    href: "#",
  },
];

// ----------------------------------------------------------------------

export default function FaqsCategory() {
  const mdUp = useResponsive("up", "md");

  const nav = useBoolean();

  if (!mdUp) {
    return (
      <>
        <AppBar position="absolute">
          <Toolbar>
            <Button
              startIcon={<Iconify icon="solar:list-bold" />}
              onClick={nav.onTrue}
              className="text-black"
            >
              Categories
            </Button>
          </Toolbar>
          <Divider />
        </AppBar>

        <Drawer open={nav.value} onClose={nav.onFalse}>
          <Box
            gap={1}
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            sx={{ p: 1 }}
          >
            {CATEGORIES.map((category) => (
              <CardMobile key={category.label} category={category} />
            ))}
          </Box>
        </Drawer>
      </>
    );
  }

  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        md: "repeat(3, 1fr)",
        lg: "repeat(6, 1fr)",
      }}
    >
      {CATEGORIES.map((category) => (
        <m.div key={category.label}>
          <CardDesktop category={category} />
        </m.div>
      ))}
    </Box>
  );
}

function CardDesktop({ category }) {
  const { label, icon } = category;

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: "unset",
        cursor: "pointer",
        textAlign: "center",
        "&:hover": {
          bgcolor: "background.paper",
          boxShadow: (theme) => theme.customShadows,
        },
      }}
    >
      <Image
        disabledEffect
        alt={icon}
        src={icon}
        sx={{ mb: 2, width: 80, height: 80, mx: "auto" }}
      />

      <TextMaxLine variant="subtitle2" persistent>
        {label}
      </TextMaxLine>
    </Paper>
  );
}

CardDesktop.propTypes = {
  category: PropTypes.object,
};

// ----------------------------------------------------------------------

function CardMobile({ category }) {
  const { label, icon } = category;

  return (
    <ListItemButton
      key={label}
      sx={{
        py: 2,
        maxWidth: 140,
        borderRadius: 1,
        textAlign: "center",
        alignItems: "center",
        typography: "subtitle2",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "background.neutral",
      }}
    >
      <Image alt={icon} src={icon} sx={{ width: 48, height: 48, mb: 1 }} />

      {category.label}
    </ListItemButton>
  );
}

CardMobile.propTypes = {
  category: PropTypes.object,
};
