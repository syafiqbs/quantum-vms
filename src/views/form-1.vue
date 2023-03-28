<template>
  <div class="form1-container">
    <div class="form1-form1admin">
      <div class="form1-header-horizontal">
        <div class="form1-frame12">
          <span class="form1-text HeadingH2Regular">
            <span>Quantum VMS</span>
          </span>
          <div class="form1-frame11" @click.prevent="handleHome">
            <div class="form1-frame10">
              <span class="form1-text002 ParagraphNormalRegular">
                <span>Home</span>
              </span>
              <!-- <span class="form1-text004 ParagraphNormalRegular">
                <span>Logout</span>
              </span> -->
            </div>
          </div>
        </div>
      </div>
      <div class="form1-container-form-info">
        <span class="form1-header-form-name">New Vendor Assesment Form <h3>{{ vendorAssessmentResults }}</h3></span>
        <span class="form1-text006">
          <span>Form ID: </span>
          <br />
          <span>
            Rev No:
            <span v-html="rawqg09"></span>
          </span>
          <br />
          <span>
            Effective Date:
            <span v-html="rawfmrc"></span>
          </span>
        </span>
        <span id="form1-id" class="form1-label-form-id">
          <span class="form1-text012">QLI-QHSP-10-F01</span>
          <br />
          <br />
        </span>
        <span id="form1-revno" class="form1-label-rev-no">
          <span class="form1-text015">0</span>
          <br />
          <br />
        </span>
        <span id="form1-effectivedate" class="form1-label-effective-date">
          <span class="form1-text018">04.04.2022</span>
          <br />
          <br />
        </span>
      </div>
      <div class="form1-container-steps">
        <div class="form1-tab">
          <div class="form1-frame111">
            <a href="#form1-input-companyName" class="form1-link">
              <div class="form1-frame101">
                <span class="form1-text021 ParagraphSmallBold">Step 1</span>
              </div>
            </a>
          </div>
          <img
            alt="Line26I748"
            src="/playground_assets/line26i748-vlim.svg"
            class="form1-line26"
          />
        </div>
        <div class="form1-tab1">
          <div class="form1-frame112">
            <a href="#form1-radio-gst">
              <div class="form1-frame102">
                <span class="form1-text022 ParagraphSmallRegular">Step 2</span>
              </div>
            </a>
          </div>
        </div>
        <div class="form1-tab2">
          <div class="form1-frame113">
            <a href="#form1-input-person1-name">
            <div class="form1-frame103">
                <span class="form1-text023 ParagraphSmallRegular">
                  <span>Step 3</span>
                </span>
              </div>
            </a>
          </div>
        </div>
        <div class="form1-tab3">
          <div class="form1-frame114">
            <a href="#form1-isoCert" class="form1-link1">
              <div class="form1-frame104">
                <span class="form1-text025 ParagraphSmallRegular">
                  <span>Step 4</span>
                </span>
              </div>
            </a>
          </div>
        </div>
        <div class="form1-tab4">
          <div class="form1-frame115">
            <a href="#form1-radio-approve" class="form1-link2">
              <div class="form1-frame105">
                <span class="form1-text027 ParagraphSmallRegular">
                  <span>Step 5</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <form class="form1-form" @submit.prevent="handleSubmit">
      <div class="form1-container-vendor-info">
        <div class="form1-inputtext">
          <span class="form1-text029 ParagraphSmallBold">
            <span>Company Name</span>
          </span>
          <input
            type="text"
            id="form1-input-companyName"
            required
            class="form1-textinput form1-inpuit-vendorEvaluation input"
            :disabled="!isVendor"
            v-model="companyName"
          />
        </div>
        <div class="form1-inputtext01">
          <span class="form1-text031 ParagraphSmallBold">
            Company Registration No.
          </span>
          <input
            type="number"
            id="form1-input-companyRegNo"
            required
            class="form1-textinput01 form1-inpuit-vendorEvaluation input"
            :disabled="!isVendor"
            v-model="companyRegistrationNo"
          />
        </div>
        <div class="form1-inputtext02">
          <span class="form1-text032 ParagraphSmallBold">
            <span>Office Address</span>
          </span>
          <input
            type="text"
            id="form1-input-officeAddress"
            required
            class="form1-textinput02 form1-inpuit-vendorEvaluation input"
            :disabled="!isVendor"
            v-model="companyAddress"
          />
        </div>
        <div class="form1-inputtext03">
          <span class="form1-text034 ParagraphSmallBold">
            <span>Tel / Fax</span>
          </span>
          <input
            type="tel"
            id="form1-input-companyTel"
            required
            class="form1-textinput03 form1-inpuit-vendorEvaluation input"
            :disabled="!isVendor"
            v-model="companyContactNo"
          />
        </div>
      </div>
      <div class="form1-container-gst">
        <span class="form1-text036">GST Registered</span>
        <div class="form1-container01 form1-radio">
          <div id="form1-radio-gst" class="form1-container-yes-no">
            <div class="form1-container-yes">
              <input type="radio" name="form1-radio-gst" value="Yes" :disabled="!isVendor" v-model="gstRegistered"/>
              <label class="form1-text037">Yes</label>
            </div>
            <div class="form1-container-no">
              <input type="radio" name="form1-radio-gst" value="No" :disabled="!isVendor" v-model="gstRegistered"/>
              <label class="form1-text038">
                <span class="form1-text039">No</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="form1-container-business-type">
        <span class="form1-text042">Type of Business License / Registration</span>
        <div class="form1-container02">
          <div
            id="form1-radio-soleProprietorship"
            class="form1-radio-businessNature form1-container03"
          >
            <input
              type="radio"
              name="form1-radio-bizType"
              class="form1-radiobutton02"
              @change="checkBizTypeState"
              :disabled="!isVendor"
              v-model="businessType"
              value="Sole Proprietorship"
            />
            <span class="form1-text043">Sole Proprietorship</span>
          </div>
        </div>
        <div class="form1-container04">
          <div
            id="form1-radio-limitedCompany"
            class="form1-radio-businessNature form1-container05"
          >
            <input
              type="radio"
              name="form1-radio-bizType"
              class="form1-radiobutton03"
              @change="checkBizTypeState"
              :disabled="!isVendor"
              v-model="businessType"
              value="Limited Company"
            />
            <span class="form1-text044">
              <span>Limited Company</span>
              <br />
            </span>
          </div>
        </div>
        <div class="form1-container06">
          <div
            id="form1-radio-partnershipAgreement"
            class="form1-radio-businessNature form1-container07"
          >
            <input
              type="radio"
              name="form1-radio-bizType"
              class="form1-radiobutton04"
              @change="checkBizTypeState"
              :disabled="!isVendor"
              v-model="businessType"
              value="Partnership Agreement"
            />
            <span class="form1-text047">
              <span>Partnership Agreement</span>
              <br />
            </span>
          </div>
        </div>
        <div class="form1-container08">
          <div
            id="form1-others-bizType"
            class="form1-container09 form1-radio-businessNature"
          >
            <div class="form1-container10">
              <input
                type="radio"
                id="form1-radio-others-bizType"
                name="form1-radio-bizType"
                class="form1-radiobutton05"
                @change="checkBizTypeState"
                :disabled="!isVendor"
                v-model="businessType"
                value="Others"
              />
              <span class="form1-text050">
                <span>Others</span>
                <br />
              </span>
            </div>
            <input
              type="text"
              id="form1-input-others-bizType"
              :disabled="bizTypeInput==1 || !isVendor"
              class="form1-textinput04 form1-inpuit-vendorEvaluation input"
              v-model="businessTypeOthers"
            />
          </div>
        </div>
      </div>
      <div class="form1-container-business-nature">
        <span class="form1-text053">Nature of business</span>
        <div class="form1-container11">
          <div id="form1-radio-manufacturing" class="form1-radio-businessNature">
            <input
              type="radio"
              name="form-radio-bizNature"
              class="form1-radiobutton06"
              @change="checkBizNatureState"
              :disabled="!isVendor"
              v-model="businessNature"
              value="Manufacturing"
            />
            <span class="form1-text054">Manufacturing</span>
          </div>
        </div>
        <div class="form1-container13">
          <div id="form1-radio-agentDealer" class="form1-radio-businessNature">
            <input
              type="radio"
              name="form-radio-bizNature"
              class="form1-radiobutton07"
              @change="checkBizNatureState"
              :disabled="!isVendor"
              v-model="businessNature"
              value="Manufacturing"
            />
            <span class="form1-text055">
              <span>Agent/dealer</span>
              <br />
            </span>
          </div>
        </div>
        <div class="form1-container15">
          <div id="form1-radio-distributor" class="form1-radio-businessNature">
            <input 
              type="radio" 
              name="form-radio-bizNature" 
              class="form1-radiobutton08" 
              @change="checkBizNatureState"
              :disabled="!isVendor"
              v-model="businessNature"
              value="Distributor"
            />
            <span class="form1-text058">
              <span>Distributor</span>
              <br />
            </span>
          </div>
        </div>
        <div class="form1-container17">
          <div
            id="form1-others-bizNature"
            class="form1-container18 form1-radio-businessNature"
          >
            <div class="form1-container19">
              <input
                type="radio"
                id="form1-radio-others-bizNature"
                name="form-radio-bizNature"
                class="form1-radiobutton09"
                @change="checkBizNatureState"
                :disabled="!isVendor"
                v-model="businessNature"
                value="Others"
              />
              <span class="form1-text061">
                <span>Others</span>
                <br />
              </span>
            </div>
            <input
              type="text"
              id="form1-input-others-bizNature"
              :disabled="bizNatureInput==1 || !isVendor"
              class="form1-textinput05 form1-inpuit-vendorEvaluation input"
              v-model="businessNatureOthers"
            />
          </div>
        </div>
      </div>
      <div class="form1-container-product-services">
        <div class="form1-inputtext04">
          <span class="form1-text064">
            <span class="ParagraphNormalRegular">Products and Services</span>
            <br />
          </span>
          <input
            type="text"
            id="form1-input-productServices"
            required
            class="form1-textinput06 form1-inpuit-vendorEvaluation input"
            :disabled="!isVendor"
            v-model="productsAndServices"
          />
        </div>
      </div>
      <div class="form1-container-contacts">
        <div class="form1-inputtext05">
          <span class="form1-text067 ParagraphSmallBold"><span>Name</span></span>
          <input
            type="text"
            id="form1-input-person1-name"
            required
            class="form1-textinput07 form1-inpuit-vendorEvaluation input"
            :disabled="!isVendor"
            v-model="contactPersonName1"
          />
        </div>
        <div class="form1-inputtext06">
          <span class="form1-text069 ParagraphSmallBold">
            <span>Telephone</span>
          </span>
          <input
            type="tel"
            id="form1-input-person2-tel"
            required
            class="form1-textinput08 form1-inpuit-vendorEvaluation input"
            :disabled="!isVendor"
            v-model="contactPersonContactNo1"
          />
        </div>
        <div class="form1-inputtext07">
          <span class="form1-text071 ParagraphSmallBold">
            <span>Designation</span>
          </span>
          <input
            type="text"
            id="form1-input-person1-designation"
            required
            class="form1-textinput09 form1-inpuit-vendorEvaluation input"
            :disabled="!isVendor"
            v-model="contactPersonDesignation1"
          />
        </div>
        <div class="form1-inputtext08">
          <span class="form1-text073 ParagraphSmallBold"><span>Name</span></span>
          <input
            type="text"
            id="form1-input-person2-name"
            required
            class="form1-textinput10 form1-inpuit-vendorEvaluation input"
            :disabled="!isVendor"
            v-model="contactPersonName2"
          />
        </div>
        <div class="form1-inputtext09">
          <span class="form1-text075 ParagraphSmallBold">
            <span>Telephone</span>
          </span>
          <input
            type="tel"
            id="form1-input-person1-tel"
            required
            class="form1-textinput11 form1-inpuit-vendorEvaluation input"
            :disabled="!isVendor"
            v-model="contactPersonContactNo2"
          />
        </div>
        <div class="form1-inputtext10">
          <span class="form1-text077 ParagraphSmallBold">
            <span>Designation</span>
          </span>
          <input
            type="text"
            id="form1-input-person2-designation"
            required
            class="form1-textinput12 form1-inpuit-vendorEvaluation input"
            :disabled="!isVendor"
            v-model="contactPersonDesignation2"
          />
        </div>
        <span class="form1-text079"><span>Contact Person</span></span>
      </div>
      <div class="form1-container-evaluation">
        <div class="form1-evaluation form1-container20">
          <span class="form1-text081"><span>Evaluation</span></span>
          <div id="form1-isoCert" class="form1-container-iso-cert">
            <div id="form1-radio-isoCert" class="form1-container21">
              <input 
                type="checkbox" 
                name="form1-checkbox-evaluation"
                @change="controlIsoInput"
                :disabled="!isVendor"
                v-model="iso9001"
              />
              <span class="form1-text083">
                <span>ISO 9001 Certification</span>
                <br />
                <br />
              </span>
            </div>
            <input
              type="text"
              id="form1-input-isoCert"
              :disabled="isoInput || !isVendor"
              placeholder="Certification Body"
              class="form1-textinput13 form1-inpuit-vendorEvaluation input"
              v-model="isoInputField"
            />
          </div>
          <div id="form1-labAccred" class="form1-container-lab-accred">
            <div id="form1-radio-labAccred" class="form1-container22">
              <input 
                type="checkbox" 
                name="form1-checkbox-evaluation" 
                @change="controlLabAccredInput"
                :disabled="!isVendor"
                v-model="accreditationLaboratory"
                />
              <span class="form1-text087">
                <span>Accreditation of Laboratory</span>
                <br />
              </span>
            </div>
            <input
              type="text"
              id="form1-input-labAccred"
              :disabled="labAccredInput || !isVendor"
              placeholder="Accreditation Body"
              class="form1-textinput14 form1-inpuit-vendorEvaluation input"
              v-model="accredLabInputField"
            />
          </div>
          <div id="form1-projectCert" class="form1-container-project-cert">
            <div id="form1-radio-projectCert" class="form1-container23">
              <input 
                type="checkbox" 
                name="form1-checkbox-evaluation"
                @change="controlProjCertInput"
                :disabled="!isVendor"
                v-model="projectCertification"
                />
              <span class="form1-text090">
                <span>Project Certification</span>
                <br />
              </span>
            </div>
            <input
              type="text"
              id="form1-input-projectCert"
              :disabled="projectCertInput || !isVendor"
              placeholder="Product Markings (e.g. PSB, UL, TUV)"
              class="form1-textinput15 form1-inpuit-vendorEvaluation input"
              v-model="projCertInputField"
            />
          </div>
        </div>
        <div
          id="form1-siteResult"
          class="form1-container-site-result form1-evaluation"
        >
          <span class="form1-text093"><span>Site Evaluation Results</span></span>
          <div id="form1-radio-siteResult" class="form1-container-satisfaction">
            <div class="form1-container-satisfactory">
              <input
                type="radio"
                name="form1-radio-siteResult"
                value="Satisfactory"
                class="form1-radiobutton10"
                :disabled="!isVendor"
                v-model="siteEvaluationResults"
                required
              />
              <label class="form1-text095">Satisfactory</label>
            </div>
            <div class="form1-container-unsatisfactory">
              <input
                type="radio"
                name="form1-radio-siteResult"
                value="Unsatisfactory"
                class="form1-radiobutton11"
                :disabled="!isVendor"
                v-model="siteEvaluationResults"
              />
              <label class="form1-text096">Unsatisfactory</label>
            </div>
          </div>
        </div>
        <div
          id="form1-sampleEval"
          class="form1-container-sample-eval-result form1-eva form-1-evaluation"
        >
          <span class="form1-text097">
            <span>Results of Samples / Product Evaluation</span>
          </span>
          <div id="form1-radio-sampleEval" class="form1-container-satisfaction1">
            <div class="form1-container-satisfactory1">
              <input
                type="radio"
                name="form1-radio-sampleEval"
                value="Satisfactory"
                class="form1-radiobutton12"
                :disabled="!isVendor"
                v-model="sampleProductEvaluation"
                required
              />
              <label class="form1-text099">Satisfactory</label>
            </div>
            <div class="form1-container-unsatisfactory1">
              <input
                type="radio"
                name="form1-radio-sampleEval"
                value="Unsatisfactory"
                class="form1-radiobutton13"
                :disabled="!isVendor"
                v-model="sampleProductEvaluation"
              />
              <label class="form1-text100">Unsatisfactory</label>
            </div>
          </div>
        </div>
        <div
          id="form1-firstDealResult"
          class="form1-container-first-deal-result form1-evaluation"
        >
          <span class="form1-text101"><span>Results of First Deal</span></span>
          <div
            id="form1-radio-firstDealResult"
            class="form1-container-satisfaction2"
          >
            <div class="form1-container-satisfactory2">
              <input
                type="radio"
                name="form1-radio-firstDealResult"
                value="Satisfactory"
                class="form1-radiobutton14"
                :disabled="!isVendor"
                v-model="resultFirstDeal"
                required
              />
              <label class="form1-text103">Satisfactory</label>
            </div>
            <div class="form1-container-unsatisfactory2">
              <input
                type="radio"
                name="form1-radio-firstDealResult"
                value="Unsatisfactory"
                class="form1-radiobutton15"
                :disabled="!isVendor"
                v-model="resultFirstDeal"
              />
              <label class="form1-text104">Unsatisfactory</label>
            </div>
          </div>
        </div>
        <div
          id="form1-trackRecord"
          class="form1-container-track-record form-1-evaluation"
        >
          <span class="form1-text105">
            <span>Track Record Review / Customer Reference</span>
          </span>
          <div id="form1-radio-trackRecord" class="form1-container-satisfaction3">
            <div class="form1-container-satisfactory3">
              <input
                type="radio"
                name="form1-radio-trackRecord"
                value="Satisfactory"
                class="form1-radiobutton16"
                :disabled="!isVendor"
                v-model="trackRecord"
                required
              />
              <label class="form1-text107">Satisfactory</label>
            </div>
            <div class="form1-container-unsatisfactory3">
              <input
                type="radio"
                name="form1-radio-trackRecord"
                value="Unsatisfactory"
                class="form1-radiobutton17"
                :disabled="!isVendor"
                v-model="trackRecord"
              />
              <label class="form1-text108">Unsatisfactory</label>
            </div>
          </div>
        </div>
        <div class="form1-container-others">
          <div
            id="form1-others-evaluation"
            class="form1-container24"
          >
            <input 
              type="checkbox" 
              id="form1-radio-others-evaluation" 
              @change="controlEvalOthersInput"
              :disabled="!isVendor"
              v-model="others"
              />
            <span class="form1-text109">
              <span class="form1-text110">
                Others
                <span v-html="rawl2sy"></span>
              </span>
              <span>
                (e.g. commercial, sole supplier, customer specified, franchise
                etc.)
              </span>
              <br />
            </span>
            <input
              type="text"
              id="form1-input-others-evaluation"
              :disabled="evalOthersInput || !isVendor"
              v-model="evaluationOthersInputField"
              class="form1-textinput16 form1-inpuit-vendorEvaluation input"
            />
          </div>
        </div>
      </div>
      <div class="form1-container-vendor-evaluation">
        <span class="form1-text113">Result of Evaluation</span>
        <div id="form1-radio-approve" class="form1-container-approve">
          <div class="form1-container-approved">
            <input
              type="radio"
              name="form1-radio-evalResult"
              value="Approved"
              class="form1-radiobutton18"
              :disabled="!isAdminOrApprover"
              v-model="evaluation"
            />
            <label class="form1-text114">Approved</label>
          </div>
          <div class="form1-container-not-approved">
            <input
              type="radio"
              name="form1-radio-evalResult"
              value="Not Approved"
              class="form1-radiobutton19"
              :disabled="!isAdminOrApprover"
              v-model="evaluation"
            />
            <label class="form1-text115">Not Approved</label>
          </div>
        </div>
        <div class="form1-inputtext11">
          <span class="form1-text116">
            <span class="ParagraphSmallBold">Evaluated By</span>
            <br />
            <br />
          </span>
          <input
            type="text"
            id="form1-input-evaluatedBy-name"
            class="form1-inpuit-vendorEvaluation input"
            :disabled="!isAdminOrApprover"
            v-model="evaluatedBy"
          />
        </div>
        <div class="form1-inputtext12">
          <span class="form1-text120">
            <span class="form1-text121">Approved by Director</span>
            <br />
          </span>
          <input
            type="text"
            id="form1-input-approvedBy-name"
            class="form1-inpuit-vendorEvaluation input"
            :disabled="!isApprover"
            v-model="approvedBy"
          />
        </div>
        <div class="form1-inputtext13">
          <span class="form1-text123">
            <span class="form1-text124">Effective Date</span>
            <br />
          </span>
          <input
            type="date"
            id="form1-input-effectiveDate"
            class="form1-inpuit-vendorEvaluation input"
            :disabled="!isApprover"
            v-model="effectiveDate"
          />
        </div>
        <div class="form1-inputtext14">
          <span class="form1-text126">
            <span class="form1-text127">Signature</span>
            <br />
            <br />
          </span>
          <input
            type="text"
            id="form1-input-evaluatedBy-sig"
            class="form1-inpuit-vendorEvaluation input"
            :disabled="!isAdminOrApprover"
            v-model="evaluatorSignature"
          />
        </div>
        <div class="form1-inputtext15">
          <span class="form1-text130">
            <span class="form1-text131">Signature</span>
            <br />
            <br />
          </span>
          <input
            type="text"
            id="form1-input-approvedBy-sig"
            class="form1-inpuit-vendorEvaluation input"
            :disabled="!isApprover"
            v-model="approverSignature"
          />
        </div>
      </div>
      <div class="form1-container25">
        <button id="form1-btn-save" type="button" class="form1-button" @click.prevent="handleSave">
          <span class="form1-text134 ParagraphNormalRegular">Save</span>
        </button>
        <input id="form1-btn-submit" type="submit" class="form1-button1" v-if="isVendor" value="Submit">
          <!-- <span class="form1-text135 ParagraphNormalRegular">Submit</span>
        </button> -->
        <button id="form1-btn-rejectEval" class="form1-button2" v-if="isAdminOrApprover" @click.prevent="handleRejectEvaluation">
          <span class="form1-text136 ParagraphNormalRegular">Reject Evaluation</span>
        </button>
        <button id="form1-btn-approveEval" type="button" class="form1-button3" v-if="isAdminOrApprover" @click.prevent="handleApproveEvaluation">
          <span class="form1-text137 ParagraphNormalRegular">Approve Evaluation</span>
        </button>
        <button id="form1-disapproveForm" type="button" class="form1-button4" v-if="isApprover" @click.prevent="handleRejectForm">
          <span class="form1-text138 ParagraphNormalRegular">
            Reject Form
          </span>
        </button>
        <button id="form1-approveForm" type="button" class="form1-button5" v-if="isApprover" @click.prevent="handleApproveForm">
          <span class="form1-text139 ParagraphNormalRegular">
            Approve Form
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
  name: 'Form1',
  data() {
    return {
      rawqg09: ' ',
      rawfmrc: ' ',
      rawl2sy: ' ',
      businessTypesArr: ['Sole Proprietorship', 'Limited Company', 'Partnership Agreement'],
      businessNaturesArr: ['Manufacturing', 'Agent/dealer', 'Distributor'],

      // UI control
      bizTypeInput: true,
      bizNatureInput: true,
      isoInput: true,
      labAccredInput: true,
      projectCertInput: true,
      evalOthersInput: true,

      // RBAC
      isVendor: false,
      isAdminOrApprover: false,
      isApprover: false,

      // Form
      id: null,

      companyName: '',
      companyRegistrationNo: '',
      companyAddress: '',
      companyContactNo: '',

      gstRegistered: null,

      businessType: null,
      businessTypeOthers: '',

      businessNature: null,
      businessNatureOthers: '',

      productsAndServices: '',

      contactPersonName1: '',
      contactPersonContactNo1: '',
      contactPersonDesignation1: '',
      contactPersonName2: '',
      contactPersonContactNo2: '',
      contactPersonDesignation2: '',

      iso9001: null,
      isoInputField: '',

      accreditationLaboratory: null,
      accredLabInputField: '',

      projectCertification: null,
      projCertInputField: '',

      
      siteEvaluationResults: null,
      sampleProductEvaluation: null,
      resultFirstDeal: null,
      trackRecord: null,
      others: null,
      evaluationOthersInputField: '',
      
      evaluation: null,

      evaluatedBy: '',
      evaluatorSignature: '',
      approvedBy: '',
      approverSignature: '',
      effectiveDate: '',

      vendorAssessmentResults: "",  
    }
  },
  metaInfo: {
    title: 'Form-1 - Quantum VMS',
    meta: [
      {
        property: 'og:title',
        content: 'Form-1 - Quantum VMS',
      },
    ],
  },
  async mounted() {
    // fetch id from url
    this.id = this.$route.query.formid;

    // fetch form and update data
    await axios({
            url: 'getVendorAssessmentForm',
            method: 'post',
            baseURL: API_URL,
            headers: authHeader(),
            data: {
                id: this.id,
            },
            withCredentials: false
        })
      .then(response => {
        var result = response.data;
        console.log(result);
        this.companyName = result.companyName;
        this.companyRegistrationNo = result.companyRegistrationNo;
        this.companyAddress = result.companyAddress;
        this.companyContactNo = result.companyContactNo;

        if (result.gstRegistered) this.gstRegistered = result.gstRegistered;

        if (!this.businessTypesArr.includes(result.businessType)) {
          this.businessTypeOthers = result.businessType;
          this.businessType = "Others"
        }
        else{
          this.businessType = result.businessType
        }

        if (!this.businessNaturesArr.includes(result.businessNature)) {
          this.businessNatureOthers = result.businessNature;
          this.businessNature = "Others";
        }
        else {
          this.businessNature = result.businessNature;
        }

        this.productsAndServices = result.productsAndServices;

        this.contactPersonName1 = result.contactPersonName1;
        this.contactPersonContactNo1 = result.contactPersonContactNo1;
        this.contactPersonDesignation1 = result.contactPersonDesignation1;
        this.contactPersonName2 = result.contactPersonName2;
        this.contactPersonContactNo2 = result.contactPersonContactNo2;
        this.contactPersonDesignation2 = result.contactPersonDesignation2;

        if (result.iso9001) {
          this.iso9001 = true;
          this.isoInputField = result.iso9001;
        }
        if (result.accreditationLaboratory) {
          this.accreditationLaboratory = true;
          this.accredLabInputField = result.accreditationLaboratory;
        }
        if (result.projectCertification) {
          this.projectCertification = true;
          this.projectCertification = result.projectCertification;
        }

        if (result.siteEvaluationResults) this.siteEvaluationResults = result.siteEvaluationResults;
        if (result.sampleProductEvaluation) this.sampleProductEvaluation = result.sampleProductEvaluation;
        if (result.resultFirstDeal) this.resultFirstDeal = result.resultFirstDeal;
        if (result.trackRecord) this.trackRecord = result.trackRecord;
        if (result.others){
          this.others = true;
          this.evaluationOthersInputField = result.others;
        }
        

        if (result.evaluation) this.evaluation = result.evaluation;

        this.evaluatedBy = result.evaluatedBy;
        this.evaluatorSignature = result.evaluatorSignature;
        this.approvedBy = result.approvedBy;
        this.approverSignature = result.approverSignature;
        this.effectiveDate = result.effectiveDate;

        this.vendorAssessmentResults = result.vendorAssessmentResults;

      })
      .catch(error => {
        console.log(error);
      })

    // fetch role
    let role = sessionStorage.getItem('role');

    // control inputs based on form status
    if (this.vendorAssessmentResults == "Draft" ||
        this.vendorAssessmentResults == "Evaluation Rejected" || 
        this.vendorAssessmentResults == "Form Rejected")
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
    else if (this.vendorAssessmentResults == "Submitted") {
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
    else if (this.vendorAssessmentResults == "Evaluation Approved") {
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
  methods: {
    handleHome(){
      alert("Redirecting to home page");
      this.$router.push('/workflow');
    },
    checkBizTypeState(event){
      var radioElementBizType = event.target;
      radioElementBizType.id ? this.bizTypeInput = false : this.bizTypeInput = false
    },
    checkBizNatureState(event){
      var checkBizNatureState = event.target;
      checkBizNatureState.id ? this.bizNatureInput = false : this.bizNatureInput = true
    },
    controlIsoInput(event){
      var isoCheckboxEle = event.target;
      isoCheckboxEle.checked ? this.isoInput = false : this.isoInput = true;
    },
    controlLabAccredInput(event){
      var labAccredCheckboxEle = event.target;
      labAccredCheckboxEle.checked ? this.labAccredInput = false : this.labAccredInput = true;
    },
    controlProjCertInput(event){
      var projCertCheckboxele = event.target;
      projCertCheckboxele.checked ? this.projectCertInput = false : this.projectCertInput = true;
    },
    controlEvalOthersInput(event){
      var evalOthersCheckboxEle = event.target;
      evalOthersCheckboxEle.checked ? this.evalOthersInput = false : this.evalOthersCheckboxEle = true;
    },
    async handleSave(){
      
      if (this.businessType == "Others") this.businessType = this.businessTypeOthers;
      if (this.businessNature == "Others") this.businessNature = this.businessNatureOthers;
      if (this.iso9001) this.iso9001 = this.isoInputField;
      if (this.accreditationLaboratory) this.accreditationLaboratory = this.accredLabInputField;
      if (this.projectCertification) this.projectCertification = this.projCertInputField;
      if (this.others) this.others = this.evaluationOthersInputField;
      if (sessionStorage.getItem('role') == "USER") this.vendorAssessmentResults = "Draft";
      await axios({
            url: 'updateVendorAssessmentForm',
            method: 'put',
            baseURL: API_URL,
            headers: authHeader(),
            data: {
                id: this.id,
                companyName: this.companyName,
                companyRegistrationNo: this.companyRegistrationNo,
                companyAddress: this.companyAddress,
                companyContactNo: this.companyContactNo,
                gstRegistered: this.gstRegistered,
                businessType: this.businessType,
                businessNature: this.businessNature,
                productsAndServices: this.productsAndServices,
                contactPersonName1: this.contactPersonName1,
                contactPersonName2: this.contactPersonName2,
                contactPersonContactNo1: this.contactPersonContactNo1,
                contactPersonDesignation1: this.contactPersonDesignation1,
                contactPersonContactNo2: this.contactPersonContactNo2,
                contactPersonContactNo2: this.contactPersonContactNo2,
                contactPersonDesignation2: this.contactPersonDesignation2,
                iso9001: this.iso9001,
                accreditationLaboratory: this.accreditationLaboratory,
                projectCertification: this.projectCertification,
                siteEvaluationResults: this.siteEvaluationResults,
                sampleProductEvaluation: this.sampleProductEvaluation,
                resultFirstDeal: this.resultFirstDeal,
                trackRecord: this.trackRecord,
                others: this.others,

                evaluation: this.evaluation,
                evaluatedBy: this.evaluatedBy,
                evaluatorSignature: this.evaluatorSignature,
                approvedBy: this.approvedBy,
                approverSignature: this.approverSignature,
                effectiveDate: this.effectiveDate,

                vendorAssessmentResults: this.vendorAssessmentResults
            },
            withCredentials: false
        })
      .then(response => { alert("Form saved"); console.log(response) })
      .catch(error => { console.log(error); })
       

    },
    async handleSubmit(){
      console.log("submit button clicked");
      this.handleSave();
      this.vendorAssessmentResults = "Submitted";
      await axios({
        url: 'updateVendorAssessmentForm',
        method: 'put',
        baseURL: API_URL,
        headers: authHeader(),
        data: {
          id: this.id,
          vendorAssessmentResults: this.vendorAssessmentResults
        },
        withCredentials: false
      })
      .then(response => { 
        alert("Form submitted"); 
      })
      .catch(error => { console.log(error); })

    },
    async handleRejectEvaluation(){
      if (this.evaluation != "Not Approved") {
        alert("Please reject evaluation first");
        return
      }
      this.vendorAssessmentResults = "Evaluation Rejected";
      await axios({
        url: 'updateVendorAssessmentForm',
        method: 'put',
        baseURL: API_URL,
        headers: authHeader(),
        data: {
          id: this.id,
          evaluation: this.evaluation,
          evaluatedBy: this.evaluatedBy,
          evaluatorSignature: this.evaluatorSignature,
          vendorAssessmentResults: this.vendorAssessmentResults
        },
        withCredentials: false
      })
      .then(response => { alert("Evaluation rejected"); })
      .catch(error => { console.log(error); })
    },
    async handleApproveEvaluation(){
      if (this.evaluation != "Approved"){
        alert("Please approve evaluation first");
        return
      }
      if (!this.evaluatedBy || !this.evaluatorSignature){
        alert("Invalid evaluator");
        return
      }
      this.vendorAssessmentResults = "Evaluation Approved";
      await axios({
        url: 'updateVendorAssessmentForm',
        method: 'put',
        baseURL: API_URL,
        headers: authHeader(),
        data: {
          id: this.id,
          evaluation: this.evaluation,
          vendorAssessmentResults: this.vendorAssessmentResults
        },
        withCredentials: false
      })
      .then(response => { alert("Evaluation approved"); })
      .catch(error => { console.log(error); })
    },
    async handleRejectForm(){
      this.vendorAssessmentResults = "Form Rejected";
      await axios({
        url: 'updateVendorAssessmentForm',
        method: 'put',
        baseURL: API_URL,
        headers: authHeader(),
        data: {
          id: this.id,
          approvedBy: this.approvedBy,
          approverSignature: this.approverSignature,
          vendorAssessmentResults: this.vendorAssessmentResults
        },
        withCredentials: false
      })
      .then(response => { alert("Form rejected"); })
      .catch(error => { console.log(error); })
    },
    async handleApproveForm(){
      if (this.evaluation != "Approved"){
        alert("Please approve evaluation first");
        return
      }
      if (!this.approvedBy || !this.approverSignature){
        alert("Invalid approver");
        return
      }
      if (!this.effectiveDate) {
        alert("Invalid date");
        return
      }
      this.vendorAssessmentResults = "Form Approved"
      await axios({
        url: 'updateVendorAssessmentForm',
        method: 'put',
        baseURL: API_URL,
        headers: authHeader(),
        data: {
          id: this.id,
          evaluation: this.evaluation,
          approvedBy: this.approvedBy,
          approverSignature: this.approverSignature,
          effectiveDate: this.effectiveDate,
          vendorAssessmentResults: this.vendorAssessmentResults
        },
        withCredentials: false
      })
      .then(response => { alert("Vendor application approved"); })
      .catch(error => { console.log(error); })
    }
  }
}

</script>

<style scoped>
.form1-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.form1-form1admin {
  width: 100%;
  height: 4000px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-end;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: flex-start;
  background-color: var(--dl-color-neutral-6);
}
.form1-header-horizontal {
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 143.99998474121094px;
  display: flex;
  padding: 42.666664123535156px;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
  background-color: var(--dl-color-neutral-6);
}
.form1-frame12 {
  display: flex;
  position: relative;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: transparent;
  justify-content: space-between;
}
.form1-text {
  color: var(--dl-color-neutral-1);
  height: auto;
  align-self: auto;
  text-align: left;
  line-height: 44px;
}
.form1-frame11 {
  display: flex;
  position: relative;
  align-items: center;
  border-color: transparent;
  justify-content: flex-end;
}
.form1-frame10 {
  display: flex;
  position: relative;
  align-items: flex-end;
  border-color: transparent;
}
.form1-text002 {
  color: var(--dl-color-neutral-1);
  height: auto;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-text004 {
  color: var(--dl-color-neutral-1);
  height: auto;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-container-form-info {
  top: 311.9965515136719px;
  left: 267.9861145019531px;
  width: 551.99658203125px;
  height: 198.54167938232422px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-header-form-name {
  top: 0px;
  left: 0px;
  color: var(--dl-color-neutral-1);
  height: auto;
  position: absolute;
  font-size: 37.33333206176758px;
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
.form1-text006 {
  top: 85.32986450195312px;
  left: 0px;
  color: var(--dl-color-neutral-1);
  width: 552px;
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
.form1-label-form-id {
  top: 85px;
  left: 94.01043701171875px;
  position: absolute;
}
.form1-text012 {
  font-size: 21px;
}
.form1-label-rev-no {
  left: 91.0069580078125px;
  bottom: 25.993072509765625px;
  position: absolute;
}
.form1-text015 {
  font-size: 21px;
}
.form1-label-effective-date {
  left: 154.01043701171875px;
  bottom: -6px;
  position: absolute;
}
.form1-text018 {
  font-size: 21px;
}
.form1-container-steps {
  top: 541.3194580078125px;
  left: 267.9861145019531px;
  width: 503.66320037841797px;
  height: 58.6631965637207px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-tab {
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
.form1-frame111 {
  height: 58.666664123535156px;
  display: flex;
  padding: 0 21.333332061767578px;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  margin-bottom: 0px;
  flex-direction: column;
  justify-content: center;
}
.form1-link {
  display: contents;
}
.form1-frame101 {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
  text-decoration: none;
}
.form1-text021 {
  color: var(--dl-color-neutral-1);
  height: auto;
  align-self: auto;
  text-align: center;
  line-height: 20px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-line26 {
  width: 99px;
  height: 0px;
  position: relative;
  align-self: stretch;
}
.form1-tab1 {
  top: 0px;
  left: 98.6632080078125px;
  width: 101px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
  background-color: var(--dl-color-neutral-6);
}
.form1-frame112 {
  height: 58.666664123535156px;
  display: flex;
  padding: 0 21.333332061767578px;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  padding-right: 0 21.333332061767578px;
  flex-direction: column;
  justify-content: center;
}
.form1-frame102 {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
}
.form1-text022 {
  color: var(--dl-color-neutral-2);
  height: auto;
  align-self: auto;
  text-align: center;
  line-height: 20px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-tab2 {
  top: 0px;
  left: 200.00003051757812px;
  width: 101px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
  background-color: var(--dl-color-neutral-6);
}
.form1-frame113 {
  height: 58.666664123535156px;
  display: flex;
  padding: 0 21.333332061767578px;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
  justify-content: center;
}
.form1-frame103 {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
}
.form1-text023 {
  color: var(--dl-color-neutral-2);
  height: auto;
  align-self: auto;
  text-align: center;
  line-height: 20px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-tab3 {
  top: 0px;
  right: 100.32984161376953px;
  width: 102px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
  background-color: var(--dl-color-neutral-6);
}
.form1-frame114 {
  height: 58.666664123535156px;
  display: flex;
  padding: 0 21.333332061767578px;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
  justify-content: center;
}
.form1-link1 {
  display: contents;
}
.form1-frame104 {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
  text-decoration: none;
}
.form1-text025 {
  color: var(--dl-color-neutral-2);
  height: auto;
  align-self: auto;
  text-align: center;
  line-height: 20px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-tab4 {
  top: 0px;
  right: 0px;
  width: 101px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
  background-color: var(--dl-color-neutral-6);
}
.form1-frame115 {
  height: 58.666664123535156px;
  display: flex;
  padding: 0 21.333332061767578px;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
  justify-content: center;
}
.form1-link2 {
  display: contents;
}
.form1-frame105 {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
  text-decoration: none;
}
.form1-text027 {
  color: var(--dl-color-neutral-2);
  height: auto;
  align-self: auto;
  text-align: center;
  line-height: 20px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-container-vendor-info {
  top: 674.65283203125px;
  left: 267.9861145019531px;
  width: 1386.6667175292969px;
  height: 216.0069465637207px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-inputtext {
  top: 0px;
  left: 0px;
  width: 600px;
  height: 58.666664123535156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form1-text029 {
  top: -31.999998092651367px;
  color: var(--dl-color-neutral-1);
  height: auto;
  position: absolute;
  align-self: auto;
  text-align: left;
  line-height: 20px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-textinput {
  border-width: 2px;
}
.form1-inputtext01 {
  top: 0px;
  right: 0px;
  width: 600px;
  height: 58.666664123535156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form1-text031 {
  top: -31.999998092651367px;
  color: var(--dl-color-neutral-1);
  height: auto;
  position: absolute;
  align-self: auto;
  text-align: left;
  line-height: 20px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-textinput01 {
  border-width: 2px;
}
.form1-inputtext02 {
  left: 0px;
  width: 600px;
  bottom: 0px;
  height: 58.666664123535156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form1-text032 {
  top: -31.999998092651367px;
  color: var(--dl-color-neutral-1);
  height: auto;
  position: absolute;
  align-self: auto;
  text-align: left;
  line-height: 20px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-textinput02 {
  border-width: 2px;
}
.form1-inputtext03 {
  right: 0px;
  width: 600px;
  bottom: 0px;
  height: 58.666664123535156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form1-text034 {
  top: -31.999998092651367px;
  color: var(--dl-color-neutral-1);
  height: auto;
  position: absolute;
  align-self: auto;
  text-align: left;
  line-height: 20px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-textinput03 {
  border-width: 2px;
}
.form1-container-gst {
  top: 981.3195190429688px;
  left: 266.66668701171875px;
  width: 390.9722595214844px;
  height: 77.34375762939453px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-text036 {
  top: 0px;
  left: 0px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 18.66666603088379px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 26.66666603088379px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form1-container01 {
  top: 0px;
  margin-top: var(--dl-space-space-threeunits);
}
.form1-container-yes-no {
  width: 100%;
  height: 100%;
  position: relative;
}
.form1-container-yes {
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  position: absolute;
}
.form1-text037 {
  font-size: 21px;
}
.form1-container-no {
  top: 0px;
  left: var(--dl-space-space-fourunits);
  width: auto;
  height: auto;
  position: absolute;
  margin-left: 0px;
}
.form1-text038 {
  font-size: 21px;
}
.form1-text039 {
  font-size: 21px;
}
.form1-text040 {
  font-size: 21px;
}
.form1-text041 {
  font-size: 21px;
}
.form1-container-business-type {
  top: 1114.65283203125px;
  left: 263.9930725097656px;
  width: 1160.9896697998047px;
  height: 94.6701545715332px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-text042 {
  top: 0px;
  left: 0px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 18.66666603088379px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 26.66666603088379px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form1-container02 {
  top: 0px;
  left: 0px;
  width: 10%;
  height: 100%;
  display: flex;
  position: absolute;
  margin-top: 0px;
  align-items: center;
  justify-content: center;
}
.form1-radiobutton02 {
  z-index: 100;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
}
.form1-text043 {
  font-size: 21px;
}
.form1-container04 {
  top: 0px;
  left: 0px;
  width: 10%;
  height: 100%;
  display: flex;
  position: absolute;
  margin-top: 0px;
  align-items: center;
  margin-left: 20%;
  justify-content: center;
}
.form1-radiobutton03 {
  z-index: 100;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
}
.form1-text044 {
  font-size: 21px;
}
.form1-container06 {
  top: 0px;
  left: 0px;
  width: 10%;
  height: 100%;
  display: flex;
  position: absolute;
  margin-top: 0px;
  align-items: center;
  margin-left: 40%;
  justify-content: center;
}
.form1-radiobutton04 {
  z-index: 100;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
}
.form1-text047 {
  font-size: 21px;
}
.form1-container08 {
  top: 0px;
  left: 0px;
  width: 464px;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  margin-left: 60%;
  justify-content: flex-start;
}
.form1-container09 {
  width: 465px;
  height: 100%;
}
.form1-container10 {
  top: 22px;
  left: 0px;
  height: 100%;
  position: absolute;
}
.form1-radiobutton05 {
  z-index: 100;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-twounits);
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
}
.form1-text050 {
  font-size: 21px;
  margin-top: var(--dl-space-space-twounits);
}
.form1-textinput04 {
  top: var(--dl-space-space-twounits);
  right: 0px;
  width: 80%;
  bottom: 0px;
  height: var(--dl-size-size-small);
  margin: auto;
  border-width: 2px;
}
.form1-form {
  width: 200px;
  height: 100px;
  display: flex;
}
.form1-container-business-nature {
  top: 1257.326416015625px;
  left: 263.9930725097656px;
  width: 1159.6702117919922px;
  height: 77.32648468017578px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-text053 {
  top: 0px;
  left: 0px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 18.66666603088379px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 26.66666603088379px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form1-container11 {
  top: 0px;
  left: 0px;
  width: 10%;
  height: 100%;
  display: flex;
  position: absolute;
  margin-top: 0px;
  align-items: center;
  justify-content: center;
}
.form1-radiobutton06 {
  z-index: 100;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
}
.form1-text054 {
  font-size: 21px;
}
.form1-container13 {
  top: 0px;
  left: 0px;
  width: 10%;
  height: 100%;
  display: flex;
  position: absolute;
  margin-top: 0px;
  align-items: center;
  margin-left: 20%;
  justify-content: center;
}
.form1-radiobutton07 {
  z-index: 100;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
}
.form1-text055 {
  font-size: 21px;
}
.form1-container15 {
  top: 0px;
  left: 0px;
  width: 10%;
  height: 100%;
  display: flex;
  position: absolute;
  margin-top: 0px;
  align-items: center;
  margin-left: 40%;
  justify-content: center;
}
.form1-radiobutton08 {
  z-index: 100;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
}
.form1-text058 {
  font-size: 21px;
}
.form1-container17 {
  top: 0px;
  left: 0px;
  width: 464px;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  margin-left: 60%;
  justify-content: flex-start;
}
.form1-container18 {
  width: 465px;
  height: 100%;
}
.form1-container19 {
  left: 0px;
  bottom: 14px;
  position: absolute;
}
.form1-radiobutton09 {
  z-index: 100;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-twounits);
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
}
.form1-text061 {
  font-size: 21px;
  margin-top: var(--dl-space-space-twounits);
}
.form1-textinput05 {
  width: 80%;
  height: var(--dl-size-size-small);
  margin-top: var(--dl-space-space-twounits);
  margin-left: var(--dl-space-space-unit);
  border-width: 2px;
}
.form1-container-product-services {
  top: 1419.982666015625px;
  left: 263.9930725097656px;
  width: 600px;
  height: 58.6631965637207px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-inputtext04 {
  right: 0px;
  width: 600px;
  bottom: 0px;
  height: 58.666664123535156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form1-text064 {
  top: -31.999998092651367px;
  color: var(--dl-color-neutral-1);
  height: auto;
  position: absolute;
  align-self: auto;
  text-align: left;
  line-height: 20px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-textinput06 {
  border-width: 2px;
}
.form1-container-contacts {
  top: 1550.6597900390625px;
  left: 263.9930725097656px;
  width: 1356.0069885253906px;
  height: 433.3333625793457px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-inputtext05 {
  top: 93.3333740234375px;
  left: 0px;
  width: 600px;
  height: 58.666664123535156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form1-text067 {
  margin-top: -24px;
}
.form1-textinput07 {
  top: 0px;
  right: 0px;
  position: absolute;
  border-width: 2px;
}
.form1-inputtext06 {
  left: 0px;
  width: 600px;
  bottom: 144.0103759765625px;
  height: 58.666664123535156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form1-text069 {
  top: -31.999998092651367px;
  color: var(--dl-color-neutral-1);
  height: auto;
  position: absolute;
  align-self: auto;
  text-align: left;
  line-height: 20px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-textinput08 {
  top: 0px;
  right: 0px;
  position: absolute;
  border-width: 2px;
}
.form1-inputtext07 {
  left: 0px;
  width: 600px;
  bottom: 0px;
  height: 58.666664123535156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form1-text071 {
  top: -31.999998092651367px;
  color: var(--dl-color-neutral-1);
  height: auto;
  position: absolute;
  align-self: auto;
  text-align: left;
  line-height: 20px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-textinput09 {
  top: 0px;
  right: 0px;
  position: absolute;
  border-width: 2px;
}
.form1-inputtext08 {
  top: 93.3333740234375px;
  right: 0px;
  width: 600px;
  height: 58.666664123535156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form1-text073 {
  margin-top: -24px;
}
.form1-textinput10 {
  top: 0px;
  right: 0px;
  position: absolute;
  border-width: 2px;
}
.form1-inputtext09 {
  right: 0px;
  width: 600px;
  bottom: 144.0103759765625px;
  height: 58.666664123535156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form1-text075 {
  top: -31.999998092651367px;
  color: var(--dl-color-neutral-1);
  height: auto;
  position: absolute;
  align-self: auto;
  text-align:center;
  line-height: 20px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-textinput11 {
  top: 0px;
  right: 0px;
  position: absolute;
  border-width: 2px;
}
.form1-inputtext10 {
  right: 0px;
  width: 600px;
  bottom: 0px;
  height: 58.666664123535156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form1-text077 {
  top: -31.999998092651367px;
  color: var(--dl-color-neutral-1);
  height: auto;
  position: absolute;
  align-self: auto;
  text-align: left;
  line-height: 20px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-textinput12 {
  top: 0px;
  right: 0px;
  position: absolute;
  border-width: 2px;
}
.form1-text079 {
  top: 0px;
  left: 0px;
  color: rgba(0, 0, 0, 1);
  width: 500px;
  height: auto;
  position: absolute;
  font-size: 21.333332061767578px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 31.999998092651367px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form1-container-evaluation {
  top: 2075.98974609375px;
  left: 263.9930725097656px;
  width: 771.6493530273438px;
  height: 1028.0034484863281px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-text081 {
  top: 0px;
  left: 0px;
  color: rgba(0, 0, 0, 1);
  width: 500px;
  height: auto;
  position: absolute;
  font-size: 21.333332061767578px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 31.999998092651367px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form1-container-iso-cert {
  top: 75.989501953125px;
  left: 0px;
  width: 771.6493530273438px;
  height: 58.6631965637207px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-container21 {
  top: -16px;
  left: 0px;
  width: 146px;
  height: 100%;
  position: absolute;
  align-self: flex-end;
}
.form1-text083 {
  font-size: 21px;
  margin-top: var(--dl-space-space-twounits);
}
.form1-textinput13 {
  top: 0px;
  right: 0px;
  width: 600px;
  height: 100%;
  position: absolute;
  border-width: 2px;
}
.form1-container-lab-accred {
  top: 190px;
  left: 0px;
  width: 771.6493530273438px;
  height: 58.6631965637207px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-container22 {
  top: -16px;
  left: 0px;
  width: 162px;
  height: 100%;
  position: absolute;
  align-self: flex-end;
}
.form1-text087 {
  font-size: 21px;
  margin-top: var(--dl-space-space-twounits);
}
.form1-textinput14 {
  top: 0px;
  right: 0px;
  width: 600px;
  height: 100%;
  position: absolute;
  border-width: 2px;
  padding-left: var(--dl-space-space-unit);
}
.form1-container-project-cert {
  top: 310px;
  left: 0px;
  width: 771.6493530273438px;
  height: 58.6631965637207px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-container23 {
  top: -16px;
  left: 0px;
  width: 162px;
  height: 100%;
  position: absolute;
  align-self: flex-end;
}
.form1-text090 {
  font-size: 21px;
  margin-top: var(--dl-space-space-twounits);
}
.form1-textinput15 {
  top: 0px;
  right: 0px;
  width: 600px;
  height: 100%;
  position: absolute;
  border-width: 2px;
  padding-left: var(--dl-space-space-unit);
}
.form1-container-site-result {
  top: 408.00341796875px;
  left: 0px;
  width: 390.9896240234375px;
  height: 77.32636260986328px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-text093 {
  top: 0px;
  left: 0px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 18.66666603088379px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 26.66666603088379px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form1-container-satisfaction {
  top: 45.3125px;
  left: 2.673614501953125px;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-container-satisfactory {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.form1-radiobutton10 {
  margin-top: 4px;
}
.form1-text095 {
  font-size: 21px;
  margin-left: var(--dl-space-space-halfunit);
}
.form1-container-unsatisfactory {
  top: 0px;
  flex: 0 0 auto;
  right: 0px;
  width: auto;
  height: auto;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form1-radiobutton11 {
  margin-top: 4px;
}
.form1-text096 {
  font-size: 21px;
  margin-left: 4px;
}
.form1-container-sample-eval-result {
  top: 525px;
  width: 390.9896240234375px;
  height: 77.32636260986328px;
}
.form1-text097 {
  top: 0px;
  left: 0px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 18.66666603088379px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 26.66666603088379px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form1-container-satisfaction1 {
  top: 45.3125px;
  left: 2.673614501953125px;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-container-satisfactory1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.form1-radiobutton12 {
  margin-top: 4px;
}
.form1-text099 {
  font-size: 21px;
  margin-left: var(--dl-space-space-halfunit);
}
.form1-container-unsatisfactory1 {
  top: 0px;
  flex: 0 0 auto;
  right: 0px;
  width: auto;
  height: auto;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form1-radiobutton13 {
  margin-top: 4px;
}
.form1-text100 {
  font-size: 21px;
  margin-left: 4px;
}
.form1-container-first-deal-result {
  top: 640px;
  left: 0px;
  width: 390.9896240234375px;
  bottom: 310.69441986083984px;
  height: 77.32636260986328px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-text101 {
  top: 0px;
  left: 0px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 18.66666603088379px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 26.66666603088379px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form1-container-satisfaction2 {
  top: 45.3125px;
  left: 2.673614501953125px;
  width: 388.3160095214844px;
  height: 31.99652862548828px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-container-satisfactory2 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.form1-radiobutton14 {
  margin-top: 4px;
}
.form1-text103 {
  font-size: 21px;
  margin-left: var(--dl-space-space-halfunit);
}
.form1-container-unsatisfactory2 {
  top: 0px;
  flex: 0 0 auto;
  right: 0px;
  width: auto;
  height: auto;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form1-radiobutton15 {
  margin-top: 4px;
}
.form1-text104 {
  font-size: 21px;
  margin-left: 4px;
}
.form1-container-track-record {
  top: 750px;
  left: 0px;
  width: 394.72222900390625px;
  bottom: 194.68758392333984px;
  height: 77.32636260986328px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-text105 {
  top: 0px;
  left: 0px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 18.66666603088379px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 26.66666603088379px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form1-container-satisfaction3 {
  top: 45.3125px;
  left: 2.673614501953125px;
  width: 388.3333435058594px;
  height: 31.99652862548828px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-container-satisfactory3 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.form1-radiobutton16 {
  margin-top: 4px;
}
.form1-text107 {
  font-size: 21px;
  margin-left: var(--dl-space-space-halfunit);
}
.form1-container-unsatisfactory3 {
  top: 0px;
  flex: 0 0 auto;
  right: 0px;
  width: auto;
  height: auto;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form1-radiobutton17 {
  margin-top: 4px;
}
.form1-text108 {
  font-size: 21px;
  margin-left: 4px;
}
.form1-container-others {
  left: 0px;
  width: 600px;
  bottom: 0px;
  height: 142.6736946105957px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: flex-start;
}
.form1-container24 {
  width: 465px;
  bottom: var(--dl-space-space-threeunits);
  height: 100%;
}
.form1-text109 {
  font-size: 21px;
  margin-top: var(--dl-space-space-twounits);
}
.form1-textinput16 {
  top: 100px;
  width: 100%;
  height: var(--dl-size-size-small);
  border-width: 2px;
}
.form1-container-vendor-evaluation {
  top: 3100px;
  left: 270px;
  width: 1356.0069885253906px;
  height: 595px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-text113 {
  top: 0px;
  left: 0px;
  color: rgb(0, 0, 0);
  width: 500px;
  height: auto;
  position: absolute;
  font-size: 21.3333px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Inter;
  font-weight: 700;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.form1-container-approve {
  top: 45.3125px;
  left: 2.673614501953125px;
  width: 388.3333435058594px;
  height: 31.99652862548828px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
}
.form1-container-approved {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.form1-radiobutton18 {
  margin-top: 4px;
}
.form1-text114 {
  font-size: 21px;
  margin-left: var(--dl-space-space-halfunit);
}
.form1-container-not-approved {
  top: 0px;
  flex: 0 0 auto;
  right: 0px;
  width: auto;
  height: auto;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.form1-radiobutton19 {
  margin-top: 4px;
}
.form1-text115 {
  font-size: 21px;
  margin-left: 4px;
}
.form1-inputtext11 {
  top: 150px;
  left: 0px;
  width: 600px;
  height: 58.666664123535156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form1-text116 {
  margin-top: -24px;
}
.form1-inputtext12 {
  top: 300px;
  left: 0px;
  width: 600px;
  height: 58.666664123535156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form1-text120 {
  margin-top: -24px;
}
.form1-text121 {
  font-size: 14px;
}
.form1-inputtext13 {
  top: 430px;
  left: 0px;
  width: 600px;
  height: 58.666664123535156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form1-text123 {
  margin-top: -24px;
}
.form1-text124 {
  font-size: 14px;
}
.form1-inputtext14 {
  top: 150px;
  right: 0px;
  width: 600px;
  height: 58.666664123535156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form1-text126 {
  margin-top: -24px;
}
.form1-text127 {
  font-size: 14px;
}
.form1-inputtext15 {
  top: 300px;
  right: 0px;
  width: 600px;
  height: 58.666664123535156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.form1-text130 {
  margin-top: -24px;
}
.form1-text131 {
  font-size: 14px;
}
.form1-container25 {
  top: 3700.000244140625px;
  left: 250.00001525878906px;
  width: 397.9861145019531px;
  height: 224.9998664855957px;
  display: flex;
  position: absolute;
  align-items: flex-end;
  justify-content: flex-start;
}
.form1-button {
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
.form1-text134 {
  color: var(--dl-color-default-black4);
  height: auto;
  flex-grow: 1;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-button1 {
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
.form1-text135 {
  color: var(--dl-color-neutral-6);
  height: auto;
  flex-grow: 1;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-button2 {
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
.form1-text136 {
  color: var(--dl-color-neutral-6);
  height: auto;
  flex-grow: 1;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-button3 {
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
.form1-text137 {
  color: var(--dl-color-neutral-6);
  height: auto;
  flex-grow: 1;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-button4 {
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
.form1-text138 {
  color: var(--dl-color-neutral-6);
  height: auto;
  flex-grow: 1;
  align-self: auto;
  text-align: center;
  line-height: 24px;
  margin-right: 0;
  margin-bottom: 0;
}
.form1-button5 {
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
.form1-text139 {
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
  .form1-header-horizontal {
    width: 100%;
  }
  .form1-frame115 {
    padding-right: 0 21.333332061767578px;
  }
  .form1-container-vendor-info {
    width: 75%;
  }
  .form1-inputtext {
    width: 500px;
  }
  .form1-inputtext01 {
    top: -5px;
    right: 0px;
    width: 500px;
    margin: auto;
    position: absolute;
  }
  .form1-inputtext02 {
    width: 500px;
  }
  .form1-inputtext03 {
    right: 0px;
    width: 500px;
    bottom: 0px;
  }
  .form1-text037 {
    font-size: 21px;
  }
  .form1-container-no {
    left: 0px;
    margin-left: var(--dl-space-space-sixunits);
  }
  .form1-text039 {
    font-size: 21px;
  }
  .form1-inputtext04 {
    top: 0px;
    left: 0px;
    width: 500px;
  }
  .form1-container-contacts {
    width: 75%;
  }
  .form1-inputtext05 {
    width: 500px;
  }
  .form1-inputtext06 {
    width: 500px;
  }
  .form1-inputtext07 {
    width: 500px;
  }
  .form1-inputtext08 {
    width: 500px;
  }
  .form1-inputtext09 {
    width: 500px;
  }
  .form1-inputtext10 {
    width: 500px;
  }
  .form1-container21 {
    top: 0px;
  }
  .form1-container22 {
    top: 0px;
  }
  .form1-container23 {
    top: 0px;
  }
  .form1-container-satisfaction1 {
    right: -3px;
    bottom: -45px;
  }
  .form1-container-vendor-evaluation {
    width: 75%;
  }
  .form1-inputtext11 {
    width: 500px;
  }
  .form1-inputtext12 {
    width: 500px;
  }
  .form1-inputtext13 {
    width: 500px;
  }
  .form1-inputtext14 {
    width: 500px;
  }
  .form1-inputtext15 {
    width: 500px;
  }
  .form1-container25 {
    left: 270px;
  }
  .form1-button2 {
    background-color: var(--dl-color-danger-700);
  }
}
@media(max-width: 1200px) {
  .form1-container-form-info {
    left: 0px;
    margin-left: 150px;
  }
  .form1-container-steps {
    left: 0px;
    margin-left: 150px;
  }
  .form1-container-vendor-info {
    left: 0px;
    margin-left: 150px;
    margin-right: 150px;
  }
  .form1-inputtext {
    width: 400px;
  }
  .form1-inputtext01 {
    top: 0px;
    right: 0px;
    width: 400px;
    margin: 0px;
  }
  .form1-text031 {
    top: -32px;
    left: 0px;
    position: absolute;
  }
  .form1-inputtext02 {
    left: 0px;
    width: 400px;
    bottom: 0px;
  }
  .form1-inputtext03 {
    right: 0px;
    width: 400px;
    bottom: 0px;
    margin: 0px;
  }
  .form1-container-gst {
    left: 0px;
    margin-left: 150px;
  }
  .form1-container-business-type {
    left: 0px;
    margin-left: 150px;
  }
  .form1-textinput04 {
    left: 0px;
    right: var(--dl-space-space-fourunits);
    width: var(--dl-size-size-xlarge);
  }
  .form1-container-business-nature {
    left: 0px;
    margin-left: 150px;
  }
  .form1-textinput05 {
    top: var(--dl-space-space-twounits);
    left: 0px;
    right: var(--dl-space-space-fourunits);
    width: var(--dl-size-size-xlarge);
    bottom: 0px;
    margin: auto;
  }
  .form1-container-product-services {
    left: 0px;
    margin-left: 150px;
  }
  .form1-inputtext04 {
    width: 375px;
  }
  .form1-container-contacts {
    left: 0px;
    margin-left: 150px;
  }
  .form1-inputtext05 {
    width: 375px;
  }
  .form1-inputtext06 {
    width: 375px;
  }
  .form1-inputtext07 {
    width: 375px;
  }
  .form1-inputtext08 {
    right: 0px;
    width: 375px;
    margin: auto;
  }
  .form1-text073 {
    top: 0px;
    left: 0px;
    position: absolute;
  }
  .form1-inputtext09 {
    right: 0px;
    width: 375px;
    margin: auto;
  }
  .form1-text075 {
    right: 0px;
    margin: auto;
  }
  .form1-inputtext10 {
    right: 0px;
    width: 375px;
    margin: auto;
  }
  .form1-text077 {
    right: 0px;
    margin: auto;
  }
  .form1-container-evaluation {
    left: 0px;
    margin-left: 150px;
  }
  .form1-container-vendor-evaluation {
    left: 0px;
    margin-left: 150px;
  }
  .form1-inputtext11 {
    width: 375px;
  }
  .form1-inputtext12 {
    width: 375px;
  }
  .form1-inputtext13 {
    width: 375px;
  }
  .form1-inputtext14 {
    width: 375px;
  }
  .form1-inputtext15 {
    width: 375px;
  }
  .form1-container25 {
    top: 3600px;
    left: 12.5%;
    bottom: 0px;
    margin: auto;
    position: absolute;
  }
  .form1-button {
    left: 0px;
    margin-left: 0px;
  }
  .form1-button1 {
    left: 0px;
    margin-left: 200px;
  }
  .form1-button2 {
    left: 0px;
    margin-left: 0px;
  }
  .form1-button3 {
    left: 0px;
    margin-left: 200px;
  }
  .form1-button4 {
    left: 0px;
    margin-left: 0px;
  }
  .form1-button5 {
    left: 0px;
    margin-left: 200px;
  }
}
@media(max-width: 991px) {
  .form1-container-form-info {
    margin-top: mixed;
    margin-left: 12.5%;
    margin-right: 12.5%;
    margin-bottom: mixed;
  }
  .form1-text006 {
    height: var(--dl-size-size-medium);
  }
  .form1-label-form-id {
    top: 85px;
    left: 90px;
  }
  .form1-label-rev-no {
    top: 117.5px;
    left: 90px;
  }
  .form1-label-effective-date {
    left: 155px;
    bottom: -5px;
  }
  .form1-container-steps {
    margin-top: mixed;
    margin-left: 12.5%;
    margin-right: 12.5%;
    margin-bottom: mixed;
  }
  .form1-tab {
    top: 0px;
    left: 0px;
    position: absolute;
  }
  .form1-frame111 {
    top: -16px;
    left: 10px;
    position: absolute;
  }
  .form1-frame101 {
    top: 19px;
    right: 21px;
    position: absolute;
  }
  .form1-text021 {
    top: 0px;
    left: 0px;
    position: absolute;
  }
  .form1-line26 {
    left: 0px;
    bottom: 0px;
    position: absolute;
  }
  .form1-tab1 {
    top: 0px;
    left: 100px;
    position: absolute;
  }
  .form1-frame112 {
    top: -16px;
    left: 10px;
    position: absolute;
  }
  .form1-frame102 {
    top: 19px;
    right: 21px;
    position: absolute;
  }
  .form1-text022 {
    top: 0px;
    left: 0px;
    position: absolute;
  }
  .form1-tab2 {
    top: 0px;
    left: 200px;
    position: absolute;
  }
  .form1-frame113 {
    top: -16px;
    left: 10px;
    position: absolute;
  }
  .form1-frame103 {
    top: 19px;
    right: 21px;
    position: absolute;
  }
  .form1-text023 {
    top: 0px;
    left: 0px;
    position: absolute;
  }
  .form1-tab3 {
    top: 0px;
    left: 300px;
    right: 0px;
    position: absolute;
  }
  .form1-frame114 {
    top: -16px;
    left: 10px;
    position: absolute;
  }
  .form1-frame104 {
    top: 19px;
    right: 21px;
    position: absolute;
  }
  .form1-text025 {
    top: 0px;
    left: 0px;
    position: absolute;
  }
  .form1-tab4 {
    top: 0px;
    left: 400px;
    position: absolute;
  }
  .form1-frame115 {
    top: -16px;
    left: 10px;
    position: absolute;
  }
  .form1-frame105 {
    top: 19px;
    left: 21px;
    position: absolute;
  }
  .form1-text027 {
    top: 0px;
    left: 0px;
    position: absolute;
  }
  .form1-container-vendor-info {
    margin-top: mixed;
    margin-left: 12.5%;
    margin-right: 12.5%;
    margin-bottom: mixed;
  }
  .form1-inputtext {
    left: 0px;
    width: 300px;
  }
  .form1-text029 {
    left: 0px;
  }
  .form1-inputtext01 {
    width: 300px;
  }
  .form1-text031 {
    left: 0px;
    bottom: -612px;
    height: var(--dl-size-size-small);
  }
  .form1-inputtext02 {
    left: 0px;
    width: 300px;
  }
  .form1-text032 {
    left: 0px;
  }
  .form1-inputtext03 {
    right: 0px;
    width: 300px;
    bottom: 0px;
    margin: auto;
  }
  .form1-container-gst {
    margin-top: mixed;
    margin-left: 12.5%;
    margin-right: 12.5%;
    margin-bottom: mixed;
  }
  .form1-container-business-type {
    margin-top: mixed;
    margin-left: 12.5%;
    margin-right: 12.5%;
    margin-bottom: mixed;
  }
  .form1-container04 {
    margin-left: 17.5%;
  }
  .form1-container06 {
    margin-left: 32.5%;
  }
  .form1-container08 {
    margin-left: 50%;
  }
  .form1-textinput04 {
    top: 104px;
    left: -350px;
    right: 0px;
    bottom: 0px;
    height: var(--dl-size-size-small);
    margin: auto;
  }
  .form1-container-business-nature {
    margin-top: mixed;
    margin-left: 12.5%;
    margin-right: 12.5%;
    margin-bottom: mixed;
  }
  .form1-text053 {
    color: rgb(0, 0, 0);
    font-size: 18.6667px;
    font-family: Inter;
    font-weight: 700;
    line-height: 26.6667px;
    text-decoration: none;
  }
  .form1-container13 {
    margin-left: 17.5%;
  }
  .form1-container15 {
    margin-left: 32.5%;
  }
  .form1-container18 {
    top: -2px;
    left: -106px;
  }
  .form1-textinput05 {
    top: var(--dl-space-space-fourunits);
    left: -300px;
    bottom: -41px;
  }
  .form1-container-product-services {
    width: 400px;
    margin-top: mixed;
    margin-left: 12.5%;
    margin-right: 12.5%;
    margin-bottom: mixed;
  }
  .form1-inputtext04 {
    top: 0px;
    left: 0px;
    width: 100%;
    position: static;
  }
  .form1-container-contacts {
    margin-top: mixed;
    margin-left: 12.5%;
    margin-right: 12.5%;
    margin-bottom: mixed;
  }
  .form1-inputtext05 {
    left: 0px;
    width: 300px;
  }
  .form1-inputtext06 {
    left: 0px;
    width: 300px;
  }
  .form1-inputtext07 {
    left: 0px;
    width: 300px;
  }
  .form1-inputtext08 {
    right: 0px;
    width: 300px;
  }
  .form1-inputtext09 {
    right: 0px;
    width: 300px;
  }
  .form1-inputtext10 {
    right: 0px;
    width: 300px;
  }
  .form1-container-evaluation {
    margin-top: mixed;
    margin-left: 12.5%;
    margin-right: 12.5%;
    margin-bottom: mixed;
  }
  .form1-text081 {
    width: 500px;
  }
  .form1-container-vendor-evaluation {
    margin-top: mixed;
    margin-left: 12.5%;
    margin-right: 12.5%;
    margin-bottom: mixed;
  }
  .form1-inputtext11 {
    left: 0px;
    width: 300px;
  }
  .form1-inputtext12 {
    left: 0px;
    width: 300px;
  }
  .form1-inputtext13 {
    left: 0px;
    width: 300px;
  }
  .form1-inputtext14 {
    right: 0px;
    width: 300px;
  }
  .form1-inputtext15 {
    right: 0px;
    width: 300px;
  }
  .form1-button {
    top: 0px;
    left: 0px;
    position: absolute;
  }
  .form1-button1 {
    top: 0px;
    right: 0px;
    margin-left: 55%;
  }
  .form1-button2 {
    top: 80px;
    left: 0px;
    margin-left: 0%;
  }
  .form1-button3 {
    top: 80px;
    left: 0px;
    position: absolute;
    margin-top: auto;
    margin-left: 55%;
    margin-right: auto;
    margin-bottom: auto;
  }
  .form1-button4 {
    left: 0px;
    bottom: 0px;
    margin-left: 0%;
  }
  .form1-button5 {
    right: 0px;
    bottom: 0px;
    margin-left: 55%;
  }
}
@media(max-width: 479px) {
  .form1-form1admin {
    height: 4750px;
  }
  .form1-container-form-info {
    top: 250px;
    width: 75%;
    height: 227px;
  }
  .form1-header-form-name {
    top: 0px;
    left: 0px;
    color: var(--dl-color-neutral-1);
    font-size: 36px;
    text-align: left;
    font-family: Inter;
    font-weight: 700;
    line-height: 48px;
    text-decoration: none;
  }
  .form1-text006 {
    left: 0px;
    color: var(--dl-color-neutral-1);
    bottom: 20px;
    position: static;
    font-size: 18px;
    align-self: flex-end;
    font-family: Inter;
    font-weight: 400;
    line-height: 32px;
    text-decoration: none;
  }
  .form1-label-form-id {
    top: 130px;
    left: 78px;
    margin: auto;
    position: absolute;
  }
  .form1-label-rev-no {
    top: 162.5px;
    left: 78px;
    bottom: 15px;
    margin: auto;
    position: absolute;
  }
  .form1-label-effective-date {
    left: 130px;
    bottom: -20px;
  }
  .form1-container-steps {
    top: 525px;
    width: 75%;
  }
  .form1-tab {
    width: 37px;
    position: static;
  }
  .form1-frame111 {
    top: -24px;
    left: -4px;
    width: 6px;
    position: absolute;
    margin-right: 0px;
  }
  .form1-frame101 {
    top: 28px;
    left: 25px;
    position: absolute;
  }
  .form1-text021 {
    margin-top: 5px;
  }
  .form1-line26 {
    margin-top: 5px;
  }
  .form1-tab1 {
    left: 140px;
    position: static;
  }
  .form1-frame112 {
    top: -20px;
    left: 52px;
    position: absolute;
  }
  .form1-frame102 {
    margin-top: 5px;
  }
  .form1-text022 {
    margin-top: 5px;
  }
  .form1-tab2 {
    left: 215px;
    position: static;
  }
  .form1-frame113 {
    top: -25px;
    left: 113px;
    margin-top: 5px;
  }
  .form1-frame103 {
    margin-top: 5px;
  }
  .form1-text023 {
    margin-top: 5px;
  }
  .form1-tab3 {
    left: 290px;
    position: static;
  }
  .form1-frame114 {
    top: -25px;
    left: 175px;
    margin-top: 5px;
  }
  .form1-frame104 {
    margin-top: 5px;
  }
  .form1-text025 {
    margin-top: 5px;
  }
  .form1-tab4 {
    left: 365px;
    position: static;
  }
  .form1-frame115 {
    top: -25px;
    left: 234px;
    margin-top: 5px;
  }
  .form1-frame105 {
    margin-top: 5px;
  }
  .form1-text027 {
    margin-top: 5px;
  }
  .form1-container-vendor-info {
    top: 650px;
    height: 400px;
  }
  .form1-inputtext {
    left: 0px;
  }
  .form1-inputtext01 {
    top: 100px;
    left: 0px;
    position: absolute;
    align-self: flex-start;
  }
  .form1-text031 {
    top: -23px;
    left: 0px;
    align-self: stretch;
  }
  .form1-inputtext02 {
    top: 210px;
    left: 0px;
    margin: auto;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .form1-inputtext03 {
    top: 280px;
    left: 0px;
    right: 100px;
    width: 300px;
  }
  .form1-container-gst {
    top: 1050px;
  }
  .form1-text036 {
    left: 0px;
    color: rgb(0, 0, 0);
    font-size: 18.6667px;
    margin-top: 0px;
    font-family: Inter;
    font-weight: 700;
    line-height: 26.6667px;
    text-decoration: none;
  }
  .form1-container-business-type {
    top: 1150px;
    width: 75%;
    height: var(--dl-size-size-xxlarge);
  }
  .form1-text042 {
    left: 0px;
    color: rgb(0, 0, 0);
    font-size: 18.6667px;
    margin-top: 0px;
    text-align: left;
    font-family: Inter;
    font-weight: 700;
    line-height: 26.6667px;
    text-decoration: none;
  }
  .form1-container02 {
    width: auto;
    height: auto;
    position: static;
  }
  .form1-container03 {
    top: 0px;
    left: 0px;
    width: auto;
    bottom: 100px;
    height: auto;
  }
  .form1-container04 {
    width: auto;
    height: auto;
    position: static;
  }
  .form1-container05 {
    bottom: 140px;
  }
  .form1-container06 {
    width: auto;
    height: auto;
    position: static;
  }
  .form1-container07 {
    bottom: 100px;
  }
  .form1-container08 {
    width: auto;
    height: auto;
  }
  .form1-container09 {
    width: auto;
    height: auto;
  }
  .form1-container10 {
    top: 180px;
    left: -179px;
    width: auto;
    bottom: -225px;
    height: auto;
  }
  .form1-textinput04 {
    top: 240px;
    left: -179px;
    bottom: -288px;
  }
  .form1-container-business-nature {
    top: 1475px;
    width: 75%;
    height: var(--dl-size-size-xxlarge);
  }
  .form1-text053 {
    left: 0px;
    color: rgb(0, 0, 0);
    font-size: 18.6667px;
    font-family: Inter;
    font-weight: 700;
    line-height: 26.6667px;
    text-decoration: none;
  }
  .form1-container11 {
    top: 70px;
    left: 0px;
    width: auto;
    height: auto;
    position: absolute;
  }
  .form1-container13 {
    top: 120px;
    left: -62px;
    width: auto;
    height: auto;
    position: absolute;
  }
  .form1-container15 {
    top: 170px;
    left: -116px;
    width: auto;
    height: auto;
    position: absolute;
  }
  .form1-container17 {
    width: auto;
    height: auto;
  }
  .form1-container19 {
    left: -108px;
    bottom: -214px;
  }
  .form1-textinput05 {
    top: 220px;
    left: -110px;
    bottom: -271px;
    margin: 0px;
  }
  .form1-container-product-services {
    top: 1850px;
    width: 300px;
  }
  .form1-inputtext04 {
    top: 1000px;
    left: 65px;
    right: 100px;
  }
  .form1-container-contacts {
    top: 1950px;
    height: 700px;
    margin-bottom: 0px;
  }
  .form1-inputtext05 {
    top: 100px;
    left: 0px;
  }
  .form1-inputtext06 {
    top: 200px;
    left: 0px;
  }
  .form1-inputtext07 {
    top: 300px;
    left: 0px;
  }
  .form1-inputtext08 {
    top: 400px;
    left: 0px;
    margin: 0px;
  }
  .form1-text073 {
    top: 2px;
    left: 0px;
    position: absolute;
  }
  .form1-inputtext09 {
    top: 500px;
    left: 0px;
    margin: 0px;
  }
  .form1-inputtext10 {
    top: 600px;
    left: 0px;
    margin: 0px;
  }
  .form1-text079 {
    left: 0px;
  }
  .form1-container-evaluation {
    top: 2700px;
    width: 75%;
  }
  .form1-container20 {
    width: 100%;
    height: 551px;
  }
  .form1-text081 {
    left: 0px;
  }
  .form1-container-iso-cert {
    width: 100%;
  }
  .form1-container21 {
    top: 0px;
    left: 0px;
    position: absolute;
  }
  .form1-text083 {
    margin-top: 0px;
  }
  .form1-textinput13 {
    top: var(--dl-space-space-fourunits);
    left: 0px;
    width: 300px;
    bottom: -92px;
    position: absolute;
  }
  .form1-container-lab-accred {
    top: 210px;
    width: 100%;
  }
  .form1-textinput14 {
    top: var(--dl-space-space-fourunits);
    left: -3px;
    width: 300px;
    bottom: -76px;
  }
  .form1-container-project-cert {
    top: 340px;
    width: 100%;
  }
  .form1-textinput15 {
    top: var(--dl-space-space-fourunits);
    left: -2px;
    width: 300px;
    bottom: -68px;
  }
  .form1-container-site-result {
    top: 480px;
    width: 100%;
  }
  .form1-text093 {
    left: 0px;
  }
  .form1-container-sample-eval-result {
    top: 575px;
    width: 100%;
  }
  .form1-text097 {
    left: 0px;
  }
  .form1-container-satisfaction1 {
    top: 70px;
  }
  .form1-container-first-deal-result {
    top: 680px;
    width: 100%;
  }
  .form1-text101 {
    left: 0px;
  }
  .form1-container-satisfaction2 {
    width: 100%;
  }
  .form1-container-track-record {
    top: 775px;
    width: 100%;
  }
  .form1-text105 {
    left: 0px;
  }
  .form1-container-satisfaction3 {
    top: 70px;
    width: 100%;
  }
  .form1-container-others {
    left: 0px;
    width: 100%;
    bottom: -80px;
    margin-bottom: var(--dl-space-space-threeunits);
  }
  .form1-container24 {
    top: -72px;
    left: -2px;
    width: 100%;
  }
  .form1-text109 {
    font-size: 21px;
  }
  .form1-text110 {
    font-weight: 700;
  }
  .form1-container-vendor-evaluation {
    top: 3800px;
  }
  .form1-text113 {
    left: 0px;
  }
  .form1-container-approve {
    width: 100%;
  }
  .form1-inputtext11 {
    top: 130px;
    left: 0px;
  }
  .form1-inputtext12 {
    top: 230px;
    left: 0px;
  }
  .form1-inputtext13 {
    top: 330px;
    left: 0px;
  }
  .form1-inputtext14 {
    top: 430px;
    left: 0px;
  }
  .form1-inputtext15 {
    top: 530px;
    left: 0px;
  }
  .form1-container25 {
    top: 4400px;
    left: 0px;
    right: 0px;
    width: 90%;
    margin: auto;
  }
  .form1-button {
    top: 0px;
    left: 1px;
    bottom: 0px;
    position: absolute;
    align-self: flex-end;
  }
  .form1-button1 {
    top: 0px;
    left: 1px;
    bottom: 0px;
    position: absolute;
    align-self: flex-end;
  }
  .form1-button2 {
    top: var(--dl-space-space-fiveunits);
    left: 1px;
    bottom: 0px;
    position: absolute;
    align-self: flex-end;
  }
  .form1-button3 {
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
  .form1-button4 {
    top: 160px;
    left: 1px;
    bottom: 0px;
    position: absolute;
    align-self: flex-end;
  }
  .form1-button5 {
    top: 160px;
    left: 1px;
    bottom: 0px;
    position: absolute;
    align-self: flex-end;
  }
}
</style>
