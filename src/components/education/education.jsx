import './education.scss'
import education from "../static/education"
import education_2 from "../static/education_2"

function Education() {


  return (
    <section className='education'>
      <div className="edcation_card_title">

        <h2 className='edcation_container_title' > Digital City is where I  <span>studied</span></h2>
      </div>


      <div className="education-flex">
        <div className="education-column">
          <h3 className="edcation_div_title"  >FrontEnd Devaloper</h3>

          <div className="education-box" >
            {education.map((education) =>
              <div className="education-content" >
                <div className="border"></div>
                <div className="content">
                  <h2 className='education_title' >{education.title}</h2>
                  <p className='education_description' >{education.description}</p>

                </div>
              </div>
            )}


          </div>
        </div>
        <div className="education-column">
          <h3 className="edcation_div_title"  >Education</h3>

          <div className="education-box" >
            {education_2.map((education_2) =>
              <div className="education-content">
                <div className="border" ></div>
                <div className="content">
                  <h2  >{education_2.title}</h2>
                  <p>{education_2.description}</p>

                </div>
              </div>
            )}


          </div>
        </div>

      </div>
    </section>
  )
}

export default Education