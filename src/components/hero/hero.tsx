// src/components/hero/Hero.tsx
import React, { useState, useEffect } from "react";
import NameLogo from "@/assets/name-logo.svg";
import { supabase } from "@/lib/supabase";
import blackhole from "@/assets/blackhole.webm";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [connectionStatus, setConnectionStatus] = useState<
    "checking" | "connected" | "error"
  >("checking");

  // Add connection verification on component mount
  useEffect(() => {
    async function verifyConnection() {
      console.log("Initializing Supabase connection check...");

      // Simply log that we're attempting to connect
      console.log("Attempting to connect to Supabase...", {
        timestamp: new Date().toISOString(),
      });

      try {
        // Test the connection by making a simple query
        const { data, error } = await supabase
          .from("email_list")
          .select("id")
          .limit(1);

        if (error) {
          console.error("Supabase connection test failed:", error);
          setConnectionStatus("error");
          return;
        }

        console.log("Supabase connection test successful:", {
          dataReceived: !!data,
          timestamp: new Date().toISOString(),
        });
        setConnectionStatus("connected");
      } catch (err) {
        console.error("Unexpected error during connection test:", err);
        setConnectionStatus("error");
      }
    }

    verifyConnection();
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail) || newEmail === "");
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }

    if (connectionStatus !== "connected") {
      alert("Database connection is not ready. Please try again in a moment.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log("Attempting to insert email:", email);

      // First check if email exists
      const { data: existingEmails, error: checkError } = await supabase
        .from("email_list")
        .select("email_id")
        .eq("email_id", email)
        .single();

      if (checkError && checkError.code !== "PGRST116") {
        // PGRST116 means no rows found
        console.error("Error checking for existing email:", checkError);
        throw new Error("Error checking subscription status");
      }

      if (existingEmails) {
        throw new Error("This email is already subscribed!");
      }

      // If email doesn't exist, insert it
      const { error: insertError } = await supabase.from("email_list").insert([
        {
          email_id: email,
          subscribed_at: new Date().toISOString(),
        },
      ]);

      if (insertError) {
        console.error("Insert error:", insertError);
        throw new Error(insertError.message);
      }

      console.log("Email successfully inserted");
      setSubmitStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      alert(
        error instanceof Error
          ? error.message
          : "Failed to subscribe. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="home"
      className="pb-40 w-full flex flex-col items-center justify-center"
    >
      <video
        src="/blackhole.webm"
        autoPlay
        loop
        muted
        className="opacity-50 -z-10 absolute inset-y-0 h-screen "
        // className="opacity-40 -z-10 "
      ></video>
      <div className="relative py-52">
        <h1 className="text-4xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 text-center text-balance m-0 md:m-10">
          Join the biggest hackathon in the midwest!
        </h1>
        <br />
      </div>
    </section>
  );
};

export default Hero;
