import { Casas, MenuItem } from "../interfaces/interfaces";

export const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102'
    },

    {
        name: 'Switch Screen',
        icon: 'toggle',
        component: 'Switch'
    },
    {
        name: 'Alert Screen',
        icon: 'alert-circle',
        component: 'Alert'
    },
    {
        name: 'TextInput Screen',
        icon: 'text',
        component: 'TextInput'
    },
    {
        name: 'Pull to refresh Screen',
        icon: 'refresh-outline',
        component: 'Pull'
    },
    {
        name: 'Section List Screen',
        icon: 'list-outline',
        component: 'List'
    },

    {
        name: 'Modal Screen',
        icon: 'copy-outline',
        component: 'Modal'
    },
    {
        name: 'Infinite Scroll Screen',
        icon: 'download-outline',
        component: 'Scroll'
    },
    {
        name: 'Slide Screen',
        icon: 'flower-outline',
        component: 'Slide'
    },
    {
        name: 'Theme Screen',
        icon: 'flask-outline',
        component: 'Theme'
    },

]



export const casas: Casas[] = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin",]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman",]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama",]
    }
];