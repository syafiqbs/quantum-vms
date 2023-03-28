<template>
    <!-- Latest compiled and minified CSS -->
    
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap/dist/css/bootstrap.min.css" />
        <link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css" />
    
        <SideBarVendor></SideBarVendor>
        <div class="main">
            <div class="mx-4">
                <div>   
                    <div class="row">
                        <h1>Workflows</h1>
                    </div>
                    <div class="row">
                        <p class="col">Overview of all form workflows (in progress / completed)</p> 
                        <div class="col">
                            <b-button v-if="role == 'ADMIN' || role == 'APPROVER'" type="button" class="btn btn-dark float-end mx-1" v-b-modal.modal-wfcreate>Create Workflow</b-button>
                            <!-- TODO: Create modal for Search/Filtering -->
                            <b-button type="button" class="btn btn-dark float-end mx-1" v-b-modal.modal-wfcreate>Filter</b-button>
                        </div>
                    </div>
                    
                    <!-- Modal Create -->
                    <b-modal
                        id="modal-wfcreate"
                        ref="modal"
                        title="Create Workflow"
                        @show="resetModal"
                        @hidden="resetModal"
                        @ok="handleOk"
                    >
                        <form ref="form" @submit.stop.prevent="handleSubmit">
                            <b-form-group
                                label="Vendor Name"
                                label-for="name-input"
                                invalid-feedback="Vendor Name is required"
                            >
                                <b-form-select
                                    id="name-input"
                                    v-model="name"
                                    :options=getUserNames()
                                    required
                                    class="form-control"
                                >
                                    <template #first>
                                        <b-form-select-option :value="null" disabled>-- Please select a Vendor --</b-form-select-option>
                                    </template>
                                </b-form-select>
                            </b-form-group>
        
                            <b-form-group
                                label="Form"
                                label-for="form-input"
                                invalid-feedback="Form is required"
                            >
                                <b-form-select
                                    id="form-input"
                                    v-model="form"
                                    required
                                    class="form-control"
                                >
                                    <template #first>
                                        <b-form-select-option :value="null" disabled>-- Please select a Form --</b-form-select-option>
                                    </template>
                                    <b-form-select-option value="form-1">New Vendor Assessment Form</b-form-select-option>
                                    <b-form-select-option value="form-2">Health Pre-Evaluation Form</b-form-select-option>
                                    <b-form-select-option value="form-3">Health Performance Evaluation Form</b-form-select-option>
                                </b-form-select>
                            </b-form-group>
                        </form>
                    </b-modal>

                    <!-- Modal Email -->
                    <b-modal
                        id="modal-sendEmail"
                        ref="modal"
                        title="Send Email"
                        @show="resetModalEmail"
                        @hidden="resetModalEmail"
                        @ok="handleOkEmail"
                    >
                        <form ref="form" @submit.stop.prevent="handleSubmitEmail">
                            <h5>Email to: {{ this.modal.emailRecipient }}</h5>
                            <b-form-group
                                label="Email Subject"
                                label-for="subject-input"
                                invalid-feedback="Subject is required"
                            >
                                <b-form-input
                                    id="subject-input"
                                    v-model="emailSubject"
                                    placeholder="Enter Email Subject"
                                    required
                                ></b-form-input>
                            </b-form-group>
        
                            <b-form-group
                                label="Email Message Body"
                                label-for="emailmsg-input"
                                invalid-feedback="The email needs some content!"
                            >
                                <b-form-textarea
                                    id="emailmsg-input"
                                    v-model="emailBody"
                                    placeholder="Enter Email's content here..."
                                    rows="5"
                                    max-rows="12"
                                    required
                                ></b-form-textarea>
                            </b-form-group>
                        </form>
                    </b-modal>
                </div>
    
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Vendor Name</th>
                            <th scope="col">Form</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                            <th scope="col">Date Created</th>
                            <th scope="col">Date Modified</th>
                            <th scope="col">Deadline</th>
                            <th scope="col">Additional Remarks</th>
                            <th scope="col" v-if="role == 'ADMIN' || role == 'APPROVER'">Admin Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(workflow, k) in workflows" :key="k">
                            <th scope="row">{{workflow.name}}</th>
                            <td>{{handleForm(workflow.form)}}</td>
                            <td>{{handleStatus(workflow.status)}}</td>
                            <td v-if="handleActions(workflow.status) == 'viewOnly'">
                                <b-button type="button" class="btn btn-secondary mx-1" @click="GoToForm(workflow.form, workflow.id)">View</b-button>
                            </td>
                            <td v-else-if="handleActions(workflow.status) == 'edit'">
                                <b-button type="button" class="btn btn-dark mx-1" @click="GoToForm(workflow.form, workflow.id)">Edit</b-button>
                            </td>
                            <td v-else-if="handleActions(workflow.status) == 'review'">
                                <b-button type="button" class="btn btn-info mx-1" @click="GoToForm(workflow.form, workflow.id)">Review</b-button>
                            </td>
                            <td v-else-if="handleActions(workflow.status) == 'approve'">
                                <b-button type="button" class="btn btn-warning mx-1" @click="GoToForm(workflow.form, workflow.id)">Approve</b-button>
                            </td>
                            <td v-else-if="handleActions(workflow.status) == 'done'">
                                <b-button type="button" class="btn btn-secondary mx-1" @click="GoToForm(workflow.form, workflow.id)">View</b-button>
                                <!-- TODO: Link up button to relevant modal -> function on click -->
                                <b-button type="button" class="btn btn-success mx-1">Download</b-button>
                            </td>
                            <td v-else-if="handleActions(workflow.status) == 'restore'">
                                <!-- TODO: Link up button to relevant modal -> function on click -->
                                <b-button type="button" class="btn btn-danger mx-1">Restore</b-button>
                            </td>
                            <td v-else>Invalid data, please inform Admin!</td>
                            <td>{{handleDate(workflow.dateCreated)}}</td>
                            <td>{{handleDate(workflow.dateModified)}}</td>
                            <td>{{handleDeadline(workflow.deadline, workflow.status)}}</td>
                            <td>{{workflow.remarks}}</td>
                            <!-- TODO: Link up buttons to relevant modals/functions on click -->
                            <td v-if="role == 'ADMIN' || role == 'APPROVER'">
                                <b-button v-if="workflow.status == 'Draft' || workflow.status == 'Evaluation Rejected' || workflow.status == 'Form Rejected'" type="button" class="btn btn-info mx-1" @click="sendEmail(k, workflow, $event.target)" ref="btnEmail">Send Email</b-button>
                                <b-button v-if="workflow.status == 'Draft' || workflow.status == 'Evaluation Rejected' || workflow.status == 'Form Rejected'" type="button" class="btn btn-warning mx-1" v-b-modal.modal-wfcreate>Edit Deadline</b-button>
                                <!-- Add confirmation modal -->
                                <b-button v-if="workflow.status == 'Draft' || workflow.status == 'Submitted' || workflow.status == 'Evaluation Rejected' || workflow.status == 'Form Rejected'" type="button" class="btn btn-danger mx-1" @click="deleteRow(k, workflow)">Delete</b-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
    
<script>
    import axios from 'axios';
    import SideBarVendor from './side-bar';
    import UserService from '../services/user.service';
    import authHeader from '../services/auth-header';

    const API_URL = "http://localhost:8080/api/v1/";

    export default {
        name: 'Workflow',
        metaInfo: {
            title: 'Workflow - Quantum VMS',
            meta: [
                {
                    property: 'og:title',
                    content: 'Workflow - Quantum VMS',
                },
            ],
        },
        components: {
            SideBarVendor 
        },
        data () {
            return {
                name: '',
                form: '',
                status: '',
                emailRecipient: '',
                emailSubject: '',
                emailBody: '',
                workflows: [],
                users: [],
                modal: {
                    id: 'modal-sendEmail',
                    emailRecipient: '',
                    emailSubject: '',
                    emailBody: '',
                    index: 0
                },
                role: null
            }
        },
        created() {

            UserService.getUser().then(
                response => {
                    // is user
                    sessionStorage.setItem('role', response.data["role"]);
                    this.role = response.data["role"];
                    if (this.role == "USER") {
                        this.getAllForms();
                    }

                },
                error => {
                    // do nothing
                    console.log(error.message);
                }
            )
            UserService.getAdmin().then(
                response => {
                    // is admin/approver
                    sessionStorage.setItem('role', response.data["role"]);
                    this.role = response.data["role"];
                    this.getAllForms();
                },
                error => {
                    // do nothing
                    console.log(error.message);
                }
            )
        },
        methods: {
            // -------
            // Function for Workflow + Users Retrieval
            // -------
            getAllForms() {
                if (this.role == 'ADMIN' || this.role == 'APPROVER') {
                    axios({
                        url: 'admin/getAllUsers',
                        method: 'get',
                        baseURL: API_URL,
                        headers: authHeader(),
                        withCredentials: false
                    })
                    .then(response => {
                        var result = response.data;
                        for (let userData of result) {
                            if (userData.role == 'USER') this.users.push({
                                name: userData.name,
                                email: userData.email
                            })
                            if (userData.vendorAssessmentForm != null) {
                                for (let formData of userData.vendorAssessmentForm) {
                                    this.workflows.push({
                                        name: userData.name,
                                        id: formData.id,
                                        form: "form-1",
                                        status: formData.vendorAssessmentResults,
                                        dateCreated: formData.dateCreated,
                                        dateModified: formData.dateModified,
                                        deadline: formData.deadline,
                                        remarks: formData.evaluationComments
                                    })
                                }
                            }
                            if (userData.preEvaluationForm != null) {
                                for (let formData of userData.preEvaluationForm) {
                                    this.workflows.push({
                                        name: userData.name,
                                        id: formData.id,
                                        form: "form-2",
                                        status: formData.preEvaluationResults,
                                        dateCreated: formData.dateCreated,
                                        dateModified: formData.dateModified,
                                        deadline: formData.deadline,
                                        remarks: formData.evaluationComments
                                    })
                                }
                            }
                            if (userData.performanceEvaluationForm) {
                                for (let formData of userData.performanceEvaluationForm) {
                                    this.workflows.push({
                                        name: userData.name,
                                        id: formData.id,
                                        form: "form-3",
                                        status: formData.performanceEvaluationResults,
                                        dateCreated: formData.dateCreated,
                                        dateModified: formData.dateModified,
                                        deadline: formData.deadline,
                                        remarks: formData.evaluationComments
                                    })
                                }
                            }
                        }
                        // Sort workflows with this.workflows.sort(function(a, b){return "something"})
                    })
                    .catch(error => {
                        console.log(error);
                        return [];
                    })
                } else {
                    axios({
                        url: 'vendor/getUser',
                        method: 'post',
                        baseURL: API_URL,
                        headers: authHeader(),
                        data: {
                            email: sessionStorage.getItem('email'),
                        },
                        withCredentials: false
                    })
                    .then(response => {
                        var result = response.data;
                        if (result.vendorAssessmentForm != null) {
                            for (let formData of result.vendorAssessmentForm) {
                                this.workflows.push({
                                    name: result.name,
                                    id: formData.id,
                                    form: "form-1",
                                    status: formData.vendorAssessmentResults,
                                    dateCreated: formData.dateCreated,
                                    dateModified: formData.dateModified,
                                    deadline: formData.deadline,
                                    remarks: formData.evaluationComments
                                })
                            }
                        }
                        if (result.preEvaluationForm != null) {
                            for (let formData of result.preEvaluationForm) {
                                this.workflows.push({
                                    name: result.name,
                                    id: formData.id,
                                    form: "form-2",
                                    status: formData.preEvaluationResults,
                                    dateCreated: formData.dateCreated,
                                    dateModified: formData.dateModified,
                                    deadline: formData.deadline,
                                    remarks: formData.evaluationComments
                                })
                            }
                        }
                        if (result.performanceEvaluationForm != null) {
                            for (let formData of result.performanceEvaluationForm) {
                                this.workflows.push({
                                    name: result.name,
                                    id: formData.id,
                                    form: "form-3",
                                    status: formData.performanceEvaluationResults,
                                    dateCreated: formData.dateCreated,
                                    dateModified: formData.dateModified,
                                    deadline: formData.deadline,
                                    remarks: formData.evaluationComments
                                })
                            }
                        }
                        // Sort workflows with this.workflows.sort(function(a, b){return "something"})
                    })
                    .catch(error => {
                        console.log(error);
                        return [];
                    })
                }
            },

            // -------
            // Functions for Workflow Creation Button
            // -------
            getUserNames() {
                let usernameList = [];
                for (let userData of this.users) {
                    usernameList.push({value: userData.name, text: userData.name})
                }
                return usernameList;
            },
            resetModal() {
                this.name = ''
                this.form = ''
            },
            handleOk(bvModalEvent) {
                // Prevent modal from closing
                bvModalEvent.preventDefault()
                // Trigger submit handler
                this.handleSubmit()
            },
            handleSubmit() {
                // Create form
                if (this.form == "form-1" || this.form == "form-2" || this.form == "form-3") {

                    let userEmail = "Email not found"
                    let formLinkConversion = {
                        "form-1": "vendor/createVendorAssessmentForm/7",
                        "form-2": "vendor/createPreEvaluationForm/7",
                        "form-3": "vendor/createPerformanceEvaluationForm/7"
                    }

                    for (let userData of this.users) {
                        if (userData.name == this.name) {
                            userEmail = userData.email
                        }
                    }

                    axios({
                        url: formLinkConversion[this.form],
                        method: 'post',
                        baseURL: API_URL,
                        headers: authHeader(),
                        data: {
                            email: userEmail,
                        },
                        withCredentials: false
                    })
                    .then(response => {
                        var result = response.data;
                        alert("(ID: " + result.id + ")" + this.handleForm(this.form) + " successfully created for " + this.name + "(" + userEmail + ")!")
                        this.getAllForms()
                    })
                    .catch(error => {
                        console.log(error);
                    })

                } else {
                    alert("Invalid form type!")
                }
        
                this.$nextTick(() => {
                    this.$bvModal.hide('modal-wfcreate')
                })
            },

            // -------
            // Functions for sending Email
            // -------
            sendEmail(index, workflow, button) {
                for (let userData of this.users) {
                    if (userData.name == workflow.name) {
                        this.modal.emailRecipient = userData.email
                    }
                }
                this.modal.emailSubject = "Reminder: your " + this.handleForm(workflow.form) + " is " + this.handleDeadline(workflow.deadline, workflow.status)
                this.modal.emailBody = "Current Workflow Status: " + workflow.status
                this.modal.index = index
                this.$root.$emit('bv::show::modal', this.modal.id, 'btnEmail')
        
            },
            resetModalEmail() {
                this.emailRecipient = ''
                this.emailSubject = ''
                this.emailBody = ''
            },
            handleOkEmail(bvModalEvent) {
                // Prevent modal from closing
                bvModalEvent.preventDefault()
                // Trigger edit handler
                this.handleSubmitEmail()
            },
            handleSubmitEmail() {

                alert(this.modal.emailRecipient + this.emailBody + this.emailSubject);

                // TEMPORARILY DISABLED AS THIS SENDS EMAILS
                // axios({
                //     url: 'admin/sendEmail',
                //     method: 'post',
                //     baseURL: API_URL,
                //     headers: authHeader(),
                //     data: {
                //         recipient: this.modal.emailRecipient,
                //         msgBody: this.emailBody,
                //         subject: this.emailSubject
                //     },
                //     withCredentials: false
                // })
                // .then(response => {
                //     alert("Email successfully sent to" + this.emailRecipient + "!")
                // })
                // .catch(error => {
                //     console.log(error);
                // })
        
                this.$nextTick(() => {
                this.$bvModal.hide('modal-sendEmail')
                })
            },

            // -------
            // Functions for Workflow Deletion
            // -------
            deleteRow(index, workflow) {
                if (workflow.form == "form-1" || workflow.form == "form-2" || workflow.form == "form-3") {

                    let formLinkConversion = {
                        "form-1": "vendor/updateVendorAssessmentForm",
                        "form-2": "vendor/updatePreEvaluationForm",
                        "form-3": "vendor/updatePerformanceEvaluationForm"
                    }
                    let updateData = {
                        id: workflow.id
                    }

                    if (workflow.form == "form-1") {
                        updateData.vendorAssessmentResults = "Archived"
                    } else if (workflow.form == "form-2") {
                        updateData.preEvaluationResults = "Archived"
                    } else {
                        updateData.performanceEvaluationResults = "Archived"
                    }

                    axios({
                        url: formLinkConversion[workflow.form],
                        method: 'put',
                        baseURL: API_URL,
                        headers: authHeader(),
                        data: updateData,
                        withCredentials: false
                    })
                    .then(response => {
                        var result = response.data;
                        alert("(ID: " + result.id + ")" + this.handleForm(workflow.form) + " successfully deleted.")
                        // this.getAllForms()
                    })
                    .catch(error => {
                        console.log(error);
                    })

                } else {
                    alert("Invalid form type!")
                }
            },

            // -------
            // Functions to handle Form + Status + Actions + Date + Deadline views
            // -------
            handleForm(formType) {
                let formConversion = {
                    "form-1": "New Vendor Assessment",
                    "form-2": "Health Pre-Evaluation",
                    "form-3": "Health Performance Evaluation"
                }
                return formConversion[formType];
            },
            handleStatus(status) {
                let statusConversion = {
                    "Draft": "Not Submitted",
                    "Submitted": "Pending Review",
                    "Evaluation Approved": "Pending Approval",
                    "Evaluation Rejected": "Revision Required (Rejected by Admin)",
                    "Form Rejected": "Revision Required (Rejected by Approver)",
                    "Form Approved": "Approved",
                    "Archived": "Deleted"
                }
                return statusConversion[status];
            },
            handleActions(status) {
                if (status == "Form Approved") return "done";
                else {
                    let role = this.role;
                    if (role == "USER"){
                        if (status == "Submitted" || status == "Evaluation Approved" || status == "Archived") return "viewOnly";
                        else if (status == "Draft" || status == "Evaluation Rejected" || status == "Form Rejected") return "edit";
                        else return null;
                    }
                    else if (role == "ADMIN"){
                        if (status == "Submitted") return "review";
                        else if (status == "Archived") return "restore";
                        else if (status == "Evaluation Approved" || status == "Draft" || status == "Evaluation Rejected" || status == "Form Rejected") return "viewOnly";
                        else return null;
                    }
                    else if (role == "APPROVER") {
                        if (status == "Evaluation Approved") return "approve";
                        else if (status == "Archived") return "restore";
                        else if (status == "Submitted" || status == "Draft" || status == "Evaluation Rejected" || status == "Form Rejected") return "viewOnly";
                        else return null;
                    }
                    else return null;
                }
            },
            handleDate(inputDate) {
                if (inputDate == null) return "-";
                let d = new Date(inputDate);
                return d.getFullYear() + "/" + (d.getMonth() +1).toLocaleString(undefined, {minimumIntegerDigits: 2}) + "/" + d.getDate().toLocaleString(undefined, {minimumIntegerDigits: 2}) + " " + d.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2}) + ":" + d.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2});
            },
            handleDeadline(inputDeadline, inputStatus) {
                if (inputStatus == 'Draft' || inputStatus == 'Evaluation Rejected' || inputStatus == 'Form Rejected') {

                    let outputDeadline = "(unknown)";
                    let d = new Date(inputDeadline);
                    let now = new Date();
                    let diff = d.getTime() - now.getTime();

                    if (diff > 0) {
                        outputDeadline = "Due in ";
                    } else {
                        outputDeadline = "Overdue by ";
                    }

                    // Minutes, at least 0
                    diff = Math.abs(diff) / 1000 / 60;
                    if (diff < 1) {
                        outputDeadline += "< 1 min!"
                    } else if (diff < 60) {
                        outputDeadline += (Math.floor(diff) + " mins")
                    } else {

                        // Hours, at least 1
                        diff = diff / 60;
                        if (diff < 24) {
                            outputDeadline += (Math.floor(diff) + " hours")
                        } else {

                            // Days, at least 1
                            diff = diff / 24;
                            outputDeadline += (Math.floor(diff) + " days")
                        }
                    }
                    return outputDeadline;
                    
                } else {
                    return "-";
                }
            },

            // -------
            // Go to Form page
            // -------
            GoToForm(formType, formID){
                this.$router.push('/' + formType + '?formid=' + formID);
            }
        }
    }
</script>
    
<style>
    .main {
      margin-left: 240px; /* Same as the width of the sidenav */
      padding: 0px 10px;
    }

</style>