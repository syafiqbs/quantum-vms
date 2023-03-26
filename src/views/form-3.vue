<template>
  <div class="form3-container">
    <div class="form3-form3admin">
      <div class="form3-header-horizontal">
        <div class="form3-frame12">
          <span class="form3-text"><span>Quantum VMS</span></span>
          <div class="form3-frame11" @click.prevent="handleHome">
            <div class="form3-frame10">
              <span class="form3-text002"><span>Home</span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="form3-container-form-info">
        <span class="form3-text006">
          <span>Health Performance Evaluation <h3>{{ performanceEvaluationResults }}</h3></span>
        </span>
        <div class="form3-container01">
          <label class="form3-text008">Form ID:</label>
          <span id="form3-id" class="form3-text009">
            <span>QLI-QHSP-10-F05</span>
            <br />
          </span>
        </div>
        <div class="form3-container02">
          <label class="form3-text012">Rev No:</label>
          <span id="form3-revno" class="form3-text013">
            <span>0</span>
            <br />
          </span>
        </div>
        <div class="form3-container03">
          <label class="form3-text016">
            <span>Effective Date:</span>
            <br />
          </label>
          <span id="form3-effectivedate" class="form3-text019">
            <span>04.04.2022</span>
            <br />
          </span>
        </div>
      </div>
      <div class="form3-container-steps">
        <div class="form3-tab">
          <div class="form3-frame111">
            <a href="#form3-input-contractorName" class="form3-link">
              <div class="form3-frame101">
                <span class="form3-text022"><span>Step 1</span></span>
              </div>
            </a>
          </div>
          <img
            alt="Line26I501"
            src="/playground_assets/line26i501-c95e.svg"
            class="form3-line26"
          />
        </div>
        <div class="form3-tab1">
          <div class="form3-frame112">
            <a href="#container-part1">
              <div class="form3-frame102">
                <span class="form3-text024"><span>Step 2</span></span>
              </div>
            </a>
          </div>
        </div>
        <div class="form3-tab2">
          <div class="form3-frame113">
            <a href="#form3-radio-3a" class="form3-link1">
              <div class="form3-frame103">
                <span class="form3-text026"><span>Step 3</span></span>
              </div>
            </a>
          </div>
        </div>
        <div class="form3-tab3">
          <div class="form3-frame114">
            <a href="#form3-radio-5a">
              <div class="form3-frame104">
                <span class="form3-text028"><span>Step 4</span></span>
              </div>
            </a>
          </div>
        </div>
        <div class="form3-tab4">
          <div class="form3-frame115">
            <a href="#form3-input-evaluatedByName" class="form3-link2">
              <div class="form3-frame105">
                <span class="form3-text030"><span>Step 5</span></span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <form @submit="handleSubmit">
        <div class="form3-container-contractor-info">
          <div class="form3-inputtext">
            <span class="form3-text032"><span>Name of Contractor</span></span>
            <input
              type="text"
              id="form3-input-contractorName"
              required
              class="form3-textinput input form3-contractorInfo"
              :disabled="!isVendor"
              v-model="contractorName"
            />
          </div>
          <div class="form3-inputtext1">
            <span class="form3-text034"><span>Trade</span></span>
            <input
              type="text"
              id="form3-input-trade"
              required
              class="form3-textinput01 input form3-contractorInfo"
              :disabled="!isVendor"
              v-model="trade"
            />
          </div>
          <div class="form3-inputtext2">
            <span class="form3-text036"><span>Project/ Worksite</span></span>
            <input
              type="text"
              id="form3-input-worksite"
              required
              class="form3-textinput02 input form3-contractorInfo"
              :disabled="!isVendor"
              v-model="projectWorksite"
            />
          </div>
          <div class="form3-inputtext3">
            <span class="form3-text038"><span>Date of Evaluation</span></span>
            <input
              type="date"
              id="form3-input-dateOfEval"
              required
              class="form3-textinput03 input form3-contractorInfo"
              :disabled="!isVendor"
              v-model="date"
            />
          </div>
        </div>
        <div class="form3-container04">
          <span class="form3-text040">
            1 (Poor) | 2 (Below Average) | 3 (Average) | 4 (Above Average) | 5
            (Good)
          </span>
        </div>
        <div id="container-part1" class="form3-container-part1">
          <span class="form3-text041">
            <span>PART I: PARTICIPATION IN SAFETY</span>
          </span>
          <div class="form3-container-part1a">
            <span class="form3-text043">
              <span>a) Attendance in Safety Meeting</span>
            </span>
            <div id="form3-radio-1a" class="form3-container-radio-1a">
              <div class="form3-container-1">
                <input
                  type="radio"
                  name="form3-radio-1a"
                  value="1"
                  class="form3-radiobutton"
                  required
                  :disabled="!isVendor"
                  v-model="attendanceSafetyMeeting"
                />
                <label class="form3-text045">1</label>
              </div>
              <div class="form3-container-2">
                <input
                  type="radio"
                  name="form3-radio-1a"
                  value="2"
                  class="form3-radiobutton001"
                  :disabled="!isVendor"
                  v-model="attendanceSafetyMeeting"
                />
                <label class="form3-text046">2</label>
              </div>
              <div class="form3-container-3">
                <input
                  type="radio"
                  name="form3-radio-1a"
                  value="3"
                  class="form3-radiobutton002"
                  :disabled="!isVendor"
                  v-model="attendanceSafetyMeeting"
                />
                <label class="form3-text047">3</label>
              </div>
              <div class="form3-container-4">
                <input
                  type="radio"
                  name="form3-radio-1a"
                  value="4"
                  class="form3-radiobutton003"
                  :disabled="!isVendor"
                  v-model="attendanceSafetyMeeting"
                />
                <label class="form3-text048">4</label>
              </div>
              <div class="form3-container-5">
                <input
                  type="radio"
                  name="form3-radio-1a"
                  value="5"
                  class="form3-radio"
                  :disabled="!isVendor"
                  v-model="attendanceSafetyMeeting"
                />
                <label class="form3-text049">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part1b">
            <span class="form3-text050"><span>b) Tool Box Meeting</span></span>
            <div id="form3-radio-1b" class="form3-container-radio-1b">
              <div class="form3-container-101">
                <input
                  type="radio"
                  name="form3-radio-1b"
                  value="1"
                  class="form3-radiobutton004"
                  :disabled="!isVendor"
                  required
                  v-model="toolBoxMeeting"
                />
                <label class="form3-text052">1</label>
              </div>
              <div class="form3-container-201">
                <input
                  type="radio"
                  name="form3-radio-1b"
                  value="2"
                  class="form3-radiobutton005"
                  :disabled="!isVendor"
                  v-model="toolBoxMeeting"
                />
                <label class="form3-text053">2</label>
              </div>
              <div class="form3-container-301">
                <input
                  type="radio"
                  name="form3-radio-1b"
                  value="3"
                  class="form3-radiobutton006"
                  :disabled="!isVendor"
                  v-model="toolBoxMeeting"
                />
                <label class="form3-text054">3</label>
              </div>
              <div class="form3-container-401">
                <input
                  type="radio"
                  name="form3-radio-1b"
                  value="4"
                  class="form3-radiobutton007"
                  :disabled="!isVendor"
                  v-model="toolBoxMeeting"
                />
                <label class="form3-text055">4</label>
              </div>
              <div class="form3-container-501">
                <input
                  type="radio"
                  name="form3-radio-1b"
                  value="5"
                  class="form3-radio01"
                  :disabled="!isVendor"
                  v-model="toolBoxMeeting"
                />
                <label class="form3-text056">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part1c">
            <span class="form3-text057">
              <span>c) Compliance To Rules &amp; Regulation</span>
            </span>
            <div id="form3-radio-1c" class="form3-container-radio-1c">
              <div class="form3-container-102">
                <input
                  type="radio"
                  name="form3-radio-1c"
                  value="1"
                  class="form3-radiobutton008"
                  :disabled="!isVendor"
                  required
                  v-model="complianceRulesAndRegulation"
                />
                <label class="form3-text059">1</label>
              </div>
              <div class="form3-container-202">
                <input
                  type="radio"
                  name="form3-radio-1c"
                  value="2"
                  class="form3-radiobutton009"
                  :disabled="!isVendor"
                  v-model="complianceRulesAndRegulation"
                />
                <label class="form3-text060">2</label>
              </div>
              <div class="form3-container-302">
                <input
                  type="radio"
                  name="form3-radio-1c"
                  value="3"
                  class="form3-radiobutton010"
                  :disabled="!isVendor"
                  v-model="complianceRulesAndRegulation"
                />
                <label class="form3-text061">3</label>
              </div>
              <div class="form3-container-402">
                <input
                  type="radio"
                  name="form3-radio-1c"
                  value="4"
                  class="form3-radiobutton011"
                  :disabled="!isVendor"
                  v-model="complianceRulesAndRegulation"
                />
                <label class="form3-text062">4</label>
              </div>
              <div class="form3-container-502">
                <input
                  type="radio"
                  name="form3-radio-1c"
                  value="5"
                  class="form3-radio02"
                  :disabled="!isVendor"
                  v-model="complianceRulesAndRegulation"
                />
                <label class="form3-text063">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part1d">
            <span class="form3-text064">
              <span>d) Safety Promotional Activities</span>
            </span>
            <div id="form3-radio-1d" class="form3-container-radio-1d">
              <div class="form3-container-103">
                <input
                  type="radio"
                  name="form3-radio-1d"
                  value="1"
                  class="form3-radiobutton012"
                  :disabled="!isVendor"
                  required
                  v-model="safetyPromotionalActivities"
                />
                <label class="form3-text066">1</label>
              </div>
              <div class="form3-container-203">
                <input
                  type="radio"
                  name="form3-radio-1d"
                  value="2"
                  class="form3-radiobutton013"
                  :disabled="!isVendor"
                  v-model="safetyPromotionalActivities"
                />
                <label class="form3-text067">2</label>
              </div>
              <div class="form3-container-303">
                <input
                  type="radio"
                  name="form3-radio-1d"
                  value="3"
                  class="form3-radiobutton014"
                  :disabled="!isVendor"
                  v-model="safetyPromotionalActivities"
                />
                <label class="form3-text068">3</label>
              </div>
              <div class="form3-container-403">
                <input
                  type="radio"
                  name="form3-radio-1d"
                  value="4"
                  class="form3-radiobutton015"
                  :disabled="!isVendor"
                  v-model="safetyPromotionalActivities"
                />
                <label class="form3-text069">4</label>
              </div>
              <div class="form3-container-503">
                <input
                  type="radio"
                  name="form3-radio-1d"
                  value="5"
                  class="form3-radio03"
                  v-model="safetyPromotionalActivities"
                  :disabled="!isVendor"
                />
                <label class="form3-text070">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part1e">
            <span class="form3-text071"><span>e) Document Submission</span></span>
            <div id="form3-radio-1e" class="form3-container-radio-1e">
              <div class="form3-container-104">
                <input
                  type="radio"
                  name="form3-radio-1e"
                  value="1"
                  class="form3-radiobutton016"
                  :disabled="!isVendor"
                  required
                  v-model="documentSubmission"
                />
                <label class="form3-text073">1</label>
              </div>
              <div class="form3-container-204">
                <input
                  type="radio"
                  name="form3-radio-1e"
                  value="2"
                  class="form3-radiobutton017"
                  :disabled="!isVendor"
                  v-model="documentSubmission"
                />
                <label class="form3-text074">2</label>
              </div>
              <div class="form3-container-304">
                <input
                  type="radio"
                  name="form3-radio-1e"
                  value="3"
                  class="form3-radiobutton018"
                  :disabled="!isVendor"
                  v-model="documentSubmission"
                />
                <label class="form3-text075">3</label>
              </div>
              <div class="form3-container-404">
                <input
                  type="radio"
                  name="form3-radio-1e"
                  value="4"
                  class="form3-radiobutton019"
                  :disabled="!isVendor"
                  v-model="documentSubmission"
                />
                <label class="form3-text076">4</label>
              </div>
              <div class="form3-container-504">
                <input
                  type="radio"
                  name="form3-radio-1e"
                  value="5"
                  class="form3-radio04"
                  v-model="documentSubmission"
                  :disabled="!isVendor"
                />
                <label class="form3-text077">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part1-score">
            <input
              type="text"
              id="form3-part1-score"
              disabled
              placeholder="0"
              class="form3-textinput04 input"
              v-model="computePartOneScore"
            />
            <!-- <button
              id="form3-btn-fetchScore-p1"
              type="button"
              class="form3-button button"
            >
              Fetch Score
            </button> -->
          </div>
        </div>
        <div class="form3-container-part2">
          <span class="form3-text078">
            <span>PART II: SAFETY TRAINING AND COMPETENCIES (% OF ATTENDANCE)</span>
          </span>
          <div class="form3-container-part2a">
            <span class="form3-text080">
              <span>a) Statutory Safety Training Course</span>
            </span>
            <div id="form3-radio-2a" class="form3-container-radio-2a">
              <div class="form3-container-105">
                <input
                  type="radio"
                  name="form3-radio-2a"
                  value="1"
                  class="form3-radiobutton020"
                  :disabled="!isVendor"
                  required
                  v-model="safetyTraining"
                />
                <label class="form3-text082">1</label>
              </div>
              <div class="form3-container-205">
                <input
                  type="radio"
                  name="form3-radio-2a"
                  value="2"
                  class="form3-radiobutton021"
                  :disabled="!isVendor"
                  v-model="safetyTraining"
                />
                <label class="form3-text083">2</label>
              </div>
              <div class="form3-container-305">
                <input
                  type="radio"
                  name="form3-radio-2a"
                  value="3"
                  class="form3-radiobutton022"
                  :disabled="!isVendor"
                  v-model="safetyTraining"
                />
                <label class="form3-text084">3</label>
              </div>
              <div class="form3-container-405">
                <input
                  type="radio"
                  name="form3-radio-2a"
                  value="4"
                  class="form3-radiobutton023"
                  v-model="safetyTraining"
                  :disabled="!isVendor"
                />
                <label class="form3-text085">4</label>
              </div>
              <div class="form3-container-505">
                <input
                  type="radio"
                  name="form3-radio-2a"
                  value="5"
                  class="form3-radio05"
                  v-model="safetyTraining"
                  :disabled="!isVendor"
                />
                <label class="form3-text086">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part2b">
            <span class="form3-text087"><span>b) Safety Trade Course</span></span>
            <div id="form3-radio-2b" class="form3-container-radio-2b">
              <div class="form3-container-106">
                <input
                  type="radio"
                  name="form3-radio-2b"
                  value="1"
                  class="form3-radiobutton024"
                  :disabled="!isVendor"
                  required
                  v-model="safetyTrade"
                />
                <label class="form3-text089">1</label>
              </div>
              <div class="form3-container-206">
                <input
                  type="radio"
                  name="form3-radio-2b"
                  value="2"
                  class="form3-radiobutton025"
                  :disabled="!isVendor"
                  v-model="safetyTrade"
                />
                <label class="form3-text090">2</label>
              </div>
              <div class="form3-container-306">
                <input
                  type="radio"
                  name="form3-radio-2b"
                  value="3"
                  class="form3-radiobutton026"
                  :disabled="!isVendor"
                  v-model="safetyTrade"
                />
                <label class="form3-text091">3</label>
              </div>
              <div class="form3-container-406">
                <input
                  type="radio"
                  name="form3-radio-2b"
                  value="4"
                  class="form3-radiobutton027"
                  :disabled="!isVendor"
                  v-model="safetyTrade"
                />
                <label class="form3-text092">4</label>
              </div>
              <div class="form3-container-506">
                <input
                  type="radio"
                  name="form3-radio-2b"
                  value="5"
                  class="form3-radio06"
                  v-model="safetyTrade"
                  :disabled="!isVendor"
                />
                <label class="form3-text093">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part2c">
            <span class="form3-text094"><span>c) Mass Safety Talk</span></span>
            <div id="form3-radio-2c" class="form3-container-radio-2c">
              <div class="form3-container-107">
                <input
                  type="radio"
                  name="form3-radio-2c"
                  value="1"
                  class="form3-radiobutton028"
                  :disabled="!isVendor"
                  v-model="safetyTalk"

                />
                <label class="form3-text096">1</label>
              </div>
              <div class="form3-container-207">
                <input
                  type="radio"
                  name="form3-radio-2c"
                  value="2"
                  class="form3-radiobutton029"
                  :disabled="!isVendor"
                  v-model="safetyTalk"
                />
                <label class="form3-text097">2</label>
              </div>
              <div class="form3-container-307">
                <input
                  type="radio"
                  name="form3-radio-2c"
                  value="3"
                  class="form3-radiobutton030"
                  :disabled="!isVendor"
                  v-model="safetyTalk"
                />
                <label class="form3-text098">3</label>
              </div>
              <div class="form3-container-407">
                <input
                  type="radio"
                  name="form3-radio-2c"
                  value="4"
                  class="form3-radiobutton031"
                  :disabled="!isVendor"
                  v-model="safetyTalk"
                />
                <label class="form3-text099">4</label>
              </div>
              <div class="form3-container-507">
                <input
                  type="radio"
                  name="form3-radio-2c"
                  value="5"
                  class="form3-radio07"
                  v-model="safetyTalk"
                  :disabled="!isVendor"
                />
                <label class="form3-text100">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part2d">
            <span class="form3-text101">
              <span>d) WSH Safety Coordinator/ Supervisor</span>
            </span>
            <div id="form3-radio-2d" class="form3-container-radio-2d">
              <div class="form3-container-108">
                <input
                  type="radio"
                  name="form3-radio-2d"
                  value="1"
                  class="form3-radiobutton032"
                  :disabled="!isVendor"
                  required
                  v-model="wshSafetyCoordinator"
                />
                <label class="form3-text103">1</label>
              </div>
              <div class="form3-container-208">
                <input
                  type="radio"
                  name="form3-radio-2d"
                  value="2"
                  class="form3-radiobutton033"
                  :disabled="!isVendor"
                  v-model="wshSafetyCoordinator"
                />
                <label class="form3-text104">2</label>
              </div>
              <div class="form3-container-308">
                <input
                  type="radio"
                  name="form3-radio-2d"
                  value="3"
                  class="form3-radiobutton034"
                  :disabled="!isVendor"
                  v-model="wshSafetyCoordinator"
                />
                <label class="form3-text105">3</label>
              </div>
              <div class="form3-container-408">
                <input
                  type="radio"
                  name="form3-radio-2d"
                  value="4"
                  class="form3-radiobutton035"
                  :disabled="!isVendor"
                  v-model="wshSafetyCoordinator"
                />
                <label class="form3-text106">4</label>
              </div>
              <div class="form3-container-508">
                <input
                  type="radio"
                  name="form3-radio-2d"
                  value="5"
                  class="form3-radio08"
                  v-model="wshSafetyCoordinator"
                  :disabled="!isVendor"
                />
                <label class="form3-text107">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part2e">
            <span class="form3-text108"><span>e) Other Safety Training</span></span>
            <div id="form3-radio-2e" class="form3-container-part2e1">
              <div class="form3-container-109">
                <input
                  type="radio"
                  name="form3-radio-2e"
                  value="1"
                  class="form3-radiobutton036"
                  :disabled="!isVendor"
                  required
                  v-model="otherSafetyTraining"
                />
                <label class="form3-text110">1</label>
              </div>
              <div class="form3-container-209">
                <input
                  type="radio"
                  name="form3-radio-2e"
                  value="2"
                  class="form3-radiobutton037"
                  :disabled="!isVendor"
                  v-model="otherSafetyTraining"
                />
                <label class="form3-text111">2</label>
              </div>
              <div class="form3-container-309">
                <input
                  type="radio"
                  name="form3-radio-2e"
                  value="3"
                  class="form3-radiobutton038"
                  :disabled="!isVendor"
                  v-model="otherSafetyTraining"
                />
                <label class="form3-text112">3</label>
              </div>
              <div class="form3-container-409">
                <input
                  type="radio"
                  name="form3-radio-2e"
                  value="4"
                  class="form3-radiobutton039"
                  :disabled="!isVendor"
                  v-model="otherSafetyTraining"
                />
                <label class="form3-text113">4</label>
              </div>
              <div class="form3-container-509">
                <input
                  type="radio"
                  name="form3-radio-2e"
                  value="5"
                  class="form3-radio09"
                  v-model="otherSafetyTraining"
                  :disabled="!isVendor"
                />
                <label class="form3-text114">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part2-score">
            <input
              type="text"
              id="form3-part2-score"
              disabled
              placeholder="0"
              class="form3-textinput05 input"
              v-model="computePartTwoScore"
            />
            <!-- <button
              id="form3-btn-fetchScore-p2"
              type="button"
              class="form3-button01 button"
            >
              Fetch Score
            </button> -->
          </div>
        </div>
        <div class="form3-container-part3">
          <span class="form3-text115">
            <span>PART III: ACCIDENT/ INCIDENT PREVIEW</span>
          </span>
          <div class="form3-container-part3a">
            <span class="form3-text117">
              <span>a) Effort in Accident Prevention</span>
            </span>
            <div id="form3-radio-3a" class="form3-container-radio-3a">
              <div class="form3-container-110">
                <input
                  type="radio"
                  name="form3-radio-3a"
                  value="1"
                  class="form3-radiobutton040"
                  :disabled="!isVendor"
                  required
                  v-model="accidentPrevention"
                />
                <label class="form3-text119">1</label>
              </div>
              <div class="form3-container-210">
                <input
                  type="radio"
                  name="form3-radio-3a"
                  value="2"
                  class="form3-radiobutton041"
                  :disabled="!isVendor"
                  v-model="accidentPrevention"
                />
                <label class="form3-text120">2</label>
              </div>
              <div class="form3-container-310">
                <input
                  type="radio"
                  name="form3-radio-3a"
                  value="3"
                  class="form3-radiobutton042"
                  :disabled="!isVendor"
                  v-model="accidentPrevention"
                />
                <label class="form3-text121">3</label>
              </div>
              <div class="form3-container-410">
                <input
                  type="radio"
                  name="form3-radio-3a"
                  value="4"
                  class="form3-radiobutton043"
                  :disabled="!isVendor"
                  v-model="accidentPrevention"
                />
                <label class="form3-text122">4</label>
              </div>
              <div class="form3-container-510">
                <input
                  type="radio"
                  name="form3-radio-3a"
                  value="5"
                  class="form3-radio10"
                  v-model="accidentPrevention"
                  :disabled="!isVendor"
                />
                <label class="form3-text123">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part3b">
            <span class="form3-text124">
              <span>b) Safe Work Practice/ Permit To Work</span>
            </span>
            <div id="form3-radio-3b" class="form3-container-radio-3b">
              <div class="form3-container-111">
                <input
                  type="radio"
                  name="form3-radio-3b"
                  value="1"
                  class="form3-radiobutton044"
                  :disabled="!isVendor"
                  required
                  v-model="safeWorkPractice"
                />
                <label class="form3-text126">1</label>
              </div>
              <div class="form3-container-211">
                <input
                  type="radio"
                  name="form3-radio-3b"
                  value="2"
                  class="form3-radiobutton045"
                  :disabled="!isVendor"
                  v-model="safeWorkPractice"
                />
                <label class="form3-text127">2</label>
              </div>
              <div class="form3-container-311">
                <input
                  type="radio"
                  name="form3-radio-3b"
                  value="3"
                  class="form3-radiobutton046"
                  :disabled="!isVendor"
                  v-model="safeWorkPractice"
                />
                <label class="form3-text128">3</label>
              </div>
              <div class="form3-container-411">
                <input
                  type="radio"
                  name="form3-radio-3b"
                  value="4"
                  class="form3-radiobutton047"
                  :disabled="!isVendor"
                  v-model="safeWorkPractice"
                />
                <label class="form3-text129">4</label>
              </div>
              <div class="form3-container-511">
                <input
                  type="radio"
                  name="form3-radio-3b"
                  value="5"
                  class="form3-radio11"
                  v-model="safeWorkPractice"
                  :disabled="!isVendor"
                />
                <label class="form3-text130">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part3c">
            <span class="form3-text131">
              <span>c) Incident Severity &amp; Frequency Rate</span>
            </span>
            <div id="form3-radio-3c" class="form3-container-radio-3c">
              <div class="form3-container-112">
                <input
                  type="radio"
                  name="form3-radio-3c"
                  value="1"
                  class="form3-radiobutton048"
                  :disabled="!isVendor"
                  required
                  v-model="incidentSeverity"
                />
                <label class="form3-text133">1</label>
              </div>
              <div class="form3-container-212">
                <input
                  type="radio"
                  name="form3-radio-3c"
                  value="2"
                  class="form3-radiobutton049"
                  :disabled="!isVendor"
                  v-model="incidentSeverity"
                />
                <label class="form3-text134">2</label>
              </div>
              <div class="form3-container-312">
                <input
                  type="radio"
                  name="form3-radio-3c"
                  value="3"
                  class="form3-radiobutton050"
                  :disabled="!isVendor"
                  v-model="incidentSeverity"
                />
                <label class="form3-text135">3</label>
              </div>
              <div class="form3-container-412">
                <input
                  type="radio"
                  name="form3-radio-3c"
                  value="4"
                  class="form3-radiobutton051"
                  :disabled="!isVendor"
                  v-model="incidentSeverity"
                />
                <label class="form3-text136">4</label>
              </div>
              <div class="form3-container-512">
                <input
                  type="radio"
                  name="form3-radio-3c"
                  value="5"
                  class="form3-radio12"
                  v-model="incidentSeverity"
                  :disabled="!isVendor"
                />
                <label class="form3-text137">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part3d">
            <span class="form3-text138"><span>d) Safety Offence</span></span>
            <div id="form3-radio-3d" class="form3-container-radio-3d">
              <div class="form3-container-113">
                <input
                  type="radio"
                  name="form3-radio-3d"
                  value="1"
                  class="form3-radiobutton052"
                  :disabled="!isVendor"
                  required
                  v-model="safetyOffense"
                />
                <label class="form3-text140">1</label>
              </div>
              <div class="form3-container-213">
                <input
                  type="radio"
                  name="form3-radio-3d"
                  value="2"
                  class="form3-radiobutton053"
                  :disabled="!isVendor"
                  v-model="safetyOffense"
                />
                <label class="form3-text141">2</label>
              </div>
              <div class="form3-container-313">
                <input
                  type="radio"
                  name="form3-radio-3d"
                  value="3"
                  class="form3-radiobutton054"
                  :disabled="!isVendor"
                  v-model="safetyOffense"
                />
                <label class="form3-text142">3</label>
              </div>
              <div class="form3-container-413">
                <input
                  type="radio"
                  name="form3-radio-3d"
                  value="4"
                  class="form3-radiobutton055"
                  :disabled="!isVendor"
                  v-model="safetyOffense"
                />
                <label class="form3-text143">4</label>
              </div>
              <div class="form3-container-513">
                <input
                  type="radio"
                  name="form3-radio-3d"
                  value="5"
                  class="form3-radio13"
                  v-model="safetyOffense"
                  :disabled="!isVendor"
                />
                <label class="form3-text144">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part3e">
            <span class="form3-text145">
              <span>e) Safety Inspection And Rectification</span>
            </span>
            <div id="form3-radio-3e" class="form3-container-radio-3e">
              <div class="form3-container-114">
                <input
                  type="radio"
                  name="form3-radio-3e"
                  value="1"
                  class="form3-radiobutton056"
                  :disabled="!isVendor"
                  required
                  v-model="safetyInspection"
                />
                <label class="form3-text147">1</label>
              </div>
              <div class="form3-container-214">
                <input
                  type="radio"
                  name="form3-radio-3e"
                  value="2"
                  class="form3-radiobutton057"
                  :disabled="!isVendor"
                  v-model="safetyInspection"
                />
                <label class="form3-text148">2</label>
              </div>
              <div class="form3-container-314">
                <input
                  type="radio"
                  name="form3-radio-3e"
                  value="3"
                  class="form3-radiobutton058"
                  :disabled="!isVendor"
                  v-model="safetyInspection"
                />
                <label class="form3-text149">3</label>
              </div>
              <div class="form3-container-414">
                <input
                  type="radio"
                  name="form3-radio-3e"
                  value="4"
                  class="form3-radiobutton059"
                  :disabled="!isVendor"
                  v-model="safetyInspection"
                />
                <label class="form3-text150">4</label>
              </div>
              <div class="form3-container-514">
                <input
                  type="radio"
                  name="form3-radio-3e"
                  value="5"
                  class="form3-radio14"
                  v-model="safetyInspection"
                  :disabled="!isVendor"
                />
                <label class="form3-text151">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part3-score">
            <input
              type="text"
              id="form3-part3-score"
              disabled
              placeholder="0"
              class="form3-textinput06 input"
              v-model="computePartThreeScore"
            />
            <!-- <button
              id="form3-btn-fetchScore-p3"
              type="button"
              class="form3-button02 button"
            >
              Fetch Score
            </button> -->
          </div>
        </div>
        <div class="form3-container-part4">
          <span class="form3-text152">
            <span>PART IV: MAINTENANCE OF EQUIPMENT</span>
          </span>
          <div class="form3-container-part4a">
            <span class="form3-text154">
              <span>a) Explosive Powered Tool/ Cutting Tool</span>
            </span>
            <div id="form3-radio-4a" class="form3-container-radio-4a">
              <div class="form3-container-115">
                <input
                  type="radio"
                  name="form3-radio-4a"
                  value="1"
                  class="form3-radiobutton060"
                  :disabled="!isVendor"
                  required
                  v-model="explosivePoweredTool"
                />
                <label class="form3-text156">1</label>
              </div>
              <div class="form3-container-215">
                <input
                  type="radio"
                  name="form3-radio-4a"
                  value="2"
                  class="form3-radiobutton061"
                  :disabled="!isVendor"
                  v-model="explosivePoweredTool"
                />
                <label class="form3-text157">2</label>
              </div>
              <div class="form3-container-315">
                <input
                  type="radio"
                  name="form3-radio-4a"
                  value="3"
                  class="form3-radiobutton062"
                  :disabled="!isVendor"
                  v-model="explosivePoweredTool"
                />
                <label class="form3-text158">3</label>
              </div>
              <div class="form3-container-415">
                <input
                  type="radio"
                  name="form3-radio-4a"
                  value="4"
                  class="form3-radiobutton063"
                  :disabled="!isVendor"
                  v-model="explosivePoweredTool"
                />
                <label class="form3-text159">4</label>
              </div>
              <div class="form3-container-515">
                <input
                  type="radio"
                  name="form3-radio-4a"
                  value="5"
                  class="form3-radio15"
                  v-model="explosivePoweredTool"
                  :disabled="!isVendor"
                />
                <label class="form3-text160">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part4b">
            <span class="form3-text161"><span>b) Ladder</span></span>
            <div id="form3-radio-4b" class="form3-container-radio-4b">
              <div class="form3-container-116">
                <input
                  type="radio"
                  name="form3-radio-4b"
                  value="1"
                  class="form3-radiobutton064"
                  :disabled="!isVendor"
                  required
                  v-model="ladder"
                />
                <label class="form3-text163">1</label>
              </div>
              <div class="form3-container-216">
                <input
                  type="radio"
                  name="form3-radio-4b"
                  value="2"
                  class="form3-radiobutton065"
                  :disabled="!isVendor"
                  v-model="ladder"
                />
                <label class="form3-text164">2</label>
              </div>
              <div class="form3-container-316">
                <input
                  type="radio"
                  name="form3-radio-4b"
                  value="3"
                  class="form3-radiobutton066"
                  :disabled="!isVendor"
                  v-model="ladder"
                />
                <label class="form3-text165">3</label>
              </div>
              <div class="form3-container-416">
                <input
                  type="radio"
                  name="form3-radio-4b"
                  value="4"
                  class="form3-radiobutton067"
                  :disabled="!isVendor"
                  v-model="ladder"
                />
                <label class="form3-text166">4</label>
              </div>
              <div class="form3-container-516">
                <input
                  type="radio"
                  name="form3-radio-4b"
                  value="5"
                  class="form3-radio16"
                  v-model="ladder"
                  :disabled="!isVendor"
                />
                <label class="form3-text167">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part4c">
            <span class="form3-text168">
              <span>c) Lifting Gear/ Appliance/ Machine</span>
            </span>
            <div id="form3-radio-4c" class="form3-container-radio-4c">
              <div class="form3-container-117">
                <input
                  type="radio"
                  name="form3-radio-4c"
                  value="1"
                  class="form3-radiobutton068"
                  :disabled="!isVendor"
                  required
                  v-model="liftingGear"
                />
                <label class="form3-text170">1</label>
              </div>
              <div class="form3-container-217">
                <input
                  type="radio"
                  name="form3-radio-4c"
                  value="2"
                  class="form3-radiobutton069"
                  :disabled="!isVendor"
                  v-model="liftingGear"
                />
                <label class="form3-text171">2</label>
              </div>
              <div class="form3-container-317">
                <input
                  type="radio"
                  name="form3-radio-4c"
                  value="3"
                  class="form3-radiobutton070"
                  :disabled="!isVendor"
                  v-model="liftingGear"
                />
                <label class="form3-text172">3</label>
              </div>
              <div class="form3-container-417">
                <input
                  type="radio"
                  name="form3-radio-4c"
                  value="4"
                  class="form3-radiobutton071"
                  :disabled="!isVendor"
                  v-model="liftingGear"
                />
                <label class="form3-text173">4</label>
              </div>
              <div class="form3-container-517">
                <input
                  type="radio"
                  name="form3-radio-4c"
                  value="5"
                  class="form3-radio17"
                  v-model="liftingGear"
                  :disabled="!isVendor"
                />
                <label class="form3-text174">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part4d">
            <span class="form3-text175">
              <span>d) Electrical Equipment/ Compressor</span>
            </span>
            <div id="form3-radio-4d" class="form3-container-radio-4d">
              <div class="form3-container-118">
                <input
                  type="radio"
                  name="form3-radio-4d"
                  value="1"
                  class="form3-radiobutton072"
                  :disabled="!isVendor"
                  required
                  v-model="electricalEquipment"
                />
                <label class="form3-text177">1</label>
              </div>
              <div class="form3-container-218">
                <input
                  type="radio"
                  name="form3-radio-4d"
                  value="2"
                  class="form3-radiobutton073"
                  :disabled="!isVendor"
                  v-model="electricalEquipment"
                />
                <label class="form3-text178">2</label>
              </div>
              <div class="form3-container-318">
                <input
                  type="radio"
                  name="form3-radio-4d"
                  value="3"
                  class="form3-radiobutton074"
                  :disabled="!isVendor"
                  v-model="electricalEquipment"
                />
                <label class="form3-text179">3</label>
              </div>
              <div class="form3-container-418">
                <input
                  type="radio"
                  name="form3-radio-4d"
                  value="4"
                  class="form3-radiobutton075"
                  :disabled="!isVendor"
                  v-model="electricalEquipment"
                />
                <label class="form3-text180">4</label>
              </div>
              <div class="form3-container-518">
                <input
                  type="radio"
                  name="form3-radio-4d"
                  value="5"
                  class="form3-radio18"
                  v-model="electricalEquipment"
                  :disabled="!isVendor"
                />
                <label class="form3-text181">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part4e">
            <span class="form3-text182"><span>e) Other Machineries</span></span>
            <div id="form3-radio-4e" class="form3-container-radio-4e">
              <div class="form3-container-119">
                <input
                  type="radio"
                  name="form3-radio-4e"
                  value="1"
                  class="form3-radiobutton076"
                  :disabled="!isVendor"
                  required
                  v-model="otherMachineries"
                />
                <label class="form3-text184">1</label>
              </div>
              <div class="form3-container-219">
                <input
                  type="radio"
                  name="form3-radio-4e"
                  value="2"
                  class="form3-radiobutton077"
                  :disabled="!isVendor"
                  v-model="otherMachineries"
                />
                <label class="form3-text185">2</label>
              </div>
              <div class="form3-container-319">
                <input
                  type="radio"
                  name="form3-radio-4e"
                  value="3"
                  class="form3-radiobutton078"
                  :disabled="!isVendor"
                  v-model="otherMachineries"
                />
                <label class="form3-text186">3</label>
              </div>
              <div class="form3-container-419">
                <input
                  type="radio"
                  name="form3-radio-4e"
                  value="4"
                  class="form3-radiobutton079"
                  :disabled="!isVendor"
                  v-model="otherMachineries"
                />
                <label class="form3-text187">4</label>
              </div>
              <div class="form3-container-519">
                <input
                  type="radio"
                  name="form3-radio-4e"
                  value="5"
                  class="form3-radio19"
                  v-model="otherMachineries"
                  :disabled="!isVendor"
                />
                <label class="form3-text188">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part4-score">
            <input
              type="text"
              id="form3-part4-score"
              disabled
              placeholder="0"
              class="form3-textinput07 input"
              v-model="computePartFourScore"
            />
            <!-- <button
              id="form3-btn-fetchScore-p4"
              type="button"
              class="form3-button03 button"
            >
              Fetch Score
            </button> -->
          </div>
        </div>
        <div class="form3-container-part5">
          <span class="form3-text189">
            <span>PART V: GENERAL HOUSEKEEPING &amp; Others</span>
          </span>
          <div class="form3-container-part5a">
            <span class="form3-text191">
              <span>a) Subcon Snr Mgt Commitment to HS</span>
            </span>
            <div id="form3-radio-5a" class="form3-container-radio-5a">
              <div class="form3-container-120">
                <input
                  type="radio"
                  name="form3-radio-5a"
                  value="1"
                  class="form3-radiobutton080"
                  :disabled="!isVendor"
                  required
                  v-model="subconSnrMgmt"
                />
                <label class="form3-text193">1</label>
              </div>
              <div class="form3-container-220">
                <input
                  type="radio"
                  name="form3-radio-5a"
                  value="2"
                  class="form3-radiobutton081"
                  :disabled="!isVendor"
                  v-model="subconSnrMgmt"
                />
                <label class="form3-text194">2</label>
              </div>
              <div class="form3-container-320">
                <input
                  type="radio"
                  name="form3-radio-5a"
                  value="3"
                  class="form3-radiobutton082"
                  :disabled="!isVendor"
                  v-model="subconSnrMgmt"
                />
                <label class="form3-text195">3</label>
              </div>
              <div class="form3-container-420">
                <input
                  type="radio"
                  name="form3-radio-5a"
                  value="4"
                  class="form3-radiobutton083"
                  :disabled="!isVendor"
                  v-model="subconSnrMgmt"
                />
                <label class="form3-text196">4</label>
              </div>
              <div class="form3-container-520">
                <input
                  type="radio"
                  name="form3-radio-5a"
                  value="5"
                  class="form3-radio20"
                  v-model="subconSnrMgmt"
                  :disabled="!isVendor"
                />
                <label class="form3-text197">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part5b">
            <span class="form3-text198"><span>b) Compliance with PPE</span></span>
            <div id="form3-radio-5b" class="form3-container-radio-5b">
              <div class="form3-container-121">
                <input
                  type="radio"
                  name="form3-radio-5b"
                  value="1"
                  class="form3-radiobutton084"
                  :disabled="!isVendor"
                  required
                  v-model="compliancePPE"
                />
                <label class="form3-text200">1</label>
              </div>
              <div class="form3-container-221">
                <input
                  type="radio"
                  name="form3-radio-5b"
                  value="2"
                  class="form3-radiobutton085"
                  :disabled="!isVendor"
                  v-model="compliancePPE"
                />
                <label class="form3-text201">2</label>
              </div>
              <div class="form3-container-321">
                <input
                  type="radio"
                  name="form3-radio-5b"
                  value="3"
                  class="form3-radiobutton086"
                  :disabled="!isVendor"
                  v-model="compliancePPE"
                />
                <label class="form3-text202">3</label>
              </div>
              <div class="form3-container-421">
                <input
                  type="radio"
                  name="form3-radio-5b"
                  value="4"
                  class="form3-radiobutton087"
                  :disabled="!isVendor"
                  v-model="compliancePPE"
                />
                <label class="form3-text203">4</label>
              </div>
              <div class="form3-container-521">
                <input
                  type="radio"
                  name="form3-radio-5b"
                  value="5"
                  class="form3-radio21"
                  v-model="compliancePPE"
                  :disabled="!isVendor"
                />
                <label class="form3-text204">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part5c">
            <span class="form3-text205">
              <span>c) Housekeeping &amp; Cleanliness at Site</span>
            </span>
            <div id="form3-radio-5c" class="form3-container-radio-5c">
              <div class="form3-container-122">
                <input
                  type="radio"
                  name="form3-radio-5c"
                  value="1"
                  class="form3-radiobutton088"
                  :disabled="!isVendor"
                  required
                  v-model="sitehouseKeepingCleanliness"
                />
                <label class="form3-text207">1</label>
              </div>
              <div class="form3-container-222">
                <input
                  type="radio"
                  name="form3-radio-5c"
                  value="2"
                  class="form3-radiobutton089"
                  :disabled="!isVendor"
                  v-model="sitehouseKeepingCleanliness"
                />
                <label class="form3-text208">2</label>
              </div>
              <div class="form3-container-322">
                <input
                  type="radio"
                  name="form3-radio-5c"
                  value="3"
                  class="form3-radiobutton090"
                  :disabled="!isVendor"
                  v-model="sitehouseKeepingCleanliness"
                />
                <label class="form3-text209">3</label>
              </div>
              <div class="form3-container-422">
                <input
                  type="radio"
                  name="form3-radio-5c"
                  value="4"
                  class="form3-radiobutton091"
                  :disabled="!isVendor"
                  v-model="sitehouseKeepingCleanliness"
                />
                <label class="form3-text210">4</label>
              </div>
              <div class="form3-container-522">
                <input
                  type="radio"
                  name="form3-radio-5c"
                  value="5"
                  class="form3-radio22"
                  v-model="sitehouseKeepingCleanliness"
                  :disabled="!isVendor"
                />
                <label class="form3-text211">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part5d">
            <span class="form3-text212">
              <span>d) Housekeeping &amp; Cleanliness at Store</span>
            </span>
            <div id="form3-radio-5d" class="form3-container-radio-5d">
              <div class="form3-container-123">
                <input
                  type="radio"
                  name="form3-radio-5d"
                  value="1"
                  class="form3-radiobutton092"
                  :disabled="!isVendor"
                  required
                  v-model="storehouseKeepingCleanliness"
                />
                <label class="form3-text214">1</label>
              </div>
              <div class="form3-container-223">
                <input
                  type="radio"
                  name="form3-radio-5d"
                  value="2"
                  class="form3-radiobutton093"
                  :disabled="!isVendor"
                  v-model="storehouseKeepingCleanliness"
                />
                <label class="form3-text215">2</label>
              </div>
              <div class="form3-container-323">
                <input
                  type="radio"
                  name="form3-radio-5d"
                  value="3"
                  class="form3-radiobutton094"
                  :disabled="!isVendor"
                  v-model="storehouseKeepingCleanliness"
                />
                <label class="form3-text216">3</label>
              </div>
              <div class="form3-container-423">
                <input
                  type="radio"
                  name="form3-radio-5d"
                  value="4"
                  class="form3-radiobutton095"
                  :disabled="!isVendor"
                  v-model="storehouseKeepingCleanliness"
                />
                <label class="form3-text217">4</label>
              </div>
              <div class="form3-container-523">
                <input
                  type="radio"
                  name="form3-radio-5d"
                  value="5"
                  class="form3-radio23"
                  v-model="storehouseKeepingCleanliness"
                  :disabled="!isVendor"
                />
                <label class="form3-text218">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part5e">
            <span class="form3-text219">
              <span>e) Housekeeping &amp; Cleanliness at Quarter</span>
            </span>
            <div id="form3-radio-5e" class="form3-container-radio-5e">
              <div class="form3-container-124">
                <input
                  type="radio"
                  name="form3-radio-5e"
                  value="1"
                  class="form3-radiobutton096"
                  :disabled="!isVendor"
                  required
                  v-model="quarterhouseKeepingCleanliness"
                />
                <label class="form3-text221">1</label>
              </div>
              <div class="form3-container-224">
                <input
                  type="radio"
                  name="form3-radio-5e"
                  value="2"
                  class="form3-radiobutton097"
                  :disabled="!isVendor"
                  v-model="quarterhouseKeepingCleanliness"
                />
                <label class="form3-text222">2</label>
              </div>
              <div class="form3-container-324">
                <input
                  type="radio"
                  name="form3-radio-5e"
                  value="3"
                  class="form3-radiobutton098"
                  v-model="quarterhouseKeepingCleanliness"
                  :disabled="!isVendor"
                />
                <label class="form3-text223">3</label>
              </div>
              <div class="form3-container-424">
                <input
                  type="radio"
                  name="form3-radio-5e"
                  value="4"
                  class="form3-radiobutton099"
                  v-model="quarterhouseKeepingCleanliness"
                  :disabled="!isVendor"
                />
                <label class="form3-text224">4</label>
              </div>
              <div class="form3-container-524">
                <input
                  type="radio"
                  name="form3-radio-5e"
                  value="5"
                  class="form3-radio24"
                  v-model="quarterhouseKeepingCleanliness"
                  :disabled="!isVendor"
                />
                <label class="form3-text225">5</label>
              </div>
            </div>
          </div>
          <div class="form3-container-part5-score">
            <input
              type="text"
              id="form3-part5-score"
              placeholder="0"
              class="form3-textinput08 input"
              v-model="computePartFiveScore"
            />
            <button id="form3-btn-fetchScore-p5" class="form3-button04 button">
              Fetch Score
            </button>
          </div>
        </div>
        <div class="form3-container-scoring">
          <div class="form3-container-total-score">
            <input
              type="text"
              id="form3-totalScore-out"
              disabled
              placeholder="0"
              class="form3-textinput09 input"
              v-model="computeTotalScore"
            />
            <button
              id="form3-btn-totalScore"
              type="button"
              class="form3-button05 button"
            >
              Total Score
            </button>
          </div>
          <div class="form3-container-overall-perf-standard">
            <input
              type="text"
              id="form3-ovPerfStan-out"
              disabled
              placeholder="0"
              class="form3-textinput10 input"
              v-model="computeOverall"
            />
            <button
              id="form3-btn-ovPerfStand"
              type="button"
              class="form3-button06 button"
            >
              <span>
                <span>Overall Performance Standard</span>
                <br />
              </span>
            </button>
          </div>
          <div class="form3-container-comment">
            <textarea
              id="form3-textarea-comment"
              class="form3-textarea textarea"
            ></textarea>
            <span class="form3-text229">Comments</span>
          </div>
        </div>
      <div class="form3-container-evaluated-by">
        <div class="form3-container05">
          <span class="form3-text230">Evaluated By</span>
          <input
            type="text"
            id="form3-input-evaluatedByName"
            required
            class="form3-textinput11 input"
            :disabled="!isAdminOrApprover"
          />
        </div>
        <div class="form3-container06">
          <span class="form3-text231"><span>Signature</span></span>
          <input
            type="text"
            id="form3-input-evaluatedBySig"
            required
            class="form3-textinput12 input"
            :disabled="!isAdminOrApprover"
          />
        </div>
        <div class="form3-container07">
          <span class="form3-text233"><span>Date</span></span>
          <input
            type="date"
            id="form3-input-evaluatedByDate"
            required
            class="form3-textinput13 input"
            :disabled="!isAdminOrApprover"
          />
        </div>
      </div>
      <div class="form3-container-approved-by">
        <div class="form3-container08">
          <span class="form3-text235">Approved By</span>
          <input
            type="text"
            id="form3-input-approvedByName"
            required
            class="form3-textinput14 input"
            :disabled="!isAdmin"
          />
        </div>
        <div class="form3-container09">
          <span class="form3-text236"><span>Signature</span></span>
          <input
            type="text"
            id="form3-input-approvedBySig"
            required
            class="form3-textinput15 input"
            :disabled="!isAdmin"
          />
        </div>
        <div class="form3-container10">
          <span class="form3-text238"><span>Date</span></span>
          <input
            type="date"
            id="form3-input-approvedByDate"
            required
            class="form3-textinput16 input"
            :disabled="!isAdmin"
          />
        </div>
      </div>
      <div class="form3-container11">
        <button id="form3-btn-save" type="button" class="form3-button07" @click.prevent="handleSave">
          <span class="form3-text240 ParagraphNormalRegular">Save</span>
        </button>
        <input id="form3-btn-submit" type="submit" class="form3-button08" v-if="isVendor"/>
          <!-- <span class="form3-text241 ParagraphNormalRegular">Submit</span>
        </button> -->
        <button id="form3-btn-rejectReview" class="form3-button09" v-if="isAdminOrApprover">
          <span class="form3-text242 ParagraphNormalRegular">Reject Review</span>
        </button>
        <button id="form3-btn-approveReview" type="button" class="form3-button10" v-if="isAdminOrApprover">
          <span class="form3-text243 ParagraphNormalRegular">Approve Review</span>
        </button>
        <button
          id="form3-disapproveWorkflow"
          type="button"
          class="form3-button11"
          v-if="isApprover"
        >
          <span class="form3-text244 ParagraphNormalRegular">
            Disapprove Workflow
          </span>
        </button>
        <button 
          id="form3-approveWorkflow" 
          type="button" 
          class="form3-button12" 
          v-if="isApprover"
        >
          <span class="form3-text245 ParagraphNormalRegular">
            Approve Workflow
          </span>
        </button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import authHeader from '../services/auth-header';

const API_URL = "http://localhost:8080/api/v1/vendor/";

export default {
  name: 'Form3',
  data() {
    return {

      // RBAC
      isVendor: false,
      isAdminOrApprover: false,
      isApprover: false,

      // form
      id: null,

      contractorName: '',
      trade: '',
      projectWorksite: '',
      date: '',

      attendanceSafetyMeeting: null,
      toolBoxMeeting: null,
      complianceRulesAndRegulation: null,
      safetyPromotionalActivities: null,
      documentSubmission: null,
      partOneScore: null,

      safetyTraining: null,
      safetyTrade: null,
      safetyTalk: null,
      wshSafetyCoordinator: null,
      otherSafetyTraining: null,
      partTwoScore: null,

      accidentPrevention: null,
      safeWorkPractice: null,
      incidentSeverity: null,
      safetyOffense: null,
      safetyInspection: null,
      partThreeScore: null,

      explosivePoweredTool: null,
      ladder: null,
      liftingGear: null,
      electricalEquipment: null,
      otherMachineries: null,
      partFourScore: null,

      subconSnrMgmt: null,
      compliancePPE: null,
      sitehouseKeepingCleanliness: null,
      storehouseKeepingCleanliness: null,
      quarterhouseKeepingCleanliness: null,
      partFiveScore: null,

      totalScore: null,
      overallPerformanceStandard: null,
      comments: '',
      performanceEvaluationResults: null,

      evaluationComments: null,
      dateCreated: null,
      dateModified: null,
      deadline: null
    }
  },
  async mounted() {
    this.id = this.$route.query.formid;

    await axios({
      url: 'getPerformanceEvaluationForm',
      method: 'post',
      baseURL: API_URL,
      headers: authHeader(),
      data: {
        id: this.id
      },
      withCredentials: false
    })
    .then(response => {
      var result = response.data;
      console.log(result);


      this.contractorName= result.contractorName;
      this.trade= result.trade;
      this.projectWorksite= result.projectWorksite;
      this.date= result.date;

      this.attendanceSafetyMeeting= result.attendanceSafetyMeeting;
      this.toolBoxMeeting= result.toolBoxMeeting;
      this.complianceRulesAndRegulation= result.complianceRulesAndRegulation;
      this.safetyPromotionalActivities= result.safetyPromotionalActivities;
      this.documentSubmission= result.documentSubmission;
      this.partOneScore= result.partOneScore;

      this.safetyTraining= result.safetyTraining;
      this.safetyTrade= result.safetyTrade;
      this.safetyTalk= result.safetyTalk;
      this.wshSafetyCoordinator= result.wshSafetyCoordinator;
      this.otherSafetyTraining= result.otherSafetyTraining;
      this.partTwoScore= result.partTwoScore;

      this.accidentPrevention= result.accidentPrevention;
      this.safeWorkPractice= result.safeWorkPractice;
      this.incidentSeverity= result.incidentSeverity;
      this.safetyOffense= result.safetyOffense;
      this.safetyInspection= result.safetyInspection;
      this.partThreeScore= result.partThreeScore;

      this.explosivePoweredTool= result.explosivePoweredTool;
      this.ladder= result.ladder;
      this.liftingGear= result.liftingGear;
      this.electricalEquipment= result.electricalEquipment;
      this.otherMachineries= result.otherMachineries;
      this.partFourScore= result.partFourScore;

      this.subconSnrMgmt= result.subconSnrMgmt;
      this.compliancePPE= result.compliancePPE;
      this.sitehouseKeepingCleanliness= result.sitehouseKeepingCleanliness;
      this.storehouseKeepingCleanliness= result.storehouseKeepingCleanliness;
      this.quarterhouseKeepingCleanliness= result.quarterhouseKeepingCleanliness;
      this.partFiveScore= result.partFiveScore;

      this.totalScore= result.totalScore;
      
      this.comments= result.comments;

      this.performanceEvaluationResults= result.performanceEvaluationResults;

      // this.evaluatedBy= result.evaluatedBy;
      // this.evaluatorSignature= result.evaluatorSignature;
      // this.evaluatedDate = result.evaluatedDate;
      // this.approvedBy= result.approvedBy;
      // this.approverSignature= result.approverSignature;
      // this.effectiveDate= result.effectiveDate;
      // this.approvedDate = result.approvedDate;

      this.evaluationComments= result.evaluationComments;
      this.dateCreated= result.dateCreated;
      this.dateModified= result.dateModified;
      this.deadline= result.deadline;
    })
    .catch(error => {
      console.log(error);
    })

        // fetch role
    var role = sessionStorage.getItem('role');

    // control inputs based on form status
    if (this.performanceEvaluationResults == "Draft" ||
        this.performanceEvaluationResults == "Evaluation Rejected" || 
        this.performanceEvaluationResults == "Form Rejected")
    {
      if (role == "USER"){
        this.isVendor = true;
        this.isAdminOrApprover = false;
        this.isApprover = false;
      }
      else{
        this.isVendor = false;
        this.isAdminOrApprover = false;
        this.isApprover = false; 
      }
    }
    else if (this.performanceEvaluationResults == "Submitted") {
      if (role == "USER"){
        this.isVendor = false;
        this.isAdminOrApprover = false;
        this.isApprover = false;
      }
      else{
        this.isVendor = false;
        this.isAdminOrApprover = true;
        this.isApprover = true; 
      }
    }
    else if (this.performanceEvaluationResults == "Evaluation Approved") {
      if (role == "USER" || role == "ADMIN"){
        this.isVendor = false;
        this.isAdminOrApprover = false;
        this.isApprover = false;
      }
      else{
        this.isVendor = false;
        this.isAdminOrApprover = false;
        this.isApprover = true; 
      }
    }
    else { // "Form Approved" "Archived"
      this.isVendor = false;
      this.isAdminOrApprover = false;
      this.isApprover = false;
    }
  },
  computed: {
    computePartOneScore() {
       return parseInt(this.attendanceSafetyMeeting) + parseInt(this.toolBoxMeeting) + 
              parseInt(this.complianceRulesAndRegulation) +
              parseInt(this.safetyPromotionalActivities) + parseInt(this.documentSubmission);
    },
    computePartTwoScore(){
      return parseInt(this.safetyTraining) + parseInt(this.safetyTrade) + 
              parseInt(this.safetyTalk) +
              parseInt(this.wshSafetyCoordinator) + parseInt(this.otherSafetyTraining);
    },
    computePartThreeScore(){
      return parseInt(this.accidentPrevention) + parseInt(this.safeWorkPractice) + 
        parseInt(this.incidentSeverity) +
        parseInt(this.safetyOffense) + parseInt(this.safetyInspection);
    },
    computePartFourScore(){
      return parseInt(this.explosivePoweredTool) + parseInt(this.ladder) + 
              parseInt(this.liftingGear) +
              parseInt(this.electricalEquipment) + parseInt(this.otherMachineries);
    },
    computePartFiveScore(){
      return parseInt(this.subconSnrMgmt) + parseInt(this.compliancePPE) + 
              parseInt(this.sitehouseKeepingCleanliness) +
              parseInt(this.storehouseKeepingCleanliness) + parseInt(this.quarterhouseKeepingCleanliness);
    },
    computeTotalScore(){
      return (((parseInt(this.computePartOneScore) + parseInt(this.computePartTwoScore) + 
        parseInt(this.computePartThreeScore) +
        parseInt(this.computePartFourScore) + parseInt(this.computePartFiveScore))
        /(25*5)) * 100) + "%";
    },
    computeOverall(){
      let totalScore = parseInt(this.computeTotalScore);
      let res = "";

      if (totalScore >= 85) res = "Good";
      else if (totalScore >= 65) res = "Above Average";
      else if (totalScore >= 50) res = "Average";
      else if (totalScore >= 40) res = "Below Average";
      else res = "Poor";

      return res
    }
  },
  methods: {
    handleHome(){
      alert("Redirecting to home page");
      this.$router.push('/workflow');
    },
    async handleSave(){
      if (sessionStorage.getItem('role') == "USER") this.performanceEvaluationResults = "Draft";
      await axios({
        url: 'updatePerformanceEvaluationForm',
        method: 'put',
        baseURL: API_URL,
        headers: authHeader(),
        data: {
          id: this.id,

          contractorName: this.contractorName,
          trade: this.trade,
          projectWorksite: this.projectWorksite,
          date: this.date,

          attendanceSafetyMeeting: this.attendanceSafetyMeeting,
          toolBoxMeeting: this.toolBoxMeeting,
          complianceRulesAndRegulation: this.complianceRulesAndRegulation,
          safetyPromotionalActivities: this.safetyPromotionalActivities,
          documentSubmission: this.documentSubmission,
          partOneScore: this.partOneScore,

          safetyTraining: this.safetyTraining,
          safetyTrade: this.safetyTrade,
          safetyTalk: this.safetyTalk,
          wshSafetyCoordinator: this.wshSafetyCoordinator,
          otherSafetyTraining: this.otherSafetyTraining,
          partTwoScore: this.partTwoScore,

          accidentPrevention: this.accidentPrevention,
          safeWorkPractice: this.safeWorkPractice,
          incidentSeverity: this.incidentSeverity,
          safetyOffense: this.safetyOffense,
          safetyInspection: this.safetyInspection,
          partThreeScore: this.partThreeScore,

          explosivePoweredTool: this.explosivePoweredTool,
          ladder: this.ladder,
          liftingGear: this.liftingGear,
          electricalEquipment: this.electricalEquipment,
          otherMachineries: this.otherMachineries,
          partFourScore: this.partFourScore,

          subconSnrMgmt: this.subconSnrMgmt,
          compliancePPE: this.compliancePPE,
          sitehouseKeepingCleanliness: this.sitehouseKeepingCleanliness,
          storehouseKeepingCleanliness: this.storehouseKeepingCleanliness,
          quarterhouseKeepingCleanliness: this.quarterhouseKeepingCleanliness,
          partFiveScore: this.partFiveScore,

          totalScore: this.totalScore,
          
          comments: this.comments,

          performanceEvaluationResults: this.performanceEvaluationResults,

          

          evaluationComments: this.evaluationComments,
          dateCreated: this.dateCreated,
          dateModified: this.dateModified,
          deadline: this.deadline
        },
        withCredentials: false
      })
      .then(response => { alert("Form saved") })
      .catch(error => { console.log(error )})

      console.log(this.computeTotalScore);
    },
    async handleSubmit(){
      this.handleSave();
      this.performanceEvaluationResults = "Submitted";
      await axios({
        url: 'updatePerformanceEvaluationForm',
        method: 'put',
        baseURL: API_URL,
        headers: authHeader(),
        data: {
          id: this.id,
          performanceEvaluationResults: this.performanceEvaluationResults
        },
        withCredentials: false
      })
      .then(response => { 
        alert("Form submitted"); 
      })
      .catch(error => { console.log(error); })
    }
  },
  metaInfo: {
    title: 'Form-3 - Quantum VMS',
    meta: [
      {
        property: 'og:title',
        content: 'Form-3 - Quantum VMS',
      },
    ],
  },
}
</script>

<style scoped>
.form3-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.form3-form3admin {
  width: 100%;
  height: 3500px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-end;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
  background-color: #fafafa;
}
.form3-header-horizontal {
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 144px;
  display: flex;
  padding: 42.66666793823242px;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
}
.form3-frame12 {
  display: flex;
  position: relative;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: transparent;
  justify-content: space-between;
}
.form3-text {
  height: auto;
  font-size: 48px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 58.66666793823242px;
  font-stretch: normal;
  text-decoration: none;
}
.form3-frame11 {
  display: flex;
  position: relative;
  align-items: center;
  border-color: transparent;
  justify-content: flex-end;
}
.form3-frame10 {
  display: flex;
  position: relative;
  align-items: flex-end;
  border-color: transparent;
}
.form3-text002 {
  height: auto;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 64px;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-text004 {
  height: auto;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-form-info {
  top: 182.65626525878906px;
  left: 194.6527862548828px;
  width: 566.6319580078125px;
  height: 145px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text006 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 37.333335876464844px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 48px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container01 {
  top: 65px;
  left: 0px;
  width: 100%;
  position: absolute;
  align-self: center;
}
.form3-text008 {
  align-self: center;
}
.form3-text009 {
  top: 0px;
  left: 70px;
  position: absolute;
  align-self: center;
  
}
.form3-container02 {
  top: 90px;
  flex: initial;
  left: 0px;
  width: 100%;
  position: absolute;
  align-self: center;
}
.form3-text012 {
  align-self: center;
}
.form3-text013 {
  top: -1px;
  left: 0px;
  position: absolute;
  align-self: center;
  margin-left: 70px;
}
.form3-container03 {
  flex: initial;
  right: 0px;
  width: 100%;
  bottom: 10px;
  margin: auto;
  position: absolute;
  align-self: center;
}
.form3-text016 {
  align-self: center;
}
.form3-text019 {
  top: 0px;
  left: 0px;
  position: absolute;
  align-self: center;
  margin-top: auto;
  margin-left: 120px;
  margin-right: auto;
  margin-bottom: auto;
}
.form3-container-steps {
  top: 411.9965515136719px;
  left: 194.6527862548828px;
  width: 503.66321563720703px;
  height: 58.6631965637207px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-tab {
  top: 0px;
  left: 0px;
  width: 99px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
}
.form3-frame111 {
  height: 58.66666793823242px;
  display: flex;
  padding: 0 21.33333396911621px;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  margin-bottom: 0px;
  flex-direction: column;
  justify-content: center;
}
.form3-link {
  display: contents;
}
.form3-frame101 {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
  text-decoration: none;
}
.form3-text022 {
  height: auto;
  font-size: 18.666667938232422px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Inter;
  font-weight: 400;
  line-height: 26.666667938232422px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
  color: #000000;
}
.form3-line26 {
  width: 99px;
  height: 0px;
  position: relative;
  align-self: stretch;
}
.form3-tab1 {
  top: 0px;
  left: 98.68055725097656px;
  width: 101px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
}
.form3-frame112 {
  height: 58.66666793823242px;
  display: flex;
  padding: 0 21.33333396911621px;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
  justify-content: center;
}
.form3-frame102 {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
}
.form3-text024 {
  height: auto;
  font-size: 18.666667938232422px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Inter;
  font-weight: 400;
  line-height: 26.666667938232422px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
  color: black;
}
.form3-tab2 {
  top: 0px;
  left: 200.00001525878906px;
  width: 101px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
}
.form3-frame113 {
  height: 58.66666793823242px;
  display: flex;
  padding: 0 21.33333396911621px;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
  justify-content: center;
}
.form3-link1 {
  display: contents;
}
.form3-frame103 {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
  text-decoration: none;
}
.form3-text026 {
  height: auto;
  font-size: 18.666667938232422px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Inter;
  font-weight: 400;
  line-height: 26.666667938232422px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
  color:black;
}
.form3-tab3 {
  top: 0px;
  right: 100.32987213134766px;
  width: 102px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
}
.form3-frame114 {
  height: 58.66666793823242px;
  display: flex;
  padding: 0 21.33333396911621px;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
  justify-content: center;
}
.form3-frame104 {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
}
.form3-text028 {
  height: auto;
  font-size: 18.666667938232422px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Inter;
  font-weight: 400;
  line-height: 26.666667938232422px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
  color: black;
}
.form3-tab4 {
  top: 0px;
  right: 0px;
  width: 101px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
}
.form3-frame115 {
  height: 58.66666793823242px;
  display: flex;
  padding: 0 21.33333396911621px;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
  justify-content: center;
}
.form3-link2 {
  display: contents;
}
.form3-frame105 {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
  text-decoration: none;
}
.form3-text030 {
  height: auto;
  font-size: 18.666667938232422px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Inter;
  font-weight: 400;
  line-height: 26.666667938232422px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
  color: black;
}
.form3-container-contractor-info {
  top: 560px;
  left: 193.31597900390625px;
  width: 1386.68408203125px;
  height: 215.9896125793457px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-inputtext {
  top: 0px;
  left: 0px;
  width: 600px;
  height: 58.66666793823242px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form3-text032 {
  top: -32px;
  height: auto;
  position: absolute;
  font-size: 18.666667938232422px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 26.666667938232422px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-textinput {
  border-width: 2px;
}
.form3-inputtext1 {
  top: 0px;
  right: 0px;
  width: 600px;
  height: 58.66666793823242px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form3-text034 {
  top: -32px;
  height: auto;
  position: absolute;
  font-size: 18.666667938232422px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 26.666667938232422px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-textinput01 {
  border-width: 2px;
}
.form3-inputtext2 {
  left: 0px;
  width: 600px;
  bottom: 0px;
  height: 58.66666793823242px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form3-text036 {
  top: -32px;
  height: auto;
  position: absolute;
  font-size: 18.666667938232422px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 26.666667938232422px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-textinput02 {
  border-width: 2px;
}
.form3-inputtext3 {
  right: 0px;
  width: 600px;
  bottom: 0px;
  height: 58.66666793823242px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form3-text038 {
  top: -32px;
  height: auto;
  position: absolute;
  font-size: 18.666667938232422px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 26.666667938232422px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-textinput03 {
  border-width: 2px;
}
.form3-container04 {
  top: 812px;
  left: 470px;
  width: auto;
  height: auto;
  display: flex;
  position: absolute;
  align-items: flex-end;
  justify-content: center;
}
.form3-text040 {
  padding: var(--dl-space-space-halfunit);
  font-size: 24px;
  font-style: normal;
  text-align: center;
  font-family: Inter;
  font-weight: 500;
  line-height: 1.15;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  text-transform: none;
  text-decoration: none;
}
.form3-container-part1 {
  top: 886.6666870117188px;
  left: 189.3229217529297px;
  width: 600px;
  height: 579.9827156066895px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text041 {
  top: 0px;
  left: 0px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 26.666667938232422px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-part1a {
  top: 43.984375px;
  left: 2.65625px;
  width: 580.33203125px;
  height: 75.9765625px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text043 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-1a {
  left: 1.328125px;
  width: 100%;
  bottom: 0px;
  height: auto;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-1 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton {
  align-self: center;
}
.form3-text045 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-2 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton001 {
  align-self: center;
}
.form3-text046 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-3 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton002 {
  align-self: center;
}
.form3-text047 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-4 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton003 {
  align-self: center;
}
.form3-text048 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-5 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio {
  align-self: center;
}
.form3-text049 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part1b {
  top: 0px;
  left: 2.65625px;
  width: 581.66015625px;
  height: 75.97px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text050 {
  top: 130px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-1b {
  top: 180px;
  left: 1.328125px;
  width: 100%;
  bottom: 0px;
  height: auto;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-101 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton004 {
  align-self: center;
}
.form3-text052 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-201 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton005 {
  align-self: center;
}
.form3-text053 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-301 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton006 {
  align-self: center;
}
.form3-text054 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-401 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton007 {
  align-self: center;
}
.form3-text055 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-501 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio01 {
  align-self: center;
}
.form3-text056 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part1c {
  top: 233.3203125px;
  left: 3.984375px;
  width: 580.33203125px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text057 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-1c {
  top: 44.00390625px;
  left: 1.328125px;
  width: 579.00390625px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-102 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton008 {
  align-self: center;
}
.form3-text059 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-202 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton009 {
  align-self: center;
}
.form3-text060 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-302 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton010 {
  align-self: center;
}
.form3-text061 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-402 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton011 {
  align-self: center;
}
.form3-text062 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-502 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio02 {
  align-self: center;
}
.form3-text063 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part1d {
  top: 324.00390625px;
  left: 0px;
  width: 580.33203125px;
  height: 75.9765625px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text064 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-1d {
  top: 43.984375px;
  left: 1.328125px;
  width: 579.00390625px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-103 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton012 {
  align-self: center;
}
.form3-text066 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-203 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton013 {
  align-self: center;
}
.form3-text067 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-303 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton014 {
  align-self: center;
}
.form3-text068 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-403 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton015 {
  align-self: center;
}
.form3-text069 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-503 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio03 {
  align-self: center;
}
.form3-text070 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part1e {
  top: 415.99609375px;
  left: 1.328125px;
  width: 580.33203125px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text071 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-1e {
  top: 44.00390625px;
  left: 1.328125px;
  width: 579.00390625px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-104 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton016 {
  align-self: center;
}
.form3-text073 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-204 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton017 {
  align-self: center;
}
.form3-text074 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-304 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton018 {
  align-self: center;
}
.form3-text075 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-404 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton019 {
  align-self: center;
}
.form3-text076 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-504 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio04 {
  align-self: center;
}
.form3-text077 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part1-score {
  top: 521.328125px;
  left: 0px;
  width: 100%;
  height: 60px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-textinput04 {
  top: 0px;
  left: 0px;
  color: #000000;
  width: var(--dl-size-size-small);
  position: absolute;
  margin-top: 2px;
  text-align: center;
  margin-left: 150px;
  border-style: hidden;
  border-radius: var(--dl-radius-radius-round);
  background-color: #c48a1e;
}
.form3-button {
  top: 0px;
  left: 0px;
  position: absolute;
  font-size: 18px;
}
.form3-container-part2 {
  top: 886.66015625px;
  left: 980px;
  width: 738px;
  height: 578.65234375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text078 {
  top: 0px;
  left: 0px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 26.666667938232422px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-part2a {
  top: 44.00390625px;
  left: 0px;
  width: 580.3125px;
  height: 75.9765625px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text080 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-2a {
  top: 43.984375px;
  left: 1.328125px;
  width: 578.984375px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-105 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton020 {
  align-self: center;
}
.form3-text082 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-205 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton021 {
  align-self: center;
}
.form3-text083 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-305 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton022 {
  align-self: center;
}
.form3-text084 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-405 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton023 {
  align-self: center;
}
.form3-text085 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-505 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio05 {
  align-self: center;
}
.form3-text086 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part2b {
  top: 135.99609375px;
  left: 1.328125px;
  width: 580.3125px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text087 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-2b {
  top: 44.00390625px;
  left: 1.328125px;
  width: 578.984375px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-106 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton024 {
  align-self: center;
}
.form3-text089 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-206 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton025 {
  align-self: center;
}
.form3-text090 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-306 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton026 {
  align-self: center;
}
.form3-text091 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-406 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton027 {
  align-self: center;
}
.form3-text092 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-506 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio06 {
  align-self: center;
}
.form3-text093 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part2c {
  top: 233.33984375px;
  left: 1.328125px;
  width: 580.3125px;
  height: 75.9765625px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text094 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-2c {
  top: 43.984375px;
  left: 1.328125px;
  width: 578.984375px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-107 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton028 {
  align-self: center;
}
.form3-text096 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-207 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton029 {
  align-self: center;
}
.form3-text097 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-307 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton030 {
  align-self: center;
}
.form3-text098 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-407 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton031 {
  align-self: center;
}
.form3-text099 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-507 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio07 {
  align-self: center;
}
.form3-text100 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part2d {
  top: 325.33203125px;
  left: 2.65625px;
  width: 580.33203125px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text101 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-2d {
  top: 44.00390625px;
  left: 1.328125px;
  width: 579.00390625px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-108 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton032 {
  align-self: center;
}
.form3-text103 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-208 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton033 {
  align-self: center;
}
.form3-text104 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-308 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton034 {
  align-self: center;
}
.form3-text105 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-408 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton035 {
  align-self: center;
}
.form3-text106 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-508 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio08 {
  align-self: center;
}
.form3-text107 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part2e {
  top: 418.671875px;
  left: 0px;
  width: 580.3125px;
  height: 75.9765625px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text108 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-part2e1 {
  top: 43.984375px;
  left: 1.328125px;
  width: 578.984375px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-109 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton036 {
  align-self: center;
}
.form3-text110 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-209 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton037 {
  align-self: center;
}
.form3-text111 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-309 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton038 {
  align-self: center;
}
.form3-text112 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-409 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton039 {
  align-self: center;
}
.form3-text113 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-509 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio09 {
  align-self: center;
}
.form3-text114 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part2-score {
  top: 520px;
  left: 0px;
  width: 100%;
  height: 58.65234375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-textinput05 {
  top: 0px;
  left: 0px;
  color: #000000;
  width: var(--dl-size-size-small);
  position: absolute;
  margin-top: 2px;
  text-align: center;
  margin-left: 150px;
  border-style: hidden;
  margin-right: 0px;
  border-radius: var(--dl-radius-radius-round);
  background-color: #c48a1e;
}
.form3-button01 {
  top: 0px;
  left: 0px;
  position: absolute;
  font-size: 18px;
}
.form3-container-part3 {
  top: 1525.33203125px;
  left: 190.6640625px;
  width: 600px;
  height: 579.98046875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text115 {
  top: 0px;
  left: 2.65625px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 26.666667938232422px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-part3a {
  top: 43.984375px;
  left: 2.65625px;
  width: 596.015625px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text117 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-3a {
  top: 44.00390625px;
  left: 1.328125px;
  width: 594.6875px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-110 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton040 {
  align-self: center;
}
.form3-text119 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-210 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton041 {
  align-self: center;
}
.form3-text120 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-310 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton042 {
  align-self: center;
}
.form3-text121 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-410 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton043 {
  align-self: center;
}
.form3-text122 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-510 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio10 {
  align-self: center;
}
.form3-text123 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part3b {
  top: 135.99609375px;
  left: 3.984375px;
  width: 596.015625px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text124 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-3b {
  top: 44.00390625px;
  left: 1.34765625px;
  width: 594.66796875px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-111 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton044 {
  align-self: center;
}
.form3-text126 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-211 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton045 {
  align-self: center;
}
.form3-text127 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-311 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton046 {
  align-self: center;
}
.form3-text128 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-411 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton047 {
  align-self: center;
}
.form3-text129 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-511 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio11 {
  align-self: center;
}
.form3-text130 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part3c {
  top: 233.3203125px;
  left: 3.984375px;
  width: 596.015625px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text131 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-3c {
  top: 44.00390625px;
  left: 1.34765625px;
  width: 594.66796875px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-112 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton048 {
  align-self: center;
}
.form3-text133 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-212 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton049 {
  align-self: center;
}
.form3-text134 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-312 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton050 {
  align-self: center;
}
.form3-text135 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-412 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton051 {
  align-self: center;
}
.form3-text136 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-512 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio12 {
  align-self: center;
}
.form3-text137 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part3d {
  top: 323.984375px;
  left: 0px;
  width: 595.99609375px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text138 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-3d {
  top: 44.00390625px;
  left: 1.328125px;
  width: 594.66796875px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-113 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton052 {
  align-self: center;
}
.form3-text140 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-213 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton053 {
  align-self: center;
}
.form3-text141 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-313 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton054 {
  align-self: center;
}
.form3-text142 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-413 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton055 {
  align-self: center;
}
.form3-text143 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-513 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio13 {
  align-self: center;
}
.form3-text144 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part3e {
  top: 415.99609375px;
  left: 1.328125px;
  width: 595.99609375px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text145 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-3e {
  top: 44.00390625px;
  left: 1.328125px;
  width: 594.66796875px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-114 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton056 {
  align-self: center;
}
.form3-text147 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-214 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton057 {
  align-self: center;
}
.form3-text148 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-314 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton058 {
  align-self: center;
}
.form3-text149 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-414 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton059 {
  align-self: center;
}
.form3-text150 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-514 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio14 {
  align-self: center;
}
.form3-text151 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part3-score {
  top: 521.328125px;
  left: 5.33203125px;
  width: 315.64453125px;
  height: 58.65234375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-textinput06 {
  top: 0px;
  left: 0px;
  color: #000000;
  width: var(--dl-size-size-small);
  position: absolute;
  margin-top: 2px;
  text-align: center;
  margin-left: 150px;
  border-style: hidden;
  margin-right: 0px;
  border-radius: var(--dl-radius-radius-round);
  background-color: #c48a1e;
}
.form3-button02 {
  top: 0px;
  left: 0px;
  position: absolute;
  font-size: 18px;
}
.form3-container-part4 {
  top: 1525.33203125px;
  left: 981.328125px;
  width: 600px;
  height: 578.65234375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text152 {
  top: 0px;
  left: 0px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 26.666667938232422px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-part4a {
  top: 43.984375px;
  left: 0px;
  width: 597.32421875px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text154 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-4a {
  top: 44.00390625px;
  left: 1.328125px;
  width: 595.99609375px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-115 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton060 {
  align-self: center;
}
.form3-text156 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-215 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton061 {
  align-self: center;
}
.form3-text157 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-315 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton062 {
  align-self: center;
}
.form3-text158 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-415 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton063 {
  align-self: center;
}
.form3-text159 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-515 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio15 {
  align-self: center;
}
.form3-text160 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part4b {
  top: 135.99609375px;
  left: 1.328125px;
  width: 597.34375px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text161 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-4b {
  top: 44.00390625px;
  left: 1.328125px;
  width: 596.015625px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-116 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton064 {
  align-self: center;
}
.form3-text163 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-216 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton065 {
  align-self: center;
}
.form3-text164 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-316 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton066 {
  align-self: center;
}
.form3-text165 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-416 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton067 {
  align-self: center;
}
.form3-text166 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-516 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio16 {
  align-self: center;
}
.form3-text167 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part4c {
  top: 233.3203125px;
  left: 1.328125px;
  width: 597.34375px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text168 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-4c {
  top: 44.00390625px;
  left: 1.328125px;
  width: 596.015625px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-117 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton068 {
  align-self: center;
}
.form3-text170 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-217 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton069 {
  align-self: center;
}
.form3-text171 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-317 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton070 {
  align-self: center;
}
.form3-text172 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-417 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton071 {
  align-self: center;
}
.form3-text173 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-517 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio17 {
  align-self: center;
}
.form3-text174 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part4d {
  top: 325.33203125px;
  left: 2.65625px;
  width: 597.34375px;
  height: 75.9765625px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text175 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-4d {
  top: 43.984375px;
  left: 1.34765625px;
  width: 595.99609375px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-118 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton072 {
  align-self: center;
}
.form3-text177 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-218 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton073 {
  align-self: center;
}
.form3-text178 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-318 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton074 {
  align-self: center;
}
.form3-text179 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-418 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton075 {
  align-self: center;
}
.form3-text180 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-518 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio18 {
  align-self: center;
}
.form3-text181 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part4e {
  top: 418.65234375px;
  left: 0px;
  width: 597.32421875px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text182 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-4e {
  top: 44.00390625px;
  left: 1.328125px;
  width: 595.99609375px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-119 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton076 {
  align-self: center;
}
.form3-text184 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-219 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton077 {
  align-self: center;
}
.form3-text185 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-319 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton078 {
  align-self: center;
}
.form3-text186 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-419 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton079 {
  align-self: center;
}
.form3-text187 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-519 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio19 {
  align-self: center;
}
.form3-text188 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part4-score {
  top: 520px;
  left: 1.328125px;
  width: 100%;
  height: 58.65234375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-textinput07 {
  top: 0px;
  left: 0px;
  color: #000000;
  width: var(--dl-size-size-small);
  position: absolute;
  margin-top: 2px;
  text-align: center;
  margin-left: 150px;
  border-style: hidden;
  margin-right: 0px;
  border-radius: var(--dl-radius-radius-round);
  background-color: #c48a1e;
}
.form3-button03 {
  top: 0px;
  left: 0px;
  position: absolute;
  font-size: 18px;
}
.form3-container-part5 {
  top: 2178.65234375px;
  left: 187.98828125px;
  width: 582.98828125px;
  height: 578.65234375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text189 {
  top: 0px;
  left: 0px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 26.666667938232422px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-part5a {
  top: 44.00390625px;
  left: 0px;
  width: 580.33203125px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text191 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-5a {
  top: 44.00390625px;
  left: 1.328125px;
  width: 579.00390625px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-120 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton080 {
  align-self: center;
}
.form3-text193 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-220 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton081 {
  align-self: center;
}
.form3-text194 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-320 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton082 {
  align-self: center;
}
.form3-text195 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-420 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton083 {
  align-self: center;
}
.form3-text196 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-520 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio20 {
  align-self: center;
}
.form3-text197 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part5b {
  top: 135.99609375px;
  left: 1.328125px;
  width: 580.33203125px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text198 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-5b {
  top: 44.00390625px;
  left: 1.34765625px;
  width: 578.984375px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-121 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton084 {
  align-self: center;
}
.form3-text200 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-221 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton085 {
  align-self: center;
}
.form3-text201 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-321 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton086 {
  align-self: center;
}
.form3-text202 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-421 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton087 {
  align-self: center;
}
.form3-text203 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-521 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio21 {
  align-self: center;
}
.form3-text204 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part5c {
  top: 233.33984375px;
  left: 1.328125px;
  width: 580.33203125px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text205 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-5c {
  top: 44.00390625px;
  left: 1.34765625px;
  width: 578.984375px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-122 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton088 {
  align-self: center;
}
.form3-text207 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-222 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton089 {
  align-self: center;
}
.form3-text208 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-322 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton090 {
  align-self: center;
}
.form3-text209 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-422 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton091 {
  align-self: center;
}
.form3-text210 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-522 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio22 {
  align-self: center;
}
.form3-text211 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part5d {
  top: 325.33203125px;
  left: 2.67578125px;
  width: 580.3125px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text212 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-5d {
  top: 44.00390625px;
  left: 1.328125px;
  width: 578.984375px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-123 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton092 {
  align-self: center;
}
.form3-text214 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-223 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton093 {
  align-self: center;
}
.form3-text215 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-323 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton094 {
  align-self: center;
}
.form3-text216 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-423 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton095 {
  align-self: center;
}
.form3-text217 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-523 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio23 {
  align-self: center;
}
.form3-text218 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part5e {
  top: 418.671875px;
  left: 0px;
  width: 580.33203125px;
  height: 75.99609375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text219 {
  top: 0px;
  left: 0px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-container-radio-5e {
  top: 44.00390625px;
  left: 1.328125px;
  width: 579.00390625px;
  height: 31.9921875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-124 {
  display: flex;
  align-items: flex-start;
}
.form3-radiobutton096 {
  align-self: center;
}
.form3-text221 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-224 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton097 {
  align-self: center;
}
.form3-text222 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-324 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton098 {
  align-self: center;
}
.form3-text223 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-424 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radiobutton099 {
  align-self: center;
}
.form3-text224 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-524 {
  display: flex;
  align-items: flex-start;
  margin-left: 13%;
}
.form3-radio24 {
  align-self: center;
}
.form3-text225 {
  font-size: 21px;
  margin-left: var(--dl-space-space-unit);
}
.form3-container-part5-score {
  top: 520px;
  left: 8.0078125px;
  width: 100%;
  height: 58.65234375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-textinput08 {
  top: 0px;
  left: 0px;
  color: #000000;
  width: var(--dl-size-size-small);
  position: absolute;
  margin-top: 2px;
  text-align: center;
  margin-left: 150px;
  border-style: hidden;
  margin-right: 0px;
  border-radius: var(--dl-radius-radius-round);
  background-color: #c48a1e;
}
.form3-button04 {
  top: 0px;
  left: 0px;
  position: absolute;
  font-size: 18px;
}
.form3-container-scoring {
  top: 2225.99609375px;
  left: 962.98828125px;
  width: 499.98046875px;
  height: 434.3359375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container-total-score {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 58.65234375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-textinput09 {
  top: 0px;
  left: 0px;
  color: #000000;
  width: var(--dl-size-size-small);
  position: absolute;
  margin-top: 2px;
  text-align: center;
  margin-left: 175px;
  border-style: hidden;
  margin-right: 0px;
  border-radius: var(--dl-radius-radius-round);
  background-color: #fff302;
}
.form3-button05 {
  top: 0px;
  left: 0px;
  position: absolute;
  font-size: 18px;
}
.form3-container-overall-perf-standard {
  top: 74.00390625px;
  left: 2.01171875px;
  width: 384.98046875px;
  height: 95.9765625px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-textinput10 {
  top: 0px;
  left: 0px;
  color: #000000;
  width: var(--dl-size-size-small);
  position: absolute;
  margin-top: 2px;
  text-align: center;
  margin-left: 175px;
  border-style: hidden;
  margin-right: 0px;
  border-radius: var(--dl-radius-radius-round);
  background-color: #fff302;
}
.form3-button06 {
  top: 0px;
  left: 0px;
  width: var(--dl-size-size-large);
  position: absolute;
  font-size: 18px;
}
.form3-container-comment {
  top: 249.00390625px;
  left: 0.99609375px;
  width: 498.984375px;
  height: 185.33203125px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-textarea {
  width: 100%;
  height: 100%;
}
.form3-text229 {
  top: 0px;
  left: 0px;
  position: absolute;
  font-size: 21px;
  font-style: normal;
  margin-top: -24px;
  font-weight: 500;
}
.form3-container-evaluated-by {
  left: 434px;
  width: 400px;
  bottom: 422px;
  height: 250px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container05 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 58.65234375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text230 {
  width: 175px;
  height: auto;
  font-size: 21.3333px;
  align-self: center;
  font-style: Regular;
  text-align: right;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  text-decoration: none;
}
.form3-textinput11 {
  top: 0px;
  right: 0px;
  width: var(--dl-size-size-xlarge);
  height: 100%;
  padding: 0px;
  position: absolute;
  border-width: 1px;
}
.form3-container06 {
  top: 96.015625px;
  left: 0px;
  width: 100%;
  height: 58.65234375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text231 {
  width: 175px;
  height: auto;
  font-size: 21.33333396911621px;
  align-self: center;
  font-style: Regular;
  text-align: right;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  text-decoration: none;
}
.form3-textinput12 {
  top: 0px;
  right: 0px;
  width: var(--dl-size-size-xlarge);
  height: 100%;
  padding: 0px;
  position: absolute;
  border-width: 1px;
}
.form3-container07 {
  top: 191.34765625px;
  left: 0px;
  width: 100%;
  height: 58.65234375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text233 {
  top: 12.67578125px;
  left: 0px;
  width: 175px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: right;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-textinput13 {
  top: 0px;
  right: 0px;
  width: var(--dl-size-size-xlarge);
  height: 100%;
  padding: 0px;
  position: absolute;
  border-width: 1px;
}
.form3-container-approved-by {
  left: 900px;
  width: 400px;
  bottom: 422px;
  height: 250px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-container08 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 58.65234375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text235 {
  width: 175px;
  height: auto;
  font-size: 21.3333px;
  align-self: center;
  font-style: Regular;
  text-align: right;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  text-decoration: none;
}
.form3-textinput14 {
  top: 0px;
  right: 0px;
  width: var(--dl-size-size-xlarge);
  height: 100%;
  padding: 0px;
  position: absolute;
  border-width: 1px;
}
.form3-container09 {
  top: 96.015625px;
  left: 0px;
  width: 100%;
  height: 58.65234375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text236 {
  width: 175px;
  height: auto;
  font-size: 21.33333396911621px;
  align-self: center;
  font-style: Regular;
  text-align: right;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  text-decoration: none;
}
.form3-textinput15 {
  top: 0px;
  right: 0px;
  width: var(--dl-size-size-xlarge);
  height: 100%;
  padding: 0px;
  position: absolute;
  border-width: 1px;
}
.form3-container10 {
  top: 191.34765625px;
  left: 0px;
  width: 100%;
  height: 58.65234375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form3-text238 {
  top: 12.67578125px;
  left: 0px;
  width: 175px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: right;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form3-textinput16 {
  top: 0px;
  right: 0px;
  width: var(--dl-size-size-xlarge);
  height: 100%;
  padding: 0px;
  position: absolute;
  border-width: 1px;
}
.form3-container11 {
  top: 3200px;
  left: 166.9965362548828px;
  width: 400px;
  height: 225px;
  display: flex;
  position: absolute;
  align-items: flex-end;
  justify-content: center;
}
.form3-button07 {
  top: 0px;
  left: 2.1006927490234375px;
  color: var(--dl-color-gray-black);
  width: 179px;
  height: 58.666664123535156px;
  display: flex;
  padding: 10.666666030883789px 26.666664123535156px;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: 7.999999523162842px;
  justify-content: center;
  background-color: var(--dl-color-default-white5);
}
.form3-text240 {
  color: var(--dl-color-default-black4);
  height: auto;
  flex-grow: 1;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
.form3-button08 {
  top: 1.336669921875px;
  right: 0px;
  width: 179px;
  height: 58.666664123535156px;
  display: flex;
  padding: 10.666666030883789px 26.666664123535156px;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  border-radius: 7.999999523162842px;
  justify-content: center;
  background-color: var(--dl-color-default-black4);
}
.form3-text241 {
  color: var(--dl-color-neutral-6);
  height: auto;
  flex-grow: 1;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
.form3-button09 {
  top: 84.34033203125px;
  left: 1.99652099609375px;
  width: 179px;
  height: 58.666664123535156px;
  display: flex;
  padding: 10.666666030883789px 26.666664123535156px;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  border-radius: 7.999999523162842px;
  justify-content: center;
  background-color: var(--dl-color-danger-700);
}
.form3-text242 {
  color: var(--dl-color-neutral-6);
  height: auto;
  flex-grow: 1;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
.form3-button10 {
  top: 85.34716796875px;
  right: 0px;
  width: 179px;
  height: 58.666664123535156px;
  display: flex;
  padding: 10.666666030883789px 26.666664123535156px;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  border-radius: 7.999999523162842px;
  justify-content: center;
  background-color: var(--dl-color-success-700);
}
.form3-text243 {
  color: var(--dl-color-neutral-6);
  height: auto;
  flex-grow: 1;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
.form3-button11 {
  left: 0px;
  width: 179px;
  bottom: 1.996337890625px;
  height: 58.666664123535156px;
  display: flex;
  padding: 10.666666030883789px 26.666664123535156px;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  border-radius: 7.999999523162842px;
  justify-content: center;
  background-color: var(--dl-color-danger-700);
}
.form3-text244 {
  color: var(--dl-color-neutral-6);
  height: auto;
  flex-grow: 1;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
.form3-button12 {
  right: 1.99652099609375px;
  width: 179px;
  bottom: 0px;
  height: 58.666664123535156px;
  display: flex;
  padding: 10.666666030883789px 26.666664123535156px;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  border-radius: 7.999999523162842px;
  justify-content: center;
  background-color: var(--dl-color-success-700);
}
.form3-text245 {
  color: var(--dl-color-neutral-6);
  height: auto;
  flex-grow: 1;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
@media(max-width: 1600px) {
  .form3-header-horizontal {
  width: 100%;
}

  .form3-container-contractor-info {
    left: 125px;
  }
  .form3-container-part2 {
    left: 800px;
  }
  .form3-container-part4 {
    left: 800px;
  }
  .form3-container-scoring {
    left: 800px;
  }
  .form3-container-evaluated-by {
    left: 300px;
  }
  .form3-container-approved-by {
    left: 700px;
  }
  .form3-button09 {
    background-color: var(--dl-color-danger-700);
  }
}
@media(max-width: 1200px) {
  .form3-container-form-info {
    top: 200px;
  }
  .form3-container-contractor-info {
    width: 80%;
  }
  .form3-inputtext {
    width: 400px;
  }
  .form3-inputtext1 {
    width: 400px;
  }
  .form3-inputtext2 {
    width: 400px;
  }
  .form3-inputtext3 {
    width: 400px;
  }
  .form3-container04 {
    top: 805px;
    left: 0px;
    right: 0px;
    margin: auto;
  }
  .form3-container-part1 {
    left: var(--dl-space-space-sixunits);
  }
  .form3-container-part2 {
    left: 600px;
    width: 550px;
  }
  .form3-container-part3 {
    left: var(--dl-space-space-sixunits);
  }
  .form3-container-part4 {
    left: 600px;
    width: 550px;
  }
  .form3-container-part5 {
    left: var(--dl-space-space-sixunits);
  }
  .form3-container-scoring {
    left: 650px;
    width: 499.98046875px;
  }
  .form3-container-evaluated-by {
    left: 200px;
  }
  .form3-container-approved-by {
    left: 600px;
  }
  .form3-button07 {
    left: 0px;
    margin-left: 0px;
  }
  .form3-button08 {
    left: 0px;
    margin-left: 200px;
  }
  .form3-button09 {
    left: 0px;
    margin-left: 0px;
  }
  .form3-button10 {
    left: 0px;
    margin-left: 200px;
  }
  .form3-button11 {
    left: 0px;
    margin-left: 0px;
  }
  .form3-button12 {
    left: 0px;
    margin-left: 200px;
  }
}
@media(max-width: 991px) {
  .form3-form3admin {
    height: 5200px;
  }
  .form3-inputtext {
    width: 300px;
  }
  .form3-inputtext1 {
    width: 300px;
  }
  .form3-inputtext2 {
    width: 300px;
  }
  .form3-inputtext3 {
    width: 300px;
  }
  .form3-container04 {
    top: 808px;
    left: 0px;
    right: 0px;
    margin: auto;
  }
  .form3-container-part1 {
    left: 0px;
    right: 150px;
    margin: auto;
  }
  .form3-container-part2 {
    top: 1500px;
    left: 00px;
    right: 150px;
    width: 600px;
    margin: auto;
  }
  .form3-container-part3 {
    top: 2100px;
    left: 0px;
    right: 150px;
    margin: auto;
  }
  .form3-container-part4 {
    top: 2700px;
    left: 0px;
    right: 150px;
    width: 600px;
    margin: auto;
  }
  .form3-container-part5 {
    top: 3300px;
    left: 0px;
    right: 150px;
    width: 600px;
    margin: auto;
  }
  .form3-container-scoring {
    top: 3950px;
    left: 0px;
    right: 160px;
    width: 600px;
    margin: auto;
  }
  .form3-container-comment {
    position: 0px;
  }
  .form3-container-evaluated-by {
    left: 71px;
    bottom: 437px;
  }
  .form3-container-approved-by {
    left: 500px;
    right: 0px;
    bottom: 436px;
  }
  .form3-container11 {
    top: 4900px;
    left: 0px;
    right: 0px;
    margin: auto;
  }
  .form3-button07 {
    top: 0px;
    left: 0px;
    position: absolute;
  }
  .form3-button08 {
    top: 0px;
    right: 0px;
    margin-left: 55%;
  }
  .form3-button09 {
    top: 80px;
    left: 0px;
    margin-left: 0%;
  }
  .form3-button10 {
    top: 80px;
    left: 0px;
    position: absolute;
    margin-top: auto;
    margin-left: 55%;
    margin-right: auto;
    margin-bottom: auto;
  }
  .form3-button11 {
    left: 0px;
    bottom: 0px;
    margin-left: 0%;
  }
  .form3-button12 {
    right: 0px;
    bottom: 0px;
    margin-left: 55%;
  }
}
@media(max-width: 479px) {
  .form3-form3admin {
    height: 5600px;
  }
  .form3-container-form-info {
    left: 0px;
    right: 0px;
    width: 75%;
    height: 225px;
    margin: auto;
  }
  .form3-container01 {
    top: 0px;
    right: 0px;
    align-self: flex-end;
    margin-top: 160px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
  }
  .form3-text009 {
    position: static;
    margin-left: var(--dl-space-space-halfunit);
    
  }
  .form3-container02 {
    position: static;
    align-self: flex-end;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .form3-text013 {
    position: static;
    margin-left: 13px;
  }
  .form3-container03 {
    bottom: 0px;
  }
  .form3-container-steps {
    top: 440px;
    left: 0px;
    width: 100%;
  }
  .form3-container-contractor-info {
    left: 0px;
    right: 0px;
    width: 80%;
    height: 355px;
    margin: auto;
  }
  .form3-inputtext1 {
    top: var(--dl-space-space-sixunits);
    left: 0px;
    margin-top: 0px;
  }
  .form3-inputtext2 {
    top: 190px;
    left: 0px;
  }
  .form3-inputtext3 {
    left: 0px;
  }
  .form3-container04 {
    top: 950px;
    right: 0px;
    width: 80%;
  }
  .form3-container-part1 {
    top: 1100px;
    left: 0px;
    right: 0px;
    width: 80%;
    margin: var(--dl-space-space-threeunits);
  }
  .form3-container-2 {
    margin-left: 5%;
  }
  .form3-container-3 {
    margin-left: 5%;
  }
  .form3-container-4 {
    margin-left: 5%;
  }
  .form3-container-5 {
    margin-left: 5%;
  }
  .form3-container-201 {
    margin-left: 5%;
  }
  .form3-container-301 {
    margin-left: 5%;
  }
  .form3-container-401 {
    margin-left: 5%;
  }
  .form3-container-501 {
    margin-left: 5%;
  }
  .form3-container-202 {
    margin-left: 5%;
  }
  .form3-container-302 {
    margin-left: 5%;
  }
  .form3-container-402 {
    margin-left: 5%;
  }
  .form3-container-502 {
    margin-left: 5%;
  }
  .form3-container-203 {
    margin-left: 5%;
  }
  .form3-container-303 {
    margin-left: 5%;
  }
  .form3-container-403 {
    margin-left: 5%;
  }
  .form3-container-503 {
    margin-left: 5%;
  }
  .form3-container-204 {
    margin-left: 5%;
  }
  .form3-container-304 {
    margin-left: 5%;
  }
  .form3-container-404 {
    margin-left: 5%;
  }
  .form3-container-504 {
    margin-left: 5%;
  }
  .form3-container-part2 {
    top: 1798px;
    left: 0px;
    right: 0px;
    width: 85%;
  }
  .form3-container-205 {
    margin-left: 5%;
  }
  .form3-container-305 {
    margin-left: 5%;
  }
  .form3-container-405 {
    margin-left: 5%;
  }
  .form3-container-505 {
    margin-left: 5%;
  }
  .form3-container-206 {
    margin-left: 5%;
  }
  .form3-container-306 {
    margin-left: 5%;
  }
  .form3-container-406 {
    margin-left: 5%;
  }
  .form3-container-506 {
    margin-left: 5%;
  }
  .form3-container-207 {
    margin-left: 5%;
  }
  .form3-container-307 {
    margin-left: 5%;
  }
  .form3-container-407 {
    margin-left: 5%;
  }
  .form3-container-507 {
    margin-left: 5%;
  }
  .form3-container-208 {
    margin-left: 5%;
  }
  .form3-container-308 {
    margin-left: 5%;
  }
  .form3-container-408 {
    margin-left: 5%;
  }
  .form3-container-508 {
    margin-left: 5%;
  }
  .form3-container-209 {
    margin-left: 5%;
  }
  .form3-container-309 {
    margin-left: 5%;
  }
  .form3-container-409 {
    margin-left: 5%;
  }
  .form3-container-509 {
    margin-left: 5%;
  }
  .form3-container-part3 {
    top: 2398px;
    left: 0px;
    right: 0px;
    width: 80%;
  }
  .form3-container-210 {
    margin-left: 5%;
  }
  .form3-container-310 {
    margin-left: 5%;
  }
  .form3-container-410 {
    margin-left: 5%;
  }
  .form3-container-510 {
    margin-left: 5%;
  }
  .form3-container-211 {
    margin-left: 5%;
  }
  .form3-container-311 {
    margin-left: 5%;
  }
  .form3-container-411 {
    margin-left: 5%;
  }
  .form3-container-511 {
    margin-left: 5%;
  }
  .form3-container-212 {
    margin-left: 5%;
  }
  .form3-container-312 {
    margin-left: 5%;
  }
  .form3-container-412 {
    margin-left: 5%;
  }
  .form3-container-512 {
    margin-left: 5%;
  }
  .form3-container-213 {
    margin-left: 5%;
  }
  .form3-container-313 {
    margin-left: 5%;
  }
  .form3-container-413 {
    margin-left: 5%;
  }
  .form3-container-513 {
    margin-left: 5%;
  }
  .form3-container-214 {
    margin-left: 5%;
  }
  .form3-container-314 {
    margin-left: 5%;
  }
  .form3-container-414 {
    margin-left: 5%;
  }
  .form3-container-514 {
    margin-left: 5%;
  }
  .form3-container-part4 {
    top: 3045px;
    left: 0px;
    right: 0px;
    width: 80%;
    margin: auto;
  }
  .form3-container-215 {
    margin-left: 5%;
  }
  .form3-container-315 {
    margin-left: 5%;
  }
  .form3-container-415 {
    margin-left: 5%;
  }
  .form3-container-515 {
    margin-left: 5%;
  }
  .form3-container-216 {
    margin-left: 5%;
  }
  .form3-container-316 {
    margin-left: 5%;
  }
  .form3-container-416 {
    margin-left: 5%;
  }
  .form3-container-516 {
    margin-left: 5%;
  }
  .form3-container-217 {
    margin-left: 5%;
  }
  .form3-container-317 {
    margin-left: 5%;
  }
  .form3-container-417 {
    margin-left: 5%;
  }
  .form3-container-517 {
    margin-left: 5%;
  }
  .form3-container-218 {
    margin-left: 5%;
  }
  .form3-container-318 {
    margin-left: 5%;
  }
  .form3-container-418 {
    margin-left: 5%;
  }
  .form3-container-518 {
    margin-left: 5%;
  }
  .form3-container-219 {
    margin-left: 5%;
  }
  .form3-container-319 {
    margin-left: 5%;
  }
  .form3-container-419 {
    margin-left: 5%;
  }
  .form3-container-519 {
    margin-left: 5%;
  }
  .form3-container-part5 {
    top: 3645px;
    left: 0px;
    right: 0px;
    width: 80%;
  }
  .form3-container-220 {
    margin-left: 5%;
  }
  .form3-container-320 {
    margin-left: 5%;
  }
  .form3-container-420 {
    margin-left: 5%;
  }
  .form3-container-520 {
    margin-left: 5%;
  }
  .form3-container-221 {
    margin-left: 5%;
  }
  .form3-container-321 {
    margin-left: 5%;
  }
  .form3-container-421 {
    margin-left: 5%;
  }
  .form3-container-521 {
    margin-left: 5%;
  }
  .form3-container-222 {
    margin-left: 5%;
  }
  .form3-container-322 {
    margin-left: 5%;
  }
  .form3-container-422 {
    margin-left: 5%;
  }
  .form3-container-522 {
    margin-left: 5%;
  }
  .form3-container-223 {
    margin-left: 5%;
  }
  .form3-container-323 {
    margin-left: 5%;
  }
  .form3-container-423 {
    margin-left: 5%;
  }
  .form3-container-523 {
    margin-left: 5%;
  }
  .form3-container-224 {
    margin-left: 5%;
  }
  .form3-container-324 {
    margin-left: 5%;
  }
  .form3-container-424 {
    margin-left: 5%;
  }
  .form3-container-524 {
    margin-left: 5%;
  }
  .form3-container-scoring {
    top: 4252px;
    left: 0px;
    right: 0px;
    width: 80%;
    height: 358px;
    margin: auto;
  }
  .form3-container-overall-perf-standard {
    top: 60px;
    width: 100%;
  }
  .form3-container-comment {
    top: 200px;
    right: -1px;
    width: 100%;
    bottom: -76px;
    position: absolute;
  }
  .form3-textarea {
    left: 0px;
    bottom: 0px;
    margin: auto;
    position: absolute;
    align-self: flex-end;
  }
  .form3-container-evaluated-by {
    left: 36px;
    width: 80%;
    bottom: 655px;
    margin: auto;
  }
  .form3-container-approved-by {
    left: 00px;
    right: var(--dl-space-space-oneandhalfunits);
    width: 80%;
    bottom: 342px;
    margin: auto;
  }
  .form3-container11 {
    top: 5250px;
    left: 0px;
    bottom: 0px;
  }
  .form3-button07 {
    top: 0px;
    left: 1px;
    bottom: 0px;
    position: absolute;
    align-self: flex-end;
  }
  .form3-button08 {
    top: 0px;
    left: 1px;
    bottom: 0px;
    position: absolute;
    align-self: flex-end;
  }
  .form3-button09 {
    top: var(--dl-space-space-fiveunits);
    left: 1px;
    bottom: 0px;
    position: absolute;
    align-self: flex-end;
  }
  .form3-button10 {
    top: var(--dl-space-space-fiveunits);
    right: 0px;
    bottom: 0px;
    position: absolute;
    align-self: flex-end;
    margin-top: 0px;
    margin-left: 55%;
    margin-right: 0px;
    margin-bottom: 0px;
  }
  .form3-button11 {
    top: 160px;
    left: 1px;
    bottom: 0px;
    position: absolute;
    align-self: flex-end;
  }
  .form3-button12 {
    top: 160px;
    left: 1px;
    bottom: 0px;
    position: absolute;
    align-self: flex-end;
  }
}
</style>
