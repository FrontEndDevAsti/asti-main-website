

import React from 'react';
import Count from '../common/Count';


interface DataType {
  id: number;
  title: string;
  number: number;
}[]

const counter_data: DataType[] = [
  {
    id: 1,
    title: `Nationalities`,
    number: 63,
  },
  {
    id: 2,
    title: `Awards Achievement`,
    number: 42,
  },
  {
    id: 3,
    title: `Years In Dubai`,
    number: 27,
  },
  {
    id: 4,
    title: `Alumnis`,
    number: 10000,
  },
]

const FunFactHomeOne = ({style_2, style_3} :any) => {
  return (
    <>
      <div className="cs_height_60 cs_height_lg_20"></div> 
      <div className="container">
        <div className="row align-items-center">
          {counter_data.map((item, i) =>
            <div key={i} className="col-lg-3">
              <div className="cs_funfact cs_style1">
                <div className={`cs_funfact_number  me-4 ${style_2 ? 'cs_stroke_normal' : 'cs_stroke_text'}`}>
                  <div className="amin_auto_count">
                    <Count number={item.number} add_style={true} isPlus={i === 2 || i === 3}/>
                  </div>
                  {/* {i === 0 && <span>K</span>}
                  {i === 1 && <span>K</span>} */}
                </div>
                <div className={`cs_funfact_text cs_primary_font ${style_2 ? 'cs_color_1' : ''}`}>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>  
    </>
  );
};

export default FunFactHomeOne;