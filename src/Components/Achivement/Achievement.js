import React from 'react'
import { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Achievement() {
    const [counterON, setCounterON] = useState(false);
  return (
    <div>
         <section className="black-section" id="achievement">
        <div className="achievements">
          <h5>We Help People</h5>
          <h1>Our Achievements</h1>
          <p>
            Successful projects: Qalb e Saleem, Project Sayebaan and Project
            Quat e Akhwat.
          </p>
        </div>

        <div className="counters">
          <div>
            <i className="bi bi-patch-check icon"></i>
            <div className="counter-box">
              <ScrollTrigger
                onEnter={() => setCounterON(true)}
                onExit={() => setCounterON(false)}
              >
                <div className="counter" data-target="10">
                  {counterON && <CountUp start={0} end={7} duration={1} />}
                </div>
              </ScrollTrigger>
              <div className="plus">
                <i className="fa-solid fa-plus fa-lg"></i>
              </div>
            </div>
            <p>Year Experience</p>
          </div>

          <div>
            <i className="bi bi-people icon"></i>
            <div className="counter-box">
              <ScrollTrigger
                OnEnter={() => setCounterON(true)}
                OnExit={() => setCounterON(false)}
              >
                <div className="counter" data-target="10">
                  {counterON && <CountUp start={0} end={110} duration={1} />}
                </div>
              </ScrollTrigger>
              <div className="plus">
                <i className="fa-solid fa-plus fa-lg"></i>
              </div>
            </div>
            <p>Members</p>
          </div>

          <div>
            <i className="bi bi-bag-plus icon"></i>
            <div className="counter-box">
              <ScrollTrigger
                onEnter={() => setCounterON(true)}
                onExit={() => setCounterON(false)}
              >
                <div className="counter" data-target="10">
                  {counterON && <CountUp start={0} end={1300} duration={1} />}
                </div>
              </ScrollTrigger>
              <div className="plus">
                <i className="fa-solid fa-plus fa-lg"></i>
              </div>
            </div>
            <p>Blood-bags Collected</p>
          </div>
          <div>
            <i className="bi bi-hospital icon"></i>
            <div className="counter-box">
              <ScrollTrigger
                onEnter={() => setCounterON(true)}
                onExit={() => setCounterON(false)}
              >
                <div className="counter" data-target="10">
                  {counterON && <CountUp start={0} end={8} duration={1} />}
                </div>
              </ScrollTrigger>
              <div className="plus">
                <i className="fa-solid fa-plus fa-lg"></i>
              </div>
            </div>
            <p>Projects</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Achievement
