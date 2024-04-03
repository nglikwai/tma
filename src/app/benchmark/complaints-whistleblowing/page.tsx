"use server";
import BenchMarkLayout from "@/components/BenchMarkLayout";
import { NextPage } from "next";
import "./index.css";

const ComplaintsAndWhistleblowingPage: NextPage = async () => {
    return (
        <BenchMarkLayout title="Complaints & Whistleblowing">
            <div className="px-4 py-8 complaint-form">
                <form action="" className="text-[#666666]">
                    <fieldset>
                        <div>
                            <legend>Type of Report</legend>
                            <label htmlFor="complaints">
                                <input type="radio" id="complaints" name="reportType" value="Complaints" required />
                                Complaints
                            </label>

                            <label htmlFor="whistleblowing">
                                <input type="radio" id="whistleblowing" name="reportType" value="Whistleblowing" required />
                                Whistleblowing
                            </label>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div>
                            <legend>Recipient</legend>
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
                    </fieldset>

                    <label htmlFor="family-name">
                        <span> Family Name:</span> <input type="text" id="family-name" name="familyName" required />
                    </label>

                    <label htmlFor="given-name">
                        <span>Given Name:</span> <input type="text" id="given-name" name="givenName" required />
                    </label>

                    <label htmlFor="contact-number">
                        <span>Contact Number:</span>
                        <input type="tel" id="contact-number" name="contactNumber" required />
                    </label>

                    <label htmlFor="email">
                        <span>Email Address:</span>
                        <input type="email" id="email" name="email" required />
                    </label>

                    <label htmlFor="message" className="!items-start  ">
                        <span>Message:</span>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            maxLength={1000}
                            className="!h-[76px] !py-[5px] !px-3"
                        ></textarea>
                    </label>

                    <fieldset>
                        <div>
                            <legend>Verification Code</legend>

                            <label className="flex">
                                <div className="flex flex-col">
                                    <div className="gap-4">
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
                                    <div>
                                        <img src="/images/icon-verified.svg" alt="" />
                                        <input type="text" className="h-[54px] !py-0 !px-4" />
                                    </div>
                                </div>
                            </label>
                        </div>
                    </fieldset>
                    <div className="flex gap-[10px] justify-end form-button">
                        <button className="border-[#0053B0] border text-[#0053B0]">Cancel</button>
                        <button className="bg-[#0053B0] text-white">
                            <input type="submit" value="Submit" />
                        </button>
                    </div>
                </form>
            </div>
        </BenchMarkLayout>
    );
};
export default ComplaintsAndWhistleblowingPage;
