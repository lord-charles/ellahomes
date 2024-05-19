import PropTypes from "prop-types";
import { useState, useCallback } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";

import { useBoolean } from "../hooks/use-boolean";

import Iconify from "../components/iconify";

import PaymentNewCardDialog from "./payment-new-card-dialog";
import Image from "next/image";

// ----------------------------------------------------------------------

const PAYMENT_OPTIONS = [
  {
    value: "Mpesa",
    label: "Mpesa",
  },
  // {
  //   value: "paypal",
  //   label: "Paypal",
  // },

  {
    value: "credit",
    label: "Credit / Debit Card",
  },
];

export default function PaymentMethods({
  userData,
  cards,
  getCards,
  phoneNumber,
  setPhoneNumber,
  method,
  setMethod,
  selectedCard,
  setSelectedCard,
}) {
  const newCard = useBoolean();
  const handleChangeMethod = useCallback((newValue) => {
    setMethod(newValue);
  }, []);

  return (
    <>
      <Stack spacing={5}>
        <Typography variant="h6">Payment Method</Typography>

        <Stack spacing={3}>
          {PAYMENT_OPTIONS.map((option) => (
            <OptionItem
              key={option.label}
              option={option}
              selected={method === option.value}
              isCredit={option.value === "credit" && method === "credit"}
              isMpesa={option.value === "Mpesa" && method === "Mpesa"}
              onOpen={newCard.onTrue}
              onClick={() => handleChangeMethod(option.value)}
              cards={cards}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          ))}
        </Stack>
      </Stack>

      <PaymentNewCardDialog
        open={newCard.value}
        onClose={newCard.onFalse}
        userData={userData}
        getCards={getCards}
      />
    </>
  );
}

// ----------------------------------------------------------------------

function OptionItem({
  option,
  selected,
  isCredit,
  isMpesa,
  cards,
  onOpen,
  phoneNumber,
  setPhoneNumber,
  selectedCard,
  setSelectedCard,
  ...other
}) {
  const { value, label } = option;
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setPhoneNumber(value);

    // Validate the phone number
    if (!/^0[17]\d{8}$/.test(value)) {
      setError("Phone number must be 10 digits and start with 07 or 01");
    } else {
      setError("");
    }
  };
  const handleChangeCard = (event) => {
    const { value } = event.target;
    const card = JSON.parse(value);
    setSelectedCard(card);
  };

  return (
    <Paper
      variant="outlined"
      key={value}
      sx={{
        p: 2.5,
        cursor: "pointer",
        ...(selected && {
          boxShadow: (theme) => `0 0 0 2px ${theme.palette.text.primary}`,
        }),
      }}
      {...other}
    >
      <ListItemText
        primary={
          <Stack direction="paypalrow" alignItems="center">
            <Iconify
              icon={
                selected
                  ? "eva:checkmark-circle-2-fill"
                  : "eva:radio-button-off-fill"
              }
              width={24}
              sx={{
                mr: 2,
                color: selected ? "primary.main" : "text.secondary",
              }}
            />

            <Box component="span" sx={{ flexGrow: 1 }}>
              {label}
            </Box>

            <Stack spacing={1} direction="row" alignItems="center">
              {value === "credit" && (
                <>
                  <Iconify icon="logos:mastercard" width={24} />,
                  <Iconify icon="logos:visa" width={24} />
                </>
              )}
              {value === "paypal" && <Iconify icon="logos:paypal" width={24} />}
              {value === "Mpesa" && (
                <Image
                  src="/assets/logo/mpesa.png"
                  alt="image"
                  width={60}
                  height={40}
                />
              )}
              {value === "cash" && (
                <Iconify icon="solar:wad-of-money-bold" width={24} />
              )}
            </Stack>
          </Stack>
        }
        primaryTypographyProps={{ typography: "subtitle2" }}
      />

      {isCredit && (
        <Stack
          spacing={2.5}
          alignItems="flex-end"
          sx={{
            pt: 2.5,
          }}
        >
          <TextField
            select
            fullWidth
            label="Cards"
            onChange={handleChangeCard}
            SelectProps={{ native: true }}
          >
            <option value="" disabled>
              Select a card
            </option>
            {cards.map((card) => (
              <option
                key={card._id}
                value={JSON.stringify({
                  cardNumber: card.cardNumber,
                  cvv: card.cvv,
                })}
              >
                {card.cardNumber} {card.cardHolder}
              </option>
            ))}
          </TextField>
          <Button
            size="small"
            color="primary"
            startIcon={<Iconify icon="mingcute:add-line" />}
            onClick={onOpen}
          >
            Add New Card
          </Button>
        </Stack>
      )}
      {isMpesa && (
        <Stack
          spacing={2.5}
          alignItems="flex-end"
          sx={{
            pt: 2.5,
          }}
        >
          <TextField
            fullWidth
            label="Phone Number"
            value={phoneNumber}
            onChange={handleChange}
            error={!!error}
            helperText={error}
          />
        </Stack>
      )}
    </Paper>
  );
}

OptionItem.propTypes = {
  isCredit: PropTypes.bool,
  onOpen: PropTypes.func,
  option: PropTypes.object,
  selected: PropTypes.bool,
};
