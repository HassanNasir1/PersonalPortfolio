import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from "rxjs";
//import { object } from 'prop-types'

export default class ScrollService {
  static scrollHandler = new ScrollService();

  static CurrentScreenBroadCaster = new Subject();
  static CurrentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
  }
  scrollToHireMe = () => {
    let ContactMeScreen = document.getElementById("ContactMe");
    if (!ContactMeScreen) return;
    ContactMeScreen.scrollIntoView({ behaviour: "smooth" });
  };
  scrollToHome = () => {
    let HomeScreen = document.getElementById("Home");
    if (!HomeScreen) return;
    HomeScreen.scrollIntoView({ behaviour: "smooth" });
  };
  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.bottom;

    let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
    let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;

      case "complete":
        return completelyVisible;

        default:
          return false;
    }
  };
  checkCurrentScreenUnderViewPort = (event) => {
    //if(!event || event.length < 1 ) return;
    if (!event || Object.keys(event).length < 1) return;
    for (let screen of TOTAL_SCREENS) {
      let screenFromDom = document.getElementById(screen.screen_name);
      if (!screenFromDom) continue;

      let fullyVisible = this.isElementInView(screenFromDom, "complete");
      let partiallyVisible = this.isElementInView(screenFromDom, "partial");

      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          screen["alreadyRendered"] = true;
          break;
        }
        if (fullyVisible) {
          ScrollService.CurrentScreenBroadCaster.next({
            screenInView: screen.screen_name,
          });
          break;
        }
      }
    }
  };
}
