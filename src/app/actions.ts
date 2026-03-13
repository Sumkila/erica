import type { ContactFormValues } from "@/lib/definitions";

export async function submitContactForm(data: ContactFormValues) {
  try {
    const response = await fetch("https://formspree.io/f/mbdzjjzo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return {
        success: true,
        message: "Your message has been sent successfully!",
      };
    } else {
      return {
        success: false,
        message: "There was an error sending your message. Please try again.",
      };
    }
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      message: "Unexpected error occurred. Please try again later.",
    };
  }
}

