import React, { Component } from 'react';
import ServicesPageJumbotron from '../ServicesPageComponents/ServicesPageJumbotron';
import ServicesPageSection2 from '../ServicesPageComponents/ServicesPageSection2';
import ServicesPageSection3 from '../ServicesPageComponents/ServicesPageSection3';


class ServicesPage extends Component {
  render() {
    return (
      <div>
        <div id="content" class="site-content">
   <div class="ast-container">
      <div id="primary" class="content-area primary">
         <main id="main" class="site-main" role="main">
            <article itemtype="https://schema.org/CreativeWork" itemscope="itemscope" id="post-2338" class="post-2338 page type-page status-publish ast-article-single">
               <div class="entry-content clear" itemprop="text">
                  <div class="elementor elementor-2338">
                     <div class="elementor-inner">
                        <div class="elementor-section-wrap">
                        <ServicesPageJumbotron/>
                        <ServicesPageSection2/>
                        <ServicesPageSection3/>
                        </div>
                     </div>
                  </div>
               </div>
            </article>
         </main>
      </div>
   </div>
</div>
      </div>
    )
  }
}
export default ServicesPage;