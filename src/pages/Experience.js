import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
        <VerticalTimeline lineColor='#444554'>

            <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date='Aug 2021 - Now'
            iconStyle={{background: "#172121", color: "#fff"}}
            icon={<WorkIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>Student Ambassadors at DMU</h3>
                <p>Part-time job</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date='Jul 2021 - Oct 2021'
            iconStyle={{background: "#172121", color: "#fff"}}
            icon={<WorkIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>Business Analyst Intern at Gigabit Networks</h3>
                <p>Internship</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date='Feb 2021 - Jun 2021'
            iconStyle={{background: "#172121", color: "#fff"}}
            icon={<WorkIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>Student Researcher at DMU</h3>
                <p>Part-time job</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date='Feb 2021 - May 2022'
            iconStyle={{background: "#E5D0CC", color: "#172121"}}
            icon={<SchoolIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>Information Systems Management at DMU</h3>
                <p>Master Degree</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date='Aug 2019 - Dec 2020'
            iconStyle={{background: "#172121", color: "#fff"}}
            icon={<WorkIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>Business Analyst at Throughwave</h3>
                <p>Full-time job</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date='Jun 2018 - Jul 2018'
            iconStyle={{background: "#172121", color: "#fff"}}
            icon={<WorkIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>Actuary Intern at AIA Thailand</h3>
                <p>Internship</p>
            </VerticalTimelineElement>



            <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date='2015 - 2018'
            iconStyle={{background: "#E5D0CC", color: "#172121"}}
            icon={<SchoolIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>Actuarial Sciences at Mahidol University</h3>
                <p>Undergraduate Degree</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date='Oct 2017 - Jan 2019'
            iconStyle={{background: "#E5D0CC", color: "#172121"}}
            icon={<SchoolIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>Law at Ramkhamhaeng University</h3>
                <p>Undergraduate Degree</p>
            </VerticalTimelineElement>

        </VerticalTimeline>
    </div>
  )
}

export default Experience