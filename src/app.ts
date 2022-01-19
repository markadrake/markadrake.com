"use strict";

window["app"] = {};

/*
 * Dual Layer Slider
 * - Register the component so we can use across the site.
 */
// import DualLayerSlider from "../Views/Partials/blocklist/components/humble_element_dualSlider";
// window["app"]["dualLayerSlider"] = DualLayerSlider;

/*
 * Initialized Event
 * - Tell other scripts on the page that our application has fully initialized.
 */
const initializedEvent = new Event("initialized");
window.dispatchEvent(initializedEvent);
