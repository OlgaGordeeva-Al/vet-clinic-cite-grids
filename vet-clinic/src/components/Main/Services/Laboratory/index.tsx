import "./Laboratory.css"

function Laboratory() {
    return (
      <>
        <div className="lab-item">
          <div className="lab-text">
            <h4 className="page-header lab-header">Our modern laboratory for your pets health</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae rerum sint, laboriosam officia iusto illo exercitationem dolore dolorum quidem, quas commodi minima pariatur ad corporis facere saepe perspiciatis laudantium:
            </p>
            <ol>
              <li>Serology</li>
              <li>Hematology</li>
              <li>Biochemistry</li>
              <li>ELISA</li>
              <li>PCR</li>
            </ol>
          </div>
          <img src="images\mat-napo-At-LUvX6Eto-unsplash.jpg" alt="lab_photo" className="lab-img" />
        </div>
      </>
    );
  }

export default Laboratory ;