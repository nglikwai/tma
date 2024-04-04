"use client";
import { usePathname, useRouter } from "next/navigation";
import { FC, useRef, useState } from "react";
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

    console.log("checked", pathname);
    const router = useRouter();
    const ulRef = useRef<HTMLUListElement>(null);

    const handleChecked = (e: any, index: number) => {
        setChecked(index);
    };

    const translateDistance = menu.slice(0, checked).reduce((a, b: any) => a + b.length + 32, 0);

    const handleRouteChange = (href: string) => () => {
        setTimeout(() => {
            router.push(href);
        }, 100);
    };
    return (
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

            <ul ref={ulRef} className="gap-8">
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
                            <span>{item.key}</span>
                        </label>
                    </li>
                ))}
            </ul>
            <div
                className="slider"
                style={{
                    width: menu[checked]?.length,
                    transform: `translateX(${translateDistance}px)`
                }}
            >
                <div className="indicator" style={{ background: style?.activeColor || "#FFF" }}></div>
            </div>
        </div>
    );
};

export default BenchmarkMenu;
