import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
    <div>
      <div class="footer-adv footer-adv-layout-4">
        <div class="footer-adv-overlay">
            <div class="ast-container">
              <div class="ast-row">
                  <div class="ast-col-lg-3 ast-col-md-3 ast-col-sm-12 ast-col-xs-12 footer-adv-widget footer-adv-widget-1">
                    <div id="media_image-1" class="widget widget_media_image"><img width="200" height="80" srcset="https://www.creativemindzgroup.com/wp-content/uploads/2018/05/cropped-Creative-Mindz-Logo.png 1x, https://www.creativemindzgroup.com/wp-content/uploads/2018/05/Creative-Mindz-Logo.png 2x" class="image wp-image-2302  attachment-full size-full" alt="creative mindz logo" /></div>
                    <div id="text-6" class="widget widget_text">
                        <div class="textwidget">
                          <p><b>We always Focus on the Innovations &amp; Developments Which Made us the Best from Rest of the World.</b></p>
                        </div>
                    </div>
                  </div>
                  <div class="ast-col-lg-3 ast-col-md-3 ast-col-sm-12 ast-col-xs-12 footer-adv-widget footer-adv-widget-2">
                    <div id="nav_menu-1" class="widget widget_nav_menu">
                        <h2 class="widget-title">COMPANY</h2>
                        <div class="menu-top-nav-container">
                          <ul id="menu-top-nav" class="menu">
                              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2369"> <Link to="/services">SERVICES</Link></li>
                              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-142"> <Link to="/team">TEAM</Link></li>
                              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1391"> <Link to="/devsourcing">DEVSOURCING</Link></li>
                              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-941"> <Link to="/bootcamp">BOOTCAMP</Link></li>
                              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2394"> <Link to="/"><button class="footer-button">APPLY NOW</button></Link></li>
                          </ul>
                        </div>
                    </div>
                  </div>
                  <div class="ast-col-lg-3 ast-col-md-3 ast-col-sm-12 ast-col-xs-12 footer-adv-widget footer-adv-widget-3">
                    <div id="nav_menu-2" class="widget widget_nav_menu">
                        <h2 class="widget-title">RESOURCES</h2>
                        <div class="menu-important-links-container">
                          <ul id="menu-important-links" class="menu">
                              <li id="menu-item-31" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31"><Link to="/">TERMS AND CONDITIONS</Link></li>
                              <li id="menu-item-32" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-32"><Link to="/">LEGAL</Link></li>
                              <li id="menu-item-34" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-34"><Link to="/">PARTNERS</Link></li>
                              <li id="menu-item-521" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-521"><Link to="/">CAREERS</Link></li>
                              <li id="menu-item-35" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-35"><Link to="/">BLOG</Link></li>
                          </ul>
                        </div>
                    </div>
                  </div>
                  <div class="ast-col-lg-3 ast-col-md-3 ast-col-sm-12 ast-col-xs-12 footer-adv-widget footer-adv-widget-4">
                    <div id="text-7" class="widget widget_text">
                        <h2 class="widget-title">CONTACT US</h2>
                        <div class="textwidget">
                          <ul>
                              <li><strong>+91-7702233711</strong></li>
                              <li><strong>reach@creativemindzgroup.com</strong></li>
                          </ul>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      <div class="ast-small-footer footer-sml-layout-2">
        <div class="ast-footer-overlay">
            <div class="ast-container">
              <div class="ast-small-footer-wrap" >
                  <div class="ast-row ast-flex">
                    <div class="ast-small-footer-section ast-small-footer-section-1 ast-small-footer-section-equally ast-col-md-6 ast-col-xs-12" >
                        <b>Copyright © 2018 <span class="ast-footer-site-title">CreativeMindzGroup</span> | <a href="#">Credits</a></b>						
                    </div>
                    <div class="ast-small-footer-section ast-small-footer-section-2 ast-small-footer-section-equally ast-col-md-6 ast-col-xs-12" >
                        <b>Powered by <span class="ast-footer-site-title">CreativeMindzGroup</span></b>						
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
  }
}
export default Footer;