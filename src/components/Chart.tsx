import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import ReactEcharts from "echarts-for-react";
import * as St from "./styles";
import { styled } from "@mui/system";

const ResponsiveDatePicker = styled(DatePicker)(({ theme }) => ({
  width: "620px",
  color: "darkgrey",
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#979797",
    marginBottom: "20px",
  },
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      borderColor: "#979797",
      border: "2px solid white",
    },
  },
  borderRadius: "10px",
  input: {
    color: "white",
  },
  label: {
    color: "white",
  },
  svg: {
    color: "white",
  },
  "@media screen and (min-width: 375px) and (max-width: 400px)": {
    width: "320px",
    input: {
      fontSize: "0.8rem",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      marginBottom: "10px",
    },
    "& .MuiOutlinedInput-root": {
      "& > fieldset": {
        borderColor: "#cccccc",
      },
    },
  },
}));

const ResponsiveChart = styled(ReactEcharts)`
  height: 400px;
  width: 100%;

  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 300px;
    height: 200px;
  }
`;
const ChartDate: React.FC = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());
  const [voltData, setVoltData] = useState([]);
  const [curData, setCurData] = useState([]);
  const pickYear = value?.toDate().getFullYear();
  const pickMonth = value?.toDate().getMonth()! + 1;
  const pickDay = value?.toDate().getDay();

  // 시간만 추출(H)
  const date = voltData.map((item) => item["x"]);
  const newDate: string[] = [];

  for (let i = 0; i < date.length; i++) {
    newDate.push(
      new Date(date[i]).getHours().toString().padStart(2, "0") + "H"
    );
  }

  const voltValue = voltData.map((item) => item["y"]);

  const curValue = curData.map((item) => item["y"]);

  const getOptionVol = () => {
    return {
      tooltip: {
        trigger: "axis",
        axisPointer: { snap: "true" },
        formatter: function (params: any) {
          console.log("시간", new Date(date[params]));
          var xAxisDate = `${new Date(
            date[params[0].dataIndex]
          ).getFullYear()}/${
            new Date(date[params[0].dataIndex]).getMonth() + 1
          }/${new Date(date[params[0].dataIndex]).getDate()}
          ${new Date(date[params[0].dataIndex]).getHours()}:${new Date(
            date[params[0].dataIndex]
          ).getMinutes()}:${new Date(date[params[0].dataIndex]).getMinutes()}
          `;
          return `시간 : ${xAxisDate} <br/> 
          전압 : ${params[0].value} V
          `;
        },
      },
      title: {
        left: "center",
        text: "V Chart",
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: newDate,
        axisLabel: {
          interval: 1200,
          rotate: 0,
        },
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Data",
          type: "line",
          stack: "Total",

          areaStyle: {},
          data: voltValue,
        },
      ],
    };
  };

  const getOptionCur = () => {
    return {
      tooltip: {
        trigger: "axis",
        formatter: function (params: any) {
          const xAxisDate = `${new Date(
            date[params[0].dataIndex]
          ).getFullYear()}/${
            new Date(date[params[0].dataIndex]).getMonth() + 1
          }/${new Date(date[params[0].dataIndex]).getDate()}
          ${new Date(date[params[0].dataIndex]).getHours()}:${new Date(
            date[params[0].dataIndex]
          ).getMinutes()}:${new Date(date[params[0].dataIndex]).getMinutes()}
          `;
          return `시간 : ${xAxisDate} <br/> 
          전류 : ${params[0].value} A
          `;
        },
      },
      title: {
        left: "center",
        text: "A Chart",
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: newDate,
        axisLabel: {
          interval: 1200,
          rotate: 0,
        },
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Data",
          type: "line",
          stack: "Total",
          symbol: "none",
          sampling: "lttb",
          itemStyle: {
            color: "rgb(255, 70, 131)",
          },
          areaStyle: {},
          data: curValue,
        },
      ],
    };
  };

  useEffect(() => {
    const postVolt = async () => {
      try {
        const res = await fetch("http://172.30.1.15:3001/apis/voltage/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            year: pickYear,
            month: pickMonth,
            day: pickDay,
          }),
        });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setVoltData(data);
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };
    postVolt();
  }, [value]);

  useEffect(() => {
    const postCur = async () => {
      try {
        const res = await fetch("http://172.30.1.15:3001/apis/current/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            year: pickYear,
            month: pickMonth,
            day: pickDay,
          }),
        });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setCurData(data);
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };
    postCur();
  }, [value]);

  return (
    <>
      <div
        style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <ResponsiveDatePicker
              label="날짜를 선택해주세요"
              value={value}
              onChange={(newValue) => setValue(newValue)}
              format="YYYY / MM / DD"
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <St.ChartSection>
        <ResponsiveChart
          option={getOptionVol()}
          style={{ height: "400px", width: "100%" }}
        />
        <ResponsiveChart
          option={getOptionCur()}
          style={{ height: "400px", width: "100%" }}
        />
      </St.ChartSection>
    </>
  );
};

export default ChartDate;
