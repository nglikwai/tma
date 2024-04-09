"use server";
import { NextPage } from "next";
import ClientTextarea from "./ClientTextarea";
import "./index.css";

const ComplaintsAndWhistleblowingPage: NextPage = async () => {
    return (
        <div className="px-4 py-8 complaint-form">
            <form action="" className="text-[#666666]">
                <fieldset className="w-full">
                    <div className="w-full">
                        <legend>
                            Type of Report<span className="text-[#EF383F]">*</span>
                        </legend>
                        <div className="option">
                            <label htmlFor="complaints">
                                <input type="radio" id="complaints" name="reportType" value="Complaints" required />
                                Complaints
                            </label>
                            <label htmlFor="whistleblowing">
                                <input type="radio" id="whistleblowing" name="reportType" value="Whistleblowing" required />
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
                                <input type="radio" id="office" name="recipient" value="TMA Office" required />
                                TMA Office
                            </label>

                            <label htmlFor="secretariat">
                                <input type="radio" id="secretariat" name="recipient" value="TMA Secretariat" required />
                                TMA Secretariat
                            </label>

                            <label htmlFor="both">
                                <input type="radio" id="both" name="recipient" value="Both" required />
                                Both
                            </label>
                        </div>
                    </div>
                </fieldset>

                <label htmlFor="family-name">
                    <span className="title"> Family Name</span> <input type="text" id="family-name" name="familyName" required />
                </label>

                <label htmlFor="given-name">
                    <span className="title">Given Name</span> <input type="text" id="given-name" name="givenName" required />
                </label>

                <label htmlFor="contact-number">
                    <span>Contact Number</span>
                    <input type="tel" id="contact-number" name="contactNumber" required />
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

                <fieldset>
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
                                    <input type="text" className="h-[54px] !py-0 !px-4" />
                                </div>
                            </div>
                        </label>
                    </div>
                </fieldset>
                <div className="flex gap-[10px] justify-end ">
                    <button className="not-button">Cancel</button>

                    <input className="ok-button" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};
export default ComplaintsAndWhistleblowingPage;
