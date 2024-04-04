"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { ListItem, ListStyle } from "./LinkList";

type props = {
    item: ListItem;
    style?: ListStyle;
};
const LinkItem: FC<props> = ({ item, style }) => {
    const pathname = usePathname();

    const isCurrent = pathname.includes(item.id);

    return (
        <Link
            href={item.href}
            className="py-4"
            style={{
                borderBottom: isCurrent ? "2px solid" : "none",
                borderColor: isCurrent ? style?.activeColor || "#fff" : "transparent",
                color: isCurrent ? style?.activeColor || "#fff" : style?.inactiveColor || "#1890FF"
            }}
        >
            {item.key}
        </Link>
    );
};
export default LinkItem;
