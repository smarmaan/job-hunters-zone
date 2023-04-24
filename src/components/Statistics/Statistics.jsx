import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Statistics = () => {
  const assignmentMarks = [
    {
      assignmentName: "Assignment-01",
      totalAssignmentMarks: 60,
      obtainedAssignmentMarks: 50,
      myTotalAverageMark: 50,
    },
    {
      assignmentName: "Assignment-02",
      totalAssignmentMarks: 60,
      obtainedAssignmentMarks: 40,
      myTotalAverageMark: 45,
    },
    {
      assignmentName: "Assignment-03",
      totalAssignmentMarks: 60,
      obtainedAssignmentMarks: 50,
      myTotalAverageMark: 46.7,
    },
    {
      assignmentName: "Assignment-04",
      totalAssignmentMarks: 60,
      obtainedAssignmentMarks: 30,
      myTotalAverageMark: 42.5,
    },
    {
      assignmentName: "Assignment-05",
      totalAssignmentMarks: 60,
      obtainedAssignmentMarks: 20,
      myTotalAverageMark: 38,
    },
    {
      assignmentName: "Assignment-06",
      totalAssignmentMarks: 60,
      obtainedAssignmentMarks: 50,
      myTotalAverageMark: 40,
    },
    {
      assignmentName: "Assignment-07",
      totalAssignmentMarks: 60,
      obtainedAssignmentMarks: 35,
      myTotalAverageMark: 39.2,
    },
    {
      assignmentName: "Assignment-08",
      totalAssignmentMarks: 60,
      obtainedAssignmentMarks: 45,
      myTotalAverageMark: 40,
    },
  ];

  return (
    <div>
      <div>
        <h1 className="font-bold text-xl mb-10">Marks Statistics</h1>

        <p className="text-lg font-medium">
          Here I, represent the statistic of my fake Assignments Marks, randomly
          selected for previous assignments... <br /> This Simple Radar Chart
          represents my obtained marks... my total average Marks and Total
          assignment Marks....
        </p>
      </div>

      <div className="my-24">
        <ResponsiveContainer width="100%" height={500}>
          <RadarChart
            data={assignmentMarks}
            cx="50%"
            cy="50%"
            outerRadius="90%"
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="assignmentName" />
            <PolarRadiusAxis angle={20} />
            <Radar
              name="Total Assignment Marks"
              dataKey="totalAssignmentMarks"
              stroke="#31D8AB"
              fill="#31D8AB"
              fillOpacity={0.2}
            />
            <Radar
              name="Obtained Assignment Marks"
              dataKey="obtainedAssignmentMarks"
              stroke="#0084d8"
              fill="#0084d8"
              fillOpacity={0.1}
              activeDot={{ r: 8 }}
            />
            <Radar
              name="My Total Average Marks"
              dataKey="myTotalAverageMark"
              stroke="#dc2626"
              fill="#dc2626"
              fillOpacity={0.1}
            />
            <Tooltip />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
