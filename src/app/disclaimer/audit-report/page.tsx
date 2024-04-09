"use server";
import TermAndCondition from "@/components/TermAndCondition";

export default async function DisclaimerPage() {
    return (
        // <Layout
        //     title="Third Party Release Agreement"
        //     content={<p>Last revised: 21 December 2022</p>}
        //     steps={["Disclaimer"]}
        // >
        <TermAndCondition redirect="/benchmark/history/rmb-bond-indicative-quotes">
            <>
                <p>
                    We understand that Ernst & Young (“EY”) was engaged by the Treasury Markets Association (the “Association”) to
                    perform an examination in respect of the Association’s statement of compliance with the Principles for
                    Financial Benchmarks published by the International Organisation of Securities Commissions dated July 2013
                    (the “IOSCO Principles”) as at 30 September 2022 in accordance with International Standard on Assurance
                    Engagements 3000 (Revised), Assurance Engagements Other than Audits or Reviews of Historical Financial
                    Information (the “Services”).
                </p>
                <br />
                <p>
                    EY has been requested by the Association to provide you, the recipient company, firm or organisation
                    (“Recipient”), with a copy of the report we prepared, on their instructions, on the Association’s statement of
                    compliance with the IOSCO Principles with respect to its administration of HKD Interest Settlement Rates (“HKD
                    HIBOR”), CNH Hong Kong Interbank Offered Rate (“CNH HIBOR”), HKD Overnight Index Average (“HONIA”), USD/HKD
                    Spot Rate and USD/CNY(HK) Spot Rate (the “Report”).
                </p>
                <br />
                <p>
                    We, as Recipient, understand that (1) the Services were undertaken, and the Report was prepared, solely for
                    the benefit and internal use of the Association and its Executive Board for the purposes specified in the
                    engagement, and are not intended for any other purpose; (2) EY has made no representation or warranty to us as
                    to the sufficiency of the Services or otherwise with respect to the Report; (3) had EY been engaged to perform
                    additional services or procedures, other matters might have come to EY’s attention that would have been
                    addressed in the Report; and (4) EY has not been engaged to act, and has not acted, as advisor to any other
                    party. Accordingly, EY makes no representations as to the appropriateness, accuracy or completeness of the
                    Report for the Recipient’s or any other party's purposes. Further, we understand that the Report was concluded
                    on [report date], and EY has not undertaken any further work since that time. Material events may therefore
                    have occurred which will not be reflected in the Report.
                </p>
                <br />
                <p>
                    The Services do not constitute (1) an audit, review or examination of financial statements in accordance with
                    generally accepted auditing standards, (2) an examination of prospective financial statements in accordance
                    with applicable professional standards, or (3) procedures to detect fraud or illegal acts. The Services do not
                    include any procedures to test compliance with the laws or regulations of any jurisdiction.
                </p>
                <br />
                <p>
                    We further acknowledge and agree that (1) we do not acquire any rights against EY, any other member firm of
                    the global EY network, or any of their respective affiliates, partners, agents, representatives or employees
                    (collectively, the “EY Parties”), and EY assumes no duty or liability to us, in connection with the Services
                    or our access to the Report; (2) we may not rely on the Report; (3) we will not contend that any provisions of
                    applicable laws could invalidate or avoid any provision of this agreement; (4) the Report is confidential and
                    must be maintained in the strictest confidence and may not be disclosed by Recipient to any other party or
                    used by any other party or relied upon by any other party without the prior written consent of the EY; and (5)
                    no duty of care is owed by EY to any Recipient in respect of any use that the Recipient may make of the
                    Report. No reliance may be placed upon the Report or any of its contents by any Recipient of the Report for
                    any purpose. Recipient must make and rely on their own enquiries in relation to the issues to which the Report
                    relates, the contents of the Report and all matters arising from or relating to or in any way connected with
                    the Report or its contents.
                </p>
                <br />
                <p>
                    In addition, except (1) when compelled by legal process (of which we shall promptly inform EY and tender to
                    EY, if EY so elects, the defense thereof), or (2) with EY’s prior written consent, we will not disclose,
                    orally or in writing, the Report or any portion thereof, or make any reference to EY in connection therewith,
                    in any public document or to any third party. To the extent we are permitted to disclose the Report as set
                    forth herein, we shall disclose it only in the original, complete and unaltered form provided by EY, with all
                    restrictive legends and other agreements intact, and we will advise the party to whom we disclose the Report
                    that it may not rely on, use, circulate, quote or otherwise refer to the Report for any purpose.
                </p>
                <br />
                <p>
                    We, the Recipient, (for ourselves and our successors and assigns) hereby release each of the EY Parties from
                    any and all claims or causes of action that we have, or hereafter may or shall have, against them in
                    connection with the Report, our access to the Report or EY’s performance of the Services. We shall indemnify,
                    defend and hold harmless the EY Parties from and against all claims, liabilities, losses and expenses suffered
                    or incurred by any of them arising out of or in connection with (1) any breach of this agreement by us or our
                    representatives; and/or (2) any use or disclosure of, or reliance on, the Report by any other party that
                    obtains access to the Report, directly or indirectly, from or through us or at our request.
                </p>
                <br />
                <p>
                    This agreement shall be governed by, and construed in accordance with, the laws of Hong Kong applicable to
                    agreements made and fully to be performed therein by residents thereof.
                </p>
                <br />
                <p>
                    Except as expressly provided for in this agreement, a person or entity that is not a party to this agreement
                    shall have no right to enforce any of its terms under the Contract (Rights of Third Parties) Ordinance (Cap.
                    623, Laws of Hong Kong). Where any clause of this agreement entitles any third party to enforce any terms of
                    this agreement under the Ordinance, the parties reserve the right to vary that term or any other terms of this
                    agreement without the consent of that third party.
                </p>
                <br />
                <p>
                    If you wish access to the Report, you should confirm your acceptance of, and agreement to, the terms of this
                    agreement by clicking the “Accept” button below.
                </p>
                <br />
                <p>
                    By clicking on the “I ACCEPT” button below, you signify that you and the Recipient agree to be bound by these
                    terms and conditions. Such acceptance and agreement shall be deemed to be as effective as a written signature
                    by you, on behalf of yourself and the Recipient, and this agreement shall be deemed to satisfy any writings
                    requirements of any applicable law, notwithstanding that the agreement is written and accepted electronically.
                    Distribution or disclosure of any portion of the Report or any information or advice contained therein is
                    prohibited.
                </p>
            </>
        </TermAndCondition>
        // </Layout>
    );
}
