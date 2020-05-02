import React from "react";

function ParInput() {
    return(
        <div className="form-group">
            <label for="par-input">Par:</label>
            <input type="par" className="form-control" id="par-input" name='par'></input>
        </div>
    );
};

export default ParInput;