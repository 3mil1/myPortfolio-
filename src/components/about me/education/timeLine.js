import React, {useState} from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import AddIcon from '@material-ui/icons/Add';
import {HireMe} from "./HireMe";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import {useElementOnScreen} from "../../customHooks/useElementOnScreen";


export const Timeline = () => {
    const [open, setOpen] = useState(false);

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "-150px",
        threshold: 1.0
    })


    return (
        <>
            <VerticalTimeline animate={true}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                    date="2011 - present"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<SchoolIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<SchoolIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff', cursor: "pointer"}}
                    icon={<Tooltip TransitionComponent={Zoom} enterDelay={5000} leaveDelay={200}
                                   open={isVisible && (open === false)} title="Click me!" placement="right" arrow>
                        <AddIcon ref={containerRef}/>
                    </Tooltip>}
                    iconOnClick={() => setOpen(true)}
                />
            </VerticalTimeline>
            <HireMe open={open}/>
        </>
    )
}


