import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {

  let wrapper;
  let logOutMock;
  let originalAlert;

  beforeAll(() => {
    // Mock the alert function
    originalAlert = window.alert;
    window.alert = jest.fn();
  });

  afterAll(() => {
    // Restore the original alert function
    window.alert = originalAlert;
  });

  beforeEach(() => {
    logOutMock = jest.fn();
    wrapper = shallow(<App logOut={logOutMock} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("App renders without any errors", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it("contain the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it("contain the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it("contain the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Footer")).toHaveLength(1);
  });
});