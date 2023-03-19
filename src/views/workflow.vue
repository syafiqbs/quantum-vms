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
                        <p class="col">Overview of workflows for vendor submitted forms</p> 
                        <div class="col">
                            <!-- Currently for dummy filling workflow rows. TODO: Change into Search/Filter -->
                            <b-button type="button" class="btn btn-dark float-end" v-b-modal.modal-prevent-closing1>Test Create</b-button>
                        </div>
                    </div>
                    
                    <!-- Modal Create (TODO: change into Search/Filter) -->
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
                                    placeholder="Enter Status (Draft/Submitted/Reviewed/Approved)"
                                    required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                label="Workflow 1 Mode"
                                label-for="wf1-input"
                                invalid-feedback="Workflow 1 Mode is required"
                            >
                                <b-form-input
                                    id="wf1-input"
                                    v-model="wf1"
                                    placeholder="Enter Workflow 1's Mode (modeDraft/modeView/modeReview/modeApprove/modeDL)"
                                    required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                label="Workflow 2 Mode"
                                label-for="wf2-input"
                                invalid-feedback="Workflow 2 Mode is required"
                            >
                                <b-form-input
                                    id="wf2-input"
                                    v-model="wf2"
                                    placeholder="Enter Workflow 2's Mode (modeDraft/modeView/modeReview/modeApprove/modeDL)"
                                    required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                label="Workflow 3 Mode"
                                label-for="wf3-input"
                                invalid-feedback="Workflow 3 Mode is required"
                            >
                                <b-form-input
                                    id="wf3-input"
                                    v-model="wf3"
                                    placeholder="Enter Workflow 3's Mode (modeDraft/modeView/modeReview/modeApprove/modeDL)"
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
                            <th scope="col">Workflow 1</th>
                            <th scope="col">Workflow 2</th>
                            <th scope="col">Workflow 3</th>
                            <th scope="col">Actions</th> <!-- Might Remove Later -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(vendor, k) in workflows" :key="k">
                            <th scope="row">{{vendor.name}}</th>
                            <td>{{vendor.form}}</td>
                            <td>{{vendor.status}}</td>
                            <td>{{handleWFMode(vendor.wf1)}}</td>
                            <td>{{handleWFMode(vendor.wf2)}}</td>
                            <td>{{handleWFMode(vendor.wf3)}}</td>
                            <td>
                                <b-button type="button" class="btn btn-dark mx-1" @click="editRow(k, vendor, $event.target)" ref="btnShow">Edit</b-button>
                                <b-button type="button" class="btn btn-dark mx-1" @click="deleteRow(k, vendor)">Delete</b-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
    
<script>
    import SideBarVendor from './side-bar';
    import UserService from '../services/user.service';

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
                    wf1: '',
                    wf2: '',
                    wf3: '',
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
            deleteRow(index, vendor) {
                var idx = this.workflows.indexOf(vendor);
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
                this.wf1 = ''
                this.wf2 = ''
                this.wf3 = ''
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
                        status : 'Draft',
                        wf1 : 'modeDraft',
                        wf2 : 'modeDraft',
                        wf3 : 'modeDraft'
                    }
                )
        
                this.$nextTick(() => {
                    this.$bvModal.hide('modal-prevent-closing1')
                })
            },
            editRow(index, vendor, button) {
                this.modal.name = vendor.name
                this.modal.form = vendor.form
                this.modal.status = vendor.status
                this.modal.wf1 = vendor.wf1
                this.modal.wf1 = vendor.wf2
                this.modal.wf1 = vendor.wf3
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
                status : this.status,
                wf1 : this.wf1,
                wf2 : this.wf2,
                wf3 : this.wf3,
                }
        
                this.$nextTick(() => {
                this.$bvModal.hide('modal-prevent-closing2')
                })
            },
            handleWFMode(wfMode) {
                switch(wfMode) {
                    case "modeDraft":
                        return "handleDraft";
                        break;
                    case "modeView":
                        return "handleView";
                        break;
                    case "modeReview":
                        return "handleReview";
                        break;
                    case "modeApprove":
                        return "handleApprove";
                        break;
                    case "modeDL":
                        return "handleDL";
                        break;
                    default:
                        return "INVALID"
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