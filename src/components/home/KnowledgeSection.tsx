import React from 'react';

const KnowledgeSection = () => {
  return (
    <section className="py-5">
      <div className="container text-center" style={{ paddingLeft: '84px', paddingRight: '84px' }}>
        {/* First row */}
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <p className="lead">
            Our goal is to design educational programs that are uplifting, connect, and have a measurable effect—all while having a little bit of fun.
            </p>
          </div>
        </div>

        {/* Middle banner row */}
        <div className="row my-4">
          <div className="col-12">
            <div className="d-inline-block px-4 py-2 bg-dark text-white font-weight-bold" style={{ transform: 'rotate(-2deg)', fontSize: '1.5rem' }}>
            Learn at your own pace with flexible, accredited Programs
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <p className="lead">
              <span className="text-success">Contact us</span> To find out more about our complete educational assistance, get in touch with us. We construct and layout personalized online courses all the way up to your full learning and skill enhancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
