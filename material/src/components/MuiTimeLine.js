import React from 'react'
import {Timeline , TimelineItem , TimelineSeparator , TimelineConnector , TimelineContent , TimelineDot} from '@mui/lab'

export const MuiTimeLine = () => {
  return (
    <Timeline>
        <TimelineItem>
        <TimelineSeparator>
            <TimelineDot/>
            <TimelineConnector/>
            <TimelineContent>
                City A
            </TimelineContent>
        </TimelineSeparator>
        </TimelineItem>

        <TimelineItem>
        <TimelineSeparator>
            <TimelineDot/>
            <TimelineConnector/>
            <TimelineContent>
                City B
            </TimelineContent>
        </TimelineSeparator>
        </TimelineItem>

        <TimelineItem>
        <TimelineSeparator>
            <TimelineDot/>
            <TimelineContent>
                City C
            </TimelineContent>
        </TimelineSeparator>
        </TimelineItem>
    </Timeline>
  )
}


