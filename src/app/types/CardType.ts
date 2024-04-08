import { StaticImageData } from "next/image";

export type CardDetail = {
    title: string;
    subtitle: string;
    path: string;
    img: StaticImageData;
    btnText: string;
    infoImage?: StaticImageData;
    info?: { title: string; text: string }[];
    mainInfo?: string;
    bg?: string;
    price?: string;
};