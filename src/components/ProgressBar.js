import React from 'react';

export default function Progressbar({ progress }) {
    return (
        <div>
            <div className="progressbar" style={{ border: "1px solid #ddd", width: "100%", height: "20px", margin: "10px 0" }}>
                <div
                    style={{
                        height: "100%",
                        width: `${progress}%`,
                        backgroundColor: "#a66cff",
                        transition: "width 0.5s",
                    }}
                ></div>
                <span className="progressPercent">{progress}%</span>
            </div>
        </div>
    );
}
