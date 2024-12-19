
import blog_img_1 from "@/assets/img/post_1.jpg";
import blog_img_2 from "@/assets/img/post_2.jpg";
import blog_img_3 from "@/assets/img/post_3.jpg"; 
import { StaticImageData } from "next/image";
import blog_detaisl_img_1 from "@/assets/img/blog_detals_banner.jpg";

interface DataType {
  id: number;
  main_img: StaticImageData;
  title: string;
  des: string;
  slug: string;
  category: string;
}


const blog_data: DataType[] = [
  {
    id: 1,
    main_img: blog_detaisl_img_1,
    title: `How Can a Level 5 Diploma in Business Management Advance Your Career in the UAE?`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
    slug: 'diploma-in-it-engineering-uae',
    category:'Business Management',
  },
  {
    id: 2,
    main_img: blog_img_2,
    title: `How a Creative Agency Can Help?`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
    slug: 'diploma-in-it-engineering-dsfadfuae',
    category:'Business Management',
  },
  // {
  //   id: 3,
  //   img: blog_img_3,
  //   title: `Maximizing Your Marketing Budget`,
  //   des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
  //   slug: 'diploma-in-it-enginefdsaering-uae',
  // },
  // {
  //   id: 4,
  //   img: blog_img_1,
  //   title: `Reasons Business Needs a Agency`,
  //   des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
  //   slug: 'diplofdsafma-in-it-engineering-uae',
  // },
]

export default blog_data

// import blog_img_1 from '@/assets/img/post_1.jpg';
// import blog_img_2 from '@/assets/img/post_2.jpg';

// const blogData = [
//   {
//     id: 1,
//     slug: 'diploma-in-it-engineering-uae',
//     img: blog_img_1,
//     title: '6 Reasons Why Earning a Diploma in IT Engineering in the UAE Is a Best Career Choice',
//     des: 'The art of creative thinking could be a blog that explores the various ways in which people.',
//     info: [
//       { title: 'Posted By', des: 'Andrew Nikulas' },
//       { title: 'Published Date', des: '02 - Dec - 2023' },
//       { title: 'Views', des: '2 Min Read' },
//     ],
//     des_1:
//       'Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence.',
//     writer: 'Andrew Jackson',
//     reviews:
//       '“Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence.”',
//   },
//   {
//     id: 2,
//     slug: 'reasons-business-needs-agency',
//     img: blog_img_2,
//     title: 'Reasons Business Needs an Agency',
//     des: 'The art of creative thinking could be a blog that explores the various ways in which people.',
//     info: [
//       { title: 'Posted By', des: 'Jane Doe' },
//       { title: 'Published Date', des: '10 - Dec - 2023' },
//       { title: 'Views', des: '3 Min Read' },
//     ],
//     des_1:
//       'Businesses can benefit greatly from creative agencies. They offer strategic insights and marketing expertise.',
//     writer: 'Jane Smith',
//     reviews:
//       '“Creative agencies transform businesses through innovative strategies and marketing techniques.”',
//   },
//   // Add other blogs
// ];
// export default blogData


// import blog_img_1 from "@/assets/img/post_1.jpg";
// import blog_img_2 from "@/assets/img/post_2.jpg";
// import blog_img_3 from "@/assets/img/post_3.jpg"; 
// import { StaticImageData } from "next/image";


// interface DataType {
//   id: number;
//   img: StaticImageData;
//   title: string;
//   des: string;
// }


// const blog_data: DataType[] = [
//   {
//     id: 1,
//     img: blog_img_1,
//     title: `Reasons Business Needs a Agency`,
//     des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
//   },
//   {
//     id: 2,
//     img: blog_img_2,
//     title: `How a Creative Agency Can Help?`,
//     des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
//   },
//   {
//     id: 3,
//     img: blog_img_3,
//     title: `Maximizing Your Marketing Budget`,
//     des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
//   },
//   {
//     id: 4,
//     img: blog_img_1,
//     title: `Reasons Business Needs a Agency`,
//     des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
//   },
//   {
//     id: 5,
//     img: blog_img_2,
//     title: `How a Creative Agency Can Help?`,
//     des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
//   },
//   {
//     id: 6,
//     img: blog_img_3,
//     title: `Maximizing Your Marketing Budget`,
//     des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
//   },
// ]

// export default blog_data

