/**
 * Component: Chunav Setu SaaS Section & Interactive Demo Window
 * Digital Netagiri
 */
window.DN_Components = window.DN_Components || {};

window.DN_Components.ChunavSetu = function() {
  return `
    <!-- ========================================================
         4. CHUNAV SETU SECTION
         ======================================================== -->
    <section class="chunav-setu-section" id="chunav-setu">
      <div class="container">
        
        <div class="chunav-setu-layout">
          
          <!-- Content Left -->
          <div class="chunav-info reveal-on-scroll">
            <div class="setu-badge">
              <span class="badge-icon">🏛️</span>
              <span>FLAGSHIP ELECTION MANAGEMENT PLATFORM</span>
            </div>

            <h2 class="setu-main-heading">
              Chunav Setu<br>
              <span class="gradient-text-orange">एक ऐप, पूरा चुनाव प्रबंधन।</span>
            </h2>

            <p class="setu-lead-text">
              Voter management से लेकर volunteer coordination, polling-day operations और real-time reports तक — campaign team को एक organized workflow में लाने के लिए बनाया गया solution.
            </p>

            <!-- 4 Features List -->
            <div class="setu-features-list">
              
              <div class="setu-feat-card">
                <div class="feat-check-icon">✓</div>
                <div class="feat-body">
                  <h4 class="feat-title">Voter Management</h4>
                  <p class="feat-desc">जानकारी, संपर्क, जातिगत/क्षेत्रीय समीकरण और status tracking.</p>
                </div>
              </div>

              <div class="setu-feat-card">
                <div class="feat-check-icon">✓</div>
                <div class="feat-body">
                  <h4 class="feat-title">Volunteer Coordination</h4>
                  <p class="feat-desc">ग्राउंड टीम, tasks, वार्ड आवंटन और दैनिक progress management.</p>
                </div>
              </div>

              <div class="setu-feat-card">
                <div class="feat-check-icon">✓</div>
                <div class="feat-body">
                  <h4 class="feat-title">Polling Day Operations</h4>
                  <p class="feat-desc">बूथ-वार पर्ची वितरण, पोलिंग अपडेट्स और field activity visibility.</p>
                </div>
              </div>

              <div class="setu-feat-card">
                <div class="feat-check-icon">✓</div>
                <div class="feat-body">
                  <h4 class="feat-title">Real-time Reports</h4>
                  <p class="feat-desc">वॉर-रूम के लिए लाइव डैशबोर्ड और डेटा आधारित decision support.</p>
                </div>
              </div>

            </div>

            <div class="setu-action-row">
              <a href="https://wa.me/916375983593?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20Digital%20Netagiri%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20*Chunav%20Setu%20App*%20%E0%A4%95%E0%A4%BE%20Live%20Demo%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4" target="_blank" rel="noopener noreferrer" class="btn btn-primary-setu" id="chunavSetuDemoBtn">
                <span>Chunav Setu Demo लें</span>
                <svg viewBox="0 0 20 20" fill="currentColor" class="btn-arrow"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
              </a>
              <span class="demo-support-text">⚡ त्वरित डेमो • नो कमिटमेंट</span>
            </div>
          </div>

          <!-- Interactive Interactive Command Center UI Right -->
          <div class="chunav-ui-demo reveal-on-scroll">
            <div class="saas-window">
              <!-- Window Chrome -->
              <div class="saas-header">
                <div class="saas-breadcrumbs">
                  <span class="saas-logo-mini">CS</span>
                  <span class="saas-env">Chunav Setu / War Room v3.2</span>
                  <span class="saas-demo-tag">DEMO DASHBOARD</span>
                </div>
                <div class="saas-actions">
                  <span class="saas-ping"></span>
                  <span class="saas-status-text">Live Connected</span>
                </div>
              </div>

              <!-- Interactive Ward Filter Tabs -->
              <div class="saas-tabs-bar">
                <span class="tabs-label">चुनें वार्ड/क्षेत्र:</span>
                <div class="filter-buttons" id="wardFilterBtns">
                  <button class="filter-btn active" data-ward="all">All Wards (45)</button>
                  <button class="filter-btn" data-ward="central">Ward 01-15</button>
                  <button class="filter-btn" data-ward="east">Ward 16-30</button>
                  <button class="filter-btn" data-ward="west">Ward 31-45</button>
                </div>
              </div>

              <!-- Dynamic Data Panels -->
              <div class="saas-body">
                
                <!-- Main KPI Cards -->
                <div class="saas-stats-grid">
                  <div class="stat-card">
                    <div class="st-label">Total Registered Voters</div>
                    <div class="st-val" id="saasVoters">12,45,000</div>
                    <div class="st-meta text-success">↑ 98.2% List Verified</div>
                  </div>
                  <div class="stat-card">
                    <div class="st-label">Active Volunteers</div>
                    <div class="st-val" id="saasVolunteers">1,120</div>
                    <div class="st-meta text-warning">● 340 In Field Now</div>
                  </div>
                  <div class="stat-card">
                    <div class="st-label">Booths Managed</div>
                    <div class="st-val" id="saasBooths">180 / 195</div>
                    <div class="st-meta text-info">92% In-Charge Assigned</div>
                  </div>
                  <div class="stat-card">
                    <div class="st-label">Campaign Health</div>
                    <div class="st-val" id="saasHealth">98.4%</div>
                    <div class="st-meta text-success">Optimal Outreach</div>
                  </div>
                </div>

                <!-- Live Booth Activity Simulator -->
                <div class="saas-panel-row">
                  <div class="saas-panel booth-panel">
                    <div class="panel-header">
                      <div class="panel-header-title">
                        <span>बूथ निगरानी स्थिति (Live Demo)</span>
                        <span class="table-swipe-pill">Swipe ↔</span>
                      </div>
                      <span class="panel-badge">Updated: Just Now</span>
                    </div>
                    <div class="booth-table-responsive">
                      <table class="saas-table">
                        <thead>
                          <tr>
                            <th>बूथ नं.</th>
                            <th>क्षेत्र/स्थान</th>
                            <th>प्रभारी</th>
                            <th>मतदाता</th>
                            <th>स्टेटस</th>
                          </tr>
                        </thead>
                        <tbody id="boothTableBody">
                          <tr>
                            <td><strong>#01</strong></td>
                            <td>राजकीय विद्यालय कक्ष 1</td>
                            <td>महेश शर्मा</td>
                            <td>940</td>
                            <td><span class="status-pill status-ready">Ready (100%)</span></td>
                          </tr>
                          <tr>
                            <td><strong>#02</strong></td>
                            <td>सामुदायिक केंद्र, मुख्य मार्ग</td>
                            <td>सुरेश कुमार</td>
                            <td>1,120</td>
                            <td><span class="status-pill status-ready">Ready (95%)</span></td>
                          </tr>
                          <tr>
                            <td><strong>#03</strong></td>
                            <td>वार्ड कार्यालय परिसर</td>
                            <td>राकेश वर्मा</td>
                            <td>850</td>
                            <td><span class="status-pill status-progress">In Progress</span></td>
                          </tr>
                          <tr>
                            <td><strong>#04</strong></td>
                            <td>आदर्श बाल विद्या मंदिर</td>
                            <td>अनिल जोशी</td>
                            <td>1,030</td>
                            <td><span class="status-pill status-ready">Ready (98%)</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- Last Sync Status Footer -->
                <div class="saas-footer-status">
                  <div class="sync-info">
                    <svg viewBox="0 0 20 20" fill="currentColor" class="sync-icon"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/></svg>
                    <span>Last Cloud Sync: <strong id="liveSyncTimer">09:40:12 AM</strong></span>
                  </div>
                  <div class="demo-note">* डेमो डेटा केवल सॉफ्टवेयर विजुअलाइजेशन के लिए है।</div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
};
