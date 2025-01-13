"use server";

export interface IActionState {
  success: string | null;
  error: string | null;
}

const sendMessage = async (): //   previousState: IActionState,
//   formData: FormData
Promise<IActionState> => {
  try {
    // const name = formData.get("name") as string;
    // const email = formData.get("email") as string;
    // const message = formData.get("message") as string;

    //temporary mock sending message response
    return { success: `Message sent successfully, Thank you !`, error: null };
  } catch (e: unknown) {
    if (typeof e === "object" && e !== null && "message" in e) {
      const error = e as { message: string };
      return {
        success: "error",
        error: error.message,
      };
    } else {
      return {
        success: "error",
        error: "An error occurred",
      };
    }
  }
};

export default sendMessage;
