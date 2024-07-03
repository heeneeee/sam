import React, { useEffect, useRef, useState } from "react";
import * as St from "./styles";
import Icons_connected from "../assets/Icons_connected.png";
import Icons_deconnected from "../assets/Icons_deconnected.png";
import Icon_Logo from "../assets/HANDA LAB_CI_Symbol.png";
import Icon_setting from "../assets/Icons_setting.png";
import SettingModal from "./SettingModal";
import { fetchData } from "../api/fetch";
import Chart from "./Chart";

type printedDataType = {
  charging_energy: number;
  charging_status: number;
  current: number;
  discharging_energy: number;
  id: string;
  idx: number;
  power: number;
  remain_ah: number;
  remain_percent: number;
  status: number;
  temperature: number;
  time: string;
  voltage: number;
};

const Battery = () => {
  const [isConnected, setIsConnected] = useState<boolean>(true);
  const [isOpenAhPreset, setIsOpenAhPreset] = useState(false);
  const printedDataRef = useRef<printedDataType[]>([]);
  const [modeArr, setModeArr] = useState([
    {
      0: "ON",
      1: "OVP",
      2: "OCP",
      3: "LVP",
      4: "NCP",
      5: "OPP",
      6: "OTP",
      99: "OFF",
    },
  ]);
  const [printedArr, setPrintedArr] = useState([
    {
      charging_energy: 0,
      charging_status: 0,
      current: 0,
      discharging_energy: 0,
      id: "",
      idx: 0,
      power: 0,
      remain_ah: 0,
      remain_percent: 0,
      status: 0,
      temperature: 0,
      time: "",
      voltage: 0,
    },
  ]);

  useEffect(() => {
    printedDataRef.current.push(printedArr[0]);
  }, [[printedArr]]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData("http://172.30.1.15:3001/apis/lastdata/");
        setPrintedArr(data);
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };

    getData();

    const intervalId = setInterval(getData, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const openModal = () => {
    setIsOpenAhPreset(true);
  };

  const closeModal = () => {
    setIsOpenAhPreset(false);
  };

  // const batteryPercentage = printedArr[0].remain_percent;
  const batteryPercentage = 20;

  const mode = modeArr[0][4];

  return (
    <St.BatteryContainer>
      <St.BatterySection>
        <St.BatteryHeader>
          <St.BatteryLogoName>
            <St.Logo src={Icon_Logo}></St.Logo>
            <St.BatteryName>Device Name</St.BatteryName>
          </St.BatteryLogoName>
          <St.SettingButton onClick={openModal}>
            <St.SettingIcon src={Icon_setting} alt="setting button img" />
          </St.SettingButton>
        </St.BatteryHeader>
        <St.BatteryBox>
          <St.BatteryLayout>
            <St.BatteryProgressBar>
              <St.BatteryFill percentage={batteryPercentage} />
            </St.BatteryProgressBar>
          </St.BatteryLayout>
          <St.BatteryHead></St.BatteryHead>

          <St.BatteryPercentage>{batteryPercentage} %</St.BatteryPercentage>
        </St.BatteryBox>
      </St.BatterySection>
      {isOpenAhPreset && (
        <SettingModal isOpen={isOpenAhPreset} closeModal={closeModal} />
      )}
      <St.BatteryInfo>
        <St.BatteryMode>Current Mode : {mode}</St.BatteryMode>
        <St.BatteryIsConnected>
          {isConnected ? (
            <img src={Icons_connected} alt="Connected" />
          ) : (
            <img src={Icons_deconnected} alt="Disconnected" />
          )}
        </St.BatteryIsConnected>
      </St.BatteryInfo>
      {printedArr.map((el, index) => (
        <St.PrintContainer key={index}>
          <St.PrintBox>
            <St.PrintTitle>Voltage</St.PrintTitle>
            <St.PrintContent>{el.voltage} V</St.PrintContent>
          </St.PrintBox>
          <St.PrintBox>
            <St.PrintTitle>Current</St.PrintTitle>
            <St.PrintContent>{el.current} A</St.PrintContent>
          </St.PrintBox>
          <St.PrintBox>
            <St.PrintTitle>Power</St.PrintTitle>
            <St.PrintContent>{el.power} W</St.PrintContent>
          </St.PrintBox>
          <St.PrintBox>
            <St.PrintTitle>Capacity Ah</St.PrintTitle>
            <St.PrintContent>{el.remain_ah} Ah</St.PrintContent>
          </St.PrintBox>
          <St.PrintBox>
            <St.PrintTitle>Capacity %</St.PrintTitle>
            <St.PrintContent>{el.remain_percent} %</St.PrintContent>
          </St.PrintBox>
          <St.PrintBox>
            <St.PrintTitle>Temp</St.PrintTitle>
            <St.PrintContent>{el.temperature} ℃</St.PrintContent>
          </St.PrintBox>
          <St.PrintBox>
            <St.PrintTitle>Charging Energy</St.PrintTitle>
            <St.PrintContent>{el.charging_energy} KWh</St.PrintContent>
          </St.PrintBox>
          <St.PrintBox>
            <St.PrintTitle>Discharging Energy</St.PrintTitle>
            <St.PrintContent>{el.discharging_energy} KWh</St.PrintContent>
          </St.PrintBox>
        </St.PrintContainer>
      ))}
      <Chart />
    </St.BatteryContainer>
  );
};

export default Battery;
