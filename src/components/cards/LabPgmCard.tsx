import React, { useState } from "react";

interface ProgramsDataType {
  id: number;
  title: string;
  description: string;
  bgImg: string;
  homeImg: string;
}

const programsData: ProgramsDataType[] = [
  {
    id: 1,
    title: "Program One",
    description:       "All business programs of the University of Wollongong are accredited by The Association to Advance Collegiate Schools of Business (AACSB)...",
    bgImg: "/assets/images/acc-03.png",
    homeImg: "/assets/images/acc-03.png",
  },
  {
    id: 2,
    title: "Program Two",
    description: "This is the description for Program Two.",
    bgImg: "/assets/images/bg-02.jpg",
    homeImg: "/assets/images/home-02.jpg",
  },
  {
    id: 3,
    title: "Program Three",
    description: "This is the description for Program Three.",
    bgImg: "/assets/images/bg-03.jpg",
    homeImg: "/assets/images/home-03.jpg",
  },
  // Add more data if needed
];

const LabPgmCard = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const openModal = (id: number) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="container">
      {/* Card Layout */}
      <div className="row justify-content-center">
        {programsData.map((program) => (
          <div className="col-md-4" key={program.id}>
            <div
              className="card mb-4 text-center"
              style={{
                backgroundImage: `url(${program.bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
                cursor: "pointer",
              }}
              onClick={() => openModal(program.id)}
            >
              <div className="card-body d-flex align-items-center justify-content-center">
                <h5 className="text-white">{program.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {programsData.map((program) => (
        <div
          key={program.id}
          className={`modal fade ${activeModal === program.id ? "show d-block" : ""}`}
          tabIndex={-1}
          role="dialog"
          style={{ display: activeModal === program.id ? "block" : "none", backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={closeModal}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{program.title}</h5>
                <button
                  type="button"
                  className="close"
                  onClick={closeModal}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12">
                    <img src={program.homeImg} alt={program.title} className="img-fluid w-100 mb-4" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center">
                    <h5>{program.title}</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p className="mt-3">{program.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LabPgmCard ;
