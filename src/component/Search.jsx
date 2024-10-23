import React, { useState } from 'react'

function Search() {
    const [formData, setFormData] = useState({
        keyword: "",
        propertyType: "",
        location: "",
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const validate = () => {
        let formErrors = {};
        if (!formData.keyword.trim()) formErrors.keyword = "Keyword is required.";
        if (!formData.propertyType) formErrors.propertyType = "Select a property type.";
        if (!formData.location) formErrors.location = "Select a location.";
        return formErrors;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
          console.log("Form Submitted", formData);
          // Submit the form or make an API call
        } else {
          setErrors(formErrors);
        }
      };
    

  return (
    <>
        <div className="container-fluid bg-primary wow fadeIn" data-wow-delay="0.1s" style={{padding: "35px"}}>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row g-2">
                    <div className="col-md-10">
                        <div className="row g-2">
                        <div className="col-md-4">
                            <input
                            type="text"
                            name="keyword"
                            className={`form-control border-0 py-3 ${errors.keyword ? "is-invalid" : ""}`}
                            placeholder="Search Keyword"
                            value={formData.keyword}
                            onChange={handleChange}
                            />
                            {errors.keyword && <div className="invalid-feedback">{errors.keyword}</div>}
                        </div>

                        <div className="col-md-4">
                            <select
                            name="propertyType"
                            className={`form-select border-0 py-3 ${errors.propertyType ? "is-invalid" : ""}`}
                            value={formData.propertyType}
                            onChange={handleChange}
                            >
                            <option value="">Property Type</option>
                            <option value="1">Property Type 1</option>
                            <option value="2">Property Type 2</option>
                            <option value="3">Property Type 3</option>
                            </select>
                            {errors.propertyType && <div className="invalid-feedback">{errors.propertyType}</div>}
                        </div>

                        <div className="col-md-4">
                            <select
                            name="location"
                            className={`form-select border-0 py-3 ${errors.location ? "is-invalid" : ""}`}
                            value={formData.location}
                            onChange={handleChange}
                            >
                            <option value="">Location</option>
                            <option value="1">Location 1</option>
                            <option value="2">Location 2</option>
                            <option value="3">Location 3</option>
                            </select>
                            {errors.location && <div className="invalid-feedback">{errors.location}</div>}
                        </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <button type="submit" className="btn btn-dark border-0 w-100 py-3">
                        Search
                        </button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Search