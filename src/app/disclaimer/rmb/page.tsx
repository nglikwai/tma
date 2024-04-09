"use server";
import TermAndCondition from "@/components/TermAndCondition";

export default async function DisclaimerPage() {
    return (
        // <Layout
        //     title="Terms and conditions for accessing this website and usage of the Rates"
        //     content={<p>Last revised: 9 December 2016</p>}
        //     steps={["Disclaimer"]}
        // >
        <TermAndCondition redirect="/benchmark/history/rmb-bond-indicative-quotes">
            <>
                <p>
                    1. ©2015 Treasury Markets Association, a company incorporated with limited liability. All rights reserved.
                    The Treasury Markets Association (TMA) and Refinitiv disclaim any and all liability arising from the use of
                    the TMA RMB Bond Indicative Quotes data published herein and do not guarantee that the information published
                    herein is accurate or complete. Specifically, the TMA RMB Bond Indicative Quotes data (“Refinitiv Data”) you
                    wish to access are quotes derived from data sourced automatically from third party providers (“original data”)
                    at 11:00am (HKT) and 4:00pm (HKT) on a specific day. TMA and Refinitiv have no control over the original data,
                    and do not warrant that the original data, and thus the Refinitiv Data, reflect the actual quotes by third
                    party providers. The information published herein may not be reproduced, transmitted, or distributed in whole
                    or part without the express written permission from both the TMA and Refinitiv. For any request to reproduce,
                    transmit, or distribute in whole or part of the TMA RMB Bond Indicative Quotes data, please contact Refinitiv
                    at BLRFIAsiaTC@refinitiv.com. Upon receiving your request, Refinitiv will coordinate with the TMA to grant
                    permission as appropriate. TMA and Refinitiv reserve the right to claim and take any actions or legal
                    proceedings for any unauthorised reproduction, transmission or distribution of the data, whether in whole or
                    in part.
                </p>
                <br />
                <p>
                    2. TMA, Refinitiv or their third party providers do not warrant that the provision of the Refinitiv Data will
                    be uninterrupted, error free, timely, complete or accurate, nor do they make any warranties as to the results
                    to be obtained from use of the data. Use of the Refinitiv Data and reliance thereon is at user’s sole risk. In
                    no event will TMA, Refinitiv or its third party providers be liable for any damages, including without
                    limitation direct or indirect, special, incidental, or consequential damages, losses or expenses arising in
                    connection with Refinitiv Data.
                </p>
                <br />
                <p>
                    3. Any enquiries regarding the quotes of individual bank can be directed to the TMA, Refinitiv, or individual
                    bank concerned as appropriate.
                </p>
                <br />
                <p>4. By viewing or downloading these data, you implicitly accept this disclaimer and agree to its terms.</p>
            </>
        </TermAndCondition>
        // </Layout>
    );
}
