"use server";
import TermAndCondition from "@/components/TermAndCondition";

export default async function DisclaimerPage() {
    return (
        <TermAndCondition redirect="/benchmark/marketdata">
            <>
                <p>
                    The content in this website (including but not limited to the benchmarks administrated by the Treasury Markets
                    Association (TMA) and reference rates made available by the TMA (collectively the “Rates”)) are provided with
                    delays for general information purposes only. No person should act or refrain from acting on the basis of any
                    information contained in this website and the Rates. The TMA and other data providers (including but not
                    limited to TMA-authorised contributors and affiliates to the Rates) do not accept any responsibility
                    whatsoever for any harm or loss arising from accessing or relying on information contained in this website and
                    the Rates.
                </p>
                <br />
                <p>
                    While the TMA will make all reasonable efforts to ensure the accuracy of the Rates and the content on this
                    website, the TMA and other data providers make no warranty, representation or undertaking, expressed or
                    implied by law or otherwise, in relation to the Rates and the content in this website, and expressly disclaim,
                    to the fullest extent permitted by applicable law, all liability in any form whatsoever with respect to any
                    errors or omissions, or losses caused by disruptions in the service or late publication of the Rates or
                    inaccuracy of the Rates or otherwise arising from the use of or reliance on the Rates and content in this
                    website. The TMA may engage third party contributors to provide information for the determination of the
                    Rates. Such third party contributors and affiliates provide information on an “as is” basis, and expressly
                    disclaim all liability for any loss or damage whatsoever incurred by any person arising out of or in
                    connection with its use of the Rates.
                </p>
                <br />
                <p>
                    In using the content of this website and the Rates, you must not reproduce, redistribute, modify, disseminate,
                    decompile, disassemble or reverse-engineer any information on this website and/or the Rates without the prior
                    written consent of the TMA. This Agreement is governed by, and construed in accordance with, Hong Kong law.
                </p>
                <br />
                <p>
                    The Hong Kong Association of Banks (HKAB) is the source and owner of the HKD Interest Settlement Rates, and
                    copyright of such rates remains with the HKAB. Other Rates in this website are owned by the TMA. Save for the
                    HKD Interest Settlement Rates, the copyright in the website, all material on this website, and the Rates are
                    owned by the TMA.
                </p>
                <br />
                <p>
                    Save for the HKAB and other TMA-authorised contributors of the Rates, no other party has a right to enforce
                    the terms herein under the Contracts (Rights of Third Parties) Ordinance.
                </p>
                <br />
                <p>
                    By using any content of this website and the Rates, you fully accept and agree to comply with all of the terms
                    and conditions set out herein. If you do not accept these terms and conditions, you should immediately stop
                    using this website and the Rates. It is your responsibility to review these terms and conditions periodically.
                    The TMA reserves the right to modify these terms and conditions from time to time without notice. After you
                    have agreed to these terms and conditions, your continued usage of the Rates and this website shall constitute
                    your acceptance of the prevailing version of terms and conditions set out by the TMA.
                </p>
            </>
        </TermAndCondition>
    );
}
