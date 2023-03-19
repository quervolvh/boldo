export const rightLinks: typeOfHeaderItem[] = [
    {
        "title": "Product",
        "link": "/#"
    },
    {
        "title": "Services",
        "link": "/#"
    },
    {
        "title": "About",
        "link": "/#"
    }
];

export type typeOfHeaderItem = {
    title?: string,
    type?: string,
    link?: string,
    links?: { [key: string]: any }[],
    class?: string
};
