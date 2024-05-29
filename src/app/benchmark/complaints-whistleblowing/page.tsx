"use server";
import { sumbitComplaint } from "@/service/complaint.service";
import { NextPage } from "next";
import { redirect } from "next/navigation";
import ClientTextarea from "./client/ClientTextarea";
import SubmitButton from "./client/SubmitButton";
import "./index.css";

const ComplaintsAndWhistleblowingPage: NextPage = async () => {
    const submitForm = async (formData: FormData) => {
        "use server";

        const data = {
            messageType: formData.get("messageType"),
            recipient: formData.get("recipient"),
            lastName: formData.get("lastName"),
            firstName: formData.get("firstName"),
            contactNumber: formData.get("contactNumber"),
            email: formData.get("email"),
            message: formData.get("message"),
            // captcha: formData.get("captcha")
            captcha: "32768"
        };

        sumbitComplaint(data);
        // if (res.status === 201) {
        //     redirect("?submit=success");
        // }
        redirect("?submit=success");
    };

    return (
        <div className="px-4 py-8 complaint-form">
            <form action={submitForm} className="text-[#666666]">
                <fieldset className="w-full">
                    <div className="w-full">
                        <legend>
                            Type of Report<span className="text-[#EF383F]">*</span>
                        </legend>
                        <div className="option">
                            <label htmlFor="complaints">
                                <input type="radio" id="complaints" name="messageType" value="complaints" required />
                                Complaints
                            </label>
                            <label htmlFor="whistleblowing">
                                <input type="radio" id="whistleblowing" name="messageType" value="whistleblowing" required />
                                Whistleblowing
                            </label>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <div>
                        <legend>
                            Recipient<span className="text-[#EF383F]">*</span>
                        </legend>
                        <div className="option">
                            <label htmlFor="office">
                                <input type="radio" id="office" name="recipient" value="tma_office" required />
                                TMA Office
                            </label>

                            <label htmlFor="secretariat">
                                <input type="radio" id="secretariat" name="recipient" value="tma_secretariat" required />
                                TMA Secretariat
                            </label>

                            <label htmlFor="both">
                                <input type="radio" id="both" name="recipient" value="all" required />
                                Both
                            </label>
                        </div>
                    </div>
                </fieldset>

                <label htmlFor="family-name">
                    <span className="title"> Family Name</span> <input type="text" id="family-name" name="lastName" />
                </label>

                <label htmlFor="given-name">
                    <span className="title">Given Name</span> <input type="text" id="given-name" name="firstName" />
                </label>

                <label htmlFor="contact-number">
                    <span>Contact Number</span>
                    <input type="tel" id="contact-number" name="contactNumber" />
                </label>

                <label htmlFor="email">
                    <span>
                        Email Address<i className="text-[#EF383F]">*</i>
                    </span>
                    <input type="email" id="email" name="email" required />
                </label>

                <label htmlFor="message" className="!items-start  ">
                    <span>
                        Message<i className="text-[#EF383F]">*</i>
                    </span>
                    <ClientTextarea />
                </label>

                {/* <fieldset>
                    <div>
                        <legend>
                            Verification Code<i className="text-[#EF383F]">*</i>
                        </legend>

                        <label className="flex">
                            <div className="flex flex-col gap-4">
                                <div className="gap-4 flex">
                                    <img src="/images/CAPTCHA.svg" alt="" />
                                    <div className="flex flex-col gap-4">
                                        <button>
                                            <img src="/images/icon-volume.svg" alt="" />
                                        </button>
                                        <button>
                                            <img src="/images/icon-refresh.svg" alt="" />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex gap-[19px]">
                                    <img src="/images/icon-verified.svg" alt="" />
                                    <input type="text" name="captcha" className="h-[54px] !py-0 !px-4" />
                                </div>
                            </div>
                        </label>
                    </div>
                </fieldset> */}
                <div className="flex gap-[10px] justify-end ">
                    <button className="not-button">Cancel</button>
                    <SubmitButton />
                </div>
            </form>
        </div>
    );
};
export default ComplaintsAndWhistleblowingPage;
