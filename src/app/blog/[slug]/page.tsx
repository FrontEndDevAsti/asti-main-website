// "use client";

// import { useEffect, useState } from "react";
import blog_data from "@/data/blogs_data";
import Image from "next/image";
import { StaticImageData } from "next/image";
import blog_detaisl_img_1 from "@/assets/img/blog_detals_banner.jpg";
import blog_details_1 from "@/assets/img/blog_details_1.jpg";
import blog_details_2 from "@/assets/img/blog_details_2.jpg";
import blog_details_3 from "@/assets/img/blog_details_3.jpg";
import blog_details_4 from "@/assets/img/blog_details_4.jpg";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import AboutHomeFour from "@/components/about/AboutHomeFour";
import FooterOne from "@/layouts/footers/FooterOne";
import BlogHomeTwo from "@/components/blog/BlogHomeTwo";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = blog_data.find((blog) => blog.slug === params.slug);
  return {
    title: blog?.title,
    description: blog?.metaDescription,
  };
}
// Define a type for blog data
interface BlogData {
  slug: string;
  title: string;
  main_img: StaticImageData;
  des: JSX.Element;
  category: string;
}

// interface SinglePageProps {
//   params: {
//     slug: string;
//   };
// }

// const SinglePage = ({ params }: SinglePageProps) => {
//   const { slug } = params;
//   const [data, setData] = useState<BlogData | null>(null);

//   useEffect(() => {
//     const blog = blog_data.find((blog) => blog.slug === slug);
//     if (blog) {
//       setData(blog);
//     }
//   }, [slug]);

interface SinglePageProps {
  params: {
    slug: string;
  };
}

const SinglePage = ({ params }: SinglePageProps) => {
  const { slug } = params;

  // Fetch blog data directly
  const data: BlogData | undefined = blog_data.find(
    (blog) => blog.slug === slug
  );

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="cs_height_100 cs_height_lg_60"></div>

            <div className="container">
              <div className="cs_section_heading cs_style_1">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_word_writting">
                    {data?.title}
                  </h2>
                </div>
              </div>
            </div>
            <div className="cs_height_20 cs_height_lg_20"></div>

            <section>
              <div className="container">
                <div className="anim_div_ShowZoom">
                  <div className="cs_portfolio_details">
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="cs_text_style_1">
                            <p className="cs_headed_text"> {data?.category}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="container">
                <div className="cs_portfolio_details">
                  <div className="reveal">
                    <Image
                      src={data?.main_img || blog_detaisl_img_1}
                      alt="blog_detals_banner"
                    />
                  </div>
                  <div className="cs_height_60 cs_height_lg_20"></div>
                  <div className="cs_img_show_text cs_text_style_1 anim_div_ShowDowns">
                    {data?.des}
                  </div>

                  <div className="cs_height_25"></div>
                </div>
              </div>
            </section>

            <div className="container">
              <div className="anim_div_ShowDowns">
                <div className="cs_andrew_jackson">
                  <div className="cs_hr_design"></div>
                  <div className="cs_height_40 cs_height_lg_40"></div>
                  <div className="anim_div_ShowDowns">
                    <p className="cs_andrew_jackson_text_body cs_font_26">
                      'During my studies for level 5, Diploma in Information
                      Technology, all of the teachers were really helpful and
                      friendly. They have deep knowledge in their respective
                      fields and their teaching method is also very good. There
                      are no examinations, and we get our credit scores based on
                      our assignment which is a great initiative.'
                    </p>
                  </div>
                  <p className="cs_footer_text cs_color_1">Hyder Ahmed</p>
                  <div className="cs_height_40 cs_height_lg_40"></div>
                  <div className="cs_hr_design"></div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="cs_img_box cs_style_1">
                <div className="cs_img_show">
                  <div className="cs_img_1 reveal">
                    <Image src={blog_details_1} alt="blog_details_1" />
                  </div>
                  <div className="cs_img_2 reveal">
                    <Image src={blog_details_2} alt="blog_details_2" />
                  </div>
                </div>
                <div className="cs_height_30 cs_height_lg_30"></div>
                <div className="cs_img_show">
                  <div className="cs_img_3 reveal">
                    <Image src={blog_details_3} alt="blog_details_3" />
                  </div>
                  <div className="cs_img_4 reveal">
                    <Image src={blog_details_4} alt="blog_details_4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="cs_height_100 cs_height_lg_50"></div>

            <BlogHomeTwo />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default SinglePage;
