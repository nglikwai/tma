import { FC } from "react";
import LinkItem from "./LinkItem";

export type ListStyle = { activeColor: string; inactiveColor: string };
export type ListItem = { key: string; href: string; id: string };

type props = {
    list: ListItem[];
    style?: ListStyle;
};
const LinkList: FC<props> = ({ list, style }) => {
    return (
        <div className="flex gap-8">
            {list.map((item, index) => (
                <LinkItem key={index} item={item} style={style} />
            ))}
        </div>
    );
};

export default LinkList;
