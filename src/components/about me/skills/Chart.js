import React from "react";
import {BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend, Tooltip} from "recharts";

const data = [
    {
        "name": "React",
        "Javascript": 65,
    },
    {
        "name": "Javascript",
        "Javascript": 65,
    },
    {
        "name": "Redux",
        "Javascript": 60,
    },
    {
        "name": "Typescript",
        "Javascript": 35,
    },
    {
        "name": "HTML5/CSS3",
        "HTML5/CSS3": 75,
    },
    {
        "name": "Next.js",
        "Javascript": 20,
    },
    {
        "name": "Cypress",
        "Javascript": 30,
    },
    {
        "name": "Storybook",
        "Javascript": 50,
    },
    {
        "name": "Java",
        "Java": 20,
    },
    {
        "name": "PHP",
        "PHP": 20,
    },

]

export const Chart = () => {
    return (
        <BarChart width={700} height={250} data={data} margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
        }}
                  barSize={20}>
            <XAxis dataKey="name" scale="point" padding={{left: 30, right: 30}}/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Bar dataKey="Javascript" fill="#82ca9d"/>
            <Bar dataKey="HTML5/CSS3" fill="#E16A4E"/>
            <Bar dataKey="Java" fill="#86B0BC"/>
            <Bar dataKey="PHP" fill="#4C598F"/>
        </BarChart>
    );
}
