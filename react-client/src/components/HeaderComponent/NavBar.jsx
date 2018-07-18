import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
   <div class="main-header-bar-wrap">
      <div class="main-header-bar">
         <div class="ast-container">
            <div class="ast-flex main-header-container">
               <div class="site-branding">
                  <div class="ast-site-identity" itemscope="itemscope" itemtype="https://schema.org/Organization">
                     <span class="site-logo-img"><a href="/" class="custom-logo-link" rel="home" itemprop="url"><img width="200" height="80" src="wp-content/uploads/2018/05/cropped-Creative-Mindz-Logo.png" class="custom-logo" alt="CreativeMindzGroup" itemprop="logo" srcset="https://www.creativemindzgroup.com/wp-content/uploads/2018/05/cropped-Creative-Mindz-Logo.png 1x, https://www.creativemindzgroup.com/wp-content/uploads/2018/05/Creative-Mindz-Logo.png 2x" /></a></span>			
                  </div>
               </div>
               <div class="ast-mobile-menu-buttons">
                  <div class="ast-button-wrap">
                     <button type="button" class="menu-toggle main-header-menu-toggle " rel="main-menu" aria-controls='primary-menu' aria-expanded='false'>
                     <span class="screen-reader-text">Main Menu</span>
                     <i class="menu-toggle-icon"></i>
                     </button>
                  </div>
               </div>
               <div class="ast-main-header-bar-alignment">
                  <div class="main-header-bar-navigation">
                     <nav itemtype="https://schema.org/SiteNavigationElement" itemscope="itemscope" id="site-navigation" class="ast-flex-grow-1" role="navigation" aria-label="Site Navigation">
                        <div class="main-navigation">
                           <ul id="primary-menu" class="main-header-menu ast-flex ast-justify-content-flex-end submenu-with-border">
                              <li id="menu-item-2369" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2369"> <Link to="/services">SERVICES</Link></li>
                              <li id="menu-item-142" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-142"> <Link to="/team">TEAM</Link></li>
                              <li id="menu-item-1391" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1391"> <Link to="/devsourcing">DEVSOURCING</Link></li>
                              <li id="menu-item-941" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-941"> <Link to="/bootcamp">BOOTCAMP</Link></li>
                              <li id="menu-item-2394" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2394"> <Link to=""><button class="footer-button">APPLY NOW</button></Link></li>
                              <li class="ast-masthead-custom-menu-items widget-custom-menu-item">
                                 <div class="ast-header-widget-area"></div>
                              </li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
    )
  }
}
export default NavBar;