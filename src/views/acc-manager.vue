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
                        <h1>Account Manager</h1>
                    </div>
                    <div class="row">
                        <p class="col">Overview of vendor accounts</p> 
                        <div class="col">
                            <b-button type="button" class="btn btn-dark float-end">{{token}}</b-button>
                            <b-button type="button" class="btn btn-dark float-end" v-b-modal.modal-prevent-closing1>Create</b-button>
                        </div>
                    </div>
                    <div class="row">
                        <h1>{{vendorToken}}</h1>
                    </div>
                    
                    <!-- Modal Create-->
                    <b-modal
                      id="modal-prevent-closing1"
                      ref="modal"
                      title="Create new vendor"
                      @show="resetModal"
                      @hidden="resetModal"
                      @ok="handleOk"
                    >
                      <form ref="form" @submit.stop.prevent="handleSubmit">
                        <b-form-group
                          label="Name"
                          label-for="name-input"
                          invalid-feedback="Name is required"
                        >
                          <b-form-input
                            id="name-input"
                            v-model="name"
                            placeholder="Enter name"
                            required
                          ></b-form-input>
                        </b-form-group>
    
                        <b-form-group
                          label="Email"
                          label-for="email-input"
                          invalid-feedback="Email is required"
                        >
                          <b-form-input
                            id="name-input"
                            v-model="email"
                            type="email"
                            placeholder="Enter email"
                            required
                          ></b-form-input>
                        </b-form-group>
    
                        <b-form-group
                          label="ContactNo"
                          label-for="contact-input"
                          invalid-feedback="Contact Number is required"
                        >
                          <b-form-input
                            id="contact-input"
                            v-model="contact"
                            placeholder="Enter your Contact Number"
                            required
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group
                          label="Password"
                          label-for="password"
                          invalid-feedback="Password is required"
                        >
                          <b-form-input
                            id="password"
                            v-model="password"
                            placeholder="Enter your password"
                            required
                          ></b-form-input>
                        </b-form-group>

                      </form>
                    </b-modal>
    
                    <!-- Modal Edit-->
                    <b-modal
                      id="modal-prevent-closing2"
                      ref="modal"
                      title="Edit Name"
                      @show="resetModal"
                      @hidden="resetModal"
                      @ok="handleOk2"
                    >
                      <form ref="form" @submit.stop.prevent="handleSubmit">
                        <b-form-group
                          label="Name"
                          label-for="name-input"
                          invalid-feedback="Name is required"
                        >
                          <b-form-input
                            id="name-input"
                            v-model= "name"
                            placeholder= "name"
                            required
                          ></b-form-input>
                        </b-form-group>
    
                        <b-form-group
                          label="Email"
                          label-for="email-input"
                          invalid-feedback="Email is required"
                        >
                          <b-form-input
                            id="name-input"
                            v-model="email"
                            type="email"
                            placeholder="email"
                            required
                          ></b-form-input>
                        </b-form-group>
    
                        <b-form-group
                          label="ContactNo"
                          label-for="contact-input"
                          invalid-feedback="Contact Number is required"
                        >
                          <b-form-input
                            id="contact-input"
                            v-model="contact"
                            placeholder="contact"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </form>
                    </b-modal>
    
                </div>
            
    
                <table class="table table-hover">
                    <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Contact No</th>
                          <th scope="col">Date Created</th>
                          <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(vendor, k) in vendors" :key="k">
                          <th scope="row">1</th>
                          <td>{{vendor.name}}</td>
                          <td>{{vendor.email}}</td>
                          <td>{{vendor.contact}}</td>
                          <td>03/02/23</td>
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
    import axios from "axios";
    
    
    
    export default {
      name: 'AccManager',
      metaInfo: {
        title: 'Account-Manager - Quantum VMS',
        meta: [
          {
            property: 'og:title',
            content: 'Account-Manager - Quantum VMS',
          },
        ],
      },
      components: {
        SideBarVendor 
      },
      data () {
          return {
            
            name: '',
            email: '',
            contact: '',
            password: '',
            vendors: [],
            token: '',
            vendorToken: '',
            modal: {
              id: 'modal-prevent-closing2',
              name: '',
              email: '',
              contact: '',
              index: 0
            }
            
            
            
          }
      },
      created() {
        // Simple POST request with a JSON body using axios
        const user = {
            "email" : "admin@admin.com",
            "password" : "123"
        };
        axios.post("http://localhost:8080/api/v1/auth/user/authenticate", user)
          .then(response => this.token = response.data.token);
      },
      
      methods: {
          deleteRow(index, vendor) {
            var idx = this.vendors.indexOf(vendor);
            console.log(idx, index);
            if (idx > -1) {
              this.vendors.splice(idx, 1);
            }
          },
          resetModal() {
            this.name = ''
            this.email = ''
            this.contact = ''
            this.password = ''
          },
          handleOk(bvModalEvent) {
            // Prevent modal from closing
            bvModalEvent.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
          },
          handleSubmit() {
            // Push the name to submitted names
            const user = {
    "name" : "companyABC",
    "email" : "user@user5.com",
    "contactNumber" : "123456789",
    "password" : "123"
};
            this.token = `Bearer ` + this.token
            console.log(this.token);
            console.log(user)
            axios.post("http://localhost:8080/api/v1/auth/admin/register", user, {headers: {
              Authorization : this.token
            }})
            .then(response => console.log(response))
            .catch ((error) => {
              console.log(error)
            })
            
    
            this.$nextTick(() => {
              this.$bvModal.hide('modal-prevent-closing1')
            })
          },
          editRow(index, vendor, button) {
            this.modal.name = vendor.name
            this.modal.email = vendor.email
            this.modal.contact = vendor.contact
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
            this.vendors[this.modal.index] = {
              name : this.name,
              email : this.email,
              contact : this.contact
            }
    
            this.$nextTick(() => {
              this.$bvModal.hide('modal-prevent-closing2')
            })
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