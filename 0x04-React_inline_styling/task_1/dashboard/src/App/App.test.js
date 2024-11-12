import React from "react";
import { shallow } from "enzyme";
import App from "./App";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


describe("<App />", () => {

  let wrapper;
  let logOutMock;
  let originalAlert;

  beforeAll(() => {
    // Mock the alert function to avoid real alerts during testing
    originalAlert = window.alert;
    window.alert = jest.fn();
  });

  afterAll(() => {
    // Restore the original alert function
    window.alert = originalAlert;
  });

  beforeEach(() => {
    logOutMock = jest.fn(); // Create a mock function for logOut
    wrapper = shallow(<App logOut={logOutMock} />); // Pass logOut as a prop to App
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("renders without any errors", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("calls logOut and alert when Control + H is pressed", () => {
    // Simulate pressing Control + H
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    window.dispatchEvent(event);

    // Check if logOut and alert were called
    expect(logOutMock).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
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