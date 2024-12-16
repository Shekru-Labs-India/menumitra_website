import React from 'react'

const Rated = () => {
  return (
    
  <>
  <div className="container my-5">
    <div className="row text-center">
        {/* Column 1 */}
        <div className="col-12 col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
                {/* Text */}
                <p className="mb-3 text-center">
                    <strong>Rated us the recommended</strong><br />
                    <strong>Restaurant POS provider</strong>
                </p>
                {/* Image */}
                <img
                    src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/google.png"
                    alt="Column 1 Image"
                    className="img-fluid rounded"
                    style={{ maxWidth: '60%', height: 'auto' }}
                />
            </div>
        </div>
        {/* Column 2 */}
        <div className="col-12 col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
                {/* Text */}
                <p className="mb-3 text-center">
                    <strong>Highly rated as value for money</strong><br />
                    <strong>restaurant billing software</strong>
                </p>
                {/* Image */}
                <img
                    src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/capt.png"
                    alt="Column 2 Image"
                    className="img-fluid rounded"
                    style={{ maxWidth: '60%', height: 'auto' }}
                />
            </div>
        </div>
        {/* Column 3 */}
        <div className="col-12 col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
                {/* Text */}
                <p className="mb-3 text-center">
                    <strong>Rated as easy to use</strong><br />
                    <strong>& user friendly billing software</strong>
                </p>
                {/* Image */}
                <img
                    src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/soft.png"
                    alt="Column 3 Image"
                    className="img-fluid rounded"
                    style={{ maxWidth: '60%', height: 'auto' }}
                />
            </div>
        </div>
    </div>
</div>

  </>

  )
}

export default Rated