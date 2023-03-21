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
                            <b-button v-if="checkRole() == 'ADMIN' || checkRole() == 'APPROVER'" type="button" class="btn btn-dark float-end mx-1" v-b-modal.modal-prevent-closing1>Create Workflow</b-button>
                            <!-- TODO: Create modal for Search/Filtering -->
                            <b-button type="button" class="btn btn-dark float-end mx-1" v-b-modal.modal-prevent-closing1>Filter</b-button>
                        </div>
                    </div>
                    
                    <!-- Modal Create -->
                    <b-modal
                        id="modal-prevent-closing1"
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
                        id="modal-prevent-closing2"
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
                            <td>{{workflow.form}}</td>
                            <td>{{handleStatus(workflow.status)}}</td>
                            <td v-if="handleActions(workflow.status) == 'viewOnly'">
                                View
                            </td>
                            <td v-else-if="handleActions(workflow.status) == 'edit'">
                                Edit
                            </td>
                            <td v-else-if="handleActions(workflow.status) == 'review'">
                                Review
                            </td>
                            <td v-else-if="handleActions(workflow.status) == 'approve'">
                                Approve
                            </td>
                            <td v-else-if="handleActions(workflow.status) == 'done'">
                                View, Download
                            </td>
                            <td v-else-if="handleActions(workflow.status) == 'restore'">
                                Restore
                            </td>
                            <td v-else>Invalid data, please inform Admin!</td>
                            <td>Date Created</td>
                            <td>Date Modified</td>
                            <td>Deadline</td>
                            <td>Additional Remarks</td>
                            <td v-if="checkRole() == 'ADMIN' || checkRole() == 'APPROVER'">
                                <b-button type="button" class="btn btn-dark mx-1" @click="editRow(k, workflow, $event.target)" ref="btnShow">Test Edit</b-button>
                                <b-button type="button" class="btn btn-dark mx-1" @click="deleteRow(k, workflow)">Delete</b-button>
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
                workflows: [],
                modal: {
                    id: 'modal-prevent-closing2',
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
        },
        methods: {
            checkRole() {
                return sessionStorage.getItem('role');
            },
            getUserNames() {

                let usernameList = [];

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

                // Error with Authentication???
                // axios({
                //     url: 'admin/getAllUsers',
                //     method: 'get',
                //     baseURL: API_URL,
                //     headers: authHeader(),
                //     withCredentials: false
                // })
                // .then(response => {
                //     var result = response.data;
                //     for (userData of result) {
                //         usernameList.push({value: userData.name, text: userData.name})
                //     }
                //     return usernameList;
                // })
                // .catch(error => {
                //     console.log(error);
                //     return null;
                // })

            },
            deleteRow(index, workflow) {
                var idx = this.workflows.indexOf(workflow);
                console.log(idx, index);
                if (idx > -1) {
                    this.workflows.splice(idx, 1);
                }
            },
            resetModal() {
                this.name = ''
                this.form = ''
            },
            resetModal2() {
                this.name = ''
                this.form = ''
                this.status = ''
            },
            handleOk(bvModalEvent) {
                // Prevent modal from closing
                bvModalEvent.preventDefault()
                // Trigger submit handler
                this.handleSubmit()
            },
            handleSubmit() {
                // Push the workflow to workflow array
                this.workflows.push(
                    {
                        name : this.name,
                        form : this.form,
                        status : 'Draft'
                    }
                )
        
                this.$nextTick(() => {
                    this.$bvModal.hide('modal-prevent-closing1')
                })
            },
            editRow(index, workflow, button) {
                this.modal.name = workflow.name
                this.modal.form = workflow.form
                this.modal.status = workflow.status
                this.modal.index = index
                this.$root.$emit('bv::show::modal', this.modal.id, 'btnShow')
        
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
                this.$bvModal.hide('modal-prevent-closing2')
                })
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