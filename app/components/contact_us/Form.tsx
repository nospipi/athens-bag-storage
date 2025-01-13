"use client";

import { useActionState, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

//---------------------------------------------------------

const Form = () => {
  //   const [state, action, isPending] = useActionState(createTransaction, {
  //     success: null,
  //     error: null,
  //   } as IActionState);

  //   useEffect(() => {
  //     toast.dismiss();

  //     if (isPending) {
  //       toast.dismiss();
  //       toast.loading("Creating Transaction...");
  //     }
  //     if (state.success) {
  //       toast.dismiss();
  //       toast.success(state.success);
  //       router.back();
  //     }
  //     if (state.error) {
  //       toast.dismiss();
  //       toast.error(state.error);
  //     }
  //   }, [state.success, state.error, isPending, router]);

  return (
    <form className="bg-slate-100/30 p-4 rounded-lg flex flex-col shadow-lg h-full w-full">
      <h1>Contact Us</h1>
      <TextField
        label="Name"
        variant="filled"
        fullWidth
        margin="dense"
        required
      />
      <TextField
        label="Your Message"
        multiline
        variant="filled"
        fullWidth
        margin="dense"
        required
        slotProps={{
          input: {
            sx: {
              flex: 1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            },
          },
        }}
        sx={{
          flex: 1,
        }}
      />
      <button className="bg-blue-500 text-gray-900 font-semibold py-3 px-5 rounded-full shadow-lg transition transform hover:scale-105 self-start text-white flex flex-row gap-4 items-center mt-3">
        Submit Form
      </button>
    </form>
  );
};

export default Form;
