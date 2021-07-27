import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import { Ionicons } from "@expo/vector-icons";
import { NotificationIcon } from "./components/Icons";
import Logo from "./components/Logo";
import Course from "./components/Course";
import Menu from "./components/Menu";
export default function App() {
  return (
    <Container>
      <Menu />
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome back,</Title>
            <Name>Djibril</Name>
            <NotificationIcon
              style={{ position: "absolute", right: 20, top: 5 }}
            />
          </TitleBar>
          <ScrollView
            style={{
              flexDirection: "row",
              padding: 20,
              paddingLeft: 12,
              paddingTop: 30,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {logos.map((logo, index) => (
              <Logo key={index} image={logo.image} text={logo.text} />
            ))}
          </ScrollView>

          <Subtitle>Continue Learning</Subtitle>

          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                image={card.image}
                logo={card.logo}
                caption={card.caption}
                subtitle={card.subtitle}
              />
            ))}
          </ScrollView>
          <Subtitle>Popular courses</Subtitle>
          {courses.map((course, index) => (
            <Course
              key={index}
              title={course.title}
              image={course.image}
              subtitle={course.subtitle}
              avatar={course.avatar}
              logo={course.logo}
              author={course.author}
              caption={course.caption}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;
const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;
const Container = styled.View`
  flex: 1;
  background-color: #f0f2f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;
const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const logos = [
  {
    image: require("./assets/logo-framerx.png"),
    text: "Framer X",
  },
  {
    image: require("./assets/logo-invision.png"),
    text: "Invission",
  },
  {
    image: require("./assets/logo-react.png"),
    text: "React",
  },
  {
    image: require("./assets/logo-sketch.png"),
    text: "Sketch",
  },
  {
    image: require("./assets/logo-studio.png"),
    text: "Studio",
  },
  {
    image: require("./assets/logo-swift.png"),
    text: "Swift",
  },
  {
    image: require("./assets/logo-vue.png"),
    text: "Vue",
  },
  {
    image: require("./assets/logo-xcode.png"),
    text: "X code",
  },
  {
    image: require("./assets/logo-xd.png"),
    text: "XD",
  },
];

const cards = [
  {
    title: "React Native for Designers",
    image: require("./assets/background11.jpg"),
    caption: "1 of 12 sections",
    logo: require("./assets/logo-react.png"),
    subtitle: "React Native",
  },
  {
    title: "Styled Components",
    image: require("./assets/background12.jpg"),
    caption: "2 of 12 sections",
    logo: require("./assets/logo-react.png"),
    subtitle: "React Native",
  },
  {
    title: "Props and Icons",
    image: require("./assets/background13.jpg"),
    caption: "3 of 12 sections",
    logo: require("./assets/logo-react.png"),
    subtitle: "React Native",
  },
  {
    title: "Static Data and Loop",
    image: require("./assets/background14.jpg"),
    caption: "1-4 of 12 sections",
    logo: require("./assets/logo-react.png"),
    subtitle: "React Native",
  },
];

const courses = [
  {
    title: "Prototype in InVesion Studio",
    subtitle: "10 sections",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-studio.png"),
    author: "Djibirl Diallo",
    avatar: require("./assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("./assets/background11.jpg"),
    logo: require("./assets/logo-react.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Learn to design and code a React site",
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("./assets/background14.jpg"),
    logo: require("./assets/logo-framerx.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app",
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("./assets/background6.jpg"),
    logo: require("./assets/logo-figma.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool",
  },
];
