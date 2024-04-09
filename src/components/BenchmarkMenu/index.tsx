"use client";
import { usePathname, useRouter } from "next/navigation";
import { FC, useEffect, useRef, useState } from "react";
import { ListStyle } from "../LinkList";
import "./index.css";

type props = {
    menu: any[];
    style?: ListStyle;
    id: string;
};
const BenchmarkMenu: FC<props> = ({ menu, style, id }) => {
    const pathname = usePathname();

    const [checked, setChecked] = useState(menu.findIndex(item => pathname.includes(item.id)));
    const [screenWidth, setScreenWidth] = useState(1000);

    const router = useRouter();
    const ulRef = useRef<HTMLUListElement>(null);

    const handleChecked = (e: any, index: number) => {
        setChecked(index);
    };

    // const translateDistance =
    //     screenWidth < SCREEN_SIZE.sm
    //         ? `${100 * checked}%`
    //         : `${menu.slice(0, checked).reduce((a, b: any) => a + b.length + 32, 0)}px`;

    const translateDistance = `${menu.slice(0, checked).reduce((a, b: any) => a + b.length + 32, 0)}px`;
    const handleRouteChange = (href: string) => () => {
        router.push(href);
    };

    useEffect(() => {
        setScreenWidth(window.innerWidth);
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="sm:max-w-[100vw] sm:overflow-x-scroll">
            <div className="tabs inline-block">
                {menu?.map((item, index) => (
                    <input
                        type="radio"
                        id={`tab${id}${index + 1}`}
                        name="tab-control"
                        onChange={e => handleChecked(e, index)}
                        key={item.id}
                        checked={index === checked}
                    />
                ))}

                <ul ref={ulRef} className="">
                    {menu?.map((item, index) => (
                        <li key={item.id}>
                            <label
                                htmlFor={`tab${id}${index + 1}`}
                                role="button"
                                style={{
                                    color: index === checked ? style?.activeColor || "#fff" : style?.inactiveColor || "#1890FF"
                                }}
                                onClick={handleRouteChange(item.href)}
                            >
                                <span className={`${style?.hoverColor ? style.hoverColor : "hover:text-[#62B4FF]"}`}>
                                    {item.key}
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>
                <div
                    // className="slider sm:!w-1/3"
                    className="slider"
                    style={{
                        width: menu[checked]?.length,
                        transform: `translateX(${translateDistance})`
                    }}
                >
                    <div className="indicator" style={{ background: style?.activeColor || "#FFF" }}></div>
                </div>
            </div>
        </div>
    );
};

export default BenchmarkMenu;
