<template>
    <!-- The sidebar -->
    <div class="sidebar">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <a href="#logo"><img src="/playground_assets/qlogo.png" style="width:200px;height:170px;"/></a>
        <a href="#accountManager"><i class="fa fa-fw fa-user"></i> Account Manager</a>
        <a href="#workflow"><i class="fa fa-fw fa-sticky-note"></i> Workflows</a>
        <a href="#vendor1"><i class="fa fa-fw fa-user-circle"></i> Vendor1</a>
        <a href="#settings"><i class="fa fa-fw fa-gear"></i> Settings</a>
        <a href="#logout"><i class="fa fa-fw fa-arrow-circle-o-right"></i> Logout</a>
    </div>
</template>
  
<script>

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
  