import React, { useEffect, useState } from "react";
import "./CourseList.scss";

export const CourseList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/courses")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return <div>Home</div>;
};
