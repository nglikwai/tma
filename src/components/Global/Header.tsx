"use client";

import { fetchUserRequest } from "@/redux/user";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserRequest());
    }, []);
    return <div>hi</div>;
};

export default Header;
