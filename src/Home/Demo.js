import Select, { components } from "react-select";
import { useState } from "react";
import "./Select.scss";

const Demo = () => {
  // States for registration
  const [name, setName] = useState("");
  const options = [
    { value: "Select All", label: "All" },
    { value: "Indeed", label: "Indeed" },
    { value: "Reed", label: "Reed" },
    { value: "Linkedin", label: "Linkedin" },
    { value: "Monster", label: "Monster" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 0,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 10000,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

  const MultiValueRemove = (props) => {
    if (props.data.isFixed) {
      return null;
    }
    return <components.MultiValueRemove {...props} />;
  };

  //For Job Site dropdown
  const [selectedOption, setSelectedOption] = useState([]);
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleChange = (event) => {
    setSelectedOption(event);
  }

  // Handling the form submission
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jobKeywords: name, jobSitesToScrape: selectedOption.map(val => (val.value))})
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      fetch('http://localhost:8080/api/scraper/job_keywords', requestOptions)
        .then(response => response.json())
        .then();
    }
  };
  return (
    <div style={{ "background-color": "#188EF5" }}>
      <div className="container">
        <div className="columns is-centered">
          <div
            className="column is-6"
            style={{
              "text-align": "center",
              "background-color": "#fff",
              "min-height": "570px",
              "border-radius": "5px",
              "box-shadow": "0 8px 0 rgba(0, 0, 0, 0.2)",
              "margin-top": "60px",
            }}
          >
            <div className="columns is-centered">
              <div
                className="column is-10"
                style={{ "text-align": "left", "margin-top": "20px" }}
              >
                <form className="form-horizontal">
                  {/* Labels and inputs for form data */}
                  <label className="label">Job Keywords</label>
                  <input
                    onChange={handleName}
                    className="input form-control"
                    value={name}
                    type="text"
                  />

                  <label className="label">Job Sites To Scrape</label>
                  <Select                
                    isMulti
                    onChange={handleChange}
                    isClearable={false}
                    options={options}
                    components={{ MultiValueRemove }}
                  />

                  <button
                  style={{"margin-top": '30px'}}
                    onClick={handleSubmit}
                    className="button is-primary"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
