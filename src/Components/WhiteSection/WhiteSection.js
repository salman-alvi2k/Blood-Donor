import React from 'react'
import titleImage from "../../images/title-image.png";

function WhiteSection() {
  return (
    <div>
      <section class="white-section" id="title">
                <div class="row">
                    <div class="col-xl-6">
                        <img class="title-image" src={titleImage} alt="" />
                    </div>

                    <div class="col-xl-6 landing">
                        <h1 class="big-headings">
                            Donate Your Blood to Us, Save More Lives Together
                        </h1>
                        <p>
                            Donate blood, Save Lives. One blood donation can save up to three
                            lives. Your donation can make someone's life better. Together we
                            can make world more healthier and better.
                        </p>

                        <div>
                            <button class="button">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default WhiteSection
