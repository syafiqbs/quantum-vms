<template>
    <!-- The sidebar -->
    <div class="sidebar">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <a href="#logo"><img src="/playground_assets/qlogo.png" style="width:200px;height:170px;"/></a>
        <a href="/acc-manager"><i class="fa fa-fw fa-user"></i> Account Manager</a>
        <a href="/workflow"><i class="fa fa-fw fa-sticky-note"></i> Workflows</a>
        <a href="#changePassword" v-b-modal.modal-change-password><i class="fa fa-fw fa-lock"></i> Change Password</a>
        <div style="position:absolute; bottom:0;">
          <a href="#vendor1"><i class="fa fa-fw fa-user-circle"></i> {{this.userName}}</a>
          <a href="#settings"><i class="fa fa-fw fa-gear"></i> Settings</a>
          <a href @click.prevent="logOut"><i class="fa fa-fw fa-arrow-circle-o-right"></i> Logout</a>
        </div>


        <b-modal
          id="modal-change-password"
          ref="modal"
          title="Reset Password"
          @show="resetModal"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
              label="Email"
              label-for="email-input"
              invalid-feedback="Email is required"
            >
              <b-form-input
                id="email-input"
                v-model="inputEmail"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Current Password"
              label-for="CurrentPassword"
              invalid-feedback="Current Password Invalid"
            >
              <b-form-input
                id="CurrentPassword"
                v-model="oldPassword"
                placeholder="Enter your Current Password"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="New Password"
              label-for="password"
              invalid-feedback="Password is required"
            >
              <b-form-input
                id="password"
                v-model="newPassword"
                placeholder="Enter your new password"
                required
              ></b-form-input>
            </b-form-group>

          </form>
        </b-modal>
    </div>
</template>
  
<script>
  import axios from "axios";
  import UserService from '../services/user.service';
  import authHeader from '../services/auth-header';

export default {
name: 'SideBarVendor',
metaInfo: {
    title: 'Side Bar Vendor - Quantum VMS',
    meta: [
    {
        property: 'og:title',
        content: 'Side Bar Vendor - Quantum VMS',
    },
    ],
},
created() {
  const userToken = sessionStorage.getItem('user')
  this.token = userToken.slice(10,userToken.length-2)
  
  this.userEmail = sessionStorage.getItem('email')
  console.log("from sidebar"+this.token)
  this.role = sessionStorage.getItem('role')
  if (this.role == 'ADMIN') {
    axios.post("http://localhost:8080/api/v1/admin/getAdmin", {
    "email": this.userEmail}, {headers: {
      Authorization : `Bearer `+ this.token
    }})
    .then(response => this.userName = response.data.name)
  } else {
    axios.post("http://localhost:8080/api/v1/vendor/getUser", {
    "email": this.userEmail}, {headers: {
      Authorization : `Bearer `+ this.token
    }})
    .then(response => this.userName = response.data.name)
  }
},
data () {
  return {
    userName: '',
    userEmail:'',
    inputEmail:'',
    oldPassword:'',
    newPassword: '',
    token:'',
    role: ''
  }
},
methods: {
  logOut() {
    alert("Click OK to logout");
    this.$store.dispatch('auth/logout');
    this.$router.push('/');
  },
  resetModal() {
    this.inputEmail = ''
    this.oldPassword = ''
    this.newPassword = ''
  },
  handleOk(bvModalEvent) {
    // Prevent modal from closing
    bvModalEvent.preventDefault()
    // Trigger submit handler
    this.handleSubmit()
  },
  handleSubmit() {
    // Push the name to submitted names
    const account = {
        "email" : this.inputEmail,
        "oldPassword" : this.oldPassword,
        "newPassword" : this.newPassword
    };
    axios.post("http://localhost:8080/api/v1/auth/user/changePassword", account, {headers: {
      Authorization : `Bearer ` + this.token
    }})
    .then(response => console.log(response))
    .catch ((error) => {
      console.log(error)
    })
    
    this.$nextTick(() => {
      this.$bvModal.hide('modal-change-password')
    })
  },
}
}
</script>
  
<style scoped>
.sidebar {
  height: 100%;
  width: 230px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 16px;
}

/* Style sidebar links */
.sidebar a {
  padding: 6px 8px 18px 8px;
  text-decoration: none;
  font-size: 20px;
  color: #ffffff;
  display: block;
}

/* Style links on mouse-over */
.sidebar a:hover {
  color: #f1f1f1;
}

/* Style the main content */
.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  padding: 0px 10px;
}

/* Add media queries for small screens (when the height of the screen is less than 450px, add a smaller padding and font-size) */
@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
</style>
  