import { info } from './info.js';

export const mycontact = [
    {
        id: '1ca',
        title: 'Email',
        icon: 'mail-outline',
        component: () => <a href={`mailto:${info.email}`} className="contact-link">{info.email}</a>
    },
    {
        id: '2cb',
        title: 'Phone',
        icon: 'phone-portrait-outline',
        component: () => <a href={`tel:${info.phone}`} className="contact-link">{info.phone}</a>
    },
    {
        id: '3cd',
        title: 'Nationalité',
        icon: 'flag-outline',
        component: () => <address>{info.nationality}</address>  
    },
    {
        id: '4ce',
        title: 'Location',
        icon: 'location-outline',
        component: () => <address>{info.address}</address>
    },
    
];
