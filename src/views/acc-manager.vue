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
                            <b-button type="button" class="btn btn-dark float-end" v-b-modal.modal-create-vendor>Create</b-button>
                        </div>
                    </div>
                    
                    <b-modal
                      id="modal-create-vendor"
                      ref="modal"
                      :scrollable = true
                      title="Create new vendor"
                      @show="resetModal"
                      @hidden="resetModal"
                      hide-footer
                    >
                      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                        
                        <b-form-group id="input-group-1" label="Company Name:" label-for="input-1">
                          <b-form-input
                            id="input-1"
                            v-model="companyName"
                            placeholder="Enter Company name"
                            required
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Email address:" label-for="input-2">
                          <b-form-input
                              id="input-2"
                              v-model="email"
                              type="email"
                              placeholder="Enter email"
                              required
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group id="input-group-3" label="Contact Name:" label-for="input-3">
                            <b-form-input
                              id="input-3"
                              v-model="name"
                              placeholder="Enter Company name"
                              required
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group id="input-group-4" label="Contact Number:" label-for="input-4">
                            <b-form-input
                              id="input-4"
                              v-model="contactNumber"
                              placeholder="Enter Company number"
                              required
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group id="input-group-5" label="Registration Number:" label-for="input-5">
                            <b-form-input
                              id="input-5"
                              v-model="gstRegistrationNumber"
                              placeholder="Enter Registration Number"
                              required
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group id="input-group-6" label="Nature of Business:" label-for="input-6">
                            <b-form-input
                              id="input-6"
                              v-model="natureOfBusiness"
                              placeholder="Enter the nature of your business"
                              required
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group id="input-group-6" label="Password" label-for="input-6">
                            <b-form-input
                              id="input-6"
                              v-model="password"
                              :state = "validation"
                              placeholder="Enter your password"
                              required
                            ></b-form-input>
                            <b-form-invalid-feedback :state="validation">
                              Your password must be 5-12 characters long.
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback :state="validation">
                              Looks Good.
                            </b-form-valid-feedback>
                          </b-form-group>

                          <b-button type="submit" variant="primary">Submit</b-button>
                          <div></div>
                      </b-form>

                    </b-modal>
                    
                    <!-- Modal Create-->
                    <!-- <b-modal
                      id="modal-create-vendor"
                      ref="modal"
                      title="Create new vendor"
                      @show="resetModal"
                      @hidden="resetModal"
                      @ok="handleOk"
                    >
                      <b-form ref="form" @submit.stop.prevent="handleSubmit" v-if="valid">
                        <b-form-group
                          label="Name"
                          label-for="name-input"
                          invalid-feedback="Name is required"
                        >
                          <b-form-input
                            id="name-input"
                            v-model="companyName"
                            placeholder="Enter Company name"
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
                            v-model="contactNumber"
                            placeholder="Enter your Contact Number"
                            required
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group
                          label="ContactName"
                          label-for="contact-name-input"
                          invalid-feedback="Contact Name is required"
                        >
                          <b-form-input
                            id="contact-input"
                            v-model="name"
                            placeholder="Enter your Contact's name"
                            required
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group
                          label="gstRegistrationNumber"
                          label-for="gstRegistrationNumber"
                          invalid-feedback="Gst registration number is required"
                        >
                          <b-form-input
                            id="contact-input"
                            v-model="gstRegistrationNumber"
                            placeholder="Enter your GST registration number"
                            required
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group
                          label="natureOfBusiness"
                          label-for="natureOfBusiness"
                          invalid-feedback="Nature of Business is required"
                        >
                          <b-form-input
                            id="natureOfBusiness"
                            v-model="natureOfBusiness"
                            placeholder="Enter the nature of your business"
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

                      </b-form>
                    </b-modal> -->
    
                    <!-- Modal Edit-->
                    <b-modal
                      id="modal-edit-vendor"
                      ref="modal"
                      title="Edit Vendor"
                      @show="resetModal"
                      @hidden="resetModal"
                      @ok="handleOk2"
                    >
                      <form ref="form" @submit.stop.prevent="handleSubmit2">
                        
                        <b-form-group
                          label="Company Name"
                          label-for="Company name-input"
                          invalid-feedback="Company Name is required"
                        >
                          <b-form-input
                            id="name-input"
                            v-model="companyName"
                            placeholder="Enter your Company name"
                            required
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group
                          label="Contact Name"
                          label-for="Contact name-input"
                          invalid-feedback="Contact's Name is required"
                        >
                          <b-form-input
                            id="name-input"
                            v-model= "name"
                            placeholder= "Enter your new contact's name"
                            required
                          ></b-form-input>
                        </b-form-group>
    
                        <b-form-group
                          label="Contact Number"
                          label-for="contact-input"
                          invalid-feedback="Contact Number is required"
                        >
                          <b-form-input
                            id="contact-input"
                            v-model="contactNumber"
                            placeholder="Enter your new contact's number"
                            required
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group
                          label="GST Registration Number"
                          label-for="gst Registration Number"
                          invalid-feedback="Gst registration number is required"
                        >
                          <b-form-input
                            id="gst-registration-number"
                            v-model="gstRegistrationNumber"
                            placeholder="Enter your GST registration number"
                            required
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group
                          label="Nature of Business"
                          label-for="nature Of Business"
                          invalid-feedback="Nature of Business is required"
                        >
                          <b-form-input
                            id="natureOfBusiness"
                            v-model="natureOfBusiness"
                            placeholder="Enter the nature of your business"
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
                          <th scope="col">Company Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Contact Name</th>
                          <th scope="col">Contact Number</th>
                          <th scope="col">Registration Number</th>
                          <th scope="col">Nature of Business</th>
                          <th scope="col">Date Created</th>
                          <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(vendor, k) in vendors" :key="k">

                            <th scope="row" v-if="vendor.role == 'USER'">{{vendor.id}}</th>
                            <td v-if="vendor.role == 'USER'">{{vendor.companyName}}</td>
                            <td v-if="vendor.role == 'USER'">{{vendor.email}}</td>
                            <td v-if="vendor.role == 'USER'">{{vendor.name}}</td>
                            <td v-if="vendor.role == 'USER'">{{vendor.contactNumber}}</td>
                            <td v-if="vendor.role == 'USER'">{{vendor.gstRegistrationNumber}}</td>
                            <td v-if="vendor.role == 'USER'">{{vendor.natureOfBusiness}}</td>
                            <td v-if="vendor.role == 'USER'">{{vendor.dateCreated}}</td>
                            <td v-if="vendor.role == 'USER'">
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
    import UserService from '../services/user.service';
    import authHeader from '../services/auth-header';
    
    
    
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
            userName: '',
            userEmail:'',
            name: '',
            email: '',
            contactNumber: '',
            companyName:'',
            gstRegistrationNumber:'',
            natureOfBusiness:'',
            password: '',
            vendors: [],
            token: '',
            vendorToken: '',
            show: true, // test
            modal: {
              id: 'modal-edit-vendor',
              name: '',
              contactNumber: '',
              companyName :'',
              gstRegistrationNumber: '',
              natureOfBusiness : '',
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
        this.token = sessionStorage.getItem('user').slice(10,154)
        console.log("from acc-manager"+this.token)
        // axios.post("http://localhost:8080/api/v1/auth/user/authenticate", user)
        //   .then(response => {
        //     this.token = response.data.token
        //     console.log("from acc-manager"+this.token)
        //     this.userEmail = sessionStorage.getItem('email')
        //     if (sessionStorage.getItem('role') == 'ADMIN') {
        //       axios.post("http://localhost:8080/api/v1/admin/getAdmin", {
        //       "email": this.userEmail}, {headers: {
        //         Authorization : `Bearer `+ this.token
        //       }})
        //       .then(response => this.userName = response.data.name)
        //     } else {
        //       axios.post("http://localhost:8080/api/v1/vendor/getUser", {
        //       "email": this.userEmail}, {headers: {
        //         Authorization : `Bearer `+ this.token
        //       }})
        //       .then(response => this.userName = response.data.name)
        //     }
            
            
        axios.get('http://localhost:8080/api/v1/admin/getAllUsers', {headers: {
          Authorization : `Bearer `+ this.token
        }})
        .then(response => this.vendors = response.data)
        .catch ((error) => {
          console.log(this.vendors)
          console.log(error)
        })
          // }); 

      },
      computed: {
        currentUser() {
        return this.$store.state.auth.user;
        },
        validation() {
        return this.password.length > 4 && this.password.length < 13
        }
      },
      mounted() {
        if (!this.currentUser) {
          this.$router.push('/login');
        }
      },
      
      methods: {
        onSubmit(event) {
        event.preventDefault()
        const user = {
                "name" : this.name,
                "email" : this.email,
                "contactNumber" : this.contactNumber,
                "companyName" : this.companyName,
                "gstRegistrationNumber": this.gstRegistrationNumber,
                "natureOfBusiness": this.natureOfBusiness,
                "password" : this.password,
            };
            console.log(this.token);
            console.log(user)
            axios.post("http://localhost:8080/api/v1/auth/admin/register", user, {headers: {
              Authorization : `Bearer ` + this.token
            }})
            .then(response => {
                this.vendors.push(user)
                axios.get('http://localhost:8080/api/v1/admin/getAllUsers', {headers: {
                Authorization : `Bearer `+ this.token
              }})
              .then(response => this.vendors = response.data)
              .catch ((error) => {
                console.log(this.vendors)
                console.log(error)
              })
            })
            .catch ((error) => {
              console.log(error)
            })
            
    
            this.$nextTick(() => {
              this.$bvModal.hide('modal-create-vendor')
            })
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.name = ''
        this.email = ''
        this.contactNumber = ''
        this.password = '',
        this.companyName ='',
        this.gstRegistrationNumber ='',
        this.natureOfBusiness = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }, // test
          checkRole() {
                return sessionStorage.getItem('role');
            },
          checkUser() {
                return sessionStorage.getItem('user');
            },
          getUsers() {
            axios.get('http://localhost:8080/api/v1/admin/getAllUsers', {headers: {
              Authorization : `Bearer `+ this.token
            }})
            .then(response => this.vendors = response.data)
            console.log(this.vendors)
            .catch ((error) => {
              console.log(vendors)
              console.log(error)
            })
          },
          deleteRow(index, vendor) {
            console.log(vendor.email)
            axios.delete('http://localhost:8080/api/v1/admin/deleteUser',{
              headers: {
                Authorization : `Bearer `+ this.token
              }, 
              data: {
                "email": vendor.email
              }
            })
            .then(response => {
                 console.log(response);
             })
            .catch ((error) => {
              console.log(error.response.data)
            })
            if (index > -1) {
                  this.vendors.splice(index, 1);
              }
          },
          checkFormValidity() {
            

            this.nameState = valid
            return valid
          },
          resetModal() {
            this.name = ''
            this.email = ''
            this.contactNumber = ''
            this.password = '',
            this.companyName ='',
            this.gstRegistrationNumber ='',
            this.natureOfBusiness = ''
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
                "name" : this.name,
                "email" : this.email,
                "contactNumber" : this.contactNumber,
                "companyName" : this.companyName,
                "gstRegistrationNumber": this.gstRegistrationNumber,
                "natureOfBusiness": this.natureOfBusiness,
                "password" : this.password,
            };
            console.log(this.token);
            console.log(user)
            axios.post("http://localhost:8080/api/v1/auth/admin/register", user, {headers: {
              Authorization : `Bearer ` + this.token
            }})
            .then(response => {
                this.vendors.push(user)
                axios.get('http://localhost:8080/api/v1/admin/getAllUsers', {headers: {
                Authorization : `Bearer `+ this.token
              }})
              .then(response => this.vendors = response.data)
              .catch ((error) => {
                console.log(this.vendors)
                console.log(error)
              })
            })
            .catch ((error) => {
              console.log(error)
            })
            
    
            this.$nextTick(() => {
              this.$bvModal.hide('modal-create-vendor')
            })
          },
          editRow(index, vendor, button) {
            this.modal.name = vendor.name
            this.modal.contactNumber = vendor.contactNumber
            this.modal.email = vendor.email
            this.modal.companyName = vendor.companyName
            this.modal.gstRegistrationNumber = vendor.gstRegistrationNumber
            this.modal.natureOfBusiness = vendor.natureOfBusiness
            this.modal.index = index
            console.log("opening modal: what is this.modal.name?" +this.modal.name)
            this.$root.$emit('bv::show::modal', this.modal.id, 'btnShow')
            
          },   
          handleOk2(bvModalEvent) {
            // Prevent modal from closing
            bvModalEvent.preventDefault()
            // Trigger edit handler
            console.log("what does this do?")
            this.handleSubmit2()
          },
          handleSubmit2() {
            // Push the name to submitted names
            // this.vendors[this.modal.index] = {
            //   name : this.name,
            //   email : this.email,
            //   contactNumber : this.contactNumber
            // }
            console.log("press ok than got this function")
            console.log("les check what is this.name"+ this.modal.email)
            console.log("check if token is correct"+ this.token)
            const user = {
              "name" : this.name,
              "email" : this.modal.email,
              "contactNumber" : this.contactNumber,
              "companyName" : this.companyName,
              "gstRegistrationNumber": this.gstRegistrationNumber,
              "natureOfBusiness": this.natureOfBusiness
            }
            console.log("show what is user" +user.name + user.email + user.companyName+user.gstRegistrationNumber)
            axios.put("http://localhost:8080/api/v1/admin/updateUser", user, {headers: {
              Authorization : `Bearer ` + this.token
            }})
            .then(response => {
                axios.get('http://localhost:8080/api/v1/admin/getAllUsers', {headers: {
                Authorization : `Bearer `+ this.token
              }})
              .then(response => this.vendors = response.data)
              .catch ((error) => {
                console.log(this.vendors)
                console.log(error)
              })
            })
            .catch ((error) => {
              console.log(error)
            })
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