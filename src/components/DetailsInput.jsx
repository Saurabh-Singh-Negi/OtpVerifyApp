import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CgSpinner } from "react-icons/cg";
import "../index.css";
import OtpInput from "react-otp-input";

const DetailsInput = () => {
  const [ph, setPh] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSend = () => {
    setShowOTP(true);
  };

  const handleOtpVerify = () => {
    setLoading(!loading);
  };

  return (
    <>
      <div className="w-full h-[100vh] bg-gradient-to-r from-[#2FC597] via-[#25ABA4] to-[#1B92B0] flex items-center justify-center">
        <div className="w-[90%] h-[50%] md:w-[80%] lg:w-[50%] bg-white rounded-lg ">
          {!showOTP ? (
            <div className="flex flex-col gap-4 justify-center h-full items-center">
              <p className="text-center text-3xl font-bold">
                Enter your phone number
              </p>
              <div>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
              </div>
              <div>
                <button
                  onClick={handleSend}
                  className="bg-gradient-to-r from-[#1B92B0] to-[#2FC597]  py-2 px-8 rounded-md font-medium text-white"
                >
                  Send OTP
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col  gap-4 justify-center h-full items-center">
              <p className="text-center text-3xl font-bold">OTP Verification</p>
              <p>Enter the verification code sent to +{ph}</p>
              <p className="">Type 6 digit security code</p>
              <div>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderInput={(props) => <input {...props} />}
                  containerStyle={{ display: "flex", gap: "10px" }}
                  inputStyle={{
                    border: "1px solid black",
                    height: "40px",
                    width: "40px",
                    backgroundColor: "rgba(55, 200, 155, 0.1)",
                  }}
                />
              </div>
              <div>
                <button
                  onClick={handleOtpVerify}
                  className="flex gap-2 items-center bg-gradient-to-r from-[#1B92B0] to-[#2FC597]  py-2 px-8 rounded-md font-medium text-white"
                >
                  {loading && <CgSpinner className="animate-spin" />}
                  Verify OTP
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailsInput;
