import React, { useState } from "react";

const programs: Record<string, { name: string; path: string }[]> = {
  "Foundation Programs (Level 3)": [
    { name: "Foundation In Engineering", path: "/foundation-in-engineering" },
    { name: "Foundation In Business", path: "/foundation-in-business" },
    {
      name: "Foundation In Hospitality & Tourism",
      path: "/foundation-in-hospitality",
    },
    { name: "Foundation In Accountancy", path: "/foundation-in-accountancy" },
  ],
  "School Of Engineering": [
    {
      name: "Higher International Diploma In Civil Engineering",
      path: "/higher-international-diploma-civil-engineering",
    },
    {
      name: "Higher International Diploma In Mechanical Engineering",
      path: "/higher-international-diploma-mechanical-engineering",
    },
    {
      name: "Higher International Diploma In Automobile Engineering",
      path: "/higher-in-international-diploma-automobile-engineering",
    },
    {
      name: "Higher International Diploma In Quantity Surveying",
      path: "/higher-international-diploma-quantity-surveying",
    },
    {
      name: "Higher International Diploma In Architectural Engineering",
      path: "/higher-international-diploma-architectural-engineering",
    },
    {
      name: "Higher International Diploma In Electrical & Electronics Engineering",
      path: "/higher-international-diploma-electrical-electronics-engineering",
    },
  ],
  "School Of Business": [
    {
      name: "Diploma In Business Management",
      path: "/diploma-in-business-management",
    },
    {
      name: "Diploma In Business Administration",
      path: "/diploma-in-business-administration",
    },
    {
      name: "Diploma In Logistics & Supply Chain Management",
      path: "/diploma-in-logistics-supply-chain-management",
    },
    {
      name: "Diploma In Hospitality & Tourism Management",
      path: "/diploma-in-hospitality-tourism-management",
    },
  ],
  "School Of Social Science (Level 5)": [
    {
      name: "Higher International Diploma In Psychology",
      path: "/higher-international-diploma-psychology",
    },
    {
      name: "Diploma In Health & Social Science",
      path: "/diploma-in-health-social-science",
    },
    {
      name: "Diploma In Health & Social Care Management",
      path: "/diploma-in-health-social-care-management",
    },
  ],
  "Education & Training Programs (Level 5)": [
    { name: "Education & Training", path: "/education-training" },
    {
      name: "Internal Quality Assurance(IQA)",
      path: "/internal-quality-assurance",
    },
    {
      name: "External Quality Assurance (EQA)",
      path: "/external-quality-assurance",
    },
    {
      name: "Foundation In Assessor Qualifications",
      path: "/foundation-in-assessor-qualifications",
    },
  ],
  "School Of Computing & IT (Level 5)": [
    {
      name: "Diploma In Information Technology",
      path: "/diploma-in-information-technology",
    },
  ],
  "School Of Accounting (Level 5)": [
    {
      name: "Diploma In Accounting & Business",
      path: "/diploma-in-accounting-business",
    },
  ],
  "Professional Specialized Programs": [
    { name: "Artificial Intelligence", path: "/artificial-intelligence" },
    { name: "Automotive Diagnostics", path: "/automotive-diagnostics" },
    { name: "Automation & Robotics", path: "/automation-robotics" },
    { name: "CAD / CAM Engineering", path: "/cad-cam-engineering" },
    { name: "Computer Networking", path: "/computer-networking" },
    { name: "Digital Marketing", path: "/digital-marketing" },
    {
      name: "Electrical Vehicle Engineering (EV)",
      path: "/electrical-vehicle-engineering",
    },
    { name: "Environmental Engineering", path: "/environmental-engineering" },
    { name: "Facade Engineering", path: "/facade-engineering" },
    { name: "Facility Management", path: "/facility-management" },
    { name: "HVAC(Heating,Ventilation & Air Conditioning)", path: "/hvac" },
    { name: "Landscaping Technology", path: "/landscaping-technology" },
    { name: "Piping Technology", path: "/piping-technology" },
    { name: "Plumbing Technology", path: "/plumbing-technology" },
    { name: "QA / QC Engineering", path: "/qa-qc-engineering" },
    { name: "Safety Engineering", path: "/safety-engineering" },
    { name: "Welding Technology", path: "/welding-technology" },
  ],
};

const SearchSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [filteredPrograms, setFilteredPrograms] = useState<
    { name: string; path: string }[]
  >([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level);
    setSearchTerm("");
    setShowOptions(false);
    setFilteredPrograms([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (selectedLevel) {
      const programsList = programs[selectedLevel].filter((program) =>
        program.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPrograms(programsList);
      setShowOptions(value.length > 0 && programsList.length > 0);
    } else {
      setShowOptions(false);
    }
  };

  const handleOptionSelect = (program: { name: string; path: string }) => {
    setSearchTerm(program.name);
    setFilteredPrograms([]);
    setShowOptions(false);
  };

  const handleSearch = () => {
    if (searchTerm && selectedLevel) {
      const program = programs[selectedLevel].find(
        (prog) => prog.name === searchTerm
      );
      if (program) {
        window.location.href = program.path;
      }
    }
  };

  return (
    <div className="container mt-5">
      <h4 className="anim_heading_title text-center">Search Programs</h4>
      <div className="row align-items-center">
        <div className="col-md-4 col-sm-12 mb-2">
          <select
            className="form-select w-100 home-search-select"
            onChange={(e) => handleLevelSelect(e.target.value)}
            value={selectedLevel}
          >
            <option value="" disabled>
              Select a school
            </option>
            {Object.keys(programs).map((level) => (
              <option className="options-list" key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6 col-sm-12 mb-2 position-relative">
          <input
            type="text"
            className="form-control w-100 home-search-input"
            placeholder="What do you want to study?"
            value={searchTerm}
            onChange={handleInputChange}
          />
          {showOptions && filteredPrograms.length > 0 && (
            <ul className="list-group position-absolute options-list pt-2 pr-5 z-index-1 w-100">
              {filteredPrograms.map((program) => (
                <li
                  key={program.name}
                  className="list-group-item list-group-item-action"
                  onClick={() => handleOptionSelect(program)}
                  style={{ cursor: "pointer" }}
                >
                  {program.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="col-md-2 col-sm-12 mb-2">
          <button
            type="submit"
            className="cs_btn cs_style_1 cs_type_btn"
            onClick={handleSearch}
          >
            <span>Search</span>
          </button>
          {/* <button className="btn btn-primary w-100" onClick={handleSearch}>
        Search
      </button> */}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
