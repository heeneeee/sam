import styled from "styled-components";

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;

  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 30px;
    height: 30px;
  }
`;

const LoginLogo = styled.img`
  width: 100px;
  margin-top: 80px;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 80px;
    margin-top: 50px;
  }
`;
const LoginContent = styled.div`
  font-size: 1.9rem;
  margin-top: 100px;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    font-size: 1rem;
    margin-top: 20px;
  }
`;
const LoginHiddenNumberBox = styled.div`
  display: flex;
  margin-top: 50px;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    margin-top: 40px;
  }
`;

const LoginHiddenNumber = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.theme.colors.darkGray};
  border-radius: 50%;

  margin: 0 25px;
  transition: background-color 0.3s ease;

  &.filled {
    background-color: ${(props) => props.theme.colors.white};
  }

  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 10px;
    height: 10px;
    margin: 0 10px;
  }
`;

const LoginNumberBox = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  grid-column-gap: 50px;
  grid-row-gap: 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (min-width: 375px) and (max-width: 400px) {
    margin-top: 0px;
  }
`;
const LoginNumber = styled.button`
  font-size: 2.7rem;
  width: 150px;
  height: 150px;
  border: 0;
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  border-radius: 50%;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkGray};
    transition: 0.5s;
  }

  @media screen and (min-width: 375px) and (max-width: 400px) {
    font-size: 1.2rem;
    width: 60px;
    height: 60px;

    img {
      width: 30px;
    }
  }
`;

const LoginButtonSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 350px;
    gap: 20px;
  }
`;
const LoginFindPW = styled.button`
  width: 200px;
  height: 70px;
  font-size: 1.3rem;
  font-weight: 500;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 1px solid #f7931a;
  background-color: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 100px;

  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 110px;
    height: 40px;
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 50px;
  }
`;
// Battery
const BatteryContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 375px;
    /* background-color: aqua; */
  }
`;
const BatterySection = styled.div`
  width: 640px;
  height: 250px;
  border-radius: 20px;
  margin-top: 50px;
  background-color: ${(props) => props.theme.colors.darkGray};
  position: relative;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 350px;
    height: 150px;
  }
`;

const BatteryHeader = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 200px;
  }
`;
const BatteryLogoName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    /* width: 200px; */
  }
`;
const BatteryLayout = styled.div`
  border: 5px solid white;
  width: 230px;
  height: 100px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    border: 2px solid white;
    width: 120px;
    height: 50px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0;
  }
`;

const BatteryHead = styled.div`
  width: 30px;
  height: 50px;
  background-color: white;
  border-radius: 0 20px 20px 0;
  margin-right: 20px;
  padding: 0;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 15px;
    height: 30px;
    background-color: white;
    border-radius: 0 10px 10px 0;
    margin-right: 20px;
    padding: 0;
  }
`;
const SettingIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 15px;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 20px;
    height: 20px;
    margin-bottom: 10px;
  }
`;
const BatteryName = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin-top: 10px;
  margin-right: 280px;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    font-size: 1.2rem;
    width: 120px;
    font-weight: 500;
    margin-top: 5px;
    margin-right: 100px;
  }
`;
const BatteryProgressBar = styled.div`
  width: 200px;
  height: 75px;
  border-radius: 10px;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 110px;
    height: 40px;
  }
`;
const BatteryBox = styled.div`
  display: flex;
  margin-bottom: 50px;
  margin-right: 120px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    margin-right: 50px;
  }
`;
const BatteryMode = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
const BatteryFill = styled.div<{ percentage: number }>`
  height: 75px;
  border-radius: 10px;
  width: ${(props) => props.percentage}%;
  background-color: ${(props) =>
    props.percentage > 20 ? "#58BD7D" : "#BD3535"};
  transition: width 0.3s ease-in-out;

  @media screen and (min-width: 375px) and (max-width: 400px) {
    height: 40px;
    border-radius: 5px;
  }
`;
const BatteryPercentage = styled.div`
  font-size: 2rem;
  font-weight: 500;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    font-size: 1.3rem;
    font-weight: 500;
  }
`;

const BatteryInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 360px;
  width: 640px;
  margin: 50px 0px 20px 0px;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    display: flex;
    justify-content: center;
    gap: 120px;
    width: 350px;
    margin: 30px 0px 20px 0px;
  }
`;
const BatteryIsConnected = styled.div`
  width: 50px;
  height: 30px;
  img {
    width: 50px;
    height: 30px;
  }
  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 30px;
    height: 10px;
    img {
      width: 30px;
      height: 18px;
    }
  }
`;
const PrintContainer = styled.div`
  width: 600px;
  height: 300px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.darkGray};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 30px 20px;
  column-gap: 30px;
  row-gap: 30px;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 340px;
    height: 130px;
    column-gap: 10px;
    padding: 10px 5px;
    /* column-gap: 30px; */
    row-gap: 2px;
  }
`;
const PrintBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    display: flex;
    padding: 5px 5px;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
  }
`;
const PrintTitle = styled.div`
  font-size: 1.2rem;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

const PrintContent = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

const GridBorder = styled.div`
  background-color: ${(props) => props.theme.colors.lightGray};
`;

const SettingButton = styled.button`
  border: none;
  background-color: transparent;
`;
const SettingTitle = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin-right: 450px;
  margin-top: 50px;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    /* width: 375px;
    margin-right: 50px; */
  }
`;

const SettingBox = styled.div`
  display: flex;
  gap: 100px;
  margin-top: 30px;
  margin-bottom: 50px;
`;
const SettingAhPreset = styled.button`
  width: 180px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.white};
  font-size: 1.6rem;
  font-weight: 600;
  border: none;
  border-radius: 20px;
`;
const SettingCapacity = styled.button`
  width: 180px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.white};
  font-size: 1.6rem;
  font-weight: 600;
  padding: 20px;
  border: none;
  border-radius: 20px;
`;

const ChartContainer = styled.div`
  background-color: ${(props) => props.theme.colors.darkGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 620px;
  row-gap: 40px;
  margin-top: 30px;
`;

const ChartName = styled.div`
  font-size: 1.7rem;
`;
const ChartBox = styled.div``;

const ToggleButton = styled(LoginFindPW)``;

const ChartSection = styled.div`
  margin-top: 50px;
`;
export {
  LoginContainer,
  LoginLogo,
  Logo,
  LoginContent,
  LoginHiddenNumberBox,
  LoginHiddenNumber,
  LoginNumberBox,
  LoginNumber,
  LoginButtonSection,
  LoginFindPW,
  BatteryContainer,
  BatteryName,
  BatteryProgressBar,
  BatteryBox,
  BatteryMode,
  BatteryFill,
  BatteryLayout,
  BatteryHead,
  BatteryPercentage,
  BatteryInfo,
  BatteryIsConnected,
  PrintContainer,
  BatterySection,
  BatteryHeader,
  BatteryLogoName,
  SettingIcon,
  PrintBox,
  PrintTitle,
  PrintContent,
  GridBorder,
  SettingButton,
  SettingTitle,
  SettingBox,
  SettingAhPreset,
  SettingCapacity,
  ChartContainer,
  ChartName,
  ChartBox,
  ToggleButton,
  ChartSection,
};
