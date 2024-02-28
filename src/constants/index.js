import imag1 from "../assets/images/product-images/product-image8.jpg";
import imag2 from "../assets/images/product-images/product-image4.jpg";
import imag3 from "../assets/images/product-images/product-image5.jpg";
import wImage1 from "../assets/images/product-images/product-image1.jpg";
import wImage2 from "../assets/images/product-images/product-image2.jpg";
import wImage3 from "../assets/images/product-images/product-image3.jpg";
import wImage4 from "../assets/images/product-images/product-image4.jpg";
import mImage1 from "../assets/images/product-images/product-image6.jpg";
import mImage2 from "../assets/images/product-images/product-image7.jpg";
import mImage3 from "../assets/images/product-images/product-image8.jpg";
import mImage4 from "../assets/images/product-images/product-image9.jpg";
import sImage1 from "../assets/images/product-images/product-image11.jpg";
import sImage2 from "../assets/images/product-images/product-image12.jpg";
import sImage3 from "../assets/images/product-images/product-image13.jpg";
import sImage4 from "../assets/images/product-images/product-image14.jpg";

export const footerLinks = [
  {
    id: 1,
    isOpen: false,
    title: "Quick Shop",
    links: [
      "About us",
      "Careers",
      "Privacy policy",
      "Terms & conditions",
      "My Account",
    ],
  },
  {
    id: 2,
    isOpen: false,
    title: "Customer Services",
    links: [
      "Request Personal Data",
      "FAQ's",
      "Contact Us",
      "Orders and Returns",
      "Support Center",
    ],
  },
  {
    id: 3,
    isOpen: false,
    title: "Information",
    links: ["Women", "Men", "Kids", "Sportswear", "Sale"],
  },
];

export const wishlist = [
  {
    image: imag1,
    product: "Minerva Dress Black",
    price: 165,
    status: "In stock",
    id: 10,
  },
  {
    image: imag2,
    product: "Flowery Dress",
    price: 150,
    status: "Out of stock",
    id: 20,
  },
  {
    image: imag3,
    product: "Woven Solid Midi Shirt Dress",
    price: 150,
    status: "In stock",
    id: 30,
  },
];

export const newArrivals = [
  {
    id: 1,
    name: "women",
    items: [
      {
        id: 1,
        img: wImage1,
        img2: "",
        name: "Edna Dress",
        price: 600,
        rating: 3,
      },
      {
        id: 2,
        img: wImage2,
        img2: "",
        name: "Elastic Wiast Dress",
        price: 748,
        rating: 5,
      },
      {
        id: 3,
        img: wImage3,
        img2: "",
        name: "3/4 Sleeve Kimono Dress",
        price: 550,
        rating: 3,
      },
      {
        id: 4,
        img: wImage4,
        img2: "",
        name: "Cape Dress",
        price: 788,
        rating: 3,
      },
    ],
  },
  {
    id: 2,
    name: "men",
    items: [
      {
        id: 1,
        img: mImage1,
        img2: "",
        name: "Zipper Jacket",
        price: 788,
        rating: 3,
      },
      {
        id: 2,
        img: mImage2,
        img2: "",
        name: "Zipper Jacket",
        price: 748,
        rating: 5,
      },
      {
        id: 3,
        img: mImage3,
        img2: "",
        name: "Workers Shirt Jacket",
        price: 238,
        rating: 4,
      },
      {
        id: 4,
        img: mImage4,
        img2: "",
        name: "Watercolor Sport Jacket in Brown/Blue",
        price: 788,
        rating: 3,
      },
    ],
  },
  {
    id: 3,
    name: "sale",
    items: [
      {
        id: 1,
        img: sImage1,
        img2: "",
        name: "Azur Bracelet in Blue Azurite",
        price: 168,
        rating: 3,
      },
      {
        id: 2,
        img: sImage2,
        img2: "",
        name: "Bi-Goutte Earrings",
        price: 58,
        rating: 5,
      },
      {
        id: 3,
        img: sImage3,
        img2: "",
        name: "Ashton Necklace",
        price: 228,
        rating: 4,
      },
      {
        id: 4,
        img: sImage4,
        img2: "",
        name: "Ara Ring",
        price: 198,
        rating: 3,
      },
    ],
  },
];
