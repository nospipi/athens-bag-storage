"use server";

import { getTranslations, setRequestLocale } from "next-intl/server";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export interface IActionState {
  success: string | null;
  error: string | null;
}

const sendMessage = async (
  previousState: IActionState,
  formData: FormData
): Promise<IActionState> => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value ?? "en";
  setRequestLocale(locale);
  const translations = await getTranslations();

  try {
    //throw new Error("Test error"); //testing error handling
    //await new Promise((resolve) => setTimeout(resolve, 5000)); //simulate network delay

    // const name = formData.get("name") as string;
    // const email = formData.get("email") as string;
    // const message = formData.get("message") as string;

    //temporarily mock successfull response until we implement user messaging service
    return { success: translations("message_sent_successfully"), error: null };
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
        error: translations("message_error"),
      };
    }
  }
};

export default sendMessage;
