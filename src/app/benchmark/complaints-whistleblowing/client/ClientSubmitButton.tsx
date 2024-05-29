"use client";

import { useState } from "react";

const SubmitButton = () => {
    const [isLoading, setIsLoading] = useState(false);

    return <input disabled={isLoading} className="ok-button disabled:opacity-45" type="submit" value="Submit" />;
};

export default SubmitButton;
