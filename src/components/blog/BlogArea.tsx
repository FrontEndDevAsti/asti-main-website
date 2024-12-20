'use client'
import React, { useState } from "react";
import Image from "next/image";
import blog_data from "@/data/blogs_data";

interface TruncatedTextProps {
  text: string;
  maxLength?: number;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({
  text,
  maxLength = 80,
}) => {
  const truncateDescription = (desc: string, maxLength: number): string => {
    return desc.length > maxLength
      ? desc.substring(0, maxLength) + "..."
      : desc;
  };

  return (
    <p className="cs_blog_subtitle">{truncateDescription(text, maxLength)}</p>
  );
};

const BlogArea = () => {
   // State to manage how many blogs are visible
   const [visibleBlogs, setVisibleBlogs] = useState(1);

   // Function to handle loading more blogs
   const loadMoreBlogs = () => {
     setVisibleBlogs((prev) => prev + 9); // Load 9 more blogs on each click
   };
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_heading_title">Blogs</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_100 cs_height_lg_60"></div>

      <section>
        <div className="container">
          <div className="row">
          {blog_data.slice(0, visibleBlogs).map((blog, i) => (
              <div
                key={i}
                className={`col-md-4 ${blog.id === 2 ? "mt-0 mt-md-5" : ""} ${
                  blog.id === 5 ? "mt-0 mt-md-5" : ""
                } ${blog.id === 8 ? "mt-0 mt-md-5" : ""}`}
              >
                <div className="anim_div_ShowDowns">
                  <a href={`/blog/${blog.slug}`} className="cs_blog cs_style_1">
                    <div>
                      <Image src={blog.main_img} alt="post_1" />
                    </div>
                    <div className="cs_blog_info">
                      <h6 className="cs_blog_title">{blog.title}</h6>

                      <TruncatedText
                        text={blog.metaDescription}
                        maxLength={80}
                      />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
            {/* Only show the "Load More" button if there are more blogs to show */}
            {visibleBlogs < blog_data.length && (
            <div>
              <div className="cs_hero_btn_wrap text-center">
                <div className="cs_round_btn_wrap">
                  <a
                    // href="#"
                    className="cs_hero_btn cs_round_btn btn-item"
                    onClick={loadMoreBlogs}
                  >
                    <span></span> Load More
                  </a>
                </div>
              </div>
            </div>
          )}
          {/* <div>
            <div className="cs_hero_btn_wrap text-center">
              <div className="cs_round_btn_wrap">
                <a href="#" className="cs_hero_btn cs_round_btn btn-item">
                  <span></span> Load More
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default BlogArea;
