import React, { useState, useEffect } from "react";
import { VscDiffAdded, VscDiffRemoved } from "react-icons/vsc";

interface Module {
  title: string;
  description: string;
  credits: number;
}

interface ProgramModulesProps {
  data: {
    [key: string]: any;
    details: string;
  };
  id: string;
}

const ProgramModules: React.FC<ProgramModulesProps> = ({ data, id }) => {
  // Check if data is empty or contains no modules
  const isDataEmpty =
    !data || Object.keys(data).filter((key) => key !== "details").length === 0;

  const [activeTab, setActiveTab] = useState<string>(
    isDataEmpty ? "" : Object.keys(data).find((key) => key !== "details") || ""
  );
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    setExpandedIndex(null); // Reset expanded module when activeTab changes
  }, [activeTab]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const renderModules = () => {
    const modules = data[activeTab];

    if (!Array.isArray(modules)) return null;

    return modules.map((module: Module, index: number) => (
      <div key={index} className="border-bottom py-2">
        <div className="d-flex justify-content-between align-items-center">
          <div
            className="d-flex align-items-center"
            onClick={() => toggleExpand(index)}
            style={{ cursor: "pointer" }}
          >
            <span className="me-2">
              {expandedIndex === index ? (
                <VscDiffRemoved className="font-size-30" />
              ) : (
                <VscDiffAdded className="font-size-30" />
              )}
            </span>
            <h6 className="mb-0">{module.title}</h6>
          </div>
          <span>{module.credits} credits</span>
        </div>
        {expandedIndex === index && module.description && (
          <div className="mt-2">
            <p className="mb-0">{module.description}</p>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div id={id} className="container my-4">
      <h4>Program Modules</h4>
      {isDataEmpty ? (
        <p className="text-center">No modules available</p>
      ) : (
        <>
          <div className="d-flex justify-content-center mb-3">
            {Object.keys(data)
              .filter((key) => key !== "details") // Exclude 'details' from tabs
              .map((key, index) => (
                <button
                  key={index}
                  className={`btn ${
                    activeTab === key ? "btn-dark" : "btn-light"
                  } mx-1`}
                  onClick={() => handleTabClick(key)}
                >
                  {key
                    .replace(/([a-zA-Z]+)([0-9]+)/g, "$1 $2")
                    .replace(/([A-Z])/g, " $1")
                    .trim()}
                </button>
              ))}
          </div>
          <div className="alert alert-light">{data.details}</div>
          <div className="list-group">{renderModules()}</div>
        </>
      )}
    </div>
  );
};

export default ProgramModules;
