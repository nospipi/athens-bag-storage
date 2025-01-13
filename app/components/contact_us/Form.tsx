"use client";

import { useActionState, useEffect } from "react";
import sendMessage, {
  IActionState,
} from "@/app/server/server_actions/sendMessage";
import TextField from "@mui/material/TextField";
import toast from "react-hot-toast";

//---------------------------------------------------------

const Form = () => {
  const [state, action, isPending] = useActionState(sendMessage, {
    success: null,
    error: null,
  } as IActionState);

  useEffect(() => {
    toast.dismiss();

    if (isPending) {
      toast.dismiss();
      toast.loading("Sending message...");
    }
    if (state.success) {
      toast.dismiss();
      toast.success(state.success);
    }
    if (state.error) {
      toast.dismiss();
      toast.error(state.error);
    }
  }, [state.success, state.error, isPending]);

  return (
    <form
      action={action}
      className="bg-slate-100/30 p-4 rounded-lg flex flex-col shadow-lg h-full w-full"
    >
      <h1>Contact Us</h1>
      <TextField
        name="name"
        label="Name"
        variant="filled"
        fullWidth
        margin="dense"
        required
      />
      <TextField
        name="email"
        type="email"
        label="Email"
        variant="filled"
        fullWidth
        margin="dense"
        required
      />
      <TextField
        name="message"
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
      <button className="bg-yellow-500 font-semibold py-3 px-5 rounded-full shadow-lg transition transform hover:scale-105 self-start flex flex-row gap-4 items-center mt-3">
        Submit Form
      </button>
    </form>
  );
};

export default Form;
