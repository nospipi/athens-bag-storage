"use client";

import { useActionState, useEffect } from "react";
import { useTranslations } from "next-intl";
import sendMessage, {
  IActionState,
} from "@/app/server/server_actions/sendMessage";
import TextField from "@mui/material/TextField";
import { useToast } from "@/hooks/use-toast";
import { RotatingLines } from "react-loader-spinner";

//---------------------------------------------------------

const Form = () => {
  const { toast } = useToast();
  const translations = useTranslations();
  const [state, action, isPending] = useActionState(sendMessage, {
    success: null,
    error: null,
  } as IActionState);

  useEffect(() => {
    if (state.success) {
      toast({
        title: state.success,
      });
    }
    if (state.error) {
      toast({
        variant: "destructive",
        title: state.error,
      });
    }
  }, [state.success, state.error]);

  return (
    <form
      action={action}
      className="bg-slate-100/30 p-4 flex flex-col shadow-lg h-full w-full"
      style={{
        borderRadius: "20px",
      }}
    >
      <h1>{translations("send_us_a_message")}</h1>
      <TextField
        name="name"
        label={translations("name")}
        variant="filled"
        fullWidth
        margin="dense"
        required
      />
      <TextField
        name="email"
        type="email"
        label={translations("email")}
        variant="filled"
        fullWidth
        margin="dense"
        required
      />
      <TextField
        name="message"
        label={translations("your_message")}
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
      <div className="flex flex-row items-center justify-between mt-3">
        <button
          className="bg-yellow-500 font-semibold py-3 px-5 rounded-full shadow-lg transition transform hover:scale-105 self-start flex flex-row gap-4 items-center disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
          type="submit"
          disabled={isPending}
        >
          {translations("submit_message")}
        </button>
        {isPending && <RotatingLines width="16" strokeColor="black" />}
      </div>
    </form>
  );
};

export default Form;
