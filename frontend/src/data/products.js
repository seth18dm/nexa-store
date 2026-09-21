import airsoundPro from "../assets/products/airsound-pro.png";
import mechakey75 from "../assets/products/mechakey-75.png";
import pulseX1 from "../assets/products/pulse-x1.png";
import charge65 from "../assets/products/charge-65.png";
import soundpodMini from "../assets/products/soundpod-mini.png";
import deskhub7 from "../assets/products/deskhub-7.png";

export const products = [
    {
        id: 1,
        name: "AirSound Pro",
        category: "AUDIO",
        description:
            "Premium wireless headphones with active noise cancellation.",
        price: "₹2,999",
        badge: "BESTSELLER",
        image: airsoundPro,
        stock: 24,
        details:
            "Wireless noise-cancelling headphones designed for focused work, travel and immersive everyday listening."
    },
    {
        id: 2,
        name: "MechaKey 75",
        category: "ACCESSORIES",
        description:
            "Compact mechanical keyboard built for productivity and gaming.",
        price: "₹3,499",
        badge: "NEW",
        image: mechakey75,
        stock: 18,
        details:
            "A compact mechanical keyboard with a practical layout, comfortable typing experience and a modern design."
    },
    {
        id: 3,
        name: "Pulse X1",
        category: "WEARABLES",
        description:
            "A modern smartwatch designed for everyday convenience.",
        price: "₹4,999",
        badge: "POPULAR",
        image: pulseX1,
        stock: 12,
        details:
            "A modern smartwatch for everyday activity tracking, notifications and convenient daily use."
    },
    {
        id: 4,
        name: "NEXA Charge 65",
        category: "ACCESSORIES",
        description:
            "Fast and compact USB-C charger for your everyday devices.",
        price: "₹1,499",
        badge: "NEW",
        image: charge65,
        stock: 30,
        details:
            "A compact 65W USB-C charger designed for fast charging and convenient everyday use."
    },
    {
        id: 5,
        name: "SoundPod Mini",
        category: "AUDIO",
        description:
            "Portable wireless speaker with clear sound and compact design.",
        price: "₹1,999",
        badge: "POPULAR",
        image: soundpodMini,
        stock: 20,
        details:
            "A compact wireless speaker designed to deliver convenient portable audio at home or on the go."
    },
    {
        id: 6,
        name: "DeskHub 7",
        category: "WORK TECH",
        description:
            "A practical USB-C hub for connecting your everyday devices.",
        price: "₹2,299",
        badge: "NEW",
        image: deskhub7,
        stock: 15,
        details:
            "A practical USB-C hub for connecting multiple everyday devices while keeping your workspace organized."
    }
];