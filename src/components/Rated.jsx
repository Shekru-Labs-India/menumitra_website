import React, { useEffect, useState } from "react";

const Rated = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    
  <>
  <div className="container my-5">
    <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                <div className="card-body p-4 text-center">
                    <h6 className="card-title">
                        <strong>Rated us the recommended</strong><br />
                        <strong>Restaurant POS provider</strong>
                    </h6>
                </div>
            </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                <div className="card-body p-4 text-center">
                    <h6 className="card-title">
                        <strong>Highly rated as value for money</strong><br />
                        <strong>restaurant billing software</strong>
                    </h6>
                </div>
            </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                <div className="card-body p-4 text-center">
                    <h6 className="card-title">
                        <strong>Rated as easy to use</strong><br />
                        <strong>& user friendly billing software</strong>
                    </h6>
                </div>
            </div>
        </div>
    </div>
</div>

  </>

  )
}

export default Rated