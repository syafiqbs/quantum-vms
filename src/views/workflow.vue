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
                            <b-button v-if="checkRole() == 'ADMIN' || checkRole() == 'APPROVER'" type="button" class="btn btn-dark float-end mx-1" v-b-modal.modal-wfcreate>Create Workflow</b-button>
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

                    <!-- Modal Edit (Might Remove Later) -->
                    <b-modal
                        id="modal-testEdit"
                        ref="modal"
                        title="Edit Workflow"
                        @show="resetModal2"
                        @hidden="resetModal2"
                        @ok="handleOk2"
                    >
                        <form ref="form" @submit.stop.prevent="handleSubmit2">
                            <b-form-group
                                label="Vendor Name"
                                label-for="name-input"
                                invalid-feedback="Vendor Name is required"
                            >
                                <b-form-input
                                    id="name-input"
                                    v-model="name"
                                    placeholder="Enter Vendor Name"
                                    required
                                ></b-form-input>
                            </b-form-group>
        
                            <b-form-group
                                label="Form"
                                label-for="form-input"
                                invalid-feedback="Form is required"
                            >
                                <b-form-input
                                    id="form-input"
                                    v-model="form"
                                    placeholder="Enter Form"
                                    required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                label="Status"
                                label-for="status-input"
                                invalid-feedback="Status is required"
                            >
                                <b-form-input
                                    id="status-input"
                                    v-model="status"
                                    placeholder="Enter Status"
                                    required
                                ></b-form-input>
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
                            <b-form-group
                                label="Email Recipient"
                                label-for="recipient-input"
                                invalid-feedback="Email Recipient is required"
                            >
                                <b-form-input
                                    id="recipient-input"
                                    v-model="emailRecipient"
                                    type="email"
                                    placeholder="Enter Email Recipient"
                                    required
                                ></b-form-input>
                            </b-form-group>

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
                            <th scope="col" v-if="checkRole() == 'ADMIN' || checkRole() == 'APPROVER'">Admin Actions</th>
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
                            <td>{{handleDeadline(workflow.deadline)}}</td>
                            <td>{{workflow.remarks}}</td>
                            <!-- TODO: Link up buttons to relevant modals/functions on click -->
                            <td v-if="checkRole() == 'ADMIN' || checkRole() == 'APPROVER'">
                                <b-button type="button" class="btn btn-dark mx-1" @click="editRow(k, workflow, $event.target)" ref="btnEdit">Test Edit</b-button>
                                <b-button v-if="workflow.status == 'Draft' || workflow.status == 'Evaluation Rejected' || workflow.status == 'Form Rejected'" type="button" class="btn btn-info mx-1" v-b-modal.modal-sendEmail>Email</b-button>
                                <b-button v-if="workflow.status == 'Draft' || workflow.status == 'Evaluation Rejected' || workflow.status == 'Form Rejected'" type="button" class="btn btn-warning mx-1" v-b-modal.modal-wfcreate>Edit Deadline</b-button>
                                <!-- Add confirmation modal -->
                                <b-button type="button" class="btn btn-danger mx-1" @click="deleteRow(k, workflow)">Delete</b-button>
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
                    id: 'modal-testEdit',
                    name: '',
                    form: '',
                    status: '',
                    index: 0
                }
            }
        },
        mounted() {

            UserService.getUser().then(
                response => {
                    // is user
                    sessionStorage.setItem('role', response.data["role"]);
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
                },
                error => {
                    // do nothing
                    console.log(error.message);
                }
            )

            this.getAllForms();
        },
        methods: {
            // -------
            // Functions for Workflow Retrieval
            // -------
            checkRole() {
                return sessionStorage.getItem('role');
            },
            getAllForms() {
                if (this.checkRole() == 'ADMIN' || this.checkRole() == 'APPROVER') {
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
                            for (let formData of userData.vendorAssessmentForm) {
                                // Check that the keys are correct
                                // console.log(formData);
                                this.workflows.push({
                                    vendor: userData.name,
                                    id: formData.id,
                                    form: "form-1",
                                    status: formData.vendorAssessmentResults,
                                    dateCreated: formData.dateCreated,
                                    dateModified: formData.dateModified,
                                    deadline: formData.deadline,
                                    remarks: formData.evaluationComments
                                })
                            }
                            for (let formData of userData.preEvaluationForm) {
                                // Check that the keys are correct
                                // console.log(formData);
                                this.workflows.push({
                                    vendor: userData.name,
                                    id: formData.id,
                                    form: "form-2",
                                    status: formData.preEvaluationResults,
                                    dateCreated: formData.dateCreated,
                                    dateModified: formData.dateModified,
                                    deadline: formData.deadline,
                                    remarks: formData.evaluationComments
                                })
                            }
                            for (let formData of userData.performanceEvaluationForm) {
                                // Check that the keys are correct
                                // console.log(formData);
                                this.workflows.push({
                                    vendor: userData.name,
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
                        for (let formData of result.vendorAssessmentForm) {
                            // Check that the keys are correct
                            // console.log(formData);
                            this.workflows.push({
                                vendor: result.name,
                                id: formData.id,
                                form: "form-1",
                                status: formData.vendorAssessmentResults,
                                dateCreated: formData.dateCreated,
                                dateModified: formData.dateModified,
                                deadline: formData.deadline,
                                remarks: formData.evaluationComments
                            })
                        }
                        for (let formData of result.preEvaluationForm) {
                            // Check that the keys are correct
                            // console.log(formData);
                            this.workflows.push({
                                vendor: result.name,
                                id: formData.id,
                                form: "form-2",
                                status: formData.preEvaluationResults,
                                dateCreated: formData.dateCreated,
                                dateModified: formData.dateModified,
                                deadline: formData.deadline,
                                remarks: formData.evaluationComments
                            })
                        }
                        for (let formData of result.performanceEvaluationForm) {
                            // Check that the keys are correct
                            // console.log(formData);
                            this.workflows.push({
                                vendor: result.name,
                                id: formData.id,
                                form: "form-3",
                                status: formData.performanceEvaluationResults,
                                dateCreated: formData.dateCreated,
                                dateModified: formData.dateModified,
                                deadline: formData.deadline,
                                remarks: formData.evaluationComments
                            })
                        }
                        // Sort workflows with this.workflows.sort(function(a, b){return "something"})
                    })
                    .catch(error => {
                        console.log(error);
                        return [];
                    })
                }
            },
            getUserNames() {

                let usernameList = [];
                // -------
                // TEMPORARY SECTION: To simulate existing users
                let result = [
                    {
                        "id": 1,
                        "email": "admin@admin.com",
                        "password": "$2a$10$Jw/pKkihLbACN6mXs7SFnOV2VrIKgmd8CHhtvRTk5fQvDU3Agn/Za",
                        "name": "Admin",
                        "contactNumber": "0123456789",
                        "dateCreated": "2023-03-12T13:51:22.698+00:00",
                        "role": "ADMIN",
                        "vendorAssessmentForm": null,
                        "preEvaluationForm": null,
                        "performanceEvaluationForm": null,
                        "enabled": true,
                        "username": "admin@admin.com",
                        "authorities": [
                            {
                                "authority": "ADMIN"
                            }
                        ],
                        "accountNonLocked": true,
                        "credentialsNonExpired": true,
                        "accountNonExpired": true
                    },
                    {
                        "id": 2,
                        "email": "user@user.com",
                        "password": "$2a$10$vWhEHw2QSRE6.cyxYyhCjeDmn6yWwGZw5bgzk63g2caymSLbiNNO2",
                        "name": "companyABC",
                        "contactNumber": "123456789",
                        "dateCreated": "2023-03-12T13:52:45.642+00:00",
                        "role": "USER",
                        "vendorAssessmentForm": {
                            "id": 1,
                            "companyName": null,
                            "companyAddress": null,
                            "vendorAssessmentResults": "false"
                        },
                        "preEvaluationForm": {
                            "id": 1,
                            "companyName": null,
                            "companyAddress": null,
                            "preEvaluationResults": "false"
                        },
                        "performanceEvaluationForm": {
                            "id": 1,
                            "companyName": "null",
                            "companyAddress": "null",
                            "performanceEvaluationResults": "false"
                        },
                        "enabled": true,
                        "username": "user@user.com",
                        "authorities": [
                            {
                                "authority": "USER"
                            }
                        ],
                        "accountNonLocked": true,
                        "credentialsNonExpired": true,
                        "accountNonExpired": true
                    }
                ];

                for (let userData of result) {
                    if (userData.role == 'USER') usernameList.push({value: userData.name, text: userData.name})
                }
                return usernameList;
                // End of Temp Section!
                // -------
                // for (let userData of this.users) {
                //     usernameList.push({value: userData.name, text: userData.name})
                // }

            },
            deleteRow(index, workflow) {
                var idx = this.workflows.indexOf(workflow);
                console.log(idx, index);
                if (idx > -1) {
                    this.workflows.splice(idx, 1);
                }

                // if (workflow.form == "form-1" || workflow.form == "form-2" || workflow.form == "form-3") {

                //     let formLinkConversion = {
                //         "form-1": "vendor/updateVendorAssessmentForm",
                //         "form-2": "vendor/updatePreEvaluationForm",
                //         "form-3": "vendor/updatePerformanceEvaluationForm"
                //     }
                //     let updateData = {
                //         id: workflow.id
                //     }

                //     if (workflow.form == "form-1") {
                //         updateData.vendorAssessmentResults = "Archived"
                //     } else if (workflow.form == "form-2") {
                //         updateData.preEvaluationResults = "Archived"
                //     } else {
                //         updateData.performanceEvaluationResults = "Archived"
                //     }

                //     axios({
                //         url: formLinkConversion[workflow.form],
                //         method: 'put',
                //         baseURL: API_URL,
                //         headers: authHeader(),
                //         data: updateData,
                //         withCredentials: false
                //     })
                //     .then(response => {
                //         var result = response.data;
                //         alert("(ID: " + result.id + ")" + this.handleForm(workflow.form) + " successfully deleted.")
                //         this.getAllForms()
                //     })
                //     .catch(error => {
                //         console.log(error);
                //     })

                // } else {
                //     alert("Invalid form type!")
                // }
            },

            // -------
            // Functions for Workflow Creation Button
            // -------
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
                        "form-1": "vendor/createVendorAssessmentForm",
                        "form-2": "vendor/createPreEvaluationForm",
                        "form-3": "vendor/createPerformanceEvaluationForm"
                    }

                    // ERROR: Email cannot be retrieved at the moment!
                    for (let userData of this.users) {
                        if (userData.name == this.name) {
                            userEmail = userData.email
                        }
                    }
                    alert("Test: " + this.handleForm(this.form) + " belongs to " + this.name + "(" + userEmail + ")!")

                    // Temporary Creation Code
                    this.workflows.push({
                        name: this.name,
                        form: this.form,
                        status: 'Draft',
                        dateCreated: 'creation date',
                        dateModified: 'modified date',
                        deadline: 'due in x days',
                        remarks: 'No remarks',
                    })

                    // axios({
                    //     url: formLinkConversion[this.form],
                    //     method: 'post',
                    //     baseURL: API_URL,
                    //     headers: authHeader(),
                    //     data: {
                    //         email: this.value,
                    //     },
                    //     withCredentials: false
                    // })
                    // .then(response => {
                    //     var result = response.data;
                    //     alert("(ID: " + result.id + ")" + this.handleForm(this.form) + " successfully created for " + this.name + "(" + userEmail + ")!")
                    //     this.getAllForms()
                    // })
                    // .catch(error => {
                    //     console.log(error);
                    // })

                } else {
                    alert("Invalid form type!")
                }
        
                this.$nextTick(() => {
                    this.$bvModal.hide('modal-wfcreate')
                })
            },

            // -------
            // Functions for TEMPORARY Workflow Edit Button, to be REPURPOSED!
            // -------
            editRow(index, workflow, button) {
                this.modal.name = workflow.name
                this.modal.form = workflow.form
                this.modal.status = workflow.status
                this.modal.index = index
                this.$root.$emit('bv::show::modal', this.modal.id, 'btnEdit')
        
            },
            resetModal2() {
                this.name = ''
                this.form = ''
                this.status = ''
            },
            handleOk2(bvModalEvent) {
                // Prevent modal from closing
                bvModalEvent.preventDefault()
                // Trigger edit handler
                this.handleSubmit2()
            },
            handleSubmit2() {
                // Push the name to submitted names
                this.workflows[this.modal.index] = {
                name : this.name,
                form : this.form,
                status : this.status
                }
        
                this.$nextTick(() => {
                this.$bvModal.hide('modal-testEdit')
                })
            },

            // -------
            // Functions for sending Email
            // -------
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

                // TEMPORARILY DISABLED AS THIS SENDS EMAILS
                // axios({
                //     url: 'admin/sendEmail',
                //     method: 'post',
                //     baseURL: API_URL,
                //     headers: authHeader(),
                //     data: {
                //         recipient: this.emailRecipient,
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
                    let role = sessionStorage.getItem('role');
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
                return inputDate;
            },
            handleDeadline(inputDeadline) {
                return inputDeadline;
            },

            // -------
            // Go to Form page
            // -------
            GoToForm(formType, formID){
                alert("Redirecting to the " + this.handleForm(formType) + " page!");
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