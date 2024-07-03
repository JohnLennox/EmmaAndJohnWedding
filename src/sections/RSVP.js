import React, { useState } from 'react';

function RSVP() {
    const [peopleCount, setPeopleCount] = useState(0);
    const [childCount, setChildCount] = useState(0); // Initialize childCount to 0

    const handlePeopleChange = (event) => {
        setPeopleCount(Number(event.target.value));
    };

    const handleChildChange = (event) => {
        setChildCount(Number(event.target.value));
    };

    // Function to create iframe elements in pairs for adults
    const renderIframesInPairs = () => {
        const pairs = [];
        for (let i = 0; i < peopleCount; i += 2) {
            pairs.push(
                <div className="row" key={`adult-row-${i}`}>
                    <div className="col-md-6">
                        <h2><strong>Adult {i + 1}</strong></h2>
                        <iframe width="100%"
                                height="500px"
                                src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAXdI945URVhaWDRUN1g2NVZBVU5XTDBDSjE3QTdIQy4u&embed=true"
                        ></iframe>
                    </div>
                    {i + 1 < peopleCount && (
                        <div className="col-md-6">
                            <h2><strong>Adult {i + 2}</strong></h2>
                            <iframe width="100%"
                                    height="500px"
                                    src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAXdI945URVhaWDRUN1g2NVZBVU5XTDBDSjE3QTdIQy4u&embed=true"
                            ></iframe>
                        </div>
                    )}
                </div>
            );
        }
        return pairs;
    };

    // Function to create iframe elements in pairs for children
    const renderChildIframesInPairs = () => {
        const pairs = [];
        for (let i = 0; i < childCount; i += 2) {
            pairs.push(
                <div className="row" key={`child-row-${i}`}>
                    <div className="col-md-6">
                        <h2><strong>Child {i + 1}</strong></h2>
                        <iframe width="100%"
                                height="500px"
                                src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAXdI945UQzVXMkZRUk5JN0FZVVVEUTVQVlBaNThGVi4u&embed=true"
                        ></iframe>
                    </div>
                    {i + 1 < childCount && (
                        <div className="col-md-6">
                            <h2><strong>Child {i + 2}</strong></h2>
                            <iframe width="100%"
                                    height="500px"
                                    src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAXdI945UQzVXMkZRUk5JN0FZVVVEUTVQVlBaNThGVi4u&embed=true"
                            ></iframe>
                        </div>
                    )}
                </div>
            );
        }
        return pairs;
    };

    const labelStyle = {
        marginRight: '10px'
    };

    const selectStyle = {
        width: 'auto',
        display: 'inline-block'
    };

    return (
        <div className="sectionContent text-start">
            <h1>RSVP</h1>
            <p>Please let us know if you can join us in celebrating our special day!</p>
            <div className="row align-items-center mb-3">
                <div className="col-auto">
                    <label htmlFor="people-select" style={labelStyle}>Please select the number of adults you are responding for:</label>
                </div>
                <div className="col-auto">
                    <select className="form-select" id="people-select" value={peopleCount}
                            onChange={handlePeopleChange} style={selectStyle}>
                        {[...Array(8)].map((_, i) => (
                            <option key={i} value={i}>{i}</option> // Adult count starts from 0
                        ))}
                    </select>
                </div>
            </div>
            <div className="row align-items-center mb-3 mt-4">
                <div className="col-auto">
                    <label htmlFor="children-select" style={labelStyle}>Please select the number of children you are responding for:</label>
                </div>
                <div className="col-auto">
                    <select className="form-select" id="children-select" value={childCount}
                            onChange={handleChildChange} style={selectStyle}>
                        {[...Array(8)].map((_, i) => (
                            <option key={i} value={i}>{i}</option> // Child count starts from 0
                        ))}
                    </select>
                </div>
            </div>

            <div>
                {renderIframesInPairs()}
            </div>

            <div>
                {renderChildIframesInPairs()}
            </div>
        </div>
    );
}

export default RSVP;
