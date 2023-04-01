<template>
  <div class="form2-container">
    <div class="form2-form2admin">
      <div class="form2-header-horizontal">
        <div class="form2-frame12">
          <span class="form2-text">Quantum VMS</span>
          <div class="form2-frame11" >
            <div class="form2-frame10" >
              <router-link to="/workflow" class="form2-text001 ParagraphNormalRegular form2-link">
                <span>Home</span>
              </router-link>
              <!-- <span class="form2-text003"><span>Logout</span></span> -->
            </div>
          </div>
        </div>
      </div>
      <div class="form2-container01 form2-info">
        <span class="form2-text005">Health Pre-Evaluation <h3>{{ preEvaluationResults }}</h3></span>
        <div class="form2-container02">
          <label class="form2-text006">Form ID:</label>
          <span id="form2-id" class="form2-text007">
            <span>QLI-QHSP-10-F04</span>
            <br />
          </span>
        </div>
        <div class="form2-container03">
          <label class="form2-text010">Rev No:</label>
          <span id="form2-revno" class="form2-text011">
            <span>00</span>
            <br />
          </span>
        </div>
        <div class="form2-container04">
          <label class="form2-text014">
            <span>Effective Date:</span>
            <br />
          </label>
          <span id="form2-effectivedate" class="form2-text017">
            <span>04.04.2022</span>
            <br />
          </span>
        </div>
      </div>
      <div class="form2-steps form2-container-steps">
        <div class="form2-tab">
          <div class="form2-frame111">
            <a href="#form2-input-subconName" class="form2-link">
              <div class="form2-frame101">
                <span class="form2-text020">Step 1</span>
              </div>
            </a>
          </div>
          <img
            alt="Line26I748"
            src="/playground_assets/line26i748-gt1l.svg"
            class="form2-line26"
          />
        </div>
        <div class="form2-tab1">
          <div class="form2-frame112">
            <a href="#container-safety-health-pol-org" class="form2-link1">
              <div class="form2-frame102">
                <span class="form2-text021">Step 2</span>
              </div>
            </a>
          </div>
        </div>
        <div class="form2-tab2">
          <div class="form2-frame113">
            <a href="#form2-input-tempdis" class="form2-link2">
              <div class="form2-frame103">
                <span class="form2-text022">Step 3</span>
              </div>
            </a>
          </div>
        </div>
        <div class="form2-tab3">
          <div class="form2-frame114">
            <a href="#form2-input-acknowledgement-1" class="form2-link3">
              <div class="form2-frame104">
                <span class="form2-text023">Step 4</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="form2-container05">
          <div class="form2-inputtext">
            <span class="form2-text024"><span>Date</span></span>
            <input
              type="date"
              id="form2-input-date"
              required
              class="form2-textinput input"
              :disabled="!isVendor"
              v-model="evaluationDate"
            />
          </div>
          <div class="form2-inputtext01">
            <span class="form2-text026"><span>Scope of Work</span></span>
            <input
              type="text"
              id="form2-input-scope"
              required
              class="form2-textinput01 input"
              :disabled="!isVendor"
              v-model="scopeOfWork"
            />
          </div>
          <div class="form2-inputtext02">
            <span class="form2-text028"><span>Evaluated By</span></span>
            <input
              type="text"
              id="form2-input-evaluatedBy"
              required
              class="form2-textinput02 input"
              :disabled="!isVendor"
              v-model="evaluationPerson"
            />
          </div>
          <div class="form2-inputtext03">
            <span class="form2-text030"><span>Name of Sub-Contractor</span></span>
            <input
              type="text"
              id="form2-input-subconName"
              class="form2-textinput03 input"
              v-model="subContractorName"
              required
              :disabled="!isVendor"
            />
          </div>
        </div>
        <div class="form2-container-safety" id="container-safety-health-pol-org">
          <span class="form2-text032">
            Safety &amp; Health Policy and Organisation
          </span>
          <span class="form2-text033">
            a) Is there a written Safety &amp; Health Policy?
          </span>
          <div id="form2-radio-polandorg-a" class="form1-radio form2-container06">
            <div class="form2-container-yes-no">
              <div class="form2-container-yes">
                <input type="radio" name="form2-radio-polandorg-a" value="Yes" required :disabled="!isVendor" v-model="writtenPolicy"/>
                <label class="form2-text034">Yes</label>
              </div>
              <div class="form2-container-no">
                <input type="radio" name="form2-radio-polandorg-a" value="No" :disabled="!isVendor" v-model="writtenPolicy"/>
                <label class="form2-text035">
                  <span class="form2-text036">No</span>
                </label>
              </div>
            </div>
          </div>
          <span class="form2-text039">
            <span>
              b) Is there a Safety Organisation with proper delegation of
              responsibility and
              <span v-html="rawbf0r"></span>
            </span>
            <br />
            <span>accountability for </span>
            <span>safety and health?</span>
          </span>
          <div id="form2-radio-polcandorg-c" class="form2-container07 form1-radio">
            <div class="form2-container-yes-no01">
              <div class="form2-container-yes01">
                <input type="radio" name="form2-radio-polandorg-b" value="Yes" required :disabled="!isVendor" v-model="safetyOrganisation"/>
                <label class="form2-text044">Yes</label>
              </div>
              <div class="form2-container-no01">
                <input type="radio" name="form2-radio-polandorg-b" value="No" :disabled="!isVendor" v-model="safetyOrganisation"/>
                <label class="form2-text045">
                  <span class="form2-text046">No</span>
                </label>
              </div>
            </div>
          </div>
          <span class="form2-text049">
            c) Is there a written safety commitment and is it submitted?
          </span>
          <div id="form2-radio-polcandorg-b" class="form2-container08 form1-radio">
            <div class="form2-container-yes-no02">
              <div class="form2-container-yes02">
                <input type="radio" name="form2-radio-polandorg-c" value="Yes" required :disabled="!isVendor" v-model="safetyCommitment"/>
                <label class="form2-text050">Yes</label>
              </div>
              <div class="form2-container-no02">
                <input type="radio" name="form2-radio-polandorg-c" value="No" :disabled="!isVendor" v-model="safetyCommitment"/>
                <label class="form2-text051">No</label>
              </div>
            </div>
          </div>
        </div>
        <div class="form2-container-toolbox">
          <span class="form2-text055">
            <span>
              a) Are regular tool-box meetings conducted and reports submitted?
            </span>
          </span>
          <span class="form2-text057"><span>Tool Box Meeting</span></span>
          <div id="form2-radio-toolbox" class="form2-container09">
            <div class="form2-container-yes-no03">
              <div class="form2-container-yes03">
                <input type="radio" name="form2-radio-toolbox" value="Yes" required :disabled="!isVendor" v-model="toolBoxMeetings"/>
                <label class="form2-text059">Yes</label>
              </div>
              <div class="form2-container-no03">
                <input type="radio" name="form2-radio-toolbox" value="No" :disabled="!isVendor" v-model="toolBoxMeetings"/>
                <label class="form2-text060">
                  <span class="form2-text061">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="form2-container-safetytraining">
          <span class="form2-text064">
            <span>
              a) Are relevant safety training courses provided for management /
              Supervisors?
            </span>
          </span>
          <span class="form2-text066"><span>Safety Training</span></span>
          <div
            id="form2-radio-safetytraining-a"
            class="form2-radio-safetytraining form2-container10"
          >
            <div class="form2-container-yes-no04">
              <div class="form2-container-yes04">
                <input
                  type="radio"
                  name="form2-radio-safetytraining-a"
                  value="Yes" required
                  :disabled="!isVendor"
                  v-model="mgmtTrainingCourse"
                />
                <label class="form2-text068">Yes</label>
              </div>
              <div class="form2-container-no04">
                <input
                  type="radio"
                  name="form2-radio-safetytraining-a"
                  value="No"
                  :disabled="!isVendor"
                  v-model="mgmtTrainingCourse"
                />
                <label class="form2-text069">
                  <span class="form2-text070">No</span>
                </label>
              </div>
            </div>
          </div>
          <span class="form2-text073">
            <span>
              b) Are relevant safety training courses provided for workers?
            </span>
          </span>
          <div
            id="form2-radio-safetytraining-b"
            class="form2-container11 form2-radio-safetytraining"
          >
            <div class="form2-container-yes-no05">
              <div class="form2-container-yes05">
                <input
                  type="radio"
                  name="form2-radio-safetytraining-b"
                  value="Yes" required
                  :disabled="!isVendor"
                  v-model="workersTrainingCourse"
                />
                <label class="form2-text075">Yes</label>
              </div>
              <div class="form2-container-no05">
                <input
                  type="radio"
                  name="form2-radio-safetytraining-b"
                  value="No"
                  :disabled="!isVendor"
                  v-model="workersTrainingCourse"
                />
                <label class="form2-text076">
                  <span class="form2-text077">No</span>
                </label>
              </div>
            </div>
          </div>
          <span class="form2-text080">
            <span>c) Are relevant safety training certificates submitted?</span>
          </span>
          <div
            id="form2-radio-safetytraining-c"
            class="form2-container12 form2-radio-safetytraining"
          >
            <div class="form2-container-yes-no06">
              <div class="form2-container-yes06">
                <input
                  type="radio"
                  name="form2-radio-safetytraining-c"
                  value="Yes" required
                  :disabled="!isVendor"
                  v-model="trainingCertificates"
                />
                <label class="form2-text082">Yes</label>
              </div>
              <div class="form2-container-no06">
                <input
                  type="radio"
                  name="form2-radio-safetytraining-c"
                  value="No"
                  :disabled="!isVendor"
                  v-model="trainingCertificates"
                />
                <label class="form2-text083">
                  <span class="form2-text084">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="form2-container-safetyassesment">
          <span class="form2-text087">
            <span>
              a) Are there written safety &amp; health rules for the workers?
            </span>
          </span>
          <span class="form2-text089">
            <span>
              Safety &amp; Health Rules &amp; Safe Work Procedures/ Risk Assessment
            </span>
          </span>
          <div id="form2-radio-rac-a" class="form2-radio-rac form2-container13">
            <div class="form2-container-yes-no07">
              <div class="form2-container-yes07">
                <input type="radio" name="form2-radio-rac-a" value="Yes" required :disabled="!isVendor"
                  v-model="writtenSafetyRules"/>
                <label class="form2-text091">Yes</label>
              </div>
              <div class="form2-container-no07">
                <input type="radio" name="form2-radio-rac-a" value="No" :disabled="!isVendor"
                  v-model="writtenSafetyRules"/>
                <label class="form2-text092">
                  <span class="form2-text093">No</span>
                </label>
              </div>
            </div>
          </div>
          <span class="form2-text096">
            <span>
              b) Are there written safe work procedures/ risk assessment formulated
              and
              <span v-html="rawy2cl"></span>
            </span>
            <br />
            <span>submitted?</span>
          </span>
          <div id="form2-radio-rac-b" class="form2-container14 form2-radio-rac">
            <div class="form2-container-yes-no08">
              <div class="form2-container-yes08">
                <input type="radio" name="form2-radio-rac-b" value="Yes" required :disabled="!isVendor"
                  v-model="writternRiskAssessment"/>
                <label class="form2-text100">Yes</label>
              </div>
              <div class="form2-container-no08">
                <input type="radio" name="form2-radio-rac-b" value="No" :disabled="!isVendor"
                  v-model="writternRiskAssessment"/>
                <label class="form2-text101">
                  <span class="form2-text102">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="form2-container-safetyhealthcheck">
          <span class="form2-text105">
            <span>
              a) Is there a written programme outlining inspection guidelines,
              frequency and
              <span v-html="rawyvbr"></span>
            </span>
            <br />
            <span>follow-up corrective actions?</span>
          </span>
          <span class="form2-text109">
            <span>Safety &amp; Health Inspection &amp; Equipment</span>
          </span>
          <div
            id="form2-radio-inspecteqp-a"
            class="form2-radio-inspecteqp form2-container15"
          >
            <div class="form2-container-yes-no09">
              <div class="form2-container-yes09">
                <input type="radio" name="form2-radio-inspecteqp-a" value="Yes" required :disabled="!isVendor"
                  v-model="inspectionGuidelines"/>
                <label class="form2-text111">Yes</label>
              </div>
              <div class="form2-container-no09">
                <input type="radio" name="form2-radio-inspecteqp-a" value="No" :disabled="!isVendor"
                  v-model="inspectionGuidelines"/>
                <label class="form2-text112">
                  <span class="form2-text113">No</span>
                </label>
              </div>
            </div>
          </div>
          <span class="form2-text116">
            <span>
              b) Is there available Personal Protective Equipment and of proper
              working
              <span v-html="rawixg1"></span>
            </span>
            <br />
            <span>condition and  </span>
            <span>comply to safety requirements?</span>
          </span>
          <div
            id="form2-radio-inspecteqp-b"
            class="form2-container16 form2-radio-inspecteqp"
          >
            <div class="form2-container-yes-no10">
              <div class="form2-container-yes10">
                <input type="radio" name="form2-radio-inspecteqp-b" value="Yes" required :disabled="!isVendor"
                  v-model="ppe"/>
                <label class="form2-text121">Yes</label>
              </div>
              <div class="form2-container-no10">
                <input type="radio" name="form2-radio-inspecteqp-b" value="No" :disabled="!isVendor"
                  v-model="ppe"/>
                <label class="form2-text122">
                  <span class="form2-text123">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="form2-container-personnel">
          <span class="form2-text126">
            <span>
              a) Is there a Safety Supervisor working at least 5 hrs / week?
            </span>
          </span>
          <span class="form2-text128"><span>Responsible Personnel</span></span>
          <div id="form2-radio-resper-a" class="form2-container17">
            <div class="form2-container-yes-no11">
              <div class="form2-container-yes11">
                <input type="radio" name="form2-radio-resper-a" value="Yes" required :disabled="!isVendor"
                  v-model="safetySupervisorWorkingHours"/>
                <label class="form2-text130">Yes</label>
              </div>
              <div class="form2-container-no11">
                <input type="radio" name="form2-radio-resper-a" value="No" :disabled="!isVendor"
                  v-model="safetySupervisorWorkingHours"/>
                <label class="form2-text131">
                  <span class="form2-text132">No</span>
                </label>
              </div>
            </div>
          </div>
          <span class="form2-text135">
            <span>b) Is there a qualified First Aider?</span>
          </span>
          <div id="form2-radio-resper-b" class="form2-radio-resper">
            <div class="form2-container-yes-no12">
              <div class="form2-container-yes12">
                <input type="radio" name="form2-radio-resper" value="Yes" required :disabled="!isVendor"
                  v-model="firstAider"/>
                <label class="form2-text137">Yes</label>
              </div>
              <div class="form2-container-no12">
                <input type="radio" name="form2-radio-resper" value="No" :disabled="!isVendor"
                  v-model="firstAider"/>
                <label class="form2-text138">
                  <span class="form2-text139">No</span>
                </label>
              </div>
            </div>
          </div>
          <span class="form2-text142">
            <span>
              c) Are there relevant Licensed Electrical Workers, qualified
              engineers,
              <span v-html="rawdcj6"></span>
            </span>
            <span>
              qualified
              <span v-html="raw2e23"></span>
            </span>
            <br />
            <span>
              supervisors,
              <span v-html="rawgg1u"></span>
            </span>
            <span>lifting supervisors, qualified  </span>
            <span>
              JCB Tower /Mobile / Crawler Crane
              <span v-html="rawltrs"></span>
            </span>
            <br />
            <span>operators?</span>
          </span>
          <div id="form2-radio-resper-c" class="form2-container19">
            <div class="form2-container-yes-no13">
              <div class="form2-container-yes13">
                <input type="radio" name="form2-radio-resper-c" value="Yes" required :disabled="!isVendor"
                  v-model="qualifiedEngineers"/>
                <label class="form2-text151">Yes</label>
              </div>
              <div class="form2-container-no13">
                <input type="radio" name="form2-radio-resper-c" value="No" :disabled="!isVendor"
                  v-model="qualifiedEngineers"/>
                <label class="form2-text152">
                  <span class="form2-text153">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="form2-container-accidentanalysis">
          <span class="form2-text156">
            <span>Number of Temporary Disability Cases in the past 3 years</span>
          </span>
          <span class="form2-text158">
            <span class="form2-text159">
              <span>Accident Analysis</span>
              <br />
              <span></span>
            </span>
            <span>Indicate NA for ‘Not Applicable’</span>
          </span>
          <div class="form2-inputtext04">
            <input
              type="text"
              id="form2-input-tempdis"
              class="form2-textinput04 input"
              required
              v-model="temporaryDisabilityCases"
            />
          </div>
          <span class="form2-text164">
            <span>Number of Permanent Disability Cases in the past 3 years</span>
          </span>
          <div class="form2-inputtext05">
            <input
              type="text"
              id="form2-input-permdis"
              class="form2-textinput05 input"
              required
              v-model="permanentDisabilityCases"
            />
          </div>
          <span class="form2-text166">
            <span>Number of Fatal Cases in the past 3 years</span>
          </span>
          <div class="form2-inputtext06">
            <input
              type="text"
              id="form2-input-fatal"
              class="form2-textinput06 input"
              required
              v-model="fatalityCases"
            />
          </div>
        </div>
        <div class="form2-container-acknowledgement">
          <span class="form2-text168">
            <span>
              I, representative of the above-named sub-contractor, have understand
              the
              <span v-html="raw5byb"></span>
            </span>
            <br />
            <span>
              various
              <span v-html="rawimof"></span>
            </span>
            <span>
              Safety Criteria listed above and hereby acknowledged that
              <span v-html="rawft3n"></span>
            </span>
            <br />
            <span>
              the information given above are
              <span v-html="rawlzle"></span>
            </span>
            <span>
              valid and supporting items/documents are
              <span v-html="rawvvxq"></span>
            </span>
            <br />
            <span>available upon request by the main contractor.</span>
          </span>
          <span class="form2-text178">Acknowledged by</span>
          <div class="form2-inputtext07">
            <input
              type="text"
              id="form2-input-acknowledgement-1"
              class="form2-textinput07 input"
              v-model="acknowledgementPerson"
              required
              :disabled="!isVendor"
            />
          </div>
          <span class="form2-text179">Signature</span>
          <div class="form2-inputtext08">
            <input
              type="text"
              id="form2-input-acknowledgement-2"
              class="form2-textinput08 input"
              v-model="acknowledgementSignature"
              required
              :disabled="!isVendor"
            />
          </div>
          <span class="form2-text180">Date</span>
          <div class="form2-inputtext09">
            <input
              type="date"
              id="form2-input-signature"
              class="form2-textinput09 input"
              v-model="acknowledgementDate"
              required
              :disabled="!isVendor"
            />
          </div>
          <span class="form2-text181"><span>Acknowledgment</span></span>
        </div>
        <div class="form2-container20">
          <button id="form2-btn-save" type="button" class="form2-button" @click.prevent="handleSave">
            <span class="form2-text183 ParagraphNormalRegular">Save</span>
          </button>
          <input id="form2-btn-submit" type="submit" class="form2-button1" v-if="isVendor"/>
            <!-- <span class="form2-text184 ParagraphNormalRegular">Submit</span>
          </button> -->
          <!-- <button id="form2-btn-rejectReview" class="form2-button2">
            <span class="form2-text185 ParagraphNormalRegular">Reject Review</span>
          </button>
          <button id="form2-btn-approveReview" type="button" class="form2-button3">
            <span class="form2-text186 ParagraphNormalRegular">Approve Review</span>
          </button>
          <button id="form2-disapproveWorkflow" type="button" class="form2-button4">
            <span class="form2-text187 ParagraphNormalRegular">
              Disapprove Workflow
            </span>
          </button>
          <button id="form2-approveWorkflow" type="button" class="form2-button5">
            <span class="form2-text188 ParagraphNormalRegular">
              Approve Workflow
            </span>
          </button> -->
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
  name: 'Form2',
  data() {
    return {
      rawbf0r: ' ',
      rawy2cl: ' ',
      rawyvbr: ' ',
      rawixg1: ' ',
      rawdcj6: ' ',
      raw2e23: ' ',
      rawgg1u: ' ',
      rawltrs: ' ',
      raw5byb: ' ',
      rawimof: ' ',
      rawft3n: ' ',
      rawlzle: ' ',
      rawvvxq: ' ',

      // UI control

      // RBAC
      isVendor: false,
      isAdminOrApprover: false,
      isApprover: false,

      // form
      id: null,

      subContractorName: '',
      scopeOfWork: '',
      evaluationPerson: '',
      evaluationDate: '',

      writtenPolicy: null,
      safetyOrganisation: null,
      safetyCommitment: null,

      toolBoxMeetings: null,

      mgmtTrainingCourse: null,
      workersTrainingCourse: null,
      trainingCertificates: null,

      writtenSafetyRules: null,
      writternRiskAssessment: null,

      inspectionGuidelines: null,
      ppe: null,

      safetySupervisorWorkingHours: null,
      firstAider: null,
      qualifiedEngineers: null,

      temporaryDisabilityCases: '',
      permanentDisabilityCases: '',
      fatalityCases: '',

      acknowledgementPerson: '',
      acknowledgementSignature: '',
      acknowledgementDate: '',

      preEvaluationResults: ""
    }


  },
  metaInfo: {
    title: 'Form-2 - Quantum VMS',
    meta: [
      {
        property: 'og:title',
        content: 'Form-2 - Quantum VMS',
      },
    ],
  },
  async mounted() {
    // fetch and set id from url
    this.id = this.$route.query.formid;

    // fetch form and update data
    await axios({
      url: 'getPreEvaluationForm',
      method: 'post',
      baseURL: API_URL,
      headers: authHeader(),
      data: {
        id: this.id
      },
      withCredentials: false
    })
    .then(response => {
      var result = response.data

      this.id= result.id;

      this.subContractorName= result.subContractorName;
      this.scopeOfWork= result.scopeOfWork;
      this.evaluationPerson= result.evaluationPerson;
      this.evaluationDate= result.evaluationDate;

      this.writtenPolicy= result.writtenPolicy;
      this.safetyOrganisation= result.safetyOrganisation;
      this.safetyCommitment= result.safetyCommitment;

      this.toolBoxMeetings= result.toolBoxMeetings;

      this.mgmtTrainingCourse= result.mgmtTrainingCourse;
      this.workersTrainingCourse= result.workersTrainingCourse;
      this.trainingCertificates= result.trainingCertificates;

      this.writtenSafetyRules= result.writtenSafetyRules;
      this.writternRiskAssessment= result.writternRiskAssessment;

      this.inspectionGuidelines= result.inspectionGuidelines;
      this.ppe= result.ppe;

      this.safetySupervisorWorkingHours= result.safetySupervisorWorkingHours;
      this.firstAider= result.firstAider;
      this.qualifiedEngineers= result.qualifiedEngineers;

      this.temporaryDisabilityCases= result.temporaryDisabilityCases;
      this.permanentDisabilityCases= result.permanentDisabilityCases;
      this.fatalityCases= result.fatalityCases;

      this.acknowledgementPerson= result.acknowledgementPerson;
      this.acknowledgementDate= result.acknowledgementDate;
      this.acknowledgementSignature= result.acknowledgementSignature;

      this.preEvaluationResults= result.preEvaluationResults;
      
    })
    .catch(error => {
      console.log(error);
    })

    let role = sessionStorage.getItem('role');

    // control inputs based on form status
    if (this.preEvaluationResults == "Draft")
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
    else { // "Submitted"
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

  },
  methods: {
    handleHome(){
      alert("Redirecting to home page");
      this.$router.push('/workflow');
    },
    async handleSave(){
      if (sessionStorage.getItem('role') == "USER") this.preEvaluationResults = "Draft";
      await axios({
        url: 'updatePreEvaluationForm',
        method: 'put',
        baseURL: API_URL,
        headers: authHeader(),
        data: {

          id: this.id,

          subContractorName: this.subContractorName,
          scopeOfWork: this.scopeOfWork,
          evaluationPerson: this.evaluationPerson,
          evaluationDate: this.evaluationDate,

          writtenPolicy: this.writtenPolicy,
          safetyOrganisation: this.safetyOrganisation,
          safetyCommitment: this.safetyCommitment,

          toolBoxMeetings: this.toolBoxMeetings,

          mgmtTrainingCourse: this.mgmtTrainingCourse,
          workersTrainingCourse: this.workersTrainingCourse,
          trainingCertificates: this.trainingCertificates,

          writtenSafetyRules: this.writtenSafetyRules,
          writternRiskAssessment: this.writternRiskAssessment,

          inspectionGuidelines: this.inspectionGuidelines,
          ppe: this.ppe,

          safetySupervisorWorkingHours: this.safetySupervisorWorkingHours,
          firstAider: this.firstAider,
          qualifiedEngineers: this.qualifiedEngineers,

          temporaryDisabilityCases: this.temporaryDisabilityCases,
          permanentDisabilityCases: this.permanentDisabilityCases,
          fatalityCases: this.fatalityCases,

          acknowledgementPerson: this.acknowledgementPerson,
          acknowledgementDate: this.acknowledgementDate,
          acknowledgementSignature: this.acknowledgementSignature,

          preEvaluationResults: this.preEvaluationResults
        },
        withCredentials: false
      })
      .then(response => { alert("Form saved"); })
      .catch(error => { console.log(error); })
    },
    async handleSubmit(){
      this.handleSave();
      this.preEvaluationResults = "Submitted";
      await axios({
        url: 'updatePreEvaluationForm',
        method: 'put',
        baseURL: API_URL,
        headers: authHeader(),
        data: {
          id: this.id,
          preEvaluationResults: this.preEvaluationResults
        },
        withCredentials: false
      })
      .then(response => { 
        alert("Form submitted"); 
      })
      .catch(error => { console.log(error); })

    }
  }
}
</script>

<style scoped>
.form2-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.form2-form2admin {
  width: 100%;
  height: 4000px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  background-color: var(--dl-color-neutral-6);
}
.form2-header-horizontal {
  top: 0px;
  right: 0px;
  width: 100%;
  height: 144px;
  display: flex;
  padding: 42.66666793823242px;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
  background-color: var(--dl-color-neutral-6);
}
.form2-frame12 {
  display: flex;
  position: relative;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: transparent;
  justify-content: space-between;
}
.form2-text {
  color: var(--dl-color-neutral-1);
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
.form2-frame11 {
  display: flex;
  position: relative;
  align-items: center;
  border-color: transparent;
  justify-content: flex-end;
}
.form2-frame10 {
  display: flex;
  position: relative;
  align-items: flex-end;
  border-color: transparent;
}
.form2-text001 {
  color: var(--dl-color-neutral-1);
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
.form2-text003 {
  color: var(--dl-color-neutral-1);
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
.form2-container01 {
  align-items: flex-start;
  justify-content: flex-start;
}
.form2-text005 {
  top: -20px;
  left: 0px;
  color: var(--dl-color-neutral-1);
  height: auto;
  position: absolute;
  font-size: 37.3333px;
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
.form2-container02 {
  position: relative;
  align-self: center;
  margin-top: 0px;
  width: 100%;
}
.form2-text006 {
  align-self: center;
}
.form2-text007 {
  top: 0px;
  left: 70px;
  position: absolute;
  align-self: center;
}
.form2-container03 {
  flex: initial;
  left: 0px;
  width: 100%;
  bottom: var(--dl-space-space-threeunits);
  position: absolute;
  align-self: center;
}
.form2-text010 {
  align-self: center;
}
.form2-text011 {
  top: -1px;
  left: 0px;
  position: absolute;
  align-self: center;
  margin-left: 70px;
}
.form2-container04 {
  flex: initial;
  left: 0px;
  width: 100%;
  bottom: var(--dl-space-space-unit);
  position: absolute;
  align-self: center;
}
.form2-text014 {
  align-self: center;
}
.form2-text017 {
  top: 0px;
  left: 0px;
  position: absolute;
  align-self: center;
  margin-top: auto;
  margin-left: 120px;
  margin-right: auto;
  margin-bottom: auto;
}
.form2-tab {
  top: 0px;
  left: 0px;
  width: 99px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
  background-color: var(--dl-color-neutral-6);
}
.form2-frame111 {
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
.form2-link {
  display: contents;
}
.form2-frame101 {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
  text-decoration: none;
}
.form2-text020 {
  color: var(--dl-color-neutral-1);
  height: auto;
  font-size: 18.6667px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Inter;
  font-weight: 300;
  line-height: 26.6667px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form2-line26 {
  width: 99px;
  height: 0px;
  position: relative;
  align-self: stretch;
}
.form2-tab1 {
  top: 0px;
  left: 98.66317749023438px;
  width: 101px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
  background-color: var(--dl-color-neutral-6);
}
.form2-frame112 {
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
.form2-link1 {
  display: contents;
}
.form2-frame102 {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
  text-decoration: none;
}
.form2-text021 {
  color: var(--dl-color-neutral-2);
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
}
.form2-tab2 {
  top: 0px;
  left: 200px;
  width: 101px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
  background-color: var(--dl-color-neutral-6);
}
.form2-frame113 {
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
.form2-link2 {
  display: contents;
}
.form2-frame103 {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
  text-decoration: none;
}
.form2-text022 {
  color: var(--dl-color-neutral-2);
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
}
.form2-tab3 {
  top: 0px;
  right: 100.32990264892578px;
  width: 102px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
  background-color: var(--dl-color-neutral-6);
}
.form2-frame114 {
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
.form2-link3 {
  display: contents;
}
.form2-frame104 {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
  text-decoration: none;
}
.form2-text023 {
  color: var(--dl-color-neutral-2);
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
}
.form2-container05 {
  top: 618.6632080078125px;
  left: 273.3333435058594px;
  width: 1386.6666564941406px;
  height: 215.9896125793457px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-inputtext {
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
.form2-text024 {
  top: -32px;
  color: var(--dl-color-neutral-1);
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
.form2-textinput {
  width: 100%;
  height: 100%;
  border-width: 2px;
}
.form2-inputtext01 {
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
.form2-text026 {
  top: -32px;
  color: var(--dl-color-neutral-1);
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
.form2-textinput01 {
  width: 100%;
  height: 100%;
  border-width: 2px;
}
.form2-inputtext02 {
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
.form2-text028 {
  top: -32px;
  color: var(--dl-color-neutral-1);
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
.form2-textinput02 {
  width: 100%;
  height: 100%;
  border-width: 2px;
}
.form2-inputtext03 {
  width: 600px;
  height: 58.66666793823242px;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form2-text030 {
  top: -32px;
  color: var(--dl-color-neutral-1);
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
.form2-textinput03 {
  width: 100%;
  height: 100%;
  border-width: 2px;
}
.form2-container-safety {
  top: 945.3298950195312px;
  left: 271.9965515136719px;
  width: 1153.3333740234375px;
  height: 306.66663360595703px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-text032 {
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
.form2-text033 {
  top: 43.9930419921875px;
  left: 0px;
  color: var(--dl-color-neutral-1);
  height: auto;
  position: absolute;
  font-size: 21.3333px;
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
.form2-container-yes-no {
  width: 100%;
  height: 100%;
  position: relative;
}
.form2-container-yes {
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  position: absolute;
}
.form2-text034 {
  font-size: 21px;
}
.form2-container-no {
  top: 0px;
  left: var(--dl-space-space-fourunits);
  width: auto;
  height: auto;
  position: absolute;
  margin-left: 0px;
}
.form2-text035 {
  font-size: 21px;
}
.form2-text036 {
  font-size: 21px;
}
.form2-text037 {
  font-size: 21px;
}
.form2-text038 {
  font-size: 21px;
}
.form2-text039 {
  top: 120px;
  left: 1.3367919921875px;
  color: var(--dl-color-neutral-1);
  width: 1152px;
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
.form2-container07 {
  top: 181.31951904296875px;
  left: 2.65625px;
  width: 245.65972900390625px;
  height: 31.99652862548828px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-container-yes-no01 {
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: var(--dl-space-space-halfunit);
}
.form2-container-yes01 {
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  position: absolute;
}
.form2-text044 {
  font-size: 21px;
}
.form2-container-no01 {
  top: 0px;
  left: var(--dl-space-space-fourunits);
  width: auto;
  height: auto;
  position: absolute;
  margin-left: 0px;
}
.form2-text045 {
  font-size: 21px;
}
.form2-text046 {
  font-size: 21px;
}
.form2-text047 {
  font-size: 21px;
}
.form2-text048 {
  font-size: 21px;
}
.form2-text049 {
  left: 1.3367919921875px;
  color: var(--dl-color-neutral-1);
  bottom: 44.0103759765625px;
  height: auto;
  position: absolute;
  font-size: 21.3333px;
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
.form2-container08 {
  top: 274.65277099609375px;
  left: 2.65625px;
  width: 245.65972900390625px;
  height: 31.99652862548828px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-container-yes-no02 {
  width: 100%;
  height: 100%;
  position: relative;
}
.form2-container-yes02 {
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  position: absolute;
}
.form2-text050 {
  font-size: 21px;
}
.form2-container-no02 {
  top: 0px;
  left: var(--dl-space-space-fourunits);
  width: auto;
  height: auto;
  position: absolute;
  margin-left: 0px;
}
.form2-text051 {
  font-size: 21px;
}
.form2-text052 {
  font-size: 21px;
}
.form2-text053 {
  font-size: 21px;
}
.form2-text054 {
  font-size: 21px;
}
.form2-container-toolbox {
  top: 1294.65283203125px;
  left: 269.32293701171875px;
  width: 681.52783203125px;
  height: 120.00006866455078px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-text055 {
  top: 44.0103759765625px;
  left: 0px;
  color: var(--dl-color-neutral-1);
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
.form2-text057 {
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
.form2-container09 {
  top: 88.0035400390625px;
  left: 1.319427490234375px;
  width: 245.65972900390625px;
  height: 31.99652862548828px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-container-yes-no03 {
  width: 100%;
  height: 100%;
  position: relative;
}
.form2-container-yes03 {
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  position: absolute;
}
.form2-text059 {
  font-size: 21px;
}
.form2-container-no03 {
  top: 0px;
  left: var(--dl-space-space-fourunits);
  width: auto;
  height: auto;
  position: absolute;
  margin-left: 0px;
}
.form2-text060 {
  font-size: 21px;
}
.form2-text061 {
  font-size: 21px;
}
.form2-text062 {
  font-size: 21px;
}
.form2-text063 {
  font-size: 21px;
}
.form2-container-safetytraining {
  top: 1457.326416015625px;
  left: 269.32293701171875px;
  width: 1153.3333740234375px;
  height: 306.6666946411133px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-text064 {
  top: 43.9757080078125px;
  left: 0px;
  color: var(--dl-color-neutral-1);
  width: 1041px;
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
.form2-text066 {
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
.form2-container-yes-no04 {
  width: 100%;
  height: 100%;
  position: relative;
}
.form2-container-yes04 {
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  position: absolute;
}
.form2-text068 {
  font-size: 21px;
}
.form2-container-no04 {
  top: 0px;
  left: var(--dl-space-space-fourunits);
  width: auto;
  height: auto;
  position: absolute;
  margin-left: 0px;
}
.form2-text069 {
  font-size: 21px;
}
.form2-text070 {
  font-size: 21px;
}
.form2-text071 {
  font-size: 21px;
}
.form2-text072 {
  font-size: 21px;
}
.form2-text073 {
  top: 137.326416015625px;
  left: 1.3367919921875px;
  color: var(--dl-color-neutral-1);
  width: 1152px;
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
.form2-container11 {
  top: 181.354248046875px;
  left: 2.673614501953125px;
  width: 245.64236450195312px;
  height: 31.99652862548828px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-container-yes-no05 {
  width: 100%;
  height: 100%;
  position: relative;
}
.form2-container-yes05 {
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  position: absolute;
}
.form2-text075 {
  font-size: 21px;
}
.form2-container-no05 {
  top: 0px;
  left: var(--dl-space-space-fourunits);
  width: auto;
  height: auto;
  position: absolute;
  margin-left: 0px;
}
.form2-text076 {
  font-size: 21px;
}
.form2-text077 {
  font-size: 21px;
}
.form2-text078 {
  font-size: 21px;
}
.form2-text079 {
  font-size: 21px;
}
.form2-text080 {
  left: 1.3367919921875px;
  color: var(--dl-color-neutral-1);
  bottom: 44.0103759765625px;
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
.form2-container12 {
  top: 274.670166015625px;
  left: 2.673614501953125px;
  width: 245.64236450195312px;
  height: 31.99652862548828px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-container-yes-no06 {
  width: 100%;
  height: 100%;
  position: relative;
}
.form2-container-yes06 {
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  position: absolute;
}
.form2-text082 {
  font-size: 21px;
}
.form2-container-no06 {
  top: 0px;
  left: var(--dl-space-space-fourunits);
  width: auto;
  height: auto;
  position: absolute;
  margin-left: 0px;
}
.form2-text083 {
  font-size: 21px;
}
.form2-text084 {
  font-size: 21px;
}
.form2-text085 {
  font-size: 21px;
}
.form2-text086 {
  font-size: 21px;
}
.form2-container-safetyassesment {
  top: 1806.6494140625px;
  left: 269.32293701171875px;
  width: 1153.3333740234375px;
  height: 226px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-text087 {
  top: 44.0103759765625px;
  left: 0px;
  color: var(--dl-color-neutral-1);
  width: 1041px;
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
.form2-text089 {
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
.form2-container-yes-no07 {
  width: 100%;
  height: 100%;
  position: relative;
}
.form2-container-yes07 {
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  position: absolute;
}
.form2-text091 {
  font-size: 21px;
}
.form2-container-no07 {
  top: 0px;
  left: var(--dl-space-space-fourunits);
  width: auto;
  height: auto;
  position: absolute;
  margin-left: 0px;
}
.form2-text092 {
  font-size: 21px;
}
.form2-text093 {
  font-size: 21px;
}
.form2-text094 {
  font-size: 21px;
}
.form2-text095 {
  font-size: 21px;
}
.form2-text096 {
  left: 1.3367919921875px;
  color: var(--dl-color-neutral-1);
  width: 1152px;
  bottom: 43.9930419921875px;
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
.form2-container14 {
  top: 193.9930419921875px;
  left: 2.673614501953125px;
  width: 245.64236450195312px;
  height: 31.99652862548828px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-container-yes-no08 {
  width: 100%;
  height: 100%;
  position: relative;
}
.form2-container-yes08 {
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  position: absolute;
}
.form2-text100 {
  font-size: 21px;
}
.form2-container-no08 {
  top: 0px;
  left: var(--dl-space-space-fourunits);
  width: auto;
  height: auto;
  position: absolute;
  margin-left: 0px;
}
.form2-text101 {
  font-size: 21px;
}
.form2-text102 {
  font-size: 21px;
}
.form2-text103 {
  font-size: 21px;
}
.form2-text104 {
  font-size: 21px;
}
.form2-container-safetyhealthcheck {
  top: 2062.65625px;
  left: 271.9965515136719px;
  width: 1224.322998046875px;
  height: 249px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-text105 {
  top: 44.010498046875px;
  left: 0px;
  color: var(--dl-color-neutral-1);
  width: 1185px;
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
.form2-text109 {
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
.form2-container-yes-no09 {
  width: 100%;
  height: 100%;
  position: relative;
}
.form2-container-yes09 {
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  position: absolute;
}
.form2-text111 {
  font-size: 21px;
}
.form2-container-no09 {
  top: 0px;
  left: var(--dl-space-space-fourunits);
  width: auto;
  height: auto;
  position: absolute;
  margin-left: 0px;
}
.form2-text112 {
  font-size: 21px;
}
.form2-text113 {
  font-size: 21px;
}
.form2-text114 {
  font-size: 21px;
}
.form2-text115 {
  font-size: 21px;
}
.form2-text116 {
  left: 1.3367919921875px;
  color: var(--dl-color-neutral-1);
  width: 1223px;
  bottom: 43.9931640625px;
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
.form2-container16 {
  top: 216.99658203125px;
  left: 2.65625px;
  width: 245.65972900390625px;
  height: 31.99652862548828px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-container-yes-no10 {
  width: 100%;
  height: 100%;
  position: relative;
}
.form2-container-yes10 {
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  position: absolute;
}
.form2-text121 {
  font-size: 21px;
}
.form2-container-no10 {
  top: 0px;
  left: var(--dl-space-space-fourunits);
  width: auto;
  height: auto;
  position: absolute;
  margin-left: 0px;
}
.form2-text122 {
  font-size: 21px;
}
.form2-text123 {
  font-size: 21px;
}
.form2-text124 {
  font-size: 21px;
}
.form2-text125 {
  font-size: 21px;
}
.form2-container-personnel {
  top: 2318.663330078125px;
  left: 274.6528015136719px;
  width: 1153.3333740234375px;
  height: 360px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-text126 {
  top: 43.992919921875px;
  left: 0px;
  color: var(--dl-color-neutral-1);
  width: 1041px;
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
.form2-text128 {
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
.form2-container17 {
  top: 87.986083984375px;
  left: 1.319427490234375px;
  width: 245.65972900390625px;
  height: 31.99652862548828px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-container-yes-no11 {
  width: 100%;
  height: 100%;
  position: relative;
}
.form2-container-yes11 {
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  position: absolute;
}
.form2-text130 {
  font-size: 21px;
}
.form2-container-no11 {
  top: 0px;
  left: var(--dl-space-space-fourunits);
  width: auto;
  height: auto;
  position: absolute;
  margin-left: 0px;
}
.form2-text131 {
  font-size: 21px;
}
.form2-text132 {
  font-size: 21px;
}
.form2-text133 {
  font-size: 21px;
}
.form2-text134 {
  font-size: 21px;
}
.form2-text135 {
  top: 137.326416015625px;
  left: 1.3367919921875px;
  color: var(--dl-color-neutral-1);
  width: 1152px;
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
.form2-container-yes-no12 {
  width: 100%;
  height: 100%;
  position: relative;
}
.form2-container-yes12 {
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  position: absolute;
}
.form2-text137 {
  font-size: 21px;
}
.form2-container-no12 {
  top: 0px;
  left: var(--dl-space-space-fourunits);
  width: auto;
  height: auto;
  position: absolute;
  margin-left: 0px;
}
.form2-text138 {
  font-size: 21px;
}
.form2-text139 {
  font-size: 21px;
}
.form2-text140 {
  font-size: 21px;
}
.form2-text141 {
  font-size: 21px;
}
.form2-text142 {
  left: 1.3367919921875px;
  color: var(--dl-color-neutral-1);
  width: 1129px;
  bottom: 41.33696746826172px;
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
.form2-container19 {
  top: 328.00341796875px;
  left: 2.673614501953125px;
  width: 245.65972900390625px;
  height: 31.99652862548828px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-container-yes-no13 {
  width: 100%;
  height: 100%;
  position: relative;
}
.form2-container-yes13 {
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  position: absolute;
}
.form2-text151 {
  font-size: 21px;
}
.form2-container-no13 {
  top: 0px;
  left: var(--dl-space-space-fourunits);
  width: auto;
  height: auto;
  position: absolute;
  margin-left: 0px;
}
.form2-text152 {
  font-size: 21px;
}
.form2-text153 {
  font-size: 21px;
}
.form2-text154 {
  font-size: 21px;
}
.form2-text155 {
  font-size: 21px;
}
.form2-container-accidentanalysis {
  top: 2686.666748046875px;
  left: 274.6528015136719px;
  width: 1185px;
  height: 410.6597785949707px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-text156 {
  top: 58.663330078125px;
  left: 0px;
  color: var(--dl-color-neutral-1);
  width: 1185px;
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
.form2-text158 {
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
.form2-text159 {
  font-weight: 700;
}
.form2-inputtext04 {
  top: 101.319580078125px;
  left: 0px;
  width: 237px;
  height: 58.66666793823242px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form2-textinput04 {
  width: 100%;
  height: 100%;
  border-width: 2px;
}
.form2-text164 {
  top: 177.326416015625px;
  left: 0px;
  color: var(--dl-color-neutral-1);
  width: 1185px;
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
.form2-inputtext05 {
  left: 0px;
  width: 237px;
  bottom: 125.34716796875px;
  height: 58.66666793823242px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form2-textinput05 {
  width: 100%;
  height: 100%;
  border-width: 2px;
}
.form2-text166 {
  left: 0px;
  color: var(--dl-color-neutral-1);
  width: 1185px;
  bottom: 76.00699996948242px;
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
.form2-inputtext06 {
  left: 0px;
  width: 237px;
  bottom: 0px;
  height: 58.66666793823242px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form2-textinput06 {
  width: 100%;
  height: 100%;
  border-width: 2px;
}
.form2-container-acknowledgement {
  top: 3195.98974609375px;
  left: 274.6528015136719px;
  width: 1185px;
  height: 437px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-text168 {
  top: 44.010498046875px;
  left: 0px;
  color: rgba(0, 0, 0, 1);
  width: 1088px;
  height: auto;
  position: absolute;
  font-size: 21.33333396911621px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  line-height: 26.666667938232422px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form2-text178 {
  top: 191px;
  left: 0px;
  color: var(--dl-color-neutral-1);
  width: 1185px;
  height: auto;
  position: absolute;
  font-size: 21.3333px;
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
.form2-inputtext07 {
  top: 180px;
  left: 217.34375px;
  width: 237px;
  height: 58.66666793823242px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form2-textinput07 {
  width: 100%;
  height: 100%;
  border-width: 2px;
}
.form2-text179 {
  top: 290px;
  left: 0px;
  color: var(--dl-color-neutral-1);
  width: 1185px;
  height: auto;
  position: absolute;
  font-size: 21.3333px;
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
.form2-inputtext08 {
  left: 217.34375px;
  width: 237px;
  bottom: 103.9931640625px;
  height: 58.66666793823242px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form2-textinput08 {
  width: 100%;
  height: 100%;
  border-width: 2px;
}
.form2-text180 {
  left: 0px;
  color: var(--dl-color-neutral-1);
  width: 1185px;
  bottom: 13.333415985107422px;
  height: auto;
  position: absolute;
  font-size: 21.3333px;
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
.form2-inputtext09 {
  left: 217.34375px;
  width: 237px;
  bottom: 0px;
  height: 58.66666793823242px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form2-textinput09 {
  width: 100%;
  height: 100%;
  border-width: 2px;
}
.form2-text181 {
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
.form2-container20 {
  top: 3718.663330078125px;
  left: 249.6527862548828px;
  width: 400px;
  height: 225px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form2-button {
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
.form2-text183 {
  color: var(--dl-color-default-black4);
  height: auto;
  flex-grow: 1;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
.form2-button1 {
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
  color:white;
}
.form2-text184 {
  color: var(--dl-color-neutral-6);
  height: auto;
  flex-grow: 1;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
.form2-button2 {
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
.form2-text185 {
  color: var(--dl-color-neutral-6);
  height: auto;
  flex-grow: 1;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
.form2-button3 {
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
.form2-text186 {
  color: var(--dl-color-neutral-6);
  height: auto;
  flex-grow: 1;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
.form2-button4 {
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
.form2-text187 {
  color: var(--dl-color-neutral-6);
  height: auto;
  flex-grow: 1;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
.form2-button5 {
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
.form2-text188 {
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
  .form2-header-horizontal {
    position: static;
    align-self: flex-start;
    width: 100%;
  }
  .form2-inputtext {
    width: 400px;
    margin-right: 300px;
  }
  .form2-inputtext01 {
    width: 400px;
    margin-right: 300px;
  }
  .form2-inputtext02 {
    width: 400px;
  }
  .form2-inputtext03 {
    width: 400px;
  }
  .form2-text033 {
    color: var(--dl-color-neutral-1);
    font-size: 21.3333px;
    font-family: Inter;
    font-weight: 400;
    line-height: 32px;
    text-decoration: none;
  }
  .form2-text034 {
    font-size: 21px;
  }
  .form2-container-no {
    left: 0px;
    margin-left: var(--dl-space-space-sixunits);
  }
  .form2-text036 {
    font-size: 21px;
  }
  .form2-container-yes-no01 {
    margin-top: var(--dl-space-space-unit);
  }
  .form2-text044 {
    font-size: 21px;
  }
  .form2-container-no01 {
    left: 0px;
    margin-left: var(--dl-space-space-sixunits);
  }
  .form2-text046 {
    font-size: 21px;
  }
  .form2-container08 {
    top: 260px;
    left: 0px;
    bottom: 0px;
    position: absolute;
    margin-bottom: 0px;
  }
  .form2-container-yes-no02 {
    margin-top: var(--dl-space-space-halfunit);
  }
  .form2-text050 {
    font-size: 21px;
  }
  .form2-container-no02 {
    left: 0px;
    margin-left: var(--dl-space-space-sixunits);
  }
  .form2-text052 {
    font-size: 21px;
  }
  .form2-container-yes-no03 {
    margin-top: var(--dl-space-space-halfunit);
  }
  .form2-text059 {
    font-size: 21px;
  }
  .form2-container-no03 {
    left: 0px;
    margin-left: var(--dl-space-space-sixunits);
  }
  .form2-text061 {
    font-size: 21px;
  }
  .form2-container-yes-no04 {
    margin-top: var(--dl-space-space-halfunit);
  }
  .form2-text068 {
    font-size: 21px;
  }
  .form2-container-no04 {
    left: 0px;
    margin-left: var(--dl-space-space-sixunits);
  }
  .form2-text070 {
    font-size: 21px;
  }
  .form2-container-yes-no05 {
    margin-top: var(--dl-space-space-halfunit);
  }
  .form2-text075 {
    font-size: 21px;
  }
  .form2-container-no05 {
    left: 0px;
    margin-left: var(--dl-space-space-sixunits);
  }
  .form2-text077 {
    font-size: 21px;
  }
  .form2-container-yes-no06 {
    margin-top: var(--dl-space-space-halfunit);
  }
  .form2-text082 {
    font-size: 21px;
  }
  .form2-container-no06 {
    left: 0px;
    margin-left: var(--dl-space-space-sixunits);
  }
  .form2-text084 {
    font-size: 21px;
  }
  .form2-container-yes-no07 {
    margin-top: var(--dl-space-space-halfunit);
  }
  .form2-text091 {
    font-size: 21px;
  }
  .form2-container-no07 {
    left: 0px;
    margin-left: var(--dl-space-space-sixunits);
  }
  .form2-text093 {
    font-size: 21px;
  }
  .form2-container-yes-no08 {
    margin-top: var(--dl-space-space-halfunit);
  }
  .form2-text100 {
    font-size: 21px;
  }
  .form2-container-no08 {
    left: 0px;
    margin-left: var(--dl-space-space-sixunits);
  }
  .form2-text102 {
    font-size: 21px;
  }
  .form2-container-yes-no09 {
    margin-top: var(--dl-space-space-halfunit);
  }
  .form2-text111 {
    font-size: 21px;
  }
  .form2-container-no09 {
    left: 0px;
    margin-left: var(--dl-space-space-sixunits);
  }
  .form2-text113 {
    font-size: 21px;
  }
  .form2-container-yes-no10 {
    margin-top: var(--dl-space-space-halfunit);
  }
  .form2-text121 {
    font-size: 21px;
  }
  .form2-container-no10 {
    left: 0px;
    margin-left: var(--dl-space-space-sixunits);
  }
  .form2-text123 {
    font-size: 21px;
  }
  .form2-container-yes-no11 {
    margin-top: var(--dl-space-space-halfunit);
  }
  .form2-text130 {
    font-size: 21px;
  }
  .form2-container-no11 {
    left: 0px;
    margin-left: var(--dl-space-space-sixunits);
  }
  .form2-text132 {
    font-size: 21px;
  }
  .form2-container-yes-no12 {
    margin-top: var(--dl-space-space-halfunit);
  }
  .form2-text137 {
    font-size: 21px;
  }
  .form2-container-no12 {
    left: 0px;
    margin-left: var(--dl-space-space-sixunits);
  }
  .form2-text139 {
    font-size: 21px;
  }
  .form2-container-yes-no13 {
    margin-top: var(--dl-space-space-halfunit);
  }
  .form2-text151 {
    font-size: 21px;
  }
  .form2-container-no13 {
    left: 0px;
    margin-left: var(--dl-space-space-sixunits);
  }
  .form2-text153 {
    font-size: 21px;
  }
  .form2-button2 {
    background-color: var(--dl-color-danger-700);
  }
}
@media(max-width: 1200px) {
  .form2-container01 {
    margin-left: -100px;
  }
  .form2-container05 {
    margin-left: -100px;
  }
  .form2-inputtext {
    margin-right: 500px;
  }
  .form2-inputtext01 {
    margin-right: 500px;
  }
  .form2-container-safety {
    margin-left: -100px;
  }
  .form2-text039 {
    color: var(--dl-color-neutral-1);
    font-size: 21.3333px;
    font-family: Inter;
    font-weight: 400;
    line-height: 32px;
    text-decoration: none;
  }
  .form2-container-toolbox {
    margin-left: -100px;
  }
  .form2-container-safetytraining {
    margin-left: -100px;
  }
  .form2-container-safetyassesment {
    margin-left: -100px;
  }
  .form2-container-safetyhealthcheck {
    height: auto;
    margin-left: -100px;
  }
  .form2-text105 {
    top: 44px;
    left: 0px;
    color: var(--dl-color-neutral-1);
    font-size: 21.3333px;
    font-family: Inter;
    font-weight: 400;
    line-height: 32px;
    text-decoration: none;
  }
  .form2-text109 {
    top: -2px;
    right: -638px;
    margin: auto;
  }
  .form2-text116 {
    left: 3px;
    color: var(--dl-color-neutral-1);
    bottom: -215px;
    font-size: 21.3333px;
    font-family: Inter;
    font-weight: 400;
    line-height: 32px;
    text-decoration: none;
  }
  .form2-container-personnel {
    margin-left: -100px;
  }
  .form2-text142 {
    color: var(--dl-color-neutral-1);
    font-size: 21.3333px;
    font-family: Inter;
    font-weight: 400;
    line-height: 32px;
    text-decoration: none;
  }
  .form2-container-accidentanalysis {
    margin-left: -100px;
  }
  .form2-container-acknowledgement {
    margin-left: -100px;
  }
  .form2-text168 {
    color: rgb(0, 0, 0);
    font-size: 21.3333px;
    font-family: Inter;
    font-weight: 400;
    line-height: 26.6667px;
    text-decoration: none;
  }
  .form2-container20 {
    left: 170px;
  }
  .form2-button {
    left: 0px;
    margin-left: 0px;
  }
  .form2-button1 {
    left: 0px;
    margin-left: 200px;
  }
  .form2-button2 {
    left: 0px;
    margin-left: 0px;
  }
  .form2-button3 {
    left: 0px;
    margin-left: 200px;
  }
  .form2-button4 {
    left: 0px;
    margin-left: 0px;
  }
  .form2-button5 {
    left: 0px;
    margin-left: 200px;
  }
}
@media(max-width: 991px) {
  .form2-form2admin {
    height: 4000px;
  }
  .form2-container01 {
    margin-left: -140px;
  }
  .form2-container05 {
    width: 100%;
    margin-left: -140px;
    margin-right: 0px;
  }
  .form2-inputtext {
    left: 0px;
    width: 250px;
    margin-left: 400px;
    margin-right: 0px;
  }
  .form2-inputtext01 {
    left: 0px;
    width: 250px;
    margin-left: 400px;
    margin-right: 0px;
  }
  .form2-inputtext02 {
    width: 250px;
  }
  .form2-inputtext03 {
    width: 250px;
  }
  .form2-container-safety {
    margin-top: 0px;
    margin-left: -140px;
  }
  .form2-text039 {
    color: var(--dl-color-neutral-1);
  }
  .form2-container-toolbox {
    margin-top: 10px;
    margin-left: -140px;
  }
  .form2-container-safetytraining {
    margin-top: 10px;
    margin-left: -140px;
  }
  .form2-container-safetyassesment {
    margin-top: 10px;
    margin-left: -140px;
  }
  .form2-text096 {
    color: var(--dl-color-neutral-1);
    bottom: 35px;
    font-size: 21.3333px;
    font-family: Inter;
    font-weight: 400;
    line-height: 32px;
    text-decoration: none;
  }
  .form2-container-safetyhealthcheck {
    margin-top: 10px;
    margin-left: -140px;
  }
  .form2-text105 {
    color: var(--dl-color-neutral-1);
    font-size: 21.3333px;
    font-family: Inter;
    font-weight: 400;
    line-height: 32px;
    text-decoration: none;
  }
  .form2-text116 {
    color: var(--dl-color-neutral-1);
  }
  .form2-container-personnel {
    margin-top: 10px;
    margin-left: -140px;
  }
  .form2-text142 {
    color: var(--dl-color-neutral-1);
    bottom: 35px;
    font-size: 21.3333px;
    font-family: Inter;
    font-weight: 400;
    line-height: 32px;
    text-decoration: none;
  }
  .form2-container-accidentanalysis {
    margin-top: 10px;
    margin-left: -140px;
  }
  .form2-container-acknowledgement {
    margin-top: 10px;
    margin-left: -140px;
  }
  .form2-text168 {
    color: rgb(0, 0, 0);
    font-size: 21.3333px;
    font-family: Inter;
    font-weight: 400;
    line-height: 26.6667px;
    text-decoration: none;
  }
  .form2-text178 {
    top: 175px;
    left: 0px;
  }
  .form2-inputtext07 {
    top: 161px;
    left: 217px;
  }
  .form2-text179 {
    top: 310px;
    left: 0px;
  }
  .form2-inputtext08 {
    top: 297px;
    left: 215px;
  }
  .form2-text180 {
    right: -1px;
    bottom: 22px;
  }
  .form2-inputtext09 {
    left: 217px;
    bottom: -24px;
  }
  .form2-container20 {
    left: 140px;
  }
  .form2-button {
    top: 0px;
    left: 0px;
    position: absolute;
  }
  .form2-button1 {
    top: 0px;
    right: 0px;
    margin-left: 55%;
  }
  .form2-button2 {
    top: 80px;
    left: 0px;
    margin-left: 0%;
  }
  .form2-button3 {
    top: 80px;
    left: 0px;
    position: absolute;
    margin-top: auto;
    margin-left: 55%;
    margin-right: auto;
    margin-bottom: auto;
  }
  .form2-button4 {
    left: 0px;
    bottom: 0px;
    margin-left: 0%;
  }
  .form2-button5 {
    right: 0px;
    bottom: 0px;
    margin-left: 55%;
  }
}
@media(max-width: 479px) {
  .form2-form2admin {
    height: 5100px;
  }
  .form2-frame12 {
    width: 403px;
    padding-right: 0px;
  }
  .form2-text {
    color: var(--dl-color-neutral-1);
    font-size: 38px;
    font-family: Inter;
    font-weight: 400;
    line-height: 58.6667px;
    text-decoration: none;
  }
  .form2-container01 {
    margin-left: -200px;
    margin-right: -200px;
    width:75%;
  }
  .form2-text005 {
    color: var(--dl-color-neutral-1);
    font-size: 34px;
    font-family: Inter;
    font-weight: 700;
    line-height: 48px;
    text-decoration: none;
    top: -60px;
  }
  .form2-container-steps {
    left: 300px;
  }
  .form2-tab {
    top: 0px;
    left: 28px;
    width: 63px;
  }
  .form2-frame111 {
    width: 66px;
  }
  .form2-text020 {
    color: var(--dl-color-neutral-1);
    font-size: 14px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 26.6667px;
    text-decoration: none;
  }
  .form2-tab1 {
    width: 76px;
  }
  .form2-text021 {
    color: var(--dl-color-neutral-2);
    font-size: 14px;
    font-family: Inter;
    font-weight: 400;
    line-height: 26.6667px;
    text-decoration: none;
  }
  .form2-tab2 {
    left: 179px;
    width: 70px;
    bottom: 0px;
  }
  .form2-text022 {
    color: var(--dl-color-neutral-2);
    font-size: 14px;
    font-family: Inter;
    font-weight: 400;
    line-height: 26.6667px;
    text-decoration: none;
  }
  .form2-tab3 {
    top: 0px;
    left: 250px;
    width: 78px;
  }
  .form2-text023 {
    color: var(--dl-color-neutral-2);
    font-size: 14px;
    font-family: Inter;
    font-weight: 400;
    line-height: 26.6667px;
    text-decoration: none;
  }
  .form2-container05 {
    height: 307px;
    margin-top: 10px;
    margin-left: -200px;
    margin-right: -200px;
  }
  .form2-inputtext {
    left: 0px;
    bottom: -50px;
    margin-left: 0px;
  }
  .form2-inputtext01 {
    top: var(--dl-space-space-sixunits);
    bottom: 0px;
    align-self: flex-start;
    margin-left: 0px;
  }
  .form2-inputtext02 {
    top: 200px;
    left: 0px;
    margin-top: 0px;
  }
  .form2-container-safety {
    top: 1048px;
    right: -5px;
    width: 350px;
    height: 520px;
    margin-top: 10px;
    margin-left: -200px;
    padding-top: 0px;
    margin-right: -200px;
    padding-left: 0px;
    margin-bottom: 0px;
  }
  .form2-text032 {
    color: rgb(0, 0, 0);
    font-size: 21.3333px;
    font-family: Inter;
    font-weight: 700;
    line-height: 26.6667px;
    text-decoration: none;
  }
  .form2-text033 {
    top: 75px;
    left: -2px;
  }
  .form2-container06 {
    top: 150px;
  }
  .form2-text039 {
    top: 189px;
    right: 0px;
    width: 100%;
  }
  .form2-container07 {
    top: 350px;
  }
  .form2-text049 {
    left: 0px;
    bottom: 53px;
  }
  .form2-container08 {
    top: 440px;
    left: 0px;
    bottom: 0px;
    margin: auto;
    position: absolute;
  }
  .form2-container-yes-no02 {
    margin-top: var(--dl-space-space-unit);
  }
  .form2-container-toolbox {
    top: 1600px;
    width: 350px;
    height: 140px;
    margin-top: 10px;
    margin-left: -200px;
    margin-right: -200px;
  }
  .form2-container09 {
    top: 110px;
    bottom: 0px;
  }
  .form2-container-safetytraining {
    top: 1770px;
    left: 270px;
    width: 350px;
    height: 409px;
    margin-top: 10px;
    margin-left: -200px;
    margin-right: -200px;
  }
  .form2-text064 {
    width: 100%;
  }
  .form2-container10 {
    top: 140px;
  }
  .form2-text073 {
    top: 180px;
    width: 100%;
  }
  .form2-container11 {
    top: 250px;
  }
  .form2-container12 {
    top: 370px;
    bottom: 0px;
  }
  .form2-container-yes-no06 {
    left: 0px;
    bottom: -8px;
    position: absolute;
  }
  .form2-container-safetyassesment {
    top: 2200px;
    left: 270px;
    width: 350px;
    height: 378px;
    margin-top: 10px;
    margin-left: -200px;
    margin-right: -200px;
  }
  .form2-text087 {
    top: 100px;
    left: 0px;
    width: 100%;
  }
  .form2-container13 {
    top: 165px;
  }
  .form2-text096 {
    width: 100%;
  }
  .form2-container14 {
    top: 340px;
  }
  .form2-container-safetyhealthcheck {
    top: 2600px;
    left: 270px;
    width: 350px;
    height: 449px;
    margin-top: 10px;
    margin-left: -200px;
    margin-right: -200px;
  }
  .form2-text105 {
    top: 60px;
    color: var(--dl-color-neutral-1);
    width: 100%;
    font-size: 21.3333px;
    font-family: Inter;
    font-weight: 400;
    line-height: 32px;
    text-decoration: none;
  }
  .form2-text109 {
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    position: absolute;
  }
  .form2-container15 {
    top: 190px;
  }
  .form2-text116 {
    top: 240px;
    left: 0px;
    width: 100%;
    bottom: 0px;
  }
  .form2-container16 {
    top: 410px;
  }
  .form2-container-personnel {
    top: 3095px;
    left: 270px;
    width: 350px;
    height: 496px;
    margin-top: 10px;
    margin-left: -200px;
    margin-right: -200px;
  }
  .form2-text126 {
    width: 100%;
  }
  .form2-container17 {
    top: 110px;
  }
  .form2-text135 {
    top: 150px;
    width: 100%;
  }
  .form2-text142 {
    color: var(--dl-color-neutral-1);
    width: 100%;
    font-size: 21.3333px;
    font-family: Inter;
    font-weight: 400;
    line-height: 32px;
    text-decoration: none;
  }
  .form2-container19 {
    top: 460px;
    height: 31px;
  }
  .form2-container-accidentanalysis {
    top: 3600px;
    left: 270px;
    width: 350px;
    bottom: 486px;
    height: 486px;
    margin-top: 10px;
    margin-left: -200px;
    margin-right: -200px;
  }
  .form2-text156 {
    width: 100%;
  }
  .form2-inputtext04 {
    top: 130px;
  }
  .form2-text164 {
    top: 200px;
    width: 100%;
  }
  .form2-inputtext05 {
    top: 270px;
    bottom: 0px;
  }
  .form2-text166 {
    width: 100%;
  }
  .form2-container-acknowledgement {
    top: 4150px;
    left: 70px;
    right: 0px;
    width: 350px;
    bottom: 0px;
    height: 573px;
    margin-top: 0px;
    margin-left: 0px;
  }
  .form2-text168 {
    color: rgb(0, 0, 0);
    width: 100%;
    font-size: 19px;
    font-family: Inter;
    font-weight: 400;
    line-height: 26.6667px;
    text-decoration: none;
  }
  .form2-text178 {
    top: 260px;
    width: 100%;
  }
  .form2-inputtext07 {
    top: 300px;
    left: 0px;
  }
  .form2-text179 {
    top: 380px;
    width: 100%;
  }
  .form2-inputtext08 {
    top: 422px;
    left: 1px;
  }
  .form2-text180 {
    width: 100%;
    bottom: 50px;
  }
  .form2-inputtext09 {
    left: 0px;
  }
  .form2-container20 {
    top: 4800px;
    left: 0px;
    right: 0px;
    margin: auto;
  }
  .form2-button {
    top: 0px;
    left: 1px;
    bottom: 0px;
    position: absolute;
    align-self: flex-end;
  }
  .form2-button1 {
    top: 0px;
    left: 1px;
    bottom: 0px;
    position: absolute;
    align-self: flex-end;
  }
  .form2-button2 {
    top: var(--dl-space-space-fiveunits);
    left: 1px;
    bottom: 0px;
    position: absolute;
    align-self: flex-end;
  }
  .form2-button3 {
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
  .form2-button4 {
    top: 160px;
    left: 1px;
    bottom: 0px;
    position: absolute;
    align-self: flex-end;
  }
  .form2-button5 {
    top: 160px;
    left: 1px;
    bottom: 0px;
    position: absolute;
    align-self: flex-end;
  }
}
</style>
